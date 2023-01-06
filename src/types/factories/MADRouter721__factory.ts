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
      {
        internalType: "address",
        name: "_paymentTokenAddress",
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
        internalType: "address",
        name: "newPaymentToken",
        type: "address",
      },
    ],
    name: "PaymentTokenUpdated",
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
    name: "erc20",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "paymentTokenAddress",
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
        name: "_paymentTokenAddress",
        type: "address",
      },
    ],
    name: "setPaymentToken",
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
  "0x6080604052600180556703782dace9d9000060035560006004553480156200002657600080fd5b50604051620029d2380380620029d28339810160408190526200004991620001e1565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506000805460ff60a01b19169055600280546001600160a01b0319166001600160a01b0384811691909117909155811615620000ca57620000ca81620000d2565b505062000220565b6000546001600160a01b03163314620001215760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b6001600160a01b038116620001795760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420746f6b656e20616464726573730000000000000000000000604482015260640162000118565b6005819055600680546001600160a01b0319166001600160a01b0383169081179091556040517fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd91390600090a250565b6001600160a01b0381168114620001de57600080fd5b50565b60008060408385031215620001f557600080fd5b82516200020281620001c8565b60208401519092506200021581620001c8565b809150509250929050565b6127a280620002306000396000f3fe6080604052600436106101965760003560e01c806367b5a642116100e1578063ab9acd571161008a578063cab2e41f11610064578063cab2e41f1461040d578063d44619e31461042d578063edc9e7a41461044d578063f940e3851461046d57600080fd5b8063ab9acd57146103ba578063afb18fe7146103da578063ba36b92d146103fa57600080fd5b80638456cb59116100bb5780638456cb59146103655780638da5cb5b1461037a578063a123c38d1461039a57600080fd5b806367b5a642146102fa5780636a326ab11461030d578063785e9e861461032d57600080fd5b806342a4275211610143578063583fef341161011d578063583fef3414610296578063586ba782146102ba5780635c975abb146102d057600080fd5b806342a42752146102505780634328bd0014610263578063490f70271461028357600080fd5b806317f9fad11161017457806317f9fad114610208578063182ee485146102285780633f4ba83a1461023b57600080fd5b806306fdde031461019b5780630b78f9c0146101c657806313af4035146101e8575b600080fd5b3480156101a757600080fd5b506101b061048d565b6040516101bd91906121ff565b60405180910390f35b3480156101d257600080fd5b506101e66101e1366004612232565b6104a4565b005b3480156101f457600080fd5b506101e661020336600461226c565b6105a5565b34801561021457600080fd5b506101e6610223366004612290565b610672565b6101e66102363660046122c9565b610762565b34801561024757600080fd5b506101e66108a4565b6101e661025e366004612290565b6108f7565b34801561026f57600080fd5b506101e661027e36600461233c565b610a85565b6101e66102913660046123e4565b610c43565b3480156102a257600080fd5b506102ac60045481565b6040519081526020016101bd565b3480156102c657600080fd5b506102ac60035481565b3480156102dc57600080fd5b50600054600160a01b900460ff1660405190151581526020016101bd565b6101e6610308366004612425565b610e23565b34801561031957600080fd5b506101e661032836600461226c565b610f2f565b34801561033957600080fd5b5060065461034d906001600160a01b031681565b6040516001600160a01b0390911681526020016101bd565b34801561037157600080fd5b506101e6611035565b34801561038657600080fd5b5060005461034d906001600160a01b031681565b3480156103a657600080fd5b506101e66103b53660046124ad565b611086565b3480156103c657600080fd5b506101e66103d5366004612505565b61119b565b3480156103e657600080fd5b5060055461034d906001600160a01b031681565b6101e6610408366004612550565b611368565b34801561041957600080fd5b506101e66104283660046124ad565b611578565b34801561043957600080fd5b5060025461034d906001600160a01b031681565b34801561045957600080fd5b506102ac61046836600461260b565b611653565b34801561047957600080fd5b506101e6610488366004612290565b611689565b6060602080526606726f7574657260465260606020f35b6000546001600160a01b031633146104f25760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b6802b5e3af16b18800008210801561051257506802b5e3af16b188000081105b61055e5760405162461bcd60e51b815260206004820152600c60248201527f496e76616c69642046656573000000000000000000000000000000000000000060448201526064016104e9565b6004819055600382905560408051838152602081018390527f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a1910160405180910390a15050565b6000546001600160a01b031633146105ee5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6001600160a01b0381166106365760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016104e9565b60008181556040516001600160a01b0383169133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000546001600160a01b031633146106bb5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6001600160a01b0381166107035760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016104e9565b604051636c19e78360e01b81526001600160a01b038281166004830152831690636c19e78390602401600060405180830381600087803b15801561074657600080fd5b505af115801561075a573d6000803e3d6000fd5b505050505050565b6001546001146107a15760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156107e95760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60006107f483611e13565b9150508060ff1660020361086457604051630ef4eb0360e41b8152600481018390526001600160a01b0384169063ef4eb0309034906024015b6000604051808303818588803b15801561084657600080fd5b505af115801561085a573d6000803e3d6000fd5b505050505061089b565b60405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b50506001805550565b6000546001600160a01b031633146108ed5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6108f5611f68565b565b6001546001146109365760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff161561097e5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b600061098983611e13565b91505060ff8116156109cc5760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b6006546001600160a01b031615610a1f576006546040516304eac12d60e01b81526001600160a01b0384811660048301523360248301529182166044820152908416906304eac12d90349060640161082d565b6040516340d097c360e01b81526001600160a01b0383811660048301528416906340d097c39034906024016000604051808303818588803b158015610a6357600080fd5b505af1158015610a77573d6000803e3d6000fd5b505050505050506001805550565b600154600114610ac45760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff1615610b0c5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b600080610b1884611e13565b915091508060ff16600103610bca576040516355f804b360e01b81526001600160a01b038516906355f804b390610b539086906004016121ff565b600060405180830381600087803b158015610b6d57600080fd5b505af1158015610b81573d6000803e3d6000fd5b5050505082604051610b93919061264d565b6040519081900381209083907f6f8750bee7bd7661be202812d7503ffaf307fb27b6d6a954a1989fdcd156bfb790600090a3610c39565b8060ff16600203610c01576040516355f804b360e01b81526001600160a01b038516906355f804b390610b539086906004016121ff565b60028160ff161115610864576040516355f804b360e01b81526001600160a01b038516906355f804b390610b539086906004016121ff565b5050600180555050565b600154600114610c825760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff1615610cca5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b6000610cd584611e13565b9150508060ff16600114610d1a5760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b6005546000906001600160a01b0316610da457600654604051636eb1769f60e11b81523360048201523060248201526001600160a01b039091169063dd62ed3e90604401602060405180830381865afa158015610d7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9f9190612669565b610da6565b345b60065460405163438b1b4b60e01b81526001600160a01b03878116600483015260248201879052918216604482015291925086169063438b1b4b9083906064016000604051808303818588803b158015610dff57600080fd5b505af1158015610e13573d6000803e3d6000fd5b5050600180555050505050505050565b600154600114610e625760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff1615610eaa5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b6000610eb584611e13565b9150508060ff1660020361086457604051630880ea9b60e31b81526001600160a01b0385169063440754d8903490610ef39087908790600401612682565b6000604051808303818588803b158015610f0c57600080fd5b505af1158015610f20573d6000803e3d6000fd5b50505050505050600180555050565b6000546001600160a01b03163314610f785760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6001600160a01b038116610fce5760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420746f6b656e2061646472657373000000000000000000000060448201526064016104e9565b6005819055600680547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd91390600090a250565b6000546001600160a01b0316331461107e5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6108f5612004565b6001546001146110c55760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff161561110d5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b600061111885611e13565b9150508060ff16600203610864576040516386997e7d60e01b81526004810185905260248101849052604481018390526001600160a01b038616906386997e7d906064015b600060405180830381600087803b15801561117757600080fd5b505af115801561118b573d6000803e3d6000fd5b505050505b505060018055505050565b6001546001146111da5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156112225760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60038160ff16106112645760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b60008061127085611e13565b9150915060018360ff1610156112c45761128b81868661208a565b8315158160ff16837f0c2bd698c33cf5bea165c8a607bdd7c7d806b8b10284bfcd5b6899674b5a486d60405160405180910390a4611190565b8260ff16600103611313576112da818686612169565b8315158160ff16837f8fb26c046352958e1f6b6a24432925f21e52878afea867b4b642e5d07c6abf0f60405160405180910390a4611190565b8260ff16600203611190576113298186866121a2565b8315158160ff16837fcaca6c2e85f8f4d6f254385762b7a5baec7c68441678ee0a9b1ea8bb4b05bf0b60405160405180910390a4505060018055505050565b6001546001146113a75760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156113ef5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60006113fa83611e13565b91505060018160ff16106114c3578060ff1660011461148e578060ff166002146114605760028160ff16116114605760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b60405163b80f55c960e01b81526001600160a01b0384169063b80f55c990349061082d90869060040161270b565b60065460405163362c0cb560e01b81526001600160a01b038086169263362c0cb592349261082d92889291169060040161271e565b6005546001600160a01b031661153d576006546040516334b7e31f60e01b81523360048201526001600160a01b039182166024820152908416906334b7e31f90604401600060405180830381600087803b15801561152057600080fd5b505af1158015611534573d6000803e3d6000fd5b5050505061089b565b826001600160a01b03166344df8e70346040518263ffffffff1660e01b81526004016000604051808303818588803b158015610a6357600080fd5b6001546001146115b75760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156115ff5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b600061160a85611e13565b9150508060ff16600203610864576040516313e0c8c360e11b81526004810185905260248101849052604481018390526001600160a01b038616906327c191869060640161115d565b6000816340d097c360e01b0361166b57505060035490565b8163044df8e760e41b0361168157505060045490565b506000919050565b6001546001146116c85760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156117105760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60008061171c84611e13565b9150915060018160ff1610156118db576001600160a01b038316158015906117ac57506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa158015611785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a99190612669565b15155b61184d57836001600160a01b0316316000036117f55760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561183057600080fd5b505af1158015611844573d6000803e3d6000fd5b505050506118a8565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561188f57600080fd5b505af11580156118a3573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff16600103611a95576001600160a01b0383161580159061196657506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa15801561193f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119639190612669565b15155b611a0757836001600160a01b0316316000036119af5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156119ea57600080fd5b505af11580156119fe573d6000803e3d6000fd5b50505050611a62565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b158015611a4957600080fd5b505af1158015611a5d573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff16600203611c4f576001600160a01b03831615801590611b2057506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa158015611af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1d9190612669565b15155b611bc157836001600160a01b031631600003611b695760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611ba457600080fd5b505af1158015611bb8573d6000803e3d6000fd5b50505050611c1c565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b158015611c0357600080fd5b505af1158015611c17573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b60028160ff161115610c39576001600160a01b03831615801590611cdb57506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa158015611cb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd89190612669565b15155b611d7c57836001600160a01b031631600003611d245760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611d5f57600080fd5b505af1158015611d73573d6000803e3d6000fd5b50505050611dd7565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b158015611dbe57600080fd5b505af1158015611dd2573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45050600180555050565b60025460405163617d1d3b60e01b81526001600160a01b038381166004830152600092839291169063617d1d3b90602401602060405180830381865afa158015611e61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e859190612669565b60025460405163b64bd5eb60e01b8152600481018390529193506001600160a01b03169063b64bd5eb906024016040805180830381865afa158015611ece573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef29190612749565b505060025460405163d93cb8fd60e01b8152600481018490526001600160a01b039091169063d93cb8fd90602401602060405180830381865afa158015611f3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f619190612778565b9050915091565b600054600160a01b900460ff16611fc15760405162461bcd60e51b815260206004820152600860248201527f554e50415553454400000000000000000000000000000000000000000000000060448201526064016104e9565b6000805460ff60a01b191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b600054600160a01b900460ff16156120475760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b6000805460ff60a01b1916600160a01b1790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001611ffa565b60018360ff1610156120f75760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf906024015b600060405180830381600087803b1580156120da57600080fd5b505af11580156120ee573d6000803e3d6000fd5b50505050505050565b8260ff166001036121305760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf906024016120c0565b8260ff166002036108645760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf906024016120c0565b8260ff16600203610864576040516331a9da3d60e21b815281151560048201526001600160a01b0383169063c6a768f4906024016120c0565b8260ff1660020361086457604051637e62f3b360e01b815281151560048201526001600160a01b03831690637e62f3b3906024016120c0565b60005b838110156121f65781810151838201526020016121de565b50506000910152565b602081526000825180602084015261221e8160408501602087016121db565b601f01601f19169190910160400192915050565b6000806040838503121561224557600080fd5b50508035926020909101359150565b6001600160a01b038116811461226957600080fd5b50565b60006020828403121561227e57600080fd5b813561228981612254565b9392505050565b600080604083850312156122a357600080fd5b82356122ae81612254565b915060208301356122be81612254565b809150509250929050565b600080604083850312156122dc57600080fd5b82356122e781612254565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612334576123346122f5565b604052919050565b6000806040838503121561234f57600080fd5b823561235a81612254565b915060208381013567ffffffffffffffff8082111561237857600080fd5b818601915086601f83011261238c57600080fd5b81358181111561239e5761239e6122f5565b6123b0601f8201601f1916850161230b565b915080825287848285010111156123c657600080fd5b80848401858401376000848284010152508093505050509250929050565b6000806000606084860312156123f957600080fd5b833561240481612254565b9250602084013561241481612254565b929592945050506040919091013590565b60008060006040848603121561243a57600080fd5b833561244581612254565b9250602084013567ffffffffffffffff8082111561246257600080fd5b818601915086601f83011261247657600080fd5b81358181111561248557600080fd5b8760208260051b850101111561249a57600080fd5b6020830194508093505050509250925092565b600080600080608085870312156124c357600080fd5b84356124ce81612254565b966020860135965060408601359560600135945092505050565b801515811461226957600080fd5b60ff8116811461226957600080fd5b60008060006060848603121561251a57600080fd5b833561252581612254565b92506020840135612535816124e8565b91506040840135612545816124f6565b809150509250925092565b6000806040838503121561256357600080fd5b823561256e81612254565b915060208381013567ffffffffffffffff8082111561258c57600080fd5b818601915086601f8301126125a057600080fd5b8135818111156125b2576125b26122f5565b8060051b91506125c384830161230b565b81815291830184019184810190898411156125dd57600080fd5b938501935b838510156125fb578435825293850193908501906125e2565b8096505050505050509250929050565b60006020828403121561261d57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461228957600080fd5b6000825161265f8184602087016121db565b9190910192915050565b60006020828403121561267b57600080fd5b5051919050565b60208082528181018390526000908460408401835b868110156126c55782356126aa81612254565b6001600160a01b031682529183019190830190600101612697565b509695505050505050565b600081518084526020808501945080840160005b83811015612700578151875295820195908201906001016126e4565b509495945050505050565b60208152600061228960208301846126d0565b60408152600061273160408301856126d0565b90506001600160a01b03831660208301529392505050565b6000806040838503121561275c57600080fd5b825161276781612254565b60208401519092506122be816124e8565b60006020828403121561278a57600080fd5b8151612289816124f656fea164736f6c6343000810000a";

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
    _paymentTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADRouter721> {
    return super.deploy(
      _factory,
      _paymentTokenAddress,
      overrides || {}
    ) as Promise<MADRouter721>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _paymentTokenAddress,
      overrides || {}
    );
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
