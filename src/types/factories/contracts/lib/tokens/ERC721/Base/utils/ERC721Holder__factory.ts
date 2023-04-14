/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  ERC721Holder,
  ERC721HolderInterface,
} from "../../../../../../../contracts/lib/tokens/ERC721/Base/utils/ERC721Holder";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101ab806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004e61003e3660046100c2565b630a85bd0160e11b949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100a757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156100d857600080fd5b6100e185610083565b93506100ef60208601610083565b925060408501359150606085013567ffffffffffffffff8082111561011357600080fd5b818701915087601f83011261012757600080fd5b813581811115610139576101396100ac565b604051601f8201601f19908116603f01168101908382118183101715610161576101616100ac565b816040528281528a602084870101111561017a57600080fd5b8260208601602083013760006020848301015280955050505050509295919450925056fea164736f6c6343000810000a";

type ERC721HolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721HolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Holder__factory extends ContractFactory {
  constructor(...args: ERC721HolderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Holder> {
    return super.deploy(overrides || {}) as Promise<ERC721Holder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Holder {
    return super.attach(address) as ERC721Holder;
  }
  override connect(signer: Signer): ERC721Holder__factory {
    return super.connect(signer) as ERC721Holder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721HolderInterface {
    return new utils.Interface(_abi) as ERC721HolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Holder {
    return new Contract(address, _abi, signerOrProvider) as ERC721Holder;
  }
}
