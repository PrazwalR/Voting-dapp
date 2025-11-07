import voting from "./Create.json";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const CONTRACT_OWNER_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_OWNER;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

export const VotingAddress = CONTRACT_ADDRESS;
export const VotingAddressABI = voting.abi;
export const CONTRACT_OWNER = CONTRACT_OWNER_ADDRESS;

//NETWORK
const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://eth-sepolia.g.alchemy.com/v2/I6MHs_ilXH9PUViB5gKgY"],
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
  },
  holesky: {
    chainId: `0x${Number(17000).toString(16)}`,
    chainName: "Holesky",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
    blockExplorerUrls: ["https://holesky.etherscan.io/"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(1337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

let isNetworkSwitching = false;

const changeNetwork = async ({ networkName }) => {
  if (isNetworkSwitching) {
    console.log("Network switch already in progress...");
    return;
  }

  try {
    isNetworkSwitching = true;

    if (!window.ethereum) throw new Error("No crypto wallet found");

    const network = networks[networkName];

    // Get current chain ID
    const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });

    // If already on correct network, no need to switch
    if (currentChainId === network.chainId) {
      console.log("Already on correct network");
      return;
    }

    // Try to switch to the network first
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: network.chainId }],
      });
      console.log("Network switched successfully");
    } catch (switchError) {
      // If the network doesn't exist, add it
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [network],
        });
        console.log("Network added successfully");
      } else if (switchError.code === 4001) {
        // User rejected the request
        console.log("User rejected network switch");
      } else {
        throw switchError;
      }
    }
  } catch (err) {
    console.log("Network switch error:", err.message);
  } finally {
    isNetworkSwitching = false;
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = NETWORK;
  if (networkName && networks[networkName]) {
    await changeNetwork({ networkName });
  }
};
//END  OF NETWORK-------
