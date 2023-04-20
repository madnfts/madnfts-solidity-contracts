/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { _MAD, _MADInterface } from "../_MAD";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class _MAD__factory {
  static readonly abi = _abi;
  static createInterface(): _MADInterface {
    return new utils.Interface(_abi) as _MADInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): _MAD {
    return new Contract(address, _abi, signerOrProvider) as _MAD;
  }
}
