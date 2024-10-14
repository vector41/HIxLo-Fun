// import React, { useEffect, useState } from 'react'
// // import { Alchemy, Network } from 'alchemy-sdk'
// // import { ethers } from 'ethers'
// // import { BytesLike } from 'ethers'
// // import { Result } from 'ethers'
// import ConnectWeb3AuthButton from '../components/ConnectWeb3AuthButton'
// import { useWeb3Auth } from '../services/web3auth'
// import DisconnectWeb3AuthButton from '../components/DisconnectWeb3AuthButton'
// import { getPublicCompressed } from '@toruslabs/eccrypto'
// import axios from 'axios'
// import config from '../config'

// interface UserModel {
//     idToken?: string
//     typeOfLogin: string
//     profileImage?: string
//     name?: string
//     email?: string
//     whiteLabel: string
//     referralLink?: string
//     signature: string
//     countryCode: string
//     address: string
//     appPubKey: string
// }

// const TraderView: React.FC = () => {
//     const { connected, getUserInfo, address, web3Auth, getSignature, logout } =
//         useWeb3Auth()

//     // Initialize tokens state with initial values or null
//     const [accessToken, setAccessToken] = useState<string>(() => {
//         // Retrieve tokens from localStorage when component mounts
//         return localStorage.getItem('accessToken') || ''
//     })

//     // Function to update tokens and save them to localStorage
//     const updateAccessToken = (accessToken: string) => {
//         setAccessToken(accessToken)
//         localStorage.setItem('accessToken', JSON.stringify(accessToken))
//     }

//     const getAppPubKey = async (): Promise<string> => {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         const app_scoped_privkey: any = await web3Auth?.provider?.request({
//             method: 'eth_private_key',
//         })

//         return getPublicCompressed(
//             Buffer.from(app_scoped_privkey.padStart(64, '0'), 'hex')
//         ).toString('hex')
//     }

//     const isSocialLogin = async () => {
//         const userInfo = await getUserInfo()
//         return Object.keys(userInfo).length > 0
//     }

//     const countryCode = () => 'CH'

//     const signin = async (userInfo: UserModel) => {
//         axios
//             .post(
//                 `${config.BASE_HTTPS_URL}/api/signin`,
//                 {
//                     userInfo,
//                 } // Request body
//             )
//             .then((res) => {
//                 if (res.status !== 200 || !res.data.result) return

//                 const { accessToken } = res.data
//                 updateAccessToken(accessToken)
//             })
//             .catch((error) => {
//                 console.error(
//                     'Error during initial data fetch:',
//                     error.message || 'Unknown error'
//                 )
//                 if (error.response) {
//                     console.error(
//                         'Server responded with an error status:',
//                         error.response.status
//                     )
//                     console.error('Error data:', error.response.data)
//                 } else if (error.request) {
//                     console.error('No response received from the server')
//                 } else {
//                     console.error(
//                         'Error setting up the request:',
//                         error.message
//                     )
//                 }
//             })
//     }

//     const verify = () => {
//         axios
//             .post(
//                 `${config.BASE_HTTPS_URL}/api/verify`,
//                 {
//                     address,
//                 } // Request body
//             )
//             .then((res) => {
//                 getSignature(res.data.nonce).then(async (signature) => {
//                     if (!signature.startsWith('0x')) {
//                         console.log('Rejected!')
//                         return
//                     }

//                     const userInfo = await getUserInfo()
//                     const socialWallet = await isSocialLogin()
//                     signin({
//                         address,
//                         typeOfLogin: socialWallet
//                             ? userInfo?.typeOfLogin
//                             : 'web3',
//                         signature,
//                         referralLink: 'B1D3IW4KLSP55UA2',
//                         whiteLabel: config.WHITE_LABEL,
//                         idToken: userInfo.idToken || '',
//                         email: userInfo.email || '',
//                         profileImage: userInfo.profileImage || '',
//                         countryCode: countryCode(),
//                         appPubKey: socialWallet ? await getAppPubKey() : '',
//                     })
//                 })
//             })
//             .catch((error) => {
//                 console.error(
//                     'Error during initial data fetch:',
//                     error.message || 'Unknown error'
//                 )
//                 if (error.response) {
//                     console.error(
//                         'Server responded with an error status:',
//                         error.response.status
//                     )
//                     console.error('Error data:', error.response.data)
//                 } else if (error.request) {
//                     console.error('No response received from the server')
//                 } else {
//                     console.error(
//                         'Error setting up the request:',
//                         error.message
//                     )
//                 }
//             })
//     }

//     useEffect(() => {
//         if (address && connected) verify()
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [address, connected])

//     return (
//         <div style={{ marginTop: 0 }}>
//             {connected ? (
//                 <DisconnectWeb3AuthButton />
//             ) : (
//                 <ConnectWeb3AuthButton />
//             )}

//             <button
//                 onClick={() => {
//                     axios
//                         .get(`${config.BASE_HTTPS_URL}/api/protected`, {
//                             headers: {
//                                 Authorization: `Bearer ${accessToken}`,
//                             },
//                         })
//                         .then((res) => {
//                             if (res.status !== 200 || !res.data.result) return

//                             const { data } = res.data
//                             console.log(data)
//                         })
//                         .catch((error) => {
//                             console.log(error)
//                             console.error(
//                                 'Error during initial data fetch:',
//                                 error.message || 'Unknown error'
//                             )
//                             if (error.response) {
//                                 console.error(
//                                     'Server responded with an error status:',
//                                     error.response.status
//                                 )
//                                 if (error.response.status === 401) logout()
//                                 console.error(
//                                     'Error data:',
//                                     error.response.data
//                                 )
//                             } else if (error.request) {
//                                 console.error(
//                                     'No response received from the server'
//                                 )
//                             } else {
//                                 console.error(
//                                     'Error setting up the request:',
//                                     error.message
//                                 )
//                             }
//                         })
//                 }}
//             >
//                 Test Auth
//             </button>
//             {/* <h1>currentLocalFrameIndex</h1>
//             <h4>Start Price: 121212 USD</h4>
//             <h3>Distributing payouts</h3>

//             <table style={{ width: '100%' }}>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Address</th>
//                         <th>Trade Size</th>
//                         <th>Direction</th>
//                         <th>Txn</th>
//                         <th>Total Size</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {txs.map((tx, idx) => (
//                         <tr key={idx}>
//                             <td>{idx + 1}</td>
//                             <td>{tx?.userWallet}</td>
//                             <td>{tx?.tradeSize}</td>
//                             <td>{tx.direction}</td>
//                             <td>{tx.txHash}</td>
//                             <td>{tx?.totalSize}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div
//                 style={{
//                     flexDirection: 'row-reverse',
//                     marginTop: 10,
//                     padding: 10,
//                     justifyContent: 'space-between',
//                     display: 'flex',
//                 }}
//             >
//                 <button style={{ width: '45%', backgroundColor: 'green' }}>
//                     Up
//                 </button>
//                 <button style={{ width: '45%', backgroundColor: 'red' }}>
//                     Down
//                 </button>
//             </div> */}
//         </div>
//     )
// }

// export default TraderView
