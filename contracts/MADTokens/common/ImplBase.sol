// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.22;

import { ERC2981 } from "contracts/lib/tokens/common/ERC2981.sol";
import { TwoFactor } from "contracts/lib/auth/TwoFactor.sol";
import { Strings } from "contracts/lib/utils/Strings.sol";
import { FactoryTypes } from "contracts/Shared/FactoryTypes.sol";
import { PaymentManager } from "contracts/MADTokens/common/PaymentManager.sol";
// solhint-disable-next-line
import {
    ImplBaseEventsAndErrors,
    _BASE_URI_LOCKED,
    _PUBLIC_MINT_STATE_SET,
    _BASE_URI_SET,
    _ROYALTY_FEE_SET,
    _ROYALTY_RECIPIENT_SET
} from "contracts/MADTokens/common/interfaces/ImplBaseEventsAndErrors.sol";

abstract contract ImplBase is
    ERC2981,
    ImplBaseEventsAndErrors,
    TwoFactor,
    PaymentManager
{
    // bytes32 internal constant _BASE_URI_SLOT = /*  */
    //     0xdd05fcb58e4c0a1a429c1a9d6607c399731f1ef0b81be85c3f7701c0333c82fc;

    string public baseURI;

    /// @dev An account can hold up to 4294967295 tokens.
    uint256 internal constant _SR_UPPERBITS = (1 << 128) - 1;
    uint256 internal constant _MAXSUPPLY_BOUND = 1 << 32;
    uint256 internal constant _MINTCOUNT_BITPOS = 128;

    using Strings for uint256;

    ////////////////////////////////////////////////////////////////
    //                          IMMUTABLE                         //
    ////////////////////////////////////////////////////////////////

    /// @notice Capped max supply.
    uint128 public immutable maxSupply;

    ////////////////////////////////////////////////////////////////
    //                           STORAGE                          //
    ////////////////////////////////////////////////////////////////

    /// @notice Lock the URI (default := false).
    /// @dev The URI can't be unlocked.
    bool public uriLock;

    /// @notice Public mint state default := false.
    bool public publicMintState;

    ////////////////////////////////////////////////////////////////
    //                         CONSTRUCTOR                        //
    ////////////////////////////////////////////////////////////////

    constructor(FactoryTypes.CollectionArgs memory args)
        payable
        /*  */
        TwoFactor(args._router, args._owner)
        PaymentManager(args._splitter, args._erc20, args._price)
        ERC2981(uint256(args._royaltyPercentage), args._splitter)
    {
        if (args._maxSupply > _MAXSUPPLY_BOUND) revert MaxSupplyBoundExceeded();

        // immutable
        maxSupply = uint128(args._maxSupply);

        // _setStringMemory(args._baseURI, _BASE_URI_SLOT);
        baseURI = args._baseURI;

        emit RoyaltyFeeSet(uint256(args._royaltyPercentage));
        emit RoyaltyRecipientSet(payable(args._splitter));
    }

    ////////////////////////////////////////////////////////////////
    //                         OWNER FX                           //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Set base URI, a public state-modifying function.
     * @dev Has modifiers: onlyOwner.
     * @param _baseURI The base URI (string).
     * @custom:signature setBaseURI(string)
     * @custom:selector 0x55f804b3
     */
    function setBaseURI(string calldata _baseURI) public onlyOwner {
        if (uriLock) revert URILocked();
        // bytes(_baseURI).length > 32 ? revert() : baseURI = _baseURI;
        baseURI = _baseURI;
        emit BaseURISet(_baseURI);
    }

    /**
     * @notice Set base lock URI, a public state-modifying function.
     * @dev Has modifiers: onlyOwner.
     * @custom:signature setBaseURILock()
     * @custom:selector 0x66c879a9
     */
    function setBaseURILock() public onlyOwner {
        uriLock = true;
        emit BaseURILocked(baseURI);

    }

    /**
     * @notice Set public mint state, a public state-modifying function.
     * @dev Has modifiers: onlyOwner.
     * @param _publicMintState The public mint state (bool).
     * @custom:signature setPublicMintState(bool)
     * @custom:selector 0x879fbedf
     */
    function setPublicMintState(bool _publicMintState) public onlyOwner {
        publicMintState = _publicMintState;
        assembly {
            // emit PublicMintStateSet(_publicMintState);
            log2(0, 0, _PUBLIC_MINT_STATE_SET, _publicMintState)
        }
    }

    ////////////////////////////////////////////////////////////////
    //                       OWNER WITHDRAW                       //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Withdraw, a public state-modifying function.
     * @notice Owner Withdraw ETH.
     * @dev If any Eth is trapped in the contract, owner can withdraw it to the
     * splitter.
     * @dev Has modifiers: onlyOwner.
     * @custom:signature withdraw()
     * @custom:selector 0x3ccfd60b
     */
    function withdraw() public onlyOwner {
        _withdraw();
    }

    /**
     * @notice Withdraw erc20, a public state-modifying function.
     * @notice Owner Withdraw ERC20 Tokens.
     * @dev If any ERC20 Tokens are trapped in the contract, owner can withdraw
     * it to the splitter.
     * @dev Has modifiers: onlyOwner.
     * @param _erc20 The erc20 address.
     * @custom:signature withdrawERC20(address)
     * @custom:selector 0xf4f3b200
     */
    function withdrawERC20(address _erc20) public onlyOwner {
        _withdrawERC20(_erc20);
    }

    ////////////////////////////////////////////////////////////////
    //                     INTERNAL FUNCTIONS                     //
    ////////////////////////////////////////////////////////////////

    /**
     * @notice Prepare public mint, an internal state-modifying function.
     * @param totalAmount The total amount (uint256).
     * @param _minter The minter address.
     * @custom:signature _preparePublicMint(uint256,address)
     * @custom:selector 0x78585ee7
     */
    function _preparePublicMint(uint256 totalAmount, address _minter)
        internal
    {
        if (!publicMintState) revert PublicMintClosed();
        uint256 _price = _publicMintPriceCheck(totalAmount, _minter);
        // msg.value could be 0 and _value = 0 but still be expecting ETH (Free
        // Mint)
        if (_price > 0) _publicPaymentHandler(_price, _minter);
    }

    /**
     * @notice Read string, an internal view function.
     * @param _slot The slot (bytes32).
     * @return _string A string value.
     * @custom:signature _readString(bytes32)
     * @custom:selector 0x2de3c16f
     */
    function _readString(bytes32 _slot)
        internal
        view
        returns (string memory _string)
    {
        assembly {
            let len := sload(_slot)
            mstore(_string, shr(0x01, and(len, 0xFF)))
            mstore(add(_string, 0x20), and(len, not(0xFF)))
            mstore(0x40, add(_string, 0x40))
        }
    }

    /**
     * @notice Set string memory, an internal state-modifying function.
     * @param _string The string (string).
     * @param _slot The slot (bytes32).
     * @custom:signature _setStringMemory(string,bytes32)
     * @custom:selector 0x5a44dfbd
     */
    function _setStringMemory(string memory _string, bytes32 _slot) internal {
        assembly {
            let len := mload(_string)
            if lt(0x1f, len) { invalid() }
            sstore(_slot, or(mload(add(_string, 0x20)), shl(0x01, len)))
        }
    }
}
