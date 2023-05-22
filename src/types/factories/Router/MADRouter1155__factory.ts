/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MADRouter1155,
  MADRouter1155Interface,
} from "../../Router/MADRouter1155";
import type { PromiseOrValue } from "../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

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
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidFees",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidType",
    type: "error",
  },
  {
    inputs: [],
    name: "NoFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
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
    name: "BaseURISet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract FactoryVerifier",
        name: "newFactory",
        type: "address",
      },
    ],
    name: "FactoryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal2",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal3",
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
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RecipientUpdated",
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
        internalType: "uint128[]",
        name: "_ids",
        type: "uint128[]",
      },
      {
        internalType: "uint128[]",
        name: "_balances",
        type: "uint128[]",
      },
    ],
    name: "basicMintBatchTo",
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
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_balance",
        type: "uint128",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint128[]",
        name: "_ids",
        type: "uint128[]",
      },
      {
        internalType: "uint128[]",
        name: "_balances",
        type: "uint128[]",
      },
    ],
    name: "batchBurn",
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
        internalType: "uint128[]",
        name: "_ids",
        type: "uint128[]",
      },
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "uint128[]",
        name: "_amount",
        type: "uint128[]",
      },
    ],
    name: "burn",
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
    inputs: [],
    name: "madFactory",
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
    inputs: [],
    name: "maxFeeBurn",
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
    inputs: [],
    name: "maxFeeMint",
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
    name: "recipient",
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
        name: "_uri",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
    ],
    name: "setFactory",
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
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRecipient",
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
    ],
    name: "setURILock",
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
] as const;

