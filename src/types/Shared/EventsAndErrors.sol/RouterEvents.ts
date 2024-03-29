/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
} from "../../common";

export interface RouterEventsInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "BaseURISet"
      | "FactoryUpdated"
      | "FeesUpdated(uint256,uint256)"
      | "FeesUpdated(uint256,uint256,address)"
      | "PaymentTokenUpdated"
      | "PublicMintState"
      | "RecipientUpdated"
      | "TokenFundsWithdrawn"
  ): EventFragment;
}

export namespace BaseURISetEvent {
  export type InputTuple = [_id: AddressLike, _baseURI: string];
  export type OutputTuple = [_id: string, _baseURI: string];
  export interface OutputObject {
    _id: string;
    _baseURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FactoryUpdatedEvent {
  export type InputTuple = [newFactory: AddressLike];
  export type OutputTuple = [newFactory: string];
  export interface OutputObject {
    newFactory: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesUpdated_uint256_uint256_Event {
  export type InputTuple = [feeVal2: BigNumberish, feeVal3: BigNumberish];
  export type OutputTuple = [feeVal2: bigint, feeVal3: bigint];
  export interface OutputObject {
    feeVal2: bigint;
    feeVal3: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesUpdated_uint256_uint256_address_Event {
  export type InputTuple = [
    feeVal2: BigNumberish,
    feeVal3: BigNumberish,
    erc20Token: AddressLike
  ];
  export type OutputTuple = [
    feeVal2: bigint,
    feeVal3: bigint,
    erc20Token: string
  ];
  export interface OutputObject {
    feeVal2: bigint;
    feeVal3: bigint;
    erc20Token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentTokenUpdatedEvent {
  export type InputTuple = [newPaymentToken: AddressLike];
  export type OutputTuple = [newPaymentToken: string];
  export interface OutputObject {
    newPaymentToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicMintStateEvent {
  export type InputTuple = [
    _id: AddressLike,
    _type: BigNumberish,
    _state: boolean
  ];
  export type OutputTuple = [_id: string, _type: bigint, _state: boolean];
  export interface OutputObject {
    _id: string;
    _type: bigint;
    _state: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RecipientUpdatedEvent {
  export type InputTuple = [newRecipient: AddressLike];
  export type OutputTuple = [newRecipient: string];
  export interface OutputObject {
    newRecipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenFundsWithdrawnEvent {
  export type InputTuple = [
    _id: AddressLike,
    _type: BigNumberish,
    _payee: AddressLike
  ];
  export type OutputTuple = [_id: string, _type: bigint, _payee: string];
  export interface OutputObject {
    _id: string;
    _type: bigint;
    _payee: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RouterEvents extends BaseContract {
  connect(runner?: ContractRunner | null): RouterEvents;
  waitForDeployment(): Promise<this>;

  interface: RouterEventsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "BaseURISet"
  ): TypedContractEvent<
    BaseURISetEvent.InputTuple,
    BaseURISetEvent.OutputTuple,
    BaseURISetEvent.OutputObject
  >;
  getEvent(
    key: "FactoryUpdated"
  ): TypedContractEvent<
    FactoryUpdatedEvent.InputTuple,
    FactoryUpdatedEvent.OutputTuple,
    FactoryUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "FeesUpdated(uint256,uint256)"
  ): TypedContractEvent<
    FeesUpdated_uint256_uint256_Event.InputTuple,
    FeesUpdated_uint256_uint256_Event.OutputTuple,
    FeesUpdated_uint256_uint256_Event.OutputObject
  >;
  getEvent(
    key: "FeesUpdated(uint256,uint256,address)"
  ): TypedContractEvent<
    FeesUpdated_uint256_uint256_address_Event.InputTuple,
    FeesUpdated_uint256_uint256_address_Event.OutputTuple,
    FeesUpdated_uint256_uint256_address_Event.OutputObject
  >;
  getEvent(
    key: "PaymentTokenUpdated"
  ): TypedContractEvent<
    PaymentTokenUpdatedEvent.InputTuple,
    PaymentTokenUpdatedEvent.OutputTuple,
    PaymentTokenUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PublicMintState"
  ): TypedContractEvent<
    PublicMintStateEvent.InputTuple,
    PublicMintStateEvent.OutputTuple,
    PublicMintStateEvent.OutputObject
  >;
  getEvent(
    key: "RecipientUpdated"
  ): TypedContractEvent<
    RecipientUpdatedEvent.InputTuple,
    RecipientUpdatedEvent.OutputTuple,
    RecipientUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "TokenFundsWithdrawn"
  ): TypedContractEvent<
    TokenFundsWithdrawnEvent.InputTuple,
    TokenFundsWithdrawnEvent.OutputTuple,
    TokenFundsWithdrawnEvent.OutputObject
  >;

  filters: {
    "BaseURISet(address,string)": TypedContractEvent<
      BaseURISetEvent.InputTuple,
      BaseURISetEvent.OutputTuple,
      BaseURISetEvent.OutputObject
    >;
    BaseURISet: TypedContractEvent<
      BaseURISetEvent.InputTuple,
      BaseURISetEvent.OutputTuple,
      BaseURISetEvent.OutputObject
    >;

    "FactoryUpdated(address)": TypedContractEvent<
      FactoryUpdatedEvent.InputTuple,
      FactoryUpdatedEvent.OutputTuple,
      FactoryUpdatedEvent.OutputObject
    >;
    FactoryUpdated: TypedContractEvent<
      FactoryUpdatedEvent.InputTuple,
      FactoryUpdatedEvent.OutputTuple,
      FactoryUpdatedEvent.OutputObject
    >;

    "FeesUpdated(uint256,uint256)": TypedContractEvent<
      FeesUpdated_uint256_uint256_Event.InputTuple,
      FeesUpdated_uint256_uint256_Event.OutputTuple,
      FeesUpdated_uint256_uint256_Event.OutputObject
    >;
    "FeesUpdated(uint256,uint256,address)": TypedContractEvent<
      FeesUpdated_uint256_uint256_address_Event.InputTuple,
      FeesUpdated_uint256_uint256_address_Event.OutputTuple,
      FeesUpdated_uint256_uint256_address_Event.OutputObject
    >;

    "PaymentTokenUpdated(address)": TypedContractEvent<
      PaymentTokenUpdatedEvent.InputTuple,
      PaymentTokenUpdatedEvent.OutputTuple,
      PaymentTokenUpdatedEvent.OutputObject
    >;
    PaymentTokenUpdated: TypedContractEvent<
      PaymentTokenUpdatedEvent.InputTuple,
      PaymentTokenUpdatedEvent.OutputTuple,
      PaymentTokenUpdatedEvent.OutputObject
    >;

    "PublicMintState(address,uint8,bool)": TypedContractEvent<
      PublicMintStateEvent.InputTuple,
      PublicMintStateEvent.OutputTuple,
      PublicMintStateEvent.OutputObject
    >;
    PublicMintState: TypedContractEvent<
      PublicMintStateEvent.InputTuple,
      PublicMintStateEvent.OutputTuple,
      PublicMintStateEvent.OutputObject
    >;

    "RecipientUpdated(address)": TypedContractEvent<
      RecipientUpdatedEvent.InputTuple,
      RecipientUpdatedEvent.OutputTuple,
      RecipientUpdatedEvent.OutputObject
    >;
    RecipientUpdated: TypedContractEvent<
      RecipientUpdatedEvent.InputTuple,
      RecipientUpdatedEvent.OutputTuple,
      RecipientUpdatedEvent.OutputObject
    >;

    "TokenFundsWithdrawn(address,uint8,address)": TypedContractEvent<
      TokenFundsWithdrawnEvent.InputTuple,
      TokenFundsWithdrawnEvent.OutputTuple,
      TokenFundsWithdrawnEvent.OutputObject
    >;
    TokenFundsWithdrawn: TypedContractEvent<
      TokenFundsWithdrawnEvent.InputTuple,
      TokenFundsWithdrawnEvent.OutputTuple,
      TokenFundsWithdrawnEvent.OutputObject
    >;
  };
}
