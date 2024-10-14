import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { InjectedConnector } from 'wagmi/connectors/injected'
import Web3AuthConnectorInstance from './services/web3AuthConnectorInstance.tsx'
import { LOGIN_PROVIDER } from '@web3auth/openlogin-adapter'
import { polygon } from 'wagmi/chains'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import config from './config.ts'

// Configure chains & providers with the Public provider.
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon],
    [alchemyProvider({ apiKey: config.ALCHEMY_API_KEY })]
)

// Set up client
const configWagmi = createConfig({
    autoConnect: true,
    connectors: [
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName: 'wagmi',
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                projectId: '3314f39613059cb687432d249f1658d2',
                showQrModal: true,
            },
        }),
        new MetaMaskConnector({
            chains,
            options: {
                // name: 'Injected',
                shimDisconnect: true,
                UNSTABLE_shimOnConnectSelectAccount: true,
            },
        }),
        Web3AuthConnectorInstance(chains, LOGIN_PROVIDER.GOOGLE),
    ],
    publicClient,
    webSocketPublicClient,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WagmiConfig config={configWagmi}>
            <App />
        </WagmiConfig>
    </React.StrictMode>
)