const _bytecode =
  "0x346200008357620017f5388190036080601f8201601f19168101906001600160401b03821190821017620000885760609282916040526080391262000083576200007360805162000050816200009e565b60a0516200005e816200009e565b60c051916200006d836200009e565b620000b0565b60405161154d9081620002a88239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116036200008357565b919033156200018a5760008054336001600160a01b031991821681178355909290827f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a36703782dace9d900006002556001600160a01b03168015801562000130575b50505050620001286200012e92620001fb565b62000258565b565b9491929462000178577fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd9136200012893826200012e97600154161760015580a292388062000115565b60405163d92e233d60e01b8152600490fd5b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b15620001c757565b60405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606490fd5b6000546001600160a01b039190620002179083163314620001bf565b80156200024a5780600555167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d344936600080a2565b63d92e233d6000526004601cfd5b6000546001600160a01b039190620002749083163314620001bf565b80156200024a5780600455167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da6466600080a256fe6080604052600436101561001257600080fd5b60003560e01c806306fdde0314610177578063074e20fe14610172578063089f8b1b1461016d5780630b78f9c01461016857806313af40351461016357806321d501b91461015e5780633bbed4a014610159578063583fef3414610154578063586ba7821461014f5780635bb478081461014a57806366d003ac14610145578063785e9e86146101405780637f82d7e51461013b57806388433651146101365780638da5cb5b14610131578063b611f9d61461012c578063c7ca291c14610127578063c99aa4e514610122578063e427affe1461011d578063edc9e7a414610118578063f940e385146101135763fde3704e1461010e57600080fd5b610f90565b610ce6565b610c26565b610c03565b610be0565b610b03565b610a74565b610a40565b610998565b610920565b6108ec565b6108b8565b610843565b610825565b610807565b610785565b6106b3565b6105de565b610541565b610459565b6103aa565b6101af565b600091031261018757565b600080fd5b60005b83811061019f5750506000910152565b818101518382015260200161018f565b3461018757600060031936011261018757602080526606726f7574657260465260606020f35b73ffffffffffffffffffffffffffffffffffffffff81160361018757565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161023657604052565b6101f3565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761023657604052565b67ffffffffffffffff81116102365760051b60200190565b604435906fffffffffffffffffffffffffffffffff8216820361018757565b606435906fffffffffffffffffffffffffffffffff8216820361018757565b81601f82011215610187578035916102e98361027c565b926102f7604051948561023b565b808452602092838086019260051b820101928311610187578301905b828210610321575050505090565b81356fffffffffffffffffffffffffffffffff81168103610187578152908301908301610313565b90608060031983011261018757600435610362816101d5565b9160243561036f816101d5565b9167ffffffffffffffff6044358181116101875783610390916004016102d2565b92606435918211610187576103a7916004016102d2565b90565b73ffffffffffffffffffffffffffffffffffffffff6103c836610349565b939091926103e260ff6103da836112ce565b9050166114e4565b1691823b156101875761042a9260405180809581947f4fc4a9390000000000000000000000000000000000000000000000000000000083526000988997339260048601611138565b039134905af1801561044a5761043e575080f35b61044790610222565b80f35b610fc4565b8015150361018757565b3461018757604060031936011261018757600435610476816101d5565b60ff602435916104858361044f565b73ffffffffffffffffffffffffffffffffffffffff6104a3826112ce565b909316916104b0836114e4565b1691823b156101875760405180947f879fbedf0000000000000000000000000000000000000000000000000000000082521515938460048301528160246000978880945af1801561044a57610528575b507f0c2bd698c33cf5bea165c8a607bdd7c7d806b8b10284bfcd5b6899674b5a486d8480a480f35b8061053561053b92610222565b8061017c565b38610500565b346101875760406003193601126101875760043560243561057b73ffffffffffffffffffffffffffffffffffffffff60005416331461147f565b6706f05b59d3b2000081116722b1c8c1227a00008311176105d0577f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a191816040926003558160025582519182526020820152a1005b632d8768f96000526004601cfd5b34610187576020600319360112610187576004356105fb816101d5565b73ffffffffffffffffffffffffffffffffffffffff9060009161062281845416331461147f565b8116908115610655578255337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768380a380f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c6964206f776e6572000000000000000000000000000000000000006044820152fd5b6080600319360112610187576004356106cb816101d5565b67ffffffffffffffff90602435828111610187576106ed9036906004016102d2565b6044359083821161018757366023830112156101875781600401356107118161027c565b9261071f604051948561023b565b81845260209160248386019160051b8301019136831161018757602401905b82821061076c57505050506064359384116101875761076461076a9436906004016102d2565b92611186565b005b838091833561077a816101d5565b81520191019061073e565b34610187576020600319360112610187576004356107a2816101d5565b73ffffffffffffffffffffffffffffffffffffffff6000916107c882845416331461147f565b80156107fa5780600455167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da64668280a280f35b63d92e233d83526004601cfd5b34610187576000600319360112610187576020600354604051908152f35b34610187576000600319360112610187576020600254604051908152f35b3461018757602060031936011261018757600435610860816101d5565b73ffffffffffffffffffffffffffffffffffffffff60009161088682845416331461147f565b80156107fa5780600555167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d3449368280a280f35b3461018757600060031936011261018757602073ffffffffffffffffffffffffffffffffffffffff60045416604051908152f35b3461018757600060031936011261018757602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b73ffffffffffffffffffffffffffffffffffffffff61093e36610349565b9390919261095060ff6103da836112ce565b1691823b156101875761042a9260405180809581947feb5ec4f20000000000000000000000000000000000000000000000000000000083526000988997339260048601611138565b34610187576040600319360112610187576004356109b5816101d5565b6024359067ffffffffffffffff9081831161018757366023840112156101875782600401359182116102365760405191610a1760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116018461023b565b808352366024828601011161018757602081600092602461076a97018387013784010152610ff0565b3461018757600060031936011261018757602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b346101875760006020600319360112610b00578073ffffffffffffffffffffffffffffffffffffffff600435610aa9816101d5565b610ab760ff6103da836112ce565b16803b15610afd5781906004604051809481937f66c879a90000000000000000000000000000000000000000000000000000000083525af1801561044a5761043e575080f35b50fd5b80fd5b608060031936011261018757600435610b1b816101d5565b602435610b27816101d5565b610b2f610294565b91610b386102b3565b92610b4760ff6103da846112ce565b73ffffffffffffffffffffffffffffffffffffffff80921692833b156101875760009360849260405196879586947feca32ab90000000000000000000000000000000000000000000000000000000086521660048501526fffffffffffffffffffffffffffffffff809216602485015216604483015233606483015234905af1801561044a57610bd357005b8061053561076a92610222565b346101875760006003193601126101875760206040516722b1c8c1227a00008152f35b346101875760006003193601126101875760206040516706f05b59d3b200008152f35b34610187576020600319360112610187576004357fffffffff0000000000000000000000000000000000000000000000000000000081168103610187576000907f44df8e70000000000000000000000000000000000000000000000000000000008114907f40d097c30000000000000000000000000000000000000000000000000000000014610cd957610ccd57610cc9905b6040519081529081906020820190565b0390f35b50610cc9600354610cb9565b5050610cc9600254610cb9565b346101875760406003193601126101875760ff60048035610d06816101d5565b60243591610d13836101d5565b610d1c826112ce565b90941692610d29846114e4565b73ffffffffffffffffffffffffffffffffffffffff8091169283151580610ef9575b15610e1e5716610d6f825473ffffffffffffffffffffffffffffffffffffffff1690565b90803b1561018757604080517f9456fbcc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff95861694810194855294909216602084015260009284928391859183910103925af1801561044a57610e0b575b505b33917ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a1600080a4005b80610535610e1892610222565b38610de0565b91925090803115610ed0571690610e49815473ffffffffffffffffffffffffffffffffffffffff1690565b823b1561018757610ea892600092836040518096819582947f51cff8d9000000000000000000000000000000000000000000000000000000008452830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b03925af1801561044a57610ebd575b50610de2565b80610535610eca92610222565b38610eb7565b826040517f43f9e110000000000000000000000000000000000000000000000000000000008152fd5b506040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82168482019081526020908290819083010381885afa90811561044a57600091610f62575b501515610d4b565b610f83915060203d8111610f89575b610f7b818361023b565b810190611281565b38610f5a565b503d610f71565b3461018757600060031936011261018757602073ffffffffffffffffffffffffffffffffffffffff60055416604051908152f35b6040513d6000823e3d90fd5b610fe89060206040519282848094519384920161018c565b810103902090565b9073ffffffffffffffffffffffffffffffffffffffff60ff9261101d611015826112ce565b9095166114e4565b1690813b1561018757600060405180937f55f804b30000000000000000000000000000000000000000000000000000000082526020600483015281836044827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8951806024850152611098818c6020888801910161018c565b011681010301925af191821561044a576110b7926110df575b50610fd0565b907f43644489da8fbb6bf513e3cbb8aefbc47ed49a5d8159243b448b2444e1d38b9e600080a3565b806105356110ec92610222565b386110b1565b90815180825260208080930193019160005b828110611112575050505090565b83516fffffffffffffffffffffffffffffffff1685529381019392810192600101611104565b9261117f9061117160609497969773ffffffffffffffffffffffffffffffffffffffff80951687526080602088015260808701906110f2565b9085820360408701526110f2565b9416910152565b919261119660ff6103da856112ce565b73ffffffffffffffffffffffffffffffffffffffff80931692833b156101875791906040519485937f6009074b0000000000000000000000000000000000000000000000000000000085526084850160806004870152825180915260a48601926020809101926000905b83821061126457505050505061123c60009593859361122d859460031993848783030160248801526110f2565b918483030160448501526110f2565b336064830152039134905af1801561044a576112555750565b8061053561126292610222565b565b8451811686528a9850948201949382019360019190910190611200565b90816020910312610187575190565b919082604091031261018757602082516112a9816101d5565b9201516103a78161044f565b90816020910312610187575160ff811681036101875790565b9061136161130d6112f460055473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b604080517f617d1d3b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90951660048601526020928390869081906024820190565b0381855afa94851561044a57600095611460575b5080517fb64bd5eb000000000000000000000000000000000000000000000000000000008152600481018690529185908284602481845afa92831561044a576113f7948694611434575b505180809581947fd93cb8fd000000000000000000000000000000000000000000000000000000008352600483019190602083019252565b03915afa91821561044a5760009261140e57505090565b6103a79250803d1061142d575b611425818361023b565b8101906112b5565b503d61141b565b61145390823d8411611459575b61144b818361023b565b810190611290565b506113bf565b503d611441565b611478919550833d8511610f8957610f7b818361023b565b9338611375565b1561148657565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a454400000000000000000000000000000000000000006044820152fd5b6001036114ed57565b60046040517fb9688461000000000000000000000000000000000000000000000000000000008152fdfea264697066735822122002568c1d7855ed93f9a7cddac90169b6b7b0d7f7d3dfeffce270915eb397374e64736f6c63430008130033";

type MADRouter1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADRouter1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADRouter1155__factory extends ContractFactory {
  constructor(...args: MADRouter1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADRouter1155> {
    return super.deploy(
      _factory,
      _paymentTokenAddress,
      _recipient,
      overrides || {}
    ) as Promise<MADRouter1155>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _paymentTokenAddress,
      _recipient,
      overrides || {}
    );
  }
  override attach(address: string): MADRouter1155 {
    return super.attach(address) as MADRouter1155;
  }
  override connect(signer: Signer): MADRouter1155__factory {
    return super.connect(signer) as MADRouter1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADRouter1155Interface {
    return new utils.Interface(_abi) as MADRouter1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADRouter1155 {
    return new Contract(address, _abi, signerOrProvider) as MADRouter1155;
  }
}