// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "forge-std/src/Test.sol";
import {
    IFactory,
    CreateCollectionParams
} from "test/foundry/Base/Factory/createCollectionParams.sol";

import { IERC1155Basic } from
    "test/foundry/Base/Tokens/ERC1155/IERC1155Basic.sol";
import { IERC721Basic } from "test/foundry/Base/Tokens/ERC721/IERC721Basic.sol";

import { IImplBase } from "test/foundry/Base/Tokens/common/IImplBase.sol";

import { SettersToggle } from "test/foundry/utils/setterToggle.sol";

abstract contract CreateCollectionBase is
    SettersToggle("defaultCollectionOwner")
{
    function createCollectionDefault(IFactory factory, address _splitter)
        public
        returns (address collectionAddress)
    {
        collectionAddress = createCollectionCustom(
            factory,
            _splitter,
            CreateCollectionParams.defaultCollectionParams(_splitter),
            currentSigner
        );
    }

    function createCollectionCustom(
        IFactory factory,
        address _splitter,
        IFactory.CreateCollectionParams memory params,
        address collectionOwner
    ) public returns (address collectionAddress) {
        vm.prank(collectionOwner, collectionOwner);
        factory.createCollection(
            params.tokenType,
            params.tokenSalt,
            params.name,
            params.symbol,
            params.price,
            params.maxSupply,
            params.uri,
            _splitter,
            params.royalty,
            params.extra
        );
        params.splitter = _splitter;
        collectionAddress =
            factory.getDeployedAddress(params.tokenSalt, collectionOwner);

        _verifyCollectionFactory(
            factory, params, collectionOwner, collectionAddress
        );

        // Shared assertions
        _verifyCollectionTokensShared(
            IImplBase(collectionAddress), params, factory, collectionOwner
        );

        // Find Collection Type and verify..
        if (IERC721Basic(collectionAddress).supportsInterface(0x80ac58cd)) {
            _verifyCollectionERC721(collectionAddress, params, collectionOwner);
        } else if (
            IERC1155Basic(collectionAddress).supportsInterface(0xd9b67a26)
        ) {
            _verifyCollectionERC1155(collectionAddress, params, collectionOwner);
        } else {
            revert("Invalid collection type");
        }
    }

    function _verifyCollectionFactory(
        IFactory factory,
        IFactory.CreateCollectionParams memory params,
        address collectionOwner,
        address collectionAddress
    ) private {
        // Perform verification checks
        uint256 expectedBlockNumber = block.number; // Get current block number

        bytes32 collectionId = factory.getCollectionId(collectionAddress);
        (
            address creator,
            uint8 collectionType,
            bytes32 collectionSalt,
            uint256 blocknumber,
            address splitter
        ) = factory.collectionInfo(collectionId);

        vm.prank(factory.market(), factory.market());
        assertTrue(
            factory.creatorAuth(collectionAddress, collectionOwner),
            "Invalid creator auth"
        );

        assertTrue(
            collectionId == bytes32(bytes20(collectionAddress)),
            "Invalid collection id"
        );

        vm.prank(factory.router(), collectionOwner);
        (address _creator, bool _check) = factory.creatorCheck(collectionId);

        assertTrue(_creator == collectionOwner, "Invalid creator");
        assertTrue(_check, "Invalid creator check");

        vm.prank(factory.router(), collectionOwner);
        assertTrue(
            factory.typeChecker(collectionId) == params.tokenType,
            "Invalid type checker"
        );

        assertTrue(collectionType == params.tokenType, "Invalid token type");
        assertTrue(creator == collectionOwner, "Invalid collection owner");
        assertTrue(splitter == params.splitter, "Invalid splitter address");

        assertTrue(
            collectionSalt
                == keccak256(abi.encode(collectionOwner, bytes(params.tokenSalt))),
            "Invalid collection salt"
        );

        assertTrue(blocknumber == expectedBlockNumber, "Invalid block number");
    }

    function _verifyCollectionERC1155(
        address collectionAddress,
        IFactory.CreateCollectionParams memory params,
        address collectionOwner
    ) internal {
        IERC1155Basic collection = IERC1155Basic(collectionAddress);

        // Test balanceCount function
        uint256 balanceCount = collection.balanceCount(1);
        assertTrue(balanceCount == 0, "Incorrect balanceCount value");

        // Test balanceOf function
        uint256 balance = collection.balanceOf(collectionOwner, 1);
        assertTrue(balance == 0, "Incorrect balanceOf value");

        // Test liveBalance function
        uint256 liveBalance = collection.liveBalance(1);
        assertTrue(liveBalance == 0, "Incorrect liveBalance value");

        // Test maxIdBalance function
        uint128 maxIdBalance = collection.maxIdBalance();
        assertTrue(
            maxIdBalance == params.maxSupply, "Incorrect maxIdBalance value"
        );
    }

    function _verifyCollectionERC721(
        address collectionAddress,
        IFactory.CreateCollectionParams memory params,
        address collectionOwner
    ) internal {
        // Additional assertions specific to IERC721Basic interface
        IERC721Basic collection = IERC721Basic(collectionAddress);

        // Test balanceOf function
        uint256 balance = collection.balanceOf(collectionAddress);
        assertTrue(balance == 0, "Incorrect balanceOf value");

        // Test getApproved function
        address approved = collection.getApproved(1);
        assertTrue(approved != collectionAddress, "Address is approved!");

        // Test name function
        string memory name = collection.name();
        assertEq(name, params.name, "Incorrect name value");

        // Test ownerOf function fails
        address owner = collection.ownerOf(1);
        assertTrue(owner != collectionAddress, "Incorrect owner address");

        // Test symbol function
        string memory symbol = collection.symbol();
        assertEq(symbol, params.symbol, "Incorrect symbol value");

        // Test tokenURI function
        string memory tokenURI = collection.tokenURI(1);
        assertEq(tokenURI, params.uri, "Incorrect tokenURI value");
    }

    function _verifyCollectionTokensShared(
        IImplBase collection,
        IFactory.CreateCollectionParams memory params,
        IFactory factory,
        address collectionOwner
    ) internal {
        // baseURI()
        assertEq(collection.baseURI(), params.uri);

        // isApprovedForAll(address, address)
        assertFalse(
            collection.isApprovedForAll(
                makeAddr("WorldAddress"), makeAddr("HelloAddress")
            )
        );

        // totalSupply()
        assertTrue(collection.totalSupply() == 0);

        // _royaltyFee()
        assertTrue(collection._royaltyFee() == params.royalty);

        // erc20()
        assertTrue(collection.erc20() != address(0));
        assertTrue(collection.erc20() == factory.erc20());

        // getOwner()
        assertTrue(collection.getOwner() != address(0));
        assertTrue(collection.getOwner() == collectionOwner);

        // getRouter()
        assertTrue(collection.getRouter() != address(0));
        assertTrue(collection.getRouter() == factory.router());

        // splitter()
        assertTrue(collection.splitter() != address(0));
        assertTrue(collection.splitter() == params.splitter);

        // feeCount()
        assertTrue(collection.feeCount() == 0);

        // feeCountERC20()
        assertTrue(collection.feeCountERC20() == 0);

        // liveSupply()
        assertTrue(collection.liveSupply() == 0);

        // maxSupply()
        assertTrue(collection.maxSupply() == params.maxSupply);

        // mintCount()
        assertTrue(collection.mintCount() == 0);

        // price()
        assertTrue(collection.price() == params.price);

        // publicMintState()
        assertTrue(collection.publicMintState() == false);

        // royaltyInfo(uint256, uint256)
        // (address receiver, uint256 royaltyAmount) = collection.royaltyInfo(0,
        // 0);
        // assertTrue(receiver != address(0) && royaltyAmount ==
        // params.royalty);

        // uriLock()
        assertTrue(collection.uriLock() == false);
    }
}