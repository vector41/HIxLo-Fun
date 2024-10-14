import TradeBtn from '../../components/TradeBtn'
import StarBg from '../../assets/icon/star_bg.png'
import usdtIcon from '../../assets/img/usdt_brand.svg'
import { useWeb3Trade2Earn } from '../../services/trade2earn'
import { getImageUrl } from '../../utils/utils'
import { useEffect, useState } from 'react'

function TopWinnersSection() {
    const { top100Winners, getTop100Winners } = useWeb3Trade2Earn()

    const [selectedOption, setSelectedOption] = useState<string>('Today')

    useEffect(() => {
        getTop100Winners(selectedOption)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption])

    return (
        <section
            className="pt-[4em]"
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            <div className="container mx-auto px-5 md:px-20">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-white text-[4em] sm:text-[3.2em] md:text-[2.4em] lg:text-[2em]">
                        Top 100 Winners
                    </h2>
                    <select
                        onChange={(e) => setSelectedOption(e.target.value)}
                        value={selectedOption}
                        className="bg-[#101841] border rounded-lg text-white"
                    >
                        <option value="Today">Today</option>
                        <option value="ThisWeek">This Week</option>
                        <option value="ThisMonth">This Month</option>
                        <option value="AllTime">All Time</option>
                    </select>
                </div>

                {/* table */}
                <div className="w-full px-0 my-6 rounded-lg overflow-auto border-[#ffffff45] border-spacing-1 border-2 sm:h-[calc(100vh-16.5em)] h-[calc(100vh-38em)]">
                    <table className="w-full bg-[#102451] shadow-lg text-[2.5em] sm:text-[0.8em]">
                        <thead className="text-white sm:table-header-group ">
                            <tr className=" rounded-lg sm:rounded-t-lg mb-2 sm:mb-0  sm:text-[1.2em] text-[0.8em] border-b border-slate-400">
                                <th className="p-3 text-left">#</th>
                                <th className="p-3 text-left">Player</th>
                                <th className="p-3 text-left">Trades</th>
                                <th className="p-3 text-left">Trade wins</th>
                                <th className="p-3 text-left">Win ratio</th>
                                <th className="p-3 text-left">Net Profit</th>
                            </tr>
                        </thead>

                        {top100Winners && (
                            <tbody>
                                {top100Winners?.map((value, idx) => (
                                    <tr className="mb-2 sm:mb-0 border-b border-slate-700">
                                        <td
                                            key={idx}
                                            className="border-b border-slate-700 text-white p-3"
                                        >
                                            {idx + 1}
                                        </td>
                                        <td className="border-b border-slate-700 text-white p-3">
                                            <div className="flex gap-5 sm:text-[1.2em] text-[0.8em] items-center">
                                                <div className="relative hidden md:flex flex-col w-[20%] py-[0.9vh] new animate-jump-in animate-once flex-start">
                                                    <img
                                                        src={value.Avatar}
                                                        className="w-[2.5em] h-[2.5em] rounded-[15%]"
                                                        style={{
                                                            boxShadow:
                                                                '0 0 0 0.20em #12A2F9',
                                                        }}
                                                    />
                                                    <div className="absolute top-[0.2em] right-[0.1em] w-[0.9em] h-[0.9em] rounded-[30%]">
                                                        <img
                                                            src={getImageUrl(
                                                                `../assets/img/flag/${value.CountryCode?.toLowerCase()}.svg`
                                                            )}
                                                            className="w-full h-full rounded-[20%]"
                                                            style={{
                                                                boxShadow:
                                                                    '0 0 0 0.09em #1AC1F8',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <span>{value.Username}</span>
                                            </div>
                                        </td>
                                        <td className="border-b border-slate-700 sm:text-[1.2em] text-[0.8em]  text-white p-3">
                                            {value.NumberOfTrades}
                                        </td>
                                        <td className="border-b border-slate-700 sm:text-[1.2em] text-[0.8em]  text-white p-3">
                                            {value.NumberOfWins}
                                        </td>
                                        <td className="border-b border-slate-700 sm:text-[1.2em] text-[0.8em]  text-white p-3">
                                            {(
                                                (value.NumberOfWins /
                                                    value.NumberOfTrades) *
                                                100
                                            ).toFixed(1)}{' '}
                                            %
                                        </td>
                                        <td className="border-b border-slate-700 sm:text-[1.2em] text-[0.8em]  text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-[1em]"
                                                />
                                                {value.NetProfit.toFixed(2)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>

                <TradeBtn></TradeBtn>
            </div>
            <div className="line_break_gradient mt-[4em]"></div>
        </section>
    )
}

export default TopWinnersSection
