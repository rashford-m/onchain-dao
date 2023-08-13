import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";

import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbow";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([goerli], [publicProvider()]);

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
