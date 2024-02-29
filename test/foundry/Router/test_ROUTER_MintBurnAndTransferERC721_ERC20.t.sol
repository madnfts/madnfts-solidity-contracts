pragma solidity 0.8.22;

import "test/lib/forge-std/src/Test.sol";
import {
    ISplitter,
    Deployer,
    IDeployer
} from "test/foundry/Base/Splitter/deploySplitterBase.sol";

import { Enums } from "test/foundry/utils/enums.sol";

import {
    CreateCollectionHelpers,
    DeploySplitterBase,
    IFactory,
    SplitterHelpers
} from "test/foundry/CreateCollection/createCollectionHelpers.sol";

import { IERC721Basic } from "test/foundry/Base/Tokens/ERC721/IERC721Basic.sol";
import { MockERC20 } from "test/foundry/Base/Tokens/ERC20/deployMockERC20.sol";

contract TestROUTERMintBurnAndTransferERC721_Erc20 is
    CreateCollectionHelpers,
    Enums
{
    IDeployer.DeployedContracts deployedContracts;
    Deployer deployer;
    DeploySplitterBase splitterDeployer;

    uint256 nftPublicMintPrice = 1 ether;

    // Create default addresses
    address nftReceiver = makeAddr("nftReceiverDefault");
    address nftMinter = makeAddr("nftMinterDefault");
    address prankster = makeAddr("prankster");

    uint128[] idsToBurn =
        [1, 2, 3, 4, 5, 100, 1000, 2000, 3000, 4000, 5000, 9999, 10_000];

    function setUp() public {
        // Instantiate deployer contracts
        deployer = new Deployer();

        // Instantiate splitter deployer contract
        splitterDeployer = new DeploySplitterBase();

        splitterDeployer.updateIsErc20(true);
        updateIsErc20(true);

        // Create array of deployed contracts instances for ERC721
        deployedContracts = deployer.deployAll(ercTypes.ERC721, isERC20);

        erc20Token = deployedContracts.paymentToken;

        vm.deal(prankster, 100_000 ether);
        erc20Token.mint(prankster, 100_000 ether);

        vm.deal(nftMinter, 100_000 ether);
        erc20Token.mint(nftMinter, 100_000 ether);

        vm.deal(nftReceiver, 100_000 ether);
        erc20Token.mint(nftReceiver, 100_000 ether);
    }

    function test_ROUTER_ERC20_MintTo_DefaultSingle() public {
        uint128 _amountToMint = 1;
        MintData memory mintData =
            _setupMint(nftMinter, nftReceiver, 0, _amountToMint);
        _doMintTo(mintData, 0);
        _checkMint(mintData);
    }

    function test_ROUTER_ERC20_PublicMint_DefaultSingle() public {
        uint128 _amountToMint = 1;
        MintData memory mintData = _setupMint(
            nftMinter, nftReceiver, nftPublicMintPrice, _amountToMint
        );
        _doPublicMint(mintData, true, 0);
        _checkMint(mintData);
    }

    function test_ROUTER_ERC20_MintTo_DefaultMultiple() public {
        for (uint256 i = 0; i < 10; i++) {
            uint128 _amountToMint = 10;
            MintData memory mintData =
                _setupMint(nftMinter, nftReceiver, 0, _amountToMint);

            _doMintTo(mintData, 0);
            _checkMint(mintData);
        }
    }

    function test_ROUTER_ERC20_PublicMint_DefaultMultiple() public {
        for (uint256 i = 0; i < 10; i++) {
            uint128 _amountToMint = 10;
            address _nftReceiver =
                makeAddr(string(abi.encodePacked("NFTReceiver", i)));

            MintData memory mintData = _setupMint(
                nftMinter, _nftReceiver, nftPublicMintPrice, _amountToMint
            );
            _doPublicMint(mintData, true, 0);
            _checkMint(mintData);
        }
    }

    function test_ROUTER_ERC20_MintTo_DefaultFuzzy(uint256) public {
        uint128 _amountToMint = 10;
        MintData memory mintData =
            _setupMint(nftMinter, nftReceiver, 0, _amountToMint);
        _doMintTo(mintData, 0);
        _checkMint(mintData);
    }

    function test_ROUTER_ERC20_PublicMint_DefaultFuzzy(uint256 x) public {
        uint128 _amountToMint = 10;
        address _nftReceiver =
            makeAddr(string(abi.encodePacked("NFTReceiver", x)));
        MintData memory mintData = _setupMint(
            nftMinter, _nftReceiver, nftPublicMintPrice, _amountToMint
        );
        _doPublicMint(mintData, true, 0);
        _checkMint(mintData);
    }

    function test_ROUTER_ERC20_PublicMint_FreeMintZeroPrice() public {
        uint128 _amountToMint = 10;
        uint256 _nftPublicMintPrice = 0;
        MintData memory mintData = _setupMint(
            nftMinter, nftReceiver, _nftPublicMintPrice, _amountToMint
        );
        _doPublicMint(mintData, true, 0);
    }

    function test_ROUTER_ERC20_SetPublicMint_Unauthorised() public {
        uint128 _amountToMint = 1;
        MintData memory mintData = _setupMint(
            nftMinter, nftReceiver, nftPublicMintPrice, _amountToMint
        );
        IERC721Basic collection = IERC721Basic(mintData.collectionAddress);

        vm.startPrank(prankster);
        vm.deal(prankster, 20_000 ether);
        erc20Token.mint(prankster, 20_000 ether);
        vm.expectRevert(0x1648fd01); // error NotAuthorised();
        collection.setPublicMintState(true);
        vm.stopPrank();
    }

    function test_ROUTER_ERC20_PublicMint_PublicMintClosed() public {
        uint128 _amountToMint = 1;
        MintData memory mintData = _setupMint(
            nftMinter, nftReceiver, nftPublicMintPrice, _amountToMint
        );

        _doPublicMint(
            mintData,
            false,
            0x2d0a3f8e // error PublicMintClosed();
        );
    }

    function test_ROUTER_ERC20_PublicMint_IncorrectFeeSingleFuzzy(
        uint256 _nftPublicMintPrice
    ) public {
        address _publicMinter = makeAddr("publicMinter");
        erc20Token.mint(_publicMinter, 2 ether);
        vm.assume(
            _nftPublicMintPrice != nftPublicMintPrice
                && _nftPublicMintPrice < 1 ether
        );
        uint128 _amountToMint = 1;
        MintData memory mintData = _setupMint(
            _publicMinter, _publicMinter, nftPublicMintPrice, _amountToMint
        );

        // change mint fee to more than 1 ether
        mintData.nftPublicMintPrice = _nftPublicMintPrice;

        _doPublicMint(
            mintData,
            true,
            0x68e26200 // error IncorrectPriceAmount();
        );
    }

    function test_ROUTER_ERC20_MintTo_MaxSupply() public {
        _mintTo_MaxSupply();
    }

    function test_ROUTER_ERC20_PublicMint_MaxSupply() public {
        _publicMint_MaxSupply();
    }

    ////////////////////////////////////////////////////////////////
    //                          BURN TESTS                        //
    ////////////////////////////////////////////////////////////////

    function test_ROUTER_ERC20_BurnFromMintTo_DefaultSingle() public {
        // Mint Max supply
        MintData memory mintData = _mintTo_MaxSupply();
        _doBurn(mintData, mintData.nftReceiver);
    }

    function test_ROUTER_ERC20_BurnFromPublicMint_DefaultSingle() public {
        // Mint Max supply
        MintData memory mintData = _publicMint_MaxSupply();
        _doBurn(mintData, mintData.nftReceiver);
    }

    ////////////////////////////////////////////////////////////////
    //                          HELPERS                           //
    ////////////////////////////////////////////////////////////////

    function _doBurn(MintData memory mintData, address _tokenOwner) internal {
        // Try to burn the same tokens again
        vm.startPrank(_tokenOwner, _tokenOwner);

        uint256 idsToBurnLength = idsToBurn.length;

        uint256 val = deployedContracts.router.feeBurnErc20(address(erc20Token))
            .feeAmount * idsToBurnLength;
        erc20Token.approve(address(deployedContracts.router), val);

        // Burn tokens
        IERC721Basic collection = IERC721Basic(mintData.collectionAddress);

        // log balance of nftMinter before
        uint256 _balanceNftMinterBefore = collection.balanceOf(_tokenOwner);

        deployedContracts.router.burn(
            mintData.collectionAddress, idsToBurn, address(erc20Token)
        );

        uint256 _expectedBalanceNftMinterAfter =
            _balanceNftMinterBefore - idsToBurnLength;

        // Check that nftMinter no longer has the token(s)
        assertTrue(
            collection.balanceOf(_tokenOwner) == _expectedBalanceNftMinterAfter,
            "collection.balanceOf(_tokenOwner) == _expectedBalanceNftMinterAfter ::  do not match"
        );

        // Check the totalSupply of the collection has decreased
        assertTrue(
            collection.totalSupply()
                == mintData.newTotalSupply - idsToBurnLength,
            "collection.totalSupply() == mintData.newTotalSupply - idsToBurnLength ::  do not match"
        );

        // Check that the tokenId owner is the Zero Address 0x0
        for (uint256 i = 0; i < idsToBurnLength; i++) {
            vm.expectRevert(0xceea21b6); // `TokenDoesNotExist()`.
            collection.ownerOf(idsToBurn[i]);
        }
    }

    function _mintTo_MaxSupply() internal returns (MintData memory mintData) {
        // Mint Max Supply
        uint128 _amountToMint = 10_000;
        mintData = _setupMint(nftMinter, nftReceiver, 0, _amountToMint);
        _doMintTo(mintData, 0);

        // Try and mint more..
        _doMintTo(mintData, 0xd05cb609); // error MaxSupplyReached();
    }

    function _publicMint_MaxSupply()
        internal
        returns (MintData memory mintData)
    {
        // Mint Max Supply
        uint128 _amountToMint = 10_000;
        mintData = _setupMint(
            nftMinter, nftReceiver, nftPublicMintPrice, _amountToMint
        );
        _doPublicMint(mintData, true, 0);

        // Try and mint more..
        _doPublicMint(mintData, true, 0xd05cb609); // error MaxSupplyReached();
    }

    function _setupMint(
        address _nftMinter,
        address _nftReceiver,
        uint256 _nftPublicMintPrice,
        uint128 _amountToMint
    ) internal returns (MintData memory mintData) {
        // Create Collection & Splitter
        vm.prank(_nftMinter);
        (address _collectionAddress, address _splitterAddress) =
        _createCollectionDefault(
            deployedContracts.factory,
            splitterDeployer,
            _nftMinter,
            _nftPublicMintPrice,
            address(erc20Token)
        );

        IERC721Basic collection = IERC721Basic(_collectionAddress);
        // ISplitter splitter = ISplitter(_splitterAddress);

        // Add Ether to Accounts
        vm.deal(_nftMinter, 20_000 ether);
        erc20Token.mint(_nftMinter, 20_000 ether);
        vm.deal(_nftReceiver, 20_000 ether);
        erc20Token.mint(_nftReceiver, 20_000 ether);

        uint256 _totalSupplyBefore = collection.totalSupply();

        mintData = MintData({
            nftMinter: _nftMinter,
            nftReceiver: _nftReceiver,
            nftPublicMintPrice: _nftPublicMintPrice,
            amountToMint: _amountToMint,
            collectionAddress: _collectionAddress,
            splitterAddress: _splitterAddress,
            totalSupplyBefore: _totalSupplyBefore,
            newTotalSupply: _totalSupplyBefore + _amountToMint,
            balanceNftReceiverBefore: collection.balanceOf(_nftReceiver),
            balanceNftMinterBefore: collection.balanceOf(_nftMinter)
        });

        return mintData;
    }

    function _doMintTo(MintData memory mintData, bytes4 _errorSelector)
        internal
    {
        vm.startPrank(mintData.nftMinter, mintData.nftMinter);
        uint256 val = deployedContracts.router.feeMintErc20(address(erc20Token))
            .feeAmount * mintData.amountToMint;
        erc20Token.approve(address(deployedContracts.router), val);

        if (_errorSelector != 0x00000000) {
            vm.expectRevert(_errorSelector);
        }
        deployedContracts.router.mintTo(
            mintData.collectionAddress,
            mintData.nftReceiver,
            mintData.amountToMint,
            address(erc20Token)
        );
        vm.stopPrank();
    }

    function _doPublicMint(
        MintData memory mintData,
        bool _mintState,
        bytes4 _errorSelector
    ) internal {
        IERC721Basic collection = IERC721Basic(mintData.collectionAddress);

        emit log_named_uint("nftPublicMintPrice", mintData.nftPublicMintPrice);
        emit log_named_uint("Price", collection.price());
        emit log_named_uint("amountToMint", mintData.amountToMint);

        vm.prank(mintData.nftMinter, mintData.nftMinter);
        collection.setPublicMintState(_mintState);

        // Turn off router authority
        vm.prank(mintData.nftMinter);
        collection.setRouterHasAuthority(true);

        uint256 _nftPublicMintPrice =
            mintData.nftPublicMintPrice * mintData.amountToMint;

        uint256 expectedPublicMintPrice =
            collection.price() * mintData.amountToMint;

        uint256 feeAmount = deployedContracts.router.feeMintErc20(
            address(erc20Token)
        ).feeAmount * mintData.amountToMint;

        emit log_named_uint(
            "nftPublicMintPrice AFTER fees added", mintData.nftPublicMintPrice
        );

        emit log_named_uint("feeAmount", feeAmount);

        vm.startPrank(mintData.nftReceiver);

        erc20Token.approve(address(collection), _nftPublicMintPrice);
        erc20Token.approve(address(deployedContracts.router), feeAmount);

        if (_errorSelector == 0x00000000) {
            assertTrue(
                _nftPublicMintPrice == expectedPublicMintPrice,
                "_nftPublicMintPrice == expectedPublicMintPrice ::  do not match"
            );
        } else {
            vm.expectRevert(_errorSelector);
        }
        deployedContracts.router.mint(
            mintData.collectionAddress,
            mintData.amountToMint,
            address(erc20Token)
        );
        vm.stopPrank();
    }

    function _checkMint(MintData memory mintData) internal {
        IERC721Basic collection = IERC721Basic(mintData.collectionAddress);

        // Check that nftReceiver has the token(s)
        assertTrue(
            collection.balanceOf(mintData.nftReceiver)
                == mintData.balanceNftReceiverBefore + mintData.amountToMint,
            "collection.balanceOf(mintData.nftReceiver) == mintData.balanceNftReceiverBefore + mintData.amountToMint ::  do not match"
        );

        // Check the totalSupply of the collection has increased
        assertTrue(
            collection.totalSupply() == mintData.newTotalSupply,
            "collection.totalSupply() == mintData.newTotalSupply ::  do not match"
        );

        assertTrue(
            _checkOwnerOf(mintData.nftReceiver, mintData),
            "_checkOwnerOf(mintData.nftReceiver, mintData) ::  false"
        );

        _checkTransferFrom(mintData);
        _checkSafeTransferFrom(mintData);
        _checkSafeTransferFromWithData(mintData);
    }
}
