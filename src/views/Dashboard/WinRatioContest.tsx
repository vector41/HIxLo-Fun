import { useEffect, useState } from 'react'
import coin from '../../assets/img/coin.png'
import { useWeb3Trade2Earn } from '../../services/trade2earn'
import Header from '../../components/Header'
import bg from '../../assets/img/cover_bg.png'
import { getImageUrl } from '../../utils/utils'

export default function WinRatioContest() {
    const {
        isConnectedAndLogin,
        getWinRatioPlayers,
        winRatioPlayers,
    } = useWeb3Trade2Earn()

    const [timeLeft, setTimeLeft] = useState(0) // 10 seconds in milliseconds

    useEffect(() => {
        if (winRatioPlayers) setTimeLeft(winRatioPlayers?.timeLeft)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [winRatioPlayers?.timeLeft])

    useEffect(() => {
        if (timeLeft <= 0) return

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000) // Decrease time by 1000ms (1 second)
        }, 1000)

        return () => clearInterval(timerId) // Cleanup the interval on component unmount
    }, [timeLeft])

    useEffect(() => {
        getWinRatioPlayers()

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

            <div className="flex-1 flex px-[2em] sm:px-[5.5em] flex-col justify-center items-center gap-[0.5em]">
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
                    TOP 10 Win Ratio
                </div>
                <div className="flex flex-row justify-center gap-[1em] ">
                    {isConnectedAndLogin && winRatioPlayers && (
                        <>
                            <div className=" text-white bg-[#692bd6] rounded-lg py-[1em] px-[1em] sm:px-[1em] sm:py-[0.5em] ">
                                <span className="flex items-center gap-1 justify-center sm:text-[1em] text-[2.7em]">
                                    #
                                    {winRatioPlayers?.position > -1
                                        ? winRatioPlayers.position + 1
                                        : '_'}
                                </span>
                                <div className="text-center sm:text-[0.8em] text-[2em] font-light opacity-70">
                                    Your place
                                </div>
                            </div>
                            {winRatioPlayers?.detail ? (
                                <div className=" text-white bg-[#692bd6] rounded-lg py-[1em] px-[1em] sm:px-[1em] sm:py-[0.5em] ">
                                    <span className="flex items-center gap-1 justify-center sm:text-[1em] text-[2.7em]">
                                        {/* <img src={usdtIcon} className="h-[1.2em]" /> */}
                                        <span>
                                            {(
                                                winRatioPlayers?.detail
                                                    ?.WinRatio * 100
                                            ).toFixed(2)}
                                            %(
                                            {
                                                winRatioPlayers?.detail
                                                    ?.NumberOfWins
                                            }
                                            /
                                            {
                                                winRatioPlayers?.detail
                                                    ?.NumberOfTrades
                                            }
                                            )
                                        </span>
                                    </span>
                                    <div className="text-center sm:text-[0.8em] text-[2em] font-light opacity-70">
                                        Your Win Ratio
                                    </div>
                                </div>
                            ) : (
                                <div className=" text-white bg-[#692bd6] rounded-lg py-[1em] px-[1em] sm:px-[1em] sm:py-[0.5em] ">
                                    <span className="flex items-center gap-1 justify-center sm:text-[1em] text-[2.7em]">
                                        {/* <img src={usdtIcon} className="h-[1.2em]" /> */}
                                        <span>0%(0/0)</span>
                                    </span>
                                    <div className="text-center sm:text-[0.8em] text-[2em] font-light opacity-70">
                                        Your Win Ratio
                                    </div>
                                </div>
                            )}
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
                                    {winRatioPlayers &&
                                    winRatioPlayers.position > -1 &&
                                    winRatioPlayers.position < 10
                                        ? winRatioPlayers?.rewards[
                                              winRatioPlayers.position
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
                    At least 50 daily trades to join the tournament
                </span>
                <div className="w-full px-0 my-6 rounded-lg overflow-auto border-[#ffffff45] border-spacing-1 border-2 sm:h-[calc(100vh-16.5em)] h-[calc(100vh-38em)]">
                    <table className="w-[100%] text-[2.5em] md:text-[1.3em] sm:text-[1.5em] lg:text-[1.1em] xl:text-[0.75em]">
                        <thead className="text-white sm:table-header-group">
                            <tr className=" rounded-lg sm:rounded-t-lg font-light">
                                <th className="py-[1em] text-left font-medium p-3">
                                    #
                                </th>
                                <th className="py-[1em] text-left font-medium">
                                    Username
                                </th>
                                <th className="py-[1em] text-left font-medium">
                                    Trades
                                </th>
                                <th className="py-[1em] text-left font-medium">
                                    Wins
                                </th>
                                <th className="py-[1em] text-left font-medium">
                                    Win Ratio
                                </th>
                                <th className="py-[1em] text-left font-medium">
                                    Prize
                                </th>
                            </tr>
                        </thead>
                        {winRatioPlayers &&
                        winRatioPlayers.winRatioPlayers.length > 0 ? (
                            <tbody className="overflow-y-auto">
                                {winRatioPlayers.winRatioPlayers.map(
                                    (_, idx) => (
                                        <tr
                                            key={idx}
                                            className="bg-[#2A0A61] border-b-[4px] border-[#470BB0]"
                                        >
                                            <td className="border border-transparent border-t-2 text-white py-[0.5em] p-3">
                                                {idx + 1}
                                            </td>
                                            <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                <span className="flex items-center gap-[0.5em]">
                                                    <a
                                                        className="w-[3em] h-[3em] rounded-md border-[0.2em] border-[#0064fb] hidden sm:block relative"
                                                    >
                                                        <img
                                                            className=""
                                                            src={
                                                                _.Avatar
                                                            }
                                                        />
                                                        <div className="absolute w-[1em] top-[-0.2em] right-[-0.4em] rounded-[0.2em] overflow-hidden">
                                                            <img
                                                                src={getImageUrl(
                                                                    `../assets/img/flag/${_.CountryCode.toLowerCase()}.svg`
                                                                )}
                                                                className="left"
                                                            />
                                                        </div>
                                                    </a>
                                                    <span>{'Azuki2322'}</span>
                                                </span>
                                            </td>
                                            <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                {_.NumberOfTrades}
                                            </td>
                                            <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                {_.NumberOfWins}
                                            </td>
                                            <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                {(_.WinRatio * 100).toFixed(2)}%
                                            </td>
                                            <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                <span className="flex gap-[0.5em] items-center">
                                                    <img
                                                        src={coin}
                                                        className="h-[1.5em]"
                                                    />
                                                    {idx > 9
                                                    ? 0
                                                    : winRatioPlayers.rewards[idx]}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        ) : (
                            <tbody className="text-center">
                                <tr>
                                    <td colSpan={6} className="py-[0.5em]">
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
