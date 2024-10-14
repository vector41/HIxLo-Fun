// import balanceBox from '../../assets/img/balance_box.png'
// import menu from '../../assets/img/menu.png'
// import navResult from '../../assets/img/nav_result.png'
// import flag from '../../assets/img/flag.png'

// export default function Leaderboard() {
//     return (
//         <div
//             style={{
//                 backgroundColor: 'rgba(48, 4, 117, 0.9)',
//                 minHeight: '100vh',
//             }}
//         >
//             {/* Nav */}
//             <div
//                 className="bg-[#25055D] flex items-center justify-between w-full text-white h-[4.8em] px-[0.75em]"
//                 style={{ boxShadow: '0px 7px 20px 0px #0000004D' }}
//             >
//                 <div className="cursor-pointer">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="1.5"
//                         stroke="currentColor"
//                         style={{
//                             width: '3em',
//                             height: '3em',
//                         }}
//                     >
//                         <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
//                         />
//                     </svg>
//                 </div>
//                 <div
//                     className="rounded-[0.5em] px-[1.25em] py-[0.5em] cursor-pointer hidden sm:block"
//                     style={{
//                         background:
//                             'linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)',
//                     }}
//                 >
//                     generate link
//                 </div>
//                 <div
//                     className="w-[26em] h-[5em] "
//                     style={{
//                         backgroundImage: `url(${balanceBox})`,
//                         backgroundRepeat: 'no-repeat', // Optional: Adjust as needed
//                         backgroundSize: '101% 101%',
//                         backgroundPosition: '-0.1em -0.2em',
//                     }}
//                 >
//                     <label className="flex justify-center opacity-70">
//                         USDT BALANCE
//                     </label>
//                     <div className="flex justify-center align-middle mt-[-0.5em]">
//                         <img
//                             src={navResult}
//                             alt=""
//                             className="w-[1.5em] h-[1.5em] mr-1 self-center"
//                         />
//                         <span className="text-[2.6em]">0.00</span>
//                     </div>
//                 </div>
//                 <div
//                     className="rounded-lg px-5 py-2 opacity-0 hidden sm:block"
//                     style={{
//                         background:
//                             'linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)',
//                     }}
//                 >
//                     generate link
//                 </div>
//                 <button
//                     className="border-none bg-[#0000]"
//                     style={{
//                         fontSize: 'inherit',
//                     }}
//                 >
//                     <img src={menu} className="w-[3em] h-[3em]" alt="" />
//                 </button>
//             </div>
//             {/* Center */}
//             <div className="flex p-[1em] py-[1.75em]">
//                 <div
//                     className="mr-auto font-size font-bold"
//                     style={{
//                         backgroundImage:
//                             'linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)',
//                         WebkitBackgroundClip: 'text',
//                         backgroundClip: 'text',
//                         color: 'transparent',
//                         fontSize: '2em',
//                     }}
//                 >
//                     LEADERBOARD
//                 </div>
//                 <div className="ml-auto self-center">
//                     <select className="bg-inherit text-white rounded-lg border border-sky-500 w-[7em] py-[0.5em]">
//                         <option>Today</option>
//                     </select>
//                 </div>
//             </div>
//             {/* Table */}
//             <table
//                 className="w-full text-white table-auto"
//                 style={{
//                     borderSpacing: '0 10px',
//                     borderCollapse: 'separate',
//                 }}
//             >
//                 <thead className="bg-[#ffffff1a] h-[3.5em] sm:h-[2em] text-[2.7em] sm:text-[2.2em] xl:text-[1.5em]">
//                     <tr style={{ fontWeight: '200' }}>
//                         <th>#</th>
//                         <th>PLAYERS</th>
//                         <th>
//                             <span className="flex items-center justify-center">
//                                 TRADES
//                                 <svg
//                                     className="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         fill-rule="evenodd"
//                                         d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
//                                         clip-rule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                         </th>
//                         <th>
//                             <span className="flex items-center justify-center">
//                                 TRADE WINDS
//                                 <svg
//                                     className="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         fill-rule="evenodd"
//                                         d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
//                                         clip-rule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                         </th>
//                         <th>
//                             <span className="flex items-center justify-center">
//                                 WIN RATIO
//                                 <svg
//                                     className="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         fill-rule="evenodd"
//                                         d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
//                                         clip-rule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                         </th>
//                         <th>
//                             <span className="flex items-center justify-center">
//                                 NET PROFIT
//                                 <svg
//                                     className="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         fill-rule="evenodd"
//                                         d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
//                                         clip-rule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="bg-[#ffffff1a] h-14 mt-2 text-center self-center text-[2.5em] sm:text-[2em] xl:text-[1.3em]">
//                         <td>
//                             <span>1</span>
//                         </td>
//                         <td>
//                             <span className="bg-green-500 text-black rounded-full p-3 text-[0.5em] leading-[1em] relative mr-8">
//                                 CK
//                                 <img
//                                     src={flag}
//                                     className="absolute w-[1em] h-[1em] top-0 left-[1.95em]"
//                                     alt={flag}
//                                 />
//                             </span>
//                             <span>0x42bdfesdrefd1</span>
//                         </td>
//                         <td>98</td>
//                         <td>92 </td>
//                         <td>58%</td>
//                         <td>127.65%</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }
