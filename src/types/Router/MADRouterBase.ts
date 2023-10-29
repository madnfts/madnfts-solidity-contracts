/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface MADRouterBaseInterface extends utils.Interface {
  functions: {
    "erc20()": FunctionFragment;
    "feeBurn()": FunctionFragment;
    "feeBurnErc20(address)": FunctionFragment;
    "feeMint()": FunctionFragment;
    "feeMintErc20(address)": FunctionFragment;
    "madFactory()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "recipient()": FunctionFragment;
    "setFactory(address)": FunctionFragment;
    "setFees(uint256,uint256)": FunctionFragment;
    "setFees(uint256,uint256,address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setRecipient(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "erc20"
      | "feeBurn"
      | "feeBurnErc20"
      | "feeMint"
      | "feeMintErc20"
      | "madFactory"
      | "name"
      | "owner"
      | "recipient"
      | "setFactory"
      | "setFees(uint256,uint256)"
      | "setFees(uint256,uint256,address)"
      | "setOwner"
      | "setRecipient"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeBurn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeBurnErc20",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "feeMint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeMintErc20",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "madFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees(uint256,uint256,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipient",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeBurnErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeMintErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "madFactory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFactory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFees(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFees(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRecipient",
    data: BytesLike
  ): Result;

  events: {
    "BaseURISet(address,string)": EventFragment;
    "FactoryUpdated(address)": EventFragment;
    "FeesUpdated(uint256,uint256)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
    "PaymentTokenUpdated(address)": EventFragment;
    "PublicMintState(address,uint8,bool)": EventFragment;
    "RecipientUpdated(address)": EventFragment;
    "TokenFundsWithdrawn(address,uint8,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseURISet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FactoryUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicMintState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenFundsWithdrawn"): EventFragment;
}

export interface BaseURISetEventObject {
  _id: string;
  _baseURI: string;
}
export type BaseURISetEvent = TypedEvent<
  [string, string],
  BaseURISetEventObject
>;

export type BaseURISetEventFilter = TypedEventFilter<BaseURISetEvent>;

export interface FactoryUpdatedEventObject {
  newFactory: string;
}
export type FactoryUpdatedEvent = TypedEvent<
  [string],
  FactoryUpdatedEventObject
>;

export type FactoryUpdatedEventFilter = TypedEventFilter<FactoryUpdatedEvent>;

export interface FeesUpdatedEventObject {
  feeVal2: BigNumber;
  feeVal3: BigNumber;
}
export type FeesUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  FeesUpdatedEventObject
>;

export type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface PaymentTokenUpdatedEventObject {
  newPaymentToken: string;
}
export type PaymentTokenUpdatedEvent = TypedEvent<
  [string],
  PaymentTokenUpdatedEventObject
>;

export type PaymentTokenUpdatedEventFilter =
  TypedEventFilter<PaymentTokenUpdatedEvent>;

export interface PublicMintStateEventObject {
  _id: string;
  _type: number;
  _state: boolean;
}
export type PublicMintStateEvent = TypedEvent<
  [string, number, boolean],
  PublicMintStateEventObject
>;

export type PublicMintStateEventFilter = TypedEventFilter<PublicMintStateEvent>;

export interface RecipientUpdatedEventObject {
  newRecipient: string;
}
export type RecipientUpdatedEvent = TypedEvent<
  [string],
  RecipientUpdatedEventObject
>;

export type RecipientUpdatedEventFilter =
  TypedEventFilter<RecipientUpdatedEvent>;

export interface TokenFundsWithdrawnEventObject {
  _id: string;
  _type: number;
  _payee: string;
}
export type TokenFundsWithdrawnEvent = TypedEvent<
  [string, number, string],
  TokenFundsWithdrawnEventObject
>;

export type TokenFundsWithdrawnEventFilter =
  TypedEventFilter<TokenFundsWithdrawnEvent>;

export interface MADRouterBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MADRouterBaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    erc20(overrides?: CallOverrides): Promise<[string]>;

    feeBurn(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeBurnErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { feeAmount: BigNumber; isValid: boolean }
    >;

    feeMint(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeMintErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { feeAmount: BigNumber; isValid: boolean }
    >;

    madFactory(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setFees(uint256,uint256)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setFees(uint256,uint256,address)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      erc20Address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  erc20(overrides?: CallOverrides): Promise<string>;

  feeBurn(overrides?: CallOverrides): Promise<BigNumber>;

  feeBurnErc20(
    erc20token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { feeAmount: BigNumber; isValid: boolean }>;

  feeMint(overrides?: CallOverrides): Promise<BigNumber>;

  feeMintErc20(
    erc20token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { feeAmount: BigNumber; isValid: boolean }>;

  madFactory(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recipient(overrides?: CallOverrides): Promise<string>;

  setFactory(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setFees(uint256,uint256)"(
    _feeMint: PromiseOrValue<BigNumberish>,
    _feeBurn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setFees(uint256,uint256,address)"(
    _feeMint: PromiseOrValue<BigNumberish>,
    _feeBurn: PromiseOrValue<BigNumberish>,
    erc20Address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRecipient(
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    erc20(overrides?: CallOverrides): Promise<string>;

    feeBurn(overrides?: CallOverrides): Promise<BigNumber>;

    feeBurnErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { feeAmount: BigNumber; isValid: boolean }
    >;

    feeMint(overrides?: CallOverrides): Promise<BigNumber>;

    feeMintErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { feeAmount: BigNumber; isValid: boolean }
    >;

    madFactory(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recipient(overrides?: CallOverrides): Promise<string>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFees(uint256,uint256)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFees(uint256,uint256,address)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      erc20Address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BaseURISet(address,string)"(
      _id?: PromiseOrValue<string> | null,
      _baseURI?: PromiseOrValue<string> | null
    ): BaseURISetEventFilter;
    BaseURISet(
      _id?: PromiseOrValue<string> | null,
      _baseURI?: PromiseOrValue<string> | null
    ): BaseURISetEventFilter;

    "FactoryUpdated(address)"(
      newFactory?: PromiseOrValue<string> | null
    ): FactoryUpdatedEventFilter;
    FactoryUpdated(
      newFactory?: PromiseOrValue<string> | null
    ): FactoryUpdatedEventFilter;

    "FeesUpdated(uint256,uint256)"(
      feeVal2?: null,
      feeVal3?: null
    ): FeesUpdatedEventFilter;
    FeesUpdated(feeVal2?: null, feeVal3?: null): FeesUpdatedEventFilter;

    "OwnerUpdated(address,address)"(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;

    "PaymentTokenUpdated(address)"(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;
    PaymentTokenUpdated(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;

    "PublicMintState(address,uint8,bool)"(
      _id?: PromiseOrValue<string> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): PublicMintStateEventFilter;
    PublicMintState(
      _id?: PromiseOrValue<string> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): PublicMintStateEventFilter;

    "RecipientUpdated(address)"(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;
    RecipientUpdated(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;

    "TokenFundsWithdrawn(address,uint8,address)"(
      _id?: PromiseOrValue<string> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _payee?: PromiseOrValue<string> | null
    ): TokenFundsWithdrawnEventFilter;
    TokenFundsWithdrawn(
      _id?: PromiseOrValue<string> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _payee?: PromiseOrValue<string> | null
    ): TokenFundsWithdrawnEventFilter;
  };

  estimateGas: {
    erc20(overrides?: CallOverrides): Promise<BigNumber>;

    feeBurn(overrides?: CallOverrides): Promise<BigNumber>;

    feeBurnErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeMint(overrides?: CallOverrides): Promise<BigNumber>;

    feeMintErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    madFactory(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setFees(uint256,uint256)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setFees(uint256,uint256,address)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      erc20Address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    erc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeBurn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeBurnErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeMintErc20(
      erc20token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    madFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setFees(uint256,uint256)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setFees(uint256,uint256,address)"(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      erc20Address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
