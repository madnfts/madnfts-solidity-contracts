/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import * as Contracts from ".";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FeeHandlerFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeHandlerFactory__factory>;
    getContractFactory(
      name: "MADFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADFactory__factory>;
    getContractFactory(
      name: "MADFactoryBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADFactoryBase__factory>;
    getContractFactory(
      name: "FactoryVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryVerifier__factory>;
    getContractFactory(
      name: "Owned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Owned__factory>;
    getContractFactory(
      name: "TwoFactor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TwoFactor__factory>;
    getContractFactory(
      name: "DCPrevent",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DCPrevent__factory>;
    getContractFactory(
      name: "SplitterEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SplitterEventsAndErrors__factory>;
    getContractFactory(
      name: "SplitterImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SplitterImpl__factory>;
    getContractFactory(
      name: "MockERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC1155__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "MockERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC2981__factory>;
    getContractFactory(
      name: "MockERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC721__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Metadata__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "ERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155TokenReceiver__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721TokenReceiver__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "SafeTransferLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeTransferLib__factory>;
    getContractFactory(
      name: "MAD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MAD__factory>;
    getContractFactory(
      name: "ImplBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImplBase__factory>;
    getContractFactory(
      name: "ImplBaseEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImplBaseEventsAndErrors__factory>;
    getContractFactory(
      name: "PaymentManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentManager__factory>;
    getContractFactory(
      name: "ERC1155Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Basic__factory>;
    getContractFactory(
      name: "ERC721Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Basic__factory>;
    getContractFactory(
      name: "MADMarketplace1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADMarketplace1155__factory>;
    getContractFactory(
      name: "MADMarketplace721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADMarketplace721__factory>;
    getContractFactory(
      name: "MADMarketplaceBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADMarketplaceBase__factory>;
    getContractFactory(
      name: "FeeHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeHandler__factory>;
    getContractFactory(
      name: "MADRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADRouter__factory>;
    getContractFactory(
      name: "MADRouterBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADRouterBase__factory>;
    getContractFactory(
      name: "EventsAndErrorsBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EventsAndErrorsBase__factory>;
    getContractFactory(
      name: "FactoryEventsAndErrorsBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryEventsAndErrorsBase__factory>;
    getContractFactory(
      name: "MarketplaceEventsAndErrors1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketplaceEventsAndErrors1155__factory>;
    getContractFactory(
      name: "MarketplaceEventsAndErrors721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketplaceEventsAndErrors721__factory>;
    getContractFactory(
      name: "MarketplaceEventsAndErrorsBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketplaceEventsAndErrorsBase__factory>;
    getContractFactory(
      name: "RouterEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterEvents__factory>;
    getContractFactory(
      name: "MADBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADBase__factory>;

    getContractAt(
      name: "FeeHandlerFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeHandlerFactory>;
    getContractAt(
      name: "MADFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADFactory>;
    getContractAt(
      name: "MADFactoryBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADFactoryBase>;
    getContractAt(
      name: "FactoryVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryVerifier>;
    getContractAt(
      name: "Owned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Owned>;
    getContractAt(
      name: "TwoFactor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TwoFactor>;
    getContractAt(
      name: "DCPrevent",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DCPrevent>;
    getContractAt(
      name: "SplitterEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SplitterEventsAndErrors>;
    getContractAt(
      name: "SplitterImpl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SplitterImpl>;
    getContractAt(
      name: "MockERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC1155>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "MockERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: "MockERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC2981>;
    getContractAt(
      name: "MockERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC721>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Metadata>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "ERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155TokenReceiver>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "ERC721Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "ERC721TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721TokenReceiver>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ISwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: "IUniswapV3SwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: "SafeTransferLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeTransferLib>;
    getContractAt(
      name: "MAD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MAD>;
    getContractAt(
      name: "ImplBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ImplBase>;
    getContractAt(
      name: "ImplBaseEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ImplBaseEventsAndErrors>;
    getContractAt(
      name: "PaymentManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentManager>;
    getContractAt(
      name: "ERC1155Basic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Basic>;
    getContractAt(
      name: "ERC721Basic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Basic>;
    getContractAt(
      name: "MADMarketplace1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADMarketplace1155>;
    getContractAt(
      name: "MADMarketplace721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADMarketplace721>;
    getContractAt(
      name: "MADMarketplaceBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADMarketplaceBase>;
    getContractAt(
      name: "FeeHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeHandler>;
    getContractAt(
      name: "MADRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADRouter>;
    getContractAt(
      name: "MADRouterBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADRouterBase>;
    getContractAt(
      name: "EventsAndErrorsBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EventsAndErrorsBase>;
    getContractAt(
      name: "FactoryEventsAndErrorsBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryEventsAndErrorsBase>;
    getContractAt(
      name: "MarketplaceEventsAndErrors1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketplaceEventsAndErrors1155>;
    getContractAt(
      name: "MarketplaceEventsAndErrors721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketplaceEventsAndErrors721>;
    getContractAt(
      name: "MarketplaceEventsAndErrorsBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketplaceEventsAndErrorsBase>;
    getContractAt(
      name: "RouterEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterEvents>;
    getContractAt(
      name: "MADBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADBase>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
