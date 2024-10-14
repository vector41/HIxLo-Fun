// Web3Auth Libraries
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'
import { Web3AuthNoModal } from '@web3auth/no-modal'
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
import {
    OpenloginAdapter,
    OPENLOGIN_NETWORK,
    LOGIN_PROVIDER_TYPE,
} from '@web3auth/openlogin-adapter'
import { CHAIN_NAMESPACES } from '@web3auth/base'
// import { TorusWalletConnectorPlugin } from '@web3auth/torus-wallet-connector-plugin'
import { Chain } from 'wagmi'

// const iconUrl = 'https://web3auth.io/docs/contents/logo-ethereum.png'

export default function Web3AuthConnectorInstance(
    chains: Chain[],
    loginProvider: LOGIN_PROVIDER_TYPE
) {
    // Create Web3Auth Instance

    const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0x' + chains[0].id.toString(16),
        rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
        displayName: chains[0].name,
        tickerName: chains[0].nativeCurrency?.name,
        ticker: chains[0].nativeCurrency?.symbol,
        blockExplorer: chains[0].blockExplorers?.default.url[0] as string,
    }

    const web3AuthInstance = new Web3AuthNoModal({
        clientId:
            'BDey3GMFf8GvN7D0WwTPwpphNO2qG_E4P2enn8YSo0YXo5bVD2ceyWmkx4rbZEnP9G0YBVg2deKs7SNnqKEOaRA',
        chainConfig,
        web3AuthNetwork: OPENLOGIN_NETWORK.CYAN,
    })

    // const web3AuthInstance = new Web3AuthNoModal({
    //     clientId:
    //         'BLrRiPXy3ycg4B_PqWU4iPBWygSs0qNaRqevLOgGrb3sFkZQf9t6VfoOY-DCNkMB_vdjsvV70wkQTBLVAkse-CI',
    //     chainConfig,
    //     web3AuthNetwork: OPENLOGIN_NETWORK.SAPPHIRE_DEVNET,
    // })

    const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig },
    })

    // Add openlogin adapter for customisations
    const openloginAdapterInstance = new OpenloginAdapter({
        privateKeyProvider,
        adapterSettings: {
            uxMode: 'redirect',
            whiteLabel: {
                appName: 'Wagmi Web3Auth Demo',
            },
        },
    })
    web3AuthInstance.configureAdapter(openloginAdapterInstance)

    //// Add Torus Wallet Plugin (optional)
    // const torusPlugin = new TorusWalletConnectorPlugin({
    //     torusWalletOpts: {
    //         buttonPosition: 'bottom-left',
    //     },
    //     walletInitOptions: {
    //         whiteLabel: {
    //             theme: { isDark: false, colors: { primary: '#00a8ff' } },
    //             logoDark: iconUrl,
    //             logoLight: iconUrl,
    //         },
    //         useWalletConnect: true,
    //         enableLogging: true,
    //     },
    // })
    // web3AuthInstance.addPlugin(torusPlugin)

    return new Web3AuthConnector({
        chains: chains,
        options: {
            web3AuthInstance,
            loginParams: {
                loginProvider,
            },
        },
    })
}
