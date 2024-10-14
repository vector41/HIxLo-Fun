import { useState } from 'react'
import balanceBox from '../../assets/img/balance_box.png'
import menu from '../../assets/img/menu.png'
import navResult from '../../assets/img/nav_result.png'
import GenerateLink from '../../components/GenerateLink'
import { useNavigate } from 'react-router-dom'
// import './temp/affiliate.css'
import usdtIcon from '../../assets/img/usdt_green.svg'
import { Pagination } from 'flowbite-react'

export default function TradeHistory() {
    const [showGenerateLinkModal, setShowGenerateLinkModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const onPageChange = (page: number) => setCurrentPage(page)

    const navigate = useNavigate()

    return (
        <div
            style={{
                backgroundColor: 'rgba(48, 4, 117, 0.9)',
                minHeight: '100vh',
            }}
        >
            {/* Nav */}
            <div className="">
                <div
                    className="bg-[#25055D] flex items-center justify-between w-full text-white h-[8.8em] sm:h-[4.8em] px-[1em] relative"
                    style={{ boxShadow: '0px 7px 20px 0px #0000004D' }}
                >
                    <div
                        className="cursor-pointer"
                        onClick={() => navigate('/trade')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-[7em] h-[8em] sm:w-[3em] sm:h-[3em]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </div>
                    <button
                        onClick={() => setShowGenerateLinkModal(true)}
                        className="rounded-[0.5em] px-[1.5em] py-[0.4em] cursor-pointer hidden sm:block lg:mr-[17em] sm:mr-[24em]"
                        style={{
                            background:
                                'linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)',
                        }}
                    >
                        Generate Link
                    </button>
                    <div className="hidden lg:flex ml-[17em]">
                        <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col justify-center items-center mx-[0.12em] cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-[0.8em] h-[0.8em]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                                />
                            </svg>
                            <span className="text-[0.5em] text-center">
                                FAQ
                            </span>
                        </div>
                        <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col items-center mx-[0.12em] cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-[0.8em] h-[0.8em]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                />
                            </svg>

                            <span className="text-[0.5em] text-center">
                                Link Manager
                            </span>
                        </div>
                        <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col items-center mx-[0.12em] cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-[0.8em] h-[0.8em]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                />
                            </svg>

                            <span className="text-[0.5em] text-center">
                                Earning Report
                            </span>
                        </div>
                        <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col justify-center items-center mx-[0.12em] cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-[0.8em] h-[0.8em]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                                />
                            </svg>

                            <span className="text-[0.5em] text-center">
                                Dashboard
                            </span>
                        </div>
                    </div>
                    <div
                        className="rounded-lg px-8 py-2 opacity-0  lg:hidden xl:hidden 2xl:hidden"
                        style={{
                            background:
                                'linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)',
                        }}
                    >
                        generate link
                    </div>
                    <div
                        className="border-none bg-[#0000]"
                        style={{
                            fontSize: 'inherit',
                        }}
                    >
                        <img
                            src={menu}
                            className="w-[5em] h-[5em] sm:w-[3em] sm:h-[3em]"
                            alt=""
                        />
                    </div>
                    <div
                        className="w-[38em] h-[8.5em] sm:w-[26em] sm:h-[5em]  absolute left-[50%]"
                        style={{
                            backgroundImage: `url(${balanceBox})`,
                            backgroundRepeat: 'no-repeat', // Optional: Adjust as needed
                            backgroundSize: '101% 101%',
                            backgroundPosition: '-0.1em -0.2em',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <label className="justify-center opacity-70 hidden sm:flex">
                            USDT BALANCE
                        </label>
                        <div className="flex justify-center align-middle mt-[-0.5em]">
                            <img
                                src={navResult}
                                alt=""
                                className="w-[2.5em] h-[2.5em] sm:w-[1.5em] sm:h-[1.5em] mr-[0.2em] self-center"
                            />
                            <span className="text-[6em] sm:text-[2.6em]">
                                0.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Center */}
            <div className="flex p-[0.5em] py-[3.5em] sm:p-[0.5em] sm:py-[1.5em] flex-col justify-center items-center gap-2">
                <div className="font-size font-bold text-[3.6em] sm:text-[2.8em] lg:text-[2em] text-white">
                    Trade History
                </div>

                <div className="w-full px-0 sm:px-6 overflow-auto">
                    <table className="w-full rounded-lg sm:shadow-lg my-5 text-[3em] sm:text-[1em]">
                        <thead className="text-white sm:table-header-group ">
                            <tr className="bg-teal-800 rounded-lg sm:rounded-t-lg mb-2 sm:mb-0">
                                <th className="p-3 text-left">No</th>
                                <th className="p-3 text-left">Date</th>
                                <th className="p-3 text-left">Pool</th>
                                <th className="p-3 text-left">Investment</th>
                                <th className="p-3 text-left">Profit(USDT)</th>
                                <th className="p-3 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            <tr className="mb-2 sm:mb-0">
                                <td className="border border-white hover:bg-gray-100 p-3">
                                    1
                                </td>
                                <td className="border border-white hover:bg-gray-100 p-3">
                                    04/06/24 00:00:00
                                </td>
                                <td className="border border-white hover:bg-gray-100 p-3">
                                    30:15
                                </td>
                                <td className="border border-white hover:bg-gray-100 p-3">
                                    <span className="flex items-center gap-1">
                                        <img src={usdtIcon} className="h-5" />
                                        <span>100.00</span>
                                        <div className="flex-1"></div>
                                        <img
                                            src="https://upvsdown.com/media/images/down_triangle.svg"
                                            className="h-4"
                                        />
                                    </span>
                                </td>
                                <td className="border border-white hover:bg-gray-100 p-3">
                                    <span className="flex gap-1 items-center">
                                        <img src={usdtIcon} className="h-5" />
                                        12.32
                                    </span>
                                </td>
                                <td className="border border-white hover:bg-gray-100 p-3">
                                    WIN
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination
                        layout="navigation"
                        currentPage={currentPage}
                        totalPages={100}
                        onPageChange={onPageChange}
                        className="sm:text-[0.8em] text-[3em]"
                    />
                </div>
            </div>

            <GenerateLink
                setShowModal={setShowGenerateLinkModal}
                showModal={showGenerateLinkModal}
            />
        </div>
    )
}
