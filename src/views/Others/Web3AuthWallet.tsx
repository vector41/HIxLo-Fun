// // WAGMI Libraries
// import {
//     WagmiConfig,
//     createConfig,
//     configureChains,
//     useSignMessage,
// } from 'wagmi'
// import { useAccount, useConnect, useDisconnect } from 'wagmi'
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'
// import { publicProvider } from 'wagmi/providers/public'

// import { LOGIN_PROVIDER } from '@web3auth/openlogin-adapter'
// import { useEffect } from 'react'
// import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'
// import axios from 'axios'

// function Profile() {
//     const { address, connector, isConnected } = useAccount()
//     const { connect, connectors } = useConnect()
//     const { disconnect } = useDisconnect()

//     if (isConnected) {
//         return (
//             <div className="main">
//                 <div className="title">Connected to {connector?.name}</div>
//                 <div>{address}</div>
//                 <button className="card" onClick={disconnect as any}>
//                     Disconnect
//                 </button>
//             </div>
//         )
//     } else {
//         return (
//             <div className="main">
//                 {connectors.map((connector) => {
//                     return (
//                         <button
//                             className="card"
//                             key={connector.id}
//                             onClick={() => connect({ connector })}
//                         >
//                             {connector.name}
//                         </button>
//                     )
//                 })}
//                 {error && <div>{error.message}</div>}
//             </div>
//         )
//     }
// }

// export default Profile
