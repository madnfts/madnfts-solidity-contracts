/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MADRouter721, MADRouter721Interface } from "../MADRouter721";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "BaseURI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "burnFees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintFees",
        type: "uint256",
      },
    ],
    name: "FeesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "FreeClaimState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "PublicMintState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_payee",
        type: "address",
      },
    ],
    name: "TokenFundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "WhitelistMintState",
    type: "event",
  },
  {
    inputs: [],
    name: "MADFactory721",
    outputs: [
      {
        internalType: "contract FactoryVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "basicMintTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "creatorMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBurn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "sigHash",
        type: "bytes4",
      },
    ],
    name: "feeLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_freeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxFree",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_claimRoot",
        type: "bytes32",
      },
    ],
    name: "freeSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "gift",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "minimalSafeMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeBurn",
        type: "uint256",
      },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "_stateType",
        type: "uint8",
      },
    ],
    name: "setMintState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "whitelistSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600180556703782dace9d90000600355600060045534801561002557600080fd5b506040516200256e3803806200256e833981016040819052610046916100b9565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506000805460ff60a01b19169055600280546001600160a01b0319166001600160a01b03929092169190911790556100e9565b6000602082840312156100cb57600080fd5b81516001600160a01b03811681146100e257600080fd5b9392505050565b61247580620000f96000396000f3fe6080604052600436106101755760003560e01c80635c975abb116100cb578063ab9acd571161007f578063d44619e311610059578063d44619e3146103ac578063edc9e7a4146103cc578063f940e385146103ec57600080fd5b8063ab9acd5714610359578063ba36b92d14610379578063cab2e41f1461038c57600080fd5b80638456cb59116100b05780638456cb59146102ec5780638da5cb5b14610301578063a123c38d1461033957600080fd5b80635c975abb146102af57806367b5a642146102d957600080fd5b80633f4ba83a1161012d578063490f702711610107578063490f702714610262578063583fef3414610275578063586ba7821461029957600080fd5b80633f4ba83a1461021a57806342a427521461022f5780634328bd001461024257600080fd5b806313af40351161015e57806313af4035146101c757806317f9fad1146101e7578063182ee4851461020757600080fd5b806306fdde031461017a5780630b78f9c0146101a5575b600080fd5b34801561018657600080fd5b5061018f61040c565b60405161019c9190611ee5565b60405180910390f35b3480156101b157600080fd5b506101c56101c0366004611f18565b610423565b005b3480156101d357600080fd5b506101c56101e2366004611f52565b610524565b3480156101f357600080fd5b506101c5610202366004611f76565b6105f1565b6101c5610215366004611faf565b6106e1565b34801561022657600080fd5b506101c5610829565b6101c561023d366004611f76565b61087c565b34801561024e57600080fd5b506101c561025d366004612022565b6109be565b6101c56102703660046120ca565b610b7c565b34801561028157600080fd5b5061028b60045481565b60405190815260200161019c565b3480156102a557600080fd5b5061028b60035481565b3480156102bb57600080fd5b50600054600160a01b900460ff16604051901515815260200161019c565b6101c56102e736600461210b565b610cc7565b3480156102f857600080fd5b506101c5610dd5565b34801561030d57600080fd5b50600054610321906001600160a01b031681565b6040516001600160a01b03909116815260200161019c565b34801561034557600080fd5b506101c5610354366004612193565b610e26565b34801561036557600080fd5b506101c56103743660046121eb565b610f3b565b6101c5610387366004612236565b611108565b34801561039857600080fd5b506101c56103a7366004612193565b61125e565b3480156103b857600080fd5b50600254610321906001600160a01b031681565b3480156103d857600080fd5b5061028b6103e73660046122f1565b611339565b3480156103f857600080fd5b506101c5610407366004611f76565b61136f565b6060602080526606726f7574657260465260606020f35b6000546001600160a01b031633146104715760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b6802b5e3af16b18800008210801561049157506802b5e3af16b188000081105b6104dd5760405162461bcd60e51b815260206004820152600c60248201527f496e76616c6964204665657300000000000000000000000000000000000000006044820152606401610468565b6004819055600382905560408051838152602081018390527f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a1910160405180910390a15050565b6000546001600160a01b0316331461056d5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610468565b6001600160a01b0381166105b55760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610468565b60008181556040516001600160a01b0383169133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000546001600160a01b0316331461063a5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610468565b6001600160a01b0381166106825760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610468565b604051636c19e78360e01b81526001600160a01b038281166004830152831690636c19e78390602401600060405180830381600087803b1580156106c557600080fd5b505af11580156106d9573d6000803e3d6000fd5b505050505050565b6001546001146107205760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff16156107685760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b600061077383611af9565b9150508060ff166002036107e9576040516369fd0e0b60e01b8152600481018390523360248201526001600160a01b038416906369fd0e0b9034906044015b6000604051808303818588803b1580156107cb57600080fd5b505af11580156107df573d6000803e3d6000fd5b5050505050610820565b60405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b6044820152606401610468565b50506001805550565b6000546001600160a01b031633146108725760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610468565b61087a611c4e565b565b6001546001146108bb5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff16156109035760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b600061090e83611af9565b91505060ff8116156109515760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b6044820152606401610468565b604051633966bb8360e21b81526001600160a01b03838116600483015233602483015284169063e59aee0c9034906044015b6000604051808303818588803b15801561099c57600080fd5b505af11580156109b0573d6000803e3d6000fd5b505060018055505050505050565b6001546001146109fd5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff1615610a455760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b600080610a5184611af9565b915091508060ff16600103610b03576040516355f804b360e01b81526001600160a01b038516906355f804b390610a8c908690600401611ee5565b600060405180830381600087803b158015610aa657600080fd5b505af1158015610aba573d6000803e3d6000fd5b5050505082604051610acc9190612333565b6040519081900381209083907f6f8750bee7bd7661be202812d7503ffaf307fb27b6d6a954a1989fdcd156bfb790600090a3610b72565b8060ff16600203610b3a576040516355f804b360e01b81526001600160a01b038516906355f804b390610a8c908690600401611ee5565b60028160ff1611156107e9576040516355f804b360e01b81526001600160a01b038516906355f804b390610a8c908690600401611ee5565b5050600180555050565b600154600114610bbb5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff1615610c035760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b6000610c0e84611af9565b9150508060ff16600114610c535760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b6044820152606401610468565b60405163438b1b4b60e01b81526001600160a01b0384811660048301526024820184905233604483015285169063438b1b4b9034906064016000604051808303818588803b158015610ca457600080fd5b505af1158015610cb8573d6000803e3d6000fd5b50506001805550505050505050565b600154600114610d065760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff1615610d4e5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b6000610d5984611af9565b9150508060ff166002036107e9576040516369eff00560e01b81526001600160a01b038516906369eff005903490610d999087908790339060040161234f565b6000604051808303818588803b158015610db257600080fd5b505af1158015610dc6573d6000803e3d6000fd5b50505050505050600180555050565b6000546001600160a01b03163314610e1e5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610468565b61087a611cea565b600154600114610e655760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff1615610ead5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b6000610eb885611af9565b9150508060ff166002036107e9576040516386997e7d60e01b81526004810185905260248101849052604481018390526001600160a01b038616906386997e7d906064015b600060405180830381600087803b158015610f1757600080fd5b505af1158015610f2b573d6000803e3d6000fd5b505050505b505060018055505050565b600154600114610f7a5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff1615610fc25760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b60038160ff16106110045760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b6044820152606401610468565b60008061101085611af9565b9150915060018360ff1610156110645761102b818686611d70565b8315158160ff16837f0c2bd698c33cf5bea165c8a607bdd7c7d806b8b10284bfcd5b6899674b5a486d60405160405180910390a4610f30565b8260ff166001036110b35761107a818686611e4f565b8315158160ff16837f8fb26c046352958e1f6b6a24432925f21e52878afea867b4b642e5d07c6abf0f60405160405180910390a4610f30565b8260ff16600203610f30576110c9818686611e88565b8315158160ff16837fcaca6c2e85f8f4d6f254385762b7a5baec7c68441678ee0a9b1ea8bb4b05bf0b60405160405180910390a4505060018055505050565b6001546001146111475760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff161561118f5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b600061119a83611af9565b91505060018160ff1610611230578060ff16600114611200578060ff166002146112005760028160ff16116112005760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b6044820152606401610468565b60405163362c0cb560e01b81526001600160a01b0384169063362c0cb59034906107b290869033906004016123af565b60405163226bf2d160e21b81523360048201526001600160a01b038416906389afcb44903490602401610983565b60015460011461129d5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff16156112e55760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b60006112f085611af9565b9150508060ff166002036107e9576040516313e0c8c360e11b81526004810185905260248101849052604481018390526001600160a01b038616906327c1918690606401610efd565b6000816340d097c360e01b0361135157505060035490565b8163044df8e760e41b0361136757505060045490565b506000919050565b6001546001146113ae5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610468565b6002600155600054600160a01b900460ff16156113f65760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b60008061140284611af9565b9150915060018160ff1610156115c1576001600160a01b0383161580159061149257506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa15801561146b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148f9190612403565b15155b61153357836001600160a01b0316316000036114db5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b6044820152606401610468565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561151657600080fd5b505af115801561152a573d6000803e3d6000fd5b5050505061158e565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561157557600080fd5b505af1158015611589573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff1660010361177b576001600160a01b0383161580159061164c57506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa158015611625573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116499190612403565b15155b6116ed57836001600160a01b0316316000036116955760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b6044820152606401610468565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156116d057600080fd5b505af11580156116e4573d6000803e3d6000fd5b50505050611748565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561172f57600080fd5b505af1158015611743573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff16600203611935576001600160a01b0383161580159061180657506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa1580156117df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118039190612403565b15155b6118a757836001600160a01b03163160000361184f5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b6044820152606401610468565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561188a57600080fd5b505af115801561189e573d6000803e3d6000fd5b50505050611902565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b1580156118e957600080fd5b505af11580156118fd573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b60028160ff161115610b72576001600160a01b038316158015906119c157506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa15801561199a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119be9190612403565b15155b611a6257836001600160a01b031631600003611a0a5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b6044820152606401610468565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611a4557600080fd5b505af1158015611a59573d6000803e3d6000fd5b50505050611abd565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b158015611aa457600080fd5b505af1158015611ab8573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45050600180555050565b60025460405163617d1d3b60e01b81526001600160a01b038381166004830152600092839291169063617d1d3b90602401602060405180830381865afa158015611b47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6b9190612403565b60025460405163b64bd5eb60e01b8152600481018390529193506001600160a01b03169063b64bd5eb906024016040805180830381865afa158015611bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd8919061241c565b505060025460405163d93cb8fd60e01b8152600481018490526001600160a01b039091169063d93cb8fd90602401602060405180830381865afa158015611c23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c47919061244b565b9050915091565b600054600160a01b900460ff16611ca75760405162461bcd60e51b815260206004820152600860248201527f554e5041555345440000000000000000000000000000000000000000000000006044820152606401610468565b6000805460ff60a01b191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b600054600160a01b900460ff1615611d2d5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610468565b6000805460ff60a01b1916600160a01b1790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001611ce0565b60018360ff161015611ddd5760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf906024015b600060405180830381600087803b158015611dc057600080fd5b505af1158015611dd4573d6000803e3d6000fd5b50505050505050565b8260ff16600103611e165760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf90602401611da6565b8260ff166002036107e95760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf90602401611da6565b8260ff166002036107e9576040516331a9da3d60e21b815281151560048201526001600160a01b0383169063c6a768f490602401611da6565b8260ff166002036107e957604051637e62f3b360e01b815281151560048201526001600160a01b03831690637e62f3b390602401611da6565b60005b83811015611edc578181015183820152602001611ec4565b50506000910152565b6020815260008251806020840152611f04816040850160208701611ec1565b601f01601f19169190910160400192915050565b60008060408385031215611f2b57600080fd5b50508035926020909101359150565b6001600160a01b0381168114611f4f57600080fd5b50565b600060208284031215611f6457600080fd5b8135611f6f81611f3a565b9392505050565b60008060408385031215611f8957600080fd5b8235611f9481611f3a565b91506020830135611fa481611f3a565b809150509250929050565b60008060408385031215611fc257600080fd5b8235611fcd81611f3a565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561201a5761201a611fdb565b604052919050565b6000806040838503121561203557600080fd5b823561204081611f3a565b915060208381013567ffffffffffffffff8082111561205e57600080fd5b818601915086601f83011261207257600080fd5b81358181111561208457612084611fdb565b612096601f8201601f19168501611ff1565b915080825287848285010111156120ac57600080fd5b80848401858401376000848284010152508093505050509250929050565b6000806000606084860312156120df57600080fd5b83356120ea81611f3a565b925060208401356120fa81611f3a565b929592945050506040919091013590565b60008060006040848603121561212057600080fd5b833561212b81611f3a565b9250602084013567ffffffffffffffff8082111561214857600080fd5b818601915086601f83011261215c57600080fd5b81358181111561216b57600080fd5b8760208260051b850101111561218057600080fd5b6020830194508093505050509250925092565b600080600080608085870312156121a957600080fd5b84356121b481611f3a565b966020860135965060408601359560600135945092505050565b8015158114611f4f57600080fd5b60ff81168114611f4f57600080fd5b60008060006060848603121561220057600080fd5b833561220b81611f3a565b9250602084013561221b816121ce565b9150604084013561222b816121dc565b809150509250925092565b6000806040838503121561224957600080fd5b823561225481611f3a565b915060208381013567ffffffffffffffff8082111561227257600080fd5b818601915086601f83011261228657600080fd5b81358181111561229857612298611fdb565b8060051b91506122a9848301611ff1565b81815291830184019184810190898411156122c357600080fd5b938501935b838510156122e1578435825293850193908501906122c8565b8096505050505050509250929050565b60006020828403121561230357600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611f6f57600080fd5b60008251612345818460208701611ec1565b9190910192915050565b6040808252810183905260008460608301825b8681101561239257823561237581611f3a565b6001600160a01b0316825260209283019290910190600101612362565b5080925050506001600160a01b0383166020830152949350505050565b604080825283519082018190526000906020906060840190828701845b828110156123e8578151845292840192908401906001016123cc565b5050506001600160a01b039490941692019190915250919050565b60006020828403121561241557600080fd5b5051919050565b6000806040838503121561242f57600080fd5b825161243a81611f3a565b6020840151909250611fa4816121ce565b60006020828403121561245d57600080fd5b8151611f6f816121dc56fea164736f6c6343000810000a";

type MADRouter721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADRouter721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADRouter721__factory extends ContractFactory {
  constructor(...args: MADRouter721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADRouter721> {
    return super.deploy(_factory, overrides || {}) as Promise<MADRouter721>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  override attach(address: string): MADRouter721 {
    return super.attach(address) as MADRouter721;
  }
  override connect(signer: Signer): MADRouter721__factory {
    return super.connect(signer) as MADRouter721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADRouter721Interface {
    return new utils.Interface(_abi) as MADRouter721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADRouter721 {
    return new Contract(address, _abi, signerOrProvider) as MADRouter721;
  }
}
