import React from 'react'
import TradingPage from './views/TradingPage'
import Homepage from './views/Homepage'
// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Web3AuthWallet from './views/Web3AuthWallet'
import HighRollers from './views/Dashboard/HighRollers'
import Affiliate from './views/Dashboard/Affiliate'
import TradeHistory from './views/Dashboard/TradeHistory'
import TransactionHistory from './views/Dashboard/TransactionHistory'
import Leaderboard from './views/Dashboard/Leaderboard'
import { useWeb3Trade2Earn } from './services/trade2earn'
import Loader from './components/Loader'
import FutureChallenge from './views/FutureChallenge'
import WinRatioContest from './views/Dashboard/WinRatioContest'

function Routers() {
    const { loading } = useWeb3Trade2Earn()
    return (
        <React.Fragment>
            <BrowserRouter>
                {loading && <Loader />}
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>} />
                    <Route
                        path="/trade"
                        element={<TradingPage></TradingPage>}
                    />
                    <Route
                        path="/wallet"
                        element={<Web3AuthWallet></Web3AuthWallet>}
                    />
                    <Route
                        path="/affiliate"
                        // element={isConnectedAndLogin ? <Affiliate /> : <Navigate to="/trade" />}
                        element={<Affiliate />}
                    />
                    <Route path="/high-rollers" element={<HighRollers />} />
                    <Route path="/win-ratio" element={<WinRatioContest />} />
                    <Route path="/history" element={<TradeHistory />} />
                    <Route
                        path="/transaction"
                        element={<TransactionHistory />}
                    />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route
                        path="/future-challenge"
                        element={<FutureChallenge />}
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Routers
