import { useEffect, useState } from 'react'

import usdtIcon from '../../assets/img/usdt_brand.svg'
import coin from '../../assets/img/coin.png'
import { useWeb3Trade2Earn } from '../../services/trade2earn'
import Header from '../../components/Header'
import bg from '../../assets/img/cover_bg.png'
import { getImageUrl } from '../../utils/utils'

export default function HighRollers() {
    const { isConnectedAndLogin, getHighRollers, highRollers } =
        useWeb3Trade2Earn()

    const [timeLeft, setTimeLeft] = useState(0) // 10 seconds in milliseconds

    useEffect(() => {
        if (highRollers) setTimeLeft(highRollers?.timeLeft)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [highRollers?.timeLeft])

    useEffect(() => {
        if (timeLeft <= 0) return

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000) // Decrease time by 1000ms (1 second)
        }, 1000)

        return () => clearInterval(timerId) // Cleanup the interval on component unmount
    }, [timeLeft])

    useEffect(() => {
        getHighRollers()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnectedAndLogin])

    // Format the time left into hours, minutes, and seconds
    const hours = Math.floor(timeLeft / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    // Function to pad single digit numbers with leading zero
    function padZero(num: number): string {
        return num < 10 ? `0${num}` : `${num}`
    }

    // Format the time into HH:MM:SS
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`

    return (
        <div
            className="trade_page flex flex-col h-screen"
            style={{
                background: `url(${bg}) transparent no-repeat center center / cover`,
                width: '100%',
                // backgroundColor: 'rgba(48, 4, 117, 0.9)',
            }}
        >
            <Header />

            {/* Center */}
            <div className="flex-1 flex px-[2em] sm:px-[5.5em]  flex-col justify-center items-center gap-[0.5em]">
                {/* <div className="font-size font-bold text-[3.6em] sm:text-[2.8em] lg:text-[2em] text-white">
                    Leaderboard
                </div> */}

                <div className="flex-1 flex px-[2em] sm:px-[5.5em]  flex-col justify-center items-center gap-[0.5em]">
                    <div
                        className="font-size font-bold text-[3.6em] sm:text-[2.8em] text-white"
                        style={{
                            backgroundImage:
                                'linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        TOP 10 High Rollers
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-[1em] text-[1em] md:text-[1.3em] sm:text-[1.5em] lg:text-[1.1em] xl:text-[1em]">
                    {isConnectedAndLogin && (
                        <>
                            <div className=" text-white bg-[#692bd6] rounded-lg py-[1em] px-[1em] sm:px-[1em] sm:py-[0.5em] ">
                                <span className="flex items-center gap-1 justify-center sm:text-[1em] text-[2.7em]">
                                    <img src={usdtIcon} className="h-[1.2em]" />
                                    <span>
                                        {highRollers?.tradingVolume.toLocaleString()}
                                    </span>
                                </span>
                                <div className="text-center sm:text-[0.8em] text-[2em] font-light opacity-70">
                                    Your Daily Turnover
                                </div>
                            </div>
                            <div className=" text-white bg-[#692bd6] rounded-lg py-[1em] px-[1em] sm:px-[1em] sm:py-[0.5em] ">
                                <span className="flex items-center gap-1 justify-center sm:text-[1em] text-[2.7em]">
                                    #
                                    {highRollers && highRollers?.position !== -1
                                        ? highRollers?.position + 1
                                        : '_'}
                                </span>
                                <div className="text-center sm:text-[0.8em] text-[2em] font-light opacity-70">
                                    Your place
                                </div>
                            </div>
                        </>
                    )}

                    <div className=" text-white bg-[#692bd6] rounded-lg py-[1em] px-[1em] sm:px-[1em] sm:py-[0.5em] ">
                        <span className="flex items-center gap-1 justify-center sm:text-[1em] text-[2.7em]">
                            {formattedTime}
                        </span>
                        <div className="text-center sm:text-[0.8em] text-[2em] font-light opacity-70">
                            Ending Time
                        </div>
                    </div>
                    {isConnectedAndLogin && (
                        <div className=" text-white bg-[#692bd6] rounded-lg py-[1em] px-[1em] sm:px-[1em] sm:py-[0.5em] ">
                            <span className="flex items-center gap-1 justify-center sm:text-[1em] text-[2.7em]">
                                <img src={coin} className="h-[1.2em]" />
                                <span>
                                    {highRollers &&
                                    highRollers.position > -1 &&
                                    highRollers.position < 10
                                        ? highRollers?.rewards[
                                              highRollers.position
                                          ]
                                        : 0}
                                </span>
                            </span>
                            <div className="text-center sm:text-[0.8em] text-[2em] font-light opacity-70">
                                Your Rewards
                            </div>
                        </div>
                    )}
                </div>

                <span className="text-white text-[2.5em] md:text-[1.3em] sm:text-[1.5em] lg:text-[1.1em] xl:text-[0.75em]">
                    At least 500 daily turnover to join the tournament
                </span>

                <div className="w-full px-0 my-6 rounded-lg overflow-auto border-[#ffffff45] border-spacing-1 border-2 sm:h-[calc(100vh-16.5em)] h-[calc(100vh-38em)]">
                    <table className="w-full shadow-lg text-[2.5em] md:text-[1.3em] sm:text-[1.5em] lg:text-[1.1em] xl:text-[0.75em] border-separate">
                        <thead className="text-white sm:table-header-group ">
                            <tr className=" rounded-lg sm:rounded-t-lg mb-2 sm:mb-0 ">
                                <th className="p-3 text-left">#</th>
                                <th className="p-3 text-left">Player</th>
                                <th className="p-3 text-left">Trades</th>
                                <th className="p-3 text-left">Turnover</th>
                                <th className="p-3 text-left">Prize</th>
                            </tr>
                        </thead>

                        {highRollers && highRollers.highRollers.length > 0 ? (
                            <tbody className="bg-[#43128EAA] ">
                                {highRollers?.highRollers.map((hr, idx) => (
                                    <tr key={idx} className="mb-2 sm:mb-0">
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            {idx + 1}
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                            <span className="mx-[0.5em] flex items-center gap-[0.5em]">
                                                <a
                                                    className="w-[3em] h-[3em] rounded-md border-[0.2em] border-[#0064fb] hidden sm:block relative"
                                                >
                                                    <img
                                                        className=""
                                                        src={hr.Avatar}
                                                    />
                                                    <div className="absolute w-[1em] top-[-0.2em] right-[-0.4em] rounded-[0.2em] overflow-hidden">
                                                        <img
                                                            src={getImageUrl(
                                                                `../assets/img/flag/${hr.CountryCode.toLowerCase()}.svg`
                                                            )}
                                                            className="left"
                                                        />
                                                    </div>
                                                </a>
                                                <span>{hr.Username}</span>
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            {hr.NumberOfTrades}
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-[1.2em] w-[1.2em]"
                                                />
                                                {hr.Turnover}
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={coin}
                                                    className="h-[1.2em] w-[1.2em]"
                                                />
                                                {idx > 9
                                                    ? 0
                                                    : highRollers.rewards[idx]}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody className="text-center">
                                <tr>
                                    <td colSpan={5} className="py-[0.5em]">
                                        <span className="text-white">
                                            No data found.
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}
