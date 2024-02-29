// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.22;

// solhint-disable-next-line
import {
    ImplBase,
    ERC2981,
    Strings,
    FactoryTypes
} from "contracts/MADTokens/common/ImplBase.sol";
import { ERC721 } from "contracts/lib/tokens/ERC721/Base/ERC721.sol";

//prettier-ignore
contract ERC721Basic is ERC721, ImplBase {
    bytes32 private constant _NAME_SLOT = /*  */
        0x897572a87d0174092695c4d573af60ba2f538ab1e5fe57428eebc5ce7dad72bb;

    bytes32 private constant _SYMBOL_SLOT = /*  */
        0x30ec9400a6906cefbe2888cc908b6b5efeceee7bcd5438fa93fc189e1bbe64ac;

    using FactoryTypes for FactoryTypes.CollectionArgs;
    using Strings for uint256;

    ////////////////////////////////////////////////////////////////
    //                           STORAGE                          //
    ////////////////////////////////////////////////////////////////

    /// @notice `_supplyRegistrar` bits layout.
    /// @dev Live supply counter, excludes burned tokens.
    /// `uint128`  [0...127]   := liveSupply
    /// @dev Mint counter, includes burnt count.
    /// `uint128`  [128...255] := mintCount
    uint256 internal _supplyRegistrar;

    ////////////////////////////////////////////////////////////////
    //                         CONSTRUCTOR                        //
    ////////////////////////////////////////////////////////////////

    constructor(FactoryTypes.CollectionArgs memory args) ImplBase(args) {
        _setStringMemory(args._name, _NAME_SLOT);
        _setStringMemory(args._symbol, _SYMBOL_SLOT);
    }

    ////////////////////////////////////////////////////////////////
    //                       OWNER MINTING                        //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Mint to, a public state-modifying function.
     * @notice Accepts ether.
     * @dev Has modifiers: authorised.
     * @dev Transfer event emitted by parent ERC721 contract.
     * @dev Loop runs out of gas before overflowing.
     * @param to The to address.
     * @param amount The amount (uint128).
     * @custom:signature mintTo(address,uint128)
     * @custom:selector 0xa7fcf7b5
     */
    function mintTo(address to, uint128 amount) public payable authorised {
        _hasReachedMax(uint256(amount));
        (uint256 curId, uint256 endId) = _incrementCounter(uint256(amount));

        for (uint256 i = curId; i < endId; ++i) {
            _mint(to, i);
        }
    }

    ////////////////////////////////////////////////////////////////
    //                          PUBLIC FX                         //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Mint, a public state-modifying function.
     * @notice Accepts ether.
     * @notice public mint function if madRouter is not authorised.
     * This will open up public minting to any contract or EOA if the owner
     * has
     * disabled the authorisation for the router.
     * Otherwise, Mad Protocol will handle the public minting.
     * @dev Transfer event emitted by parent ERC721 contract.
     * @dev Has modifiers: routerOrPublic.
     * @param amount The amount of tokens to mint.(uint128).
     * @custom:signature mint(uint128)
     * @custom:selector 0x69d3e20e
     */
    function mint(uint128 amount) public payable routerOrPublic {
        _publicMint(msg.sender, amount);
    }

    /**
     * @notice Mint, an external state-modifying function.
     * @notice Accepts ether.
     * @notice public mint function if madRouter is authorised.
     * @dev Transfer event emitted by parent ERC721 contract.
     * @dev Has modifiers: routerOrPublic.
     *  @param to The address to mint to.
     * @param amount The amount of tokens to mint.
     * @custom:signature mint(address,uint128)
     * @custom:selector 0xbe29184f
     */
    function mint(address to, uint128 amount) external payable routerOrPublic {
        _publicMint(to, amount);
    }

    /**
     * @notice Public mint, a private state-modifying function.
     * @param _minter The minter address.
     * @param amount The amount (uint128).
     * @custom:signature _publicMint(address,uint128)
     * @custom:selector 0xda1cbcbd
     */
    function _publicMint(address _minter, uint128 amount) private {
        _hasReachedMax(uint256(amount));
        _preparePublicMint(uint256(amount), _minter);
        (uint256 curId, uint256 endId) = _incrementCounter(uint256(amount));

        for (uint256 i = curId; i < endId; ++i) {
            _mint(_minter, i);
        }
    }

    /**
     * @notice Burn, an external state-modifying function.
     * @notice Accepts ether.
     * @dev Transfer event emitted by parent ERC721 contract.
     * @param ids List of uint128s.
     * @custom:signature burn(uint128[])
     * @custom:selector 0x40475c16
     */
    function burn(uint128[] calldata ids) external payable {
        uint256 len = ids.length;
        _decSupply(len);

        for (uint256 i = 0; i < len; ++i) {
            _burn(uint256(ids[i]));
        }
    }

    ////////////////////////////////////////////////////////////////
    //                           VIEW FX                          //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Total supply, a public view function.
     * @return uint256 Result of totalSupply.
     * @custom:signature totalSupply()
     * @custom:selector 0x18160ddd
     */
    function totalSupply() public view returns (uint256) {
        return liveSupply();
    }

    /**
     * @notice Live supply, a public view function.
     * @return _liveSupply An uint256 value.
     * @custom:signature liveSupply()
     * @custom:selector 0xcb4f1c18
     */
    function liveSupply() public view returns (uint256 _liveSupply) {
        assembly {
            _liveSupply := and(_SR_UPPERBITS, sload(_supplyRegistrar.slot))
        }
    }

    /**
     * @notice Mint count, a public view function.
     * @return _mintCount An uint256 value.
     * @custom:signature mintCount()
     * @custom:selector 0x9659867e
     */
    function mintCount() public view returns (uint256 _mintCount) {
        assembly {
            _mintCount := shr(_MINTCOUNT_BITPOS, sload(_supplyRegistrar.slot))
        }
    }

    ////////////////////////////////////////////////////////////////
    //                     PRIVATE FUNCTIONS                     //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Has reached max, a private view function.
     * @param _amount The amount (uint256).
     * @custom:signature _hasReachedMax(uint256)
     * @custom:selector 0x9b726b8b
     */
    function _hasReachedMax(uint256 _amount) private view {
        uint256 _maxSupply = maxSupply;
        assembly {
            // if (mintCount + amount > maxSupply)
            if gt(
                add(
                    shr(_MINTCOUNT_BITPOS, sload(_supplyRegistrar.slot)),
                    _amount
                ),
                _maxSupply
            ) {
                // revert MaxSupplyReached();
                mstore(0, 0xd05cb609)
                revert(28, 4)
            }
        }
    }

    /**
     * @notice Increment counter, a private state-modifying function.
     * @param _amount The amount (uint256).
     * @return curId An uint256 value.
     * @return endId An uint256 value.
     * @custom:signature _incrementCounter(uint256)
     * @custom:selector 0xefa21954
     */
    function _incrementCounter(uint256 _amount)
        private
        returns (uint256 curId, uint256 endId)
    {
        // liveSupply = liveSupply + amount;
        // mintCount = mintCount + amount;
        // uint256 curId = mintCount + 1;
        assembly {
            let _prev := shr(_MINTCOUNT_BITPOS, sload(_supplyRegistrar.slot))
            let _liveSupply :=
                add(and(_SR_UPPERBITS, sload(_supplyRegistrar.slot)), _amount)
            curId := add(_prev, 0x01)
            endId := add(_prev, _amount)

            sstore(
                _supplyRegistrar.slot,
                or(_liveSupply, shl(_MINTCOUNT_BITPOS, endId))
            )
            // + 1 for the loop
            endId := add(endId, 0x01)
        }
    }

    /**
     * @notice Dec supply, a private state-modifying function.
     * @param _amount The amount (uint256).
     * @custom:signature _decSupply(uint256)
     * @custom:selector 0xbc133549
     */
    function _decSupply(uint256 _amount) private {
        assembly {
            let _liveSupply := and(_SR_UPPERBITS, sload(_supplyRegistrar.slot))
            if or(
                iszero(_liveSupply), gt(sub(_liveSupply, _amount), _liveSupply)
            ) {
                // DecOverflow()
                mstore(0x00, 0xce3a3d37)
                revert(0x1c, 0x04)
            }
        }
        _supplyRegistrar = _supplyRegistrar - _amount;
    }

    ////////////////////////////////////////////////////////////////
    //                     OVERRIDES                     //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Token URI, a public view function.
     * @param id The id (uint256).
     * @return string Result of tokenURI.
     * @custom:signature tokenURI(uint256)
     * @custom:selector 0xc87b56dd
     */
    function tokenURI(uint256 id)
        public
        view
        virtual
        override(ERC721)
        returns (string memory)
    {
        if (id > mintCount()) revert NotMintedYet();

        return string(abi.encodePacked(baseURI, Strings.toString(id), ".json"));
    }

    /**
     * @notice Name, a public view function.
     * @return string Result of name.
     * @custom:signature name()
     * @custom:selector 0x06fdde03
     */
    function name()
        public
        view
        virtual
        override(ERC721)
        returns (string memory)
    {
        return _readString(_NAME_SLOT);
    }

    /**
     * @notice Symbol, a public view function.
     * @return string Result of symbol.
     * @custom:signature symbol()
     * @custom:selector 0x95d89b41
     */
    function symbol()
        public
        view
        virtual
        override(ERC721)
        returns (string memory)
    {
        return _readString(_SYMBOL_SLOT);
    }

    /**
     * @notice Supports interface, a public pure function.
     * @param interfaceId The interface id (bytes4).
     * @return bool Result of supportsInterface.
     * @custom:signature supportsInterface(bytes4)
     * @custom:selector 0x01ffc9a7
     */
    function supportsInterface(bytes4 interfaceId)
        public
        pure
        virtual
        override(ERC721, ERC2981)
        returns (bool)
    {
        return
        // ERC165 Interface ID for ERC165
        interfaceId == 0x01ffc9a7
        // ERC165 Interface ID for ERC721
        || interfaceId == 0x80ac58cd
        // ERC165 Interface ID for ERC721Metadata
        || interfaceId == 0x5b5e139f
        // ERC165 Interface ID for ERC2981
        || interfaceId == 0x2a55205a;
    }
}
