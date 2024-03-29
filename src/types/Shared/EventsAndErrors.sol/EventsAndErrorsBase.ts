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

export interface EventsAndErrorsBaseInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "FeesUpdated(uint256,uint256)"
      | "FeesUpdated(uint256,uint256,address)"
      | "PaymentTokenUpdated"
      | "RecipientUpdated"
  ): EventFragment;
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

export interface EventsAndErrorsBase extends BaseContract {
  connect(runner?: ContractRunner | null): EventsAndErrorsBase;
  waitForDeployment(): Promise<this>;

  interface: EventsAndErrorsBaseInterface;

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
    key: "RecipientUpdated"
  ): TypedContractEvent<
    RecipientUpdatedEvent.InputTuple,
    RecipientUpdatedEvent.OutputTuple,
    RecipientUpdatedEvent.OutputObject
  >;

  filters: {
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
  };
}
