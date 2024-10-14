// App.tsx
import React, { useEffect } from 'react'
import { useWeb3Trade2Earn } from '../../services/trade2earn'
import QRCode from 'qrcode.react'
import { useNavigate } from 'react-router-dom'

const Web3AuthWallet: React.FC = () => {
    const { getNetworks, networks, depositAddress, setNetwork } =
        useWeb3Trade2Earn()

    const navigate = useNavigate()

    useEffect(() => {
        getNetworks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {networks.map((network, idx) => {
                if (network.canDeposit && network.canWithdraw) {
                    return (
                        <button
                            key={idx}
                            onClick={() => setNetwork(network)}
                            className="p-2 lg:p-3 w-[180px] lg:w-[250px] rounded-lg text-base text-white bg-btn-gradient"
                        >
                            {network.chainFullName}
                        </button>
                    )
                }
            })}

            <h4>{depositAddress}</h4>
            {depositAddress && <QRCode value={depositAddress} size={256} />}
            <button
                onClick={() => navigate('/trade')}
                className="mt-20 p-2 lg:p-3 w-[180px] lg:w-[250px] rounded-lg text-base text-white bg-btn-gradient "
            >
                Trade
            </button>
        </>
    )
}

export default Web3AuthWallet
