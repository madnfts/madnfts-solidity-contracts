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
} from "../common";

export interface SplitterEventsAndErrorsInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "ERC20PaymentReleased"
      | "PayeeAdded"
      | "PaymentReceived"
      | "PaymentReleased"
  ): EventFragment;
}

export namespace ERC20PaymentReleasedEvent {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, to: string, amount: bigint];
  export interface OutputObject {
    token: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PayeeAddedEvent {
  export type InputTuple = [account: AddressLike, shares: BigNumberish];
  export type OutputTuple = [account: string, shares: bigint];
  export interface OutputObject {
    account: string;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentReceivedEvent {
  export type InputTuple = [from: AddressLike, amount: BigNumberish];
  export type OutputTuple = [from: string, amount: bigint];
  export interface OutputObject {
    from: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentReleasedEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SplitterEventsAndErrors extends BaseContract {
  connect(runner?: ContractRunner | null): SplitterEventsAndErrors;
  waitForDeployment(): Promise<this>;

  interface: SplitterEventsAndErrorsInterface;

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
    key: "ERC20PaymentReleased"
  ): TypedContractEvent<
    ERC20PaymentReleasedEvent.InputTuple,
    ERC20PaymentReleasedEvent.OutputTuple,
    ERC20PaymentReleasedEvent.OutputObject
  >;
  getEvent(
    key: "PayeeAdded"
  ): TypedContractEvent<
    PayeeAddedEvent.InputTuple,
    PayeeAddedEvent.OutputTuple,
    PayeeAddedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentReceived"
  ): TypedContractEvent<
    PaymentReceivedEvent.InputTuple,
    PaymentReceivedEvent.OutputTuple,
    PaymentReceivedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentReleased"
  ): TypedContractEvent<
    PaymentReleasedEvent.InputTuple,
    PaymentReleasedEvent.OutputTuple,
    PaymentReleasedEvent.OutputObject
  >;

  filters: {
    "ERC20PaymentReleased(address,address,uint256)": TypedContractEvent<
      ERC20PaymentReleasedEvent.InputTuple,
      ERC20PaymentReleasedEvent.OutputTuple,
      ERC20PaymentReleasedEvent.OutputObject
    >;
    ERC20PaymentReleased: TypedContractEvent<
      ERC20PaymentReleasedEvent.InputTuple,
      ERC20PaymentReleasedEvent.OutputTuple,
      ERC20PaymentReleasedEvent.OutputObject
    >;

    "PayeeAdded(address,uint256)": TypedContractEvent<
      PayeeAddedEvent.InputTuple,
      PayeeAddedEvent.OutputTuple,
      PayeeAddedEvent.OutputObject
    >;
    PayeeAdded: TypedContractEvent<
      PayeeAddedEvent.InputTuple,
      PayeeAddedEvent.OutputTuple,
      PayeeAddedEvent.OutputObject
    >;

    "PaymentReceived(address,uint256)": TypedContractEvent<
      PaymentReceivedEvent.InputTuple,
      PaymentReceivedEvent.OutputTuple,
      PaymentReceivedEvent.OutputObject
    >;
    PaymentReceived: TypedContractEvent<
      PaymentReceivedEvent.InputTuple,
      PaymentReceivedEvent.OutputTuple,
      PaymentReceivedEvent.OutputObject
    >;

    "PaymentReleased(address,uint256)": TypedContractEvent<
      PaymentReleasedEvent.InputTuple,
      PaymentReleasedEvent.OutputTuple,
      PaymentReleasedEvent.OutputObject
    >;
    PaymentReleased: TypedContractEvent<
      PaymentReleasedEvent.InputTuple,
      PaymentReleasedEvent.OutputTuple,
      PaymentReleasedEvent.OutputObject
    >;
  };
}
