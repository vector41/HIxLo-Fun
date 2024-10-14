import { useEffect, useState } from 'react'
import GenerateLink from '../../components/GenerateLink'
import { useWeb3Trade2Earn } from '../../services/trade2earn'
import usdtIcon from '../../assets/img/usdt_green.svg'
import { HiClipboardCopy } from 'react-icons/hi'
import Header from '../../components/Header'
import bg from '../../assets/img/cover_bg.png'
import { copyToClipboard } from '../../utils/utils'

export default function Affiliate() {
    const {
        getReferralLinks,
        isConnectedAndLogin,
        affiliates,
        setShowWalletModal,
    } = useWeb3Trade2Earn()
    const [showGenerateLinkModal, setShowGenerateLinkModal] = useState(false)

    useEffect(() => {
        getReferralLinks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnectedAndLogin])

    const [selectedOption, setSelectedOption] = useState<string>('Today')

    // Event handler for when the select value changes
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value)
    }


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
                    AFFILIATE PROGRAM
                </div>

                <div className="flex items-center justify-center w-full text-[2em] sm:text-[1em] h-[4em] py-[0.5em]">
                    <button
                        onClick={() => {
                            if (isConnectedAndLogin)
                                setShowGenerateLinkModal(true)
                            else setShowWalletModal(true)
                        }}
                        className="rounded-[0.5em] px-4 cursor-pointer bg-btn-gradient text-white text-[1em] h-full font-semibold hover:opacity-80"
                    >
                        Generate Link
                    </button>
                    <div className="flex-1"></div>
                    <select
                        className="bg-inherit text-white text-[1em] rounded-[0.5em] border border-sky-500 h-full py-0"
                        value={selectedOption}
                        onChange={handleChange}
                    >
                        <option className="text-black">Today</option>
                        <option className="text-black">All</option>
                    </select>
                </div>

                <div className="w-full px-0 rounded-lg overflow-auto border-[#ffffff45] border-spacing-1 border-2 sm:h-[calc(100vh-16em)] h-[calc(100vh-26em)]">
                    <table className="w-full shadow-lg text-[2.5em] sm:text-[0.8em] border-separate">
                        <thead className="text-white sm:table-header-group ">
                            <tr className=" rounded-lg sm:rounded-t-lg mb-2 sm:mb-0 ">
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Link</th>
                                <th className="p-3 text-left">Tier1(15%)</th>
                                <th className="p-3 text-left">Tier2(7%)</th>
                                <th className="p-3 text-left">Tier3(3%)</th>
                                <th className="p-3 text-left pr-[3em]">
                                    Total
                                </th>
                            </tr>
                        </thead>

                        {affiliates && (
                            <tbody className="bg-[#43128EAA] ">
                                {affiliates.map((aff, idx) => (
                                    <tr key={idx} className="mb-2 sm:mb-0">
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            {aff.Name}
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex justify-between items-center">
                                                <span>{`${window.location.origin}?ref=${aff.ReferralId}`}</span>
                                                <HiClipboardCopy
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `${window.location.origin}?ref=${aff.ReferralId}`
                                                        )
                                                    }
                                                    className="h-[4em] w-[4em] sm:h-[2em] sm:w-[2em] p-2 rounded-full text-gray hover:text-green-500 cursor-pointer"
                                                />
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {selectedOption === 'Today'
                                                    ? aff.Tier1Unclaimed
                                                    : aff.Tier1Paid}
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {selectedOption === 'Today'
                                                    ? aff.Tier2Unclaimed
                                                    : aff.Tier2Paid}
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {selectedOption === 'Today'
                                                    ? aff.Tier3Unclaimed
                                                    : aff.Tier3Paid}
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {selectedOption === 'Today'
                                                    ? aff.Tier1Unclaimed +
                                                      aff.Tier2Unclaimed +
                                                      aff.Tier3Unclaimed
                                                    : aff.Tier1Paid +
                                                      aff.Tier2Paid +
                                                      aff.Tier3Paid}
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                                {affiliates && affiliates.length > 0 && (
                                    <tr className="mb-2 sm:mb-0">
                                        <td
                                            colSpan={2}
                                            className="text-center text-white font-semibold"
                                        >
                                            Summary
                                        </td>

                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {affiliates.reduce(
                                                    (acc, item) =>
                                                        acc +
                                                        (selectedOption ===
                                                        'Today'
                                                            ? item.Tier1Unclaimed
                                                            : item.Tier1Paid),
                                                    0
                                                )}
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {affiliates.reduce(
                                                    (acc, item) =>
                                                        acc +
                                                        (selectedOption ===
                                                        'Today'
                                                            ? item.Tier2Unclaimed
                                                            : item.Tier2Paid),
                                                    0
                                                )}
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {affiliates.reduce(
                                                    (acc, item) =>
                                                        acc +
                                                        (selectedOption ===
                                                        'Today'
                                                            ? item.Tier3Unclaimed
                                                            : item.Tier3Paid),
                                                    0
                                                )}
                                            </span>
                                        </td>
                                        <td className="border border-transparent border-t-2 text-white p-3">
                                            <span className="flex gap-1 items-center">
                                                <img
                                                    src={usdtIcon}
                                                    className="h-5"
                                                />
                                                {affiliates.reduce(
                                                    (acc, item) =>
                                                        acc +
                                                        (selectedOption ===
                                                        'Today'
                                                            ? item.Tier1Unclaimed +
                                                              item.Tier2Unclaimed +
                                                              item.Tier3Unclaimed
                                                            : item.Tier1Paid +
                                                              item.Tier2Paid +
                                                              item.Tier3Paid),
                                                    0
                                                )}
                                            </span>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        )}

                        {affiliates?.length === 0 && isConnectedAndLogin && (
                            <tbody className="text-center">
                                <tr>
                                    <td colSpan={7} className="py-[0.5em]">
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

            <GenerateLink
                setShowModal={setShowGenerateLinkModal}
                showModal={showGenerateLinkModal}
            />
        </div>
    )
}
