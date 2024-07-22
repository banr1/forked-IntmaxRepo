export const CHAIN_ID = 534351;
export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL!;
export const BLOCK_EXPLORER_URL = "https://sepolia.scrollscan.dev";
export const DEFAULT_WALLET_URL =
  process.env.NEXT_PUBLIC_WALLET_URL ||
  "https://intmaxwallet-sdk-wallet.vercel.app/";
export const DEFAULT_DAPP_ICON = process.env.NEXT_PUBLIC_APP_ICON!;
export const DAPP_METADATA = {
  name: "Intmax sdk Dapp Example",
  description: "This is a simple Application.",
  icons: [DEFAULT_DAPP_ICON],
};
export const FORWARDER_CONTRACT_ADDRESS =
  "0xb0ad99037A7783035306f5284B88eE4f2268e036";
export const HELLOWORLD_CONTRACT_ADDRESS =
  "0x25E0EEc9224E4Ff5D3c14F1BCE06Ee8009c9Ad8E";
