import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [goerli],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: `https://ethereum-goerli.publicnode.com`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "CryptoDevs DAO",
  projectId: "7347d431d76364cf68449d90f3cbba4d",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
