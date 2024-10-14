import React from 'react'
import balanceBox from '../assets/img/balance_box.png'
import menu from '../assets/img/menu.png'
import navResult from '../assets/img/nav_result.png'
import flag from '../assets/img/flag.png'

export default function Num_2() {
    return (
        <div
            style={{
                backgroundColor: 'rgba(48, 4, 117, 0.9)',
                minHeight: '100vh',
            }}
        >
            {/* Nav */}
            <div
                className="bg-[#25055D] flex items-center justify-between w-full text-white h-[4.8em] px-3 relative"
                style={{ boxShadow: '0px 7px 20px 0px #0000004D' }}
            >
                <div className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        style={{
                            width: '3em',
                            height: '3em',
                        }}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                </div>
                <div
                    className="rounded-lg px-8 py-2 cursor-pointer hidden sm:block lg:mr-[17em] sm:mr-[24em]"
                    style={{
                        background:
                            'linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)',
                    }}
                >
                    generate link
                </div>
                <div className="hidden lg:flex ml-[17em]">
                    <div className="border border-purple-500 px-7 w-[3.8em]  rounded-md flex flex-col justify-center items-center mx-1 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                            />
                        </svg>
                        <span className="text-[0.6rem] text-center">FAQ</span>
                    </div>
                    <div className="border border-purple-500 px-7 w-[3.8em]  rounded-md flex flex-col items-center mx-1 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                            />
                        </svg>

                        <span className="text-[0.6rem] text-center">
                            Link Manager
                        </span>
                    </div>
                    <div className="border border-purple-500 px-7 w-[3.8em]  rounded-md flex flex-col items-center mx-1 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                            />
                        </svg>

                        <span className="text-[0.6rem] text-center">
                            Earning Report
                        </span>
                    </div>
                    <div className="border border-purple-500 px-7 w-[3.8em]  rounded-md flex flex-col justify-center items-center mx-1 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                            />
                        </svg>

                        <span className="text-[0.6rem] text-center">
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
                <button
                    className="border-none bg-[#0000]"
                    style={{
                        fontSize: 'inherit',
                    }}
                >
                    <img src={menu} className="w-[3em] h-[3em]" alt="" />
                </button>
                <div
                    className="w-[26em] h-[5em] absolute left-[50%]"
                    style={{
                        backgroundImage: `url(${balanceBox})`,
                        backgroundRepeat: 'no-repeat', // Optional: Adjust as needed
                        backgroundSize: '101% 101%',
                        backgroundPosition: '-0.1em -0.2em',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <label className="flex justify-center opacity-70">
                        USDT BALANCE
                    </label>
                    <div className="flex justify-center align-middle mt-[-0.5em]">
                        <img
                            src={navResult}
                            alt=""
                            className="w-[1.5em] h-[1.5em] mr-1 self-center"
                        />
                        <span className="text-[2.6em]">0.00</span>
                    </div>
                </div>
            </div>
            {/* Center */}
            <div className="flex p-4 py-7 justify-center">
                <div
                    className="font-size font-bold "
                    style={{
                        backgroundImage:
                            'linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)',
                        webkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '2em',
                    }}
                >
                    REFERRAL PROGRAM LINK MANAGER
                </div>
            </div>
            {/* Table */}
            <table
                className="w-full text-white table-auto"
                style={{
                    borderSpacing: '0 10px',
                    borderCollapse: 'separate',
                }}
            >
                <thead className="bg-[#ffffff1a] h-14 text-[3.428vw] sm:text-[1.3em] px-2">
                    <tr>
                        <th style={{ fontWeight: '100' }}>DATE CREATED</th>
                        <th style={{ fontWeight: '100' }}>NAME</th>
                        <th style={{ fontWeight: '100' }}>LINK</th>
                        <th style={{ fontWeight: '100', width: '10%' }}>
                            FRIENDS REGISTERED
                        </th>
                        <th style={{ fontWeight: '100' }}>EARN TODAY</th>
                        <th style={{ fontWeight: '100', width: '10%' }}>
                            EARNINGS TOTAL
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="px-2">
                    <tr className="bg-[#ffffff1a] h-14 mt-2 text-center self-center text-[3em] sm:text-[1.8em] xl:text-[1em] my-1">
                        <td>
                            <span>12/2/24</span>
                        </td>
                        <td>
                            <span className="bg-green-500 text-black rounded-full p-2.5 text-xs relative mr-8">
                                CK
                                <img
                                    src={flag}
                                    className="absolute w-[1em] h-[1em] top-0 left-7"
                                    alt={flag}
                                />
                            </span>
                            <span>0x42bdfesdrefd1</span>
                        </td>
                        <td>
                            <span className="flex items-center justify-center">
                                https://upvsdown.com?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-5 h-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                                    />
                                </svg>
                            </span>
                        </td>
                        <td>3 </td>
                        <td>
                            <span className="flex items-center justify-center text-[0.9em]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-5 h-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                    />
                                </svg>
                                6969.46
                            </span>
                        </td>
                        <td>
                            <span className="flex items-center justify-center text-[0.9em]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-5 h-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                    />
                                </svg>
                                6969.46
                            </span>
                        </td>
                        <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* Bottom */}
            <div className="py-14 px-8 flex items-center justify-around">
                <div className="w-[16em] h-[13em] bg-[#692bd6] text-white rounded-lg p-3">
                    <div className="flex justify-center my-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            d=""
                            class="w-[3.50em] h-[3.5em]"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                        </svg>
                    </div>
                    <p className="text-center" style={{ fontSize: '1em' }}>
                        Friends per hour 01%
                    </p>

                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="text-green-500 text-[2em]">
                                <span className="flex mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5 self-center mr-1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                    0.000
                                </span>
                            </div>
                            <p className="p-1 ml-4 text-[1em] opacity-50">
                                Today
                            </p>
                        </div>
                        <div className="h-[2em] opacity-40 self-center border"></div>
                        <div className="flex flex-col">
                            <div className="text-green-500 text-[2em]">
                                <span className="flex ml-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5 self-center mr-1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                    0.000
                                </span>
                            </div>
                            <p className="ml-4 text-[1em] opacity-50">
                                Today(Paid)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[16em] h-[13em] bg-[#692bd6] text-white rounded-lg p-3">
                    <div className="flex justify-center my-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            d=""
                            class="w-[3.50em] h-[3.5em]"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                        </svg>
                    </div>
                    <p className="text-center" style={{ fontSize: '1em' }}>
                        Friends per hour 01%
                    </p>

                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="text-green-500 text-[2em]">
                                <span className="flex mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5 self-center mr-1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                    0.000
                                </span>
                            </div>
                            <p className="p-1 ml-4 text-[1em] opacity-50">
                                Today
                            </p>
                        </div>
                        <div className="h-[2em] opacity-40 self-center border"></div>
                        <div className="flex flex-col">
                            <div className="text-green-500 text-[2em]">
                                <span className="flex ml-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5 self-center mr-1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                    0.000
                                </span>
                            </div>
                            <p className="ml-4 text-[1em] opacity-50">
                                Today(Paid)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[16em] h-[13em] bg-[#692bd6] text-white rounded-lg p-3">
                    <div className="flex justify-center my-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            d=""
                            class="w-[3.50em] h-[3.5em]"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                        </svg>
                    </div>
                    <p className="text-center" style={{ fontSize: '1em' }}>
                        Friends per hour 01%
                    </p>

                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="text-green-500 text-[2em]">
                                <span className="flex mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5 self-center mr-1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                    0.000
                                </span>
                            </div>
                            <p className="p-1 ml-4 text-[1em] opacity-50">
                                Today
                            </p>
                        </div>
                        <div className="h-[2em] opacity-40 self-center border"></div>
                        <div className="flex flex-col">
                            <div className="text-green-500 text-[2em]">
                                <span className="flex ml-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5 self-center mr-1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                    0.000
                                </span>
                            </div>
                            <p className="ml-4 text-[1em] opacity-50">
                                Today(Paid)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
