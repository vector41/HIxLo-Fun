import { useEffect, useRef, useState } from 'react'
import { CgCloseO } from 'react-icons/cg'
import { useWeb3Trade2Earn } from '../services/trade2earn'
import { Networks } from '../views/Web3AuthWallet'
import usdtIcon from '../assets/icon/usdt_icon.png'
import QRCode from 'qrcode.react'
import { CustomFlowbiteTheme, Flowbite, Spinner } from 'flowbite-react'
import { copyToClipboard } from '../utils/utils'
import { IoWarning } from 'react-icons/io5'

export function DepositModal() {
    const modalContent = useRef<HTMLDivElement>(null)

    const [showModal, setShowModal] = useState<boolean>(true)

    const {
        getNetworks,
        depositAddress,
        balance,
        notifyError,
        notifySuccess,
    } = useWeb3Trade2Earn()

    useEffect(() => {
        getNetworks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const customTheme: CustomFlowbiteTheme = {
        tabs: {
            base: 'flex flex-col',
            tablist: {
                base: 'flex text-center',
                styles: {
                    fullWidth:
                        'text-center w-full font-medium grid grid-flow-col mx-auto gap-0.5',
                },
                tabitem: {
                    base: 'text-[1.3em]',
                    styles: {
                        fullWidth: {
                            base: 'rounded-t-2xl flex items-center justify-center pt-3 pb-2 font-medium text-white',
                            active: {
                                on: 'bg-[#42128e]',
                                off: 'bg-[#320a75]',
                            },
                        },
                    },
                },
            },
            tabpanel: 'bg-[#42128e]',
        },
        dropdown: {
            arrowIcon: 'h-6 w-6 p-1',
            content: 'py-1 focus:outline-none sm:overflow-auto sm:h-[18rem]',
            inlineWrapper: 'flex items-center w-full justify-end p-4 h-full',
            floating: {
                base: 'z-10 -mt-2 rounded-md',
                item: {
                    base: 'flex w-full cursor-pointer items-center justify-start px-3 py-3 hover:bg-[#42128e] gap-3',
                },
                divider:
                    'mx-3 h-px bg-gradient-to-r from-transparent via-[#42128e] to-transparent',
            },
        },
    }

    return (
        <>
            {showModal ? (
                <Flowbite theme={{ theme: customTheme }}>
                    <div
                        style={{ zIndex: 1000 }}
                        className="justify-center flex fixed inset-0 outline-none focus:outline-none text-white max-h-screen overflow-auto"
                    >
                        <div className="relative mx-2 py-2 my-auto sm:w-[512px] h-fit">
                            {/*content*/}
                            <div
                                ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#42128E] outline-none focus:outline-none  text-[1.9em] sm:text-[1.3em] md:text-[1em] lg:text-[0.75em] xl:text-[0.6em]"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between rounded-t p-4 pb-0">
                                    <h2 className="text-[2em] font-semibold text-white">
                                        Deposit USDT
                                    </h2>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white text-2xl float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowModal(false)
                                        }}
                                    >
                                        <CgCloseO></CgCloseO>
                                    </button>
                                </div>
                                {/*body*/}

                                <div className="relative flex-auto">
                                    {/* body */}
                                    <div className="p-4 flex flex-col gap-3">
                                        <div className="w-full rounded-md bg-[#2f0d63] flex justify-between px-4 py-2">
                                            <div className="flex flex-col justify-center">
                                                <span className="text-white/50 font-light leading-5">
                                                    Deposit Currency
                                                </span>
                                                <div className="flex gap-2 items-center">
                                                    <img
                                                        src={usdtIcon}
                                                        className="h-5"
                                                    />
                                                    <span className="text-[1.4em]">
                                                        USDT
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-white/50 flex flex-col justify-center gap-1">
                                                <span className="font-light text-[0.9em] leading-5">
                                                    Balance:
                                                </span>
                                                <span className="text-[1.2em] leading-5">
                                                    {balance?.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                        <Networks />
                                        <div className="w-full rounded-md bg-[#2f0d63] px-4 py-3 relative flex gap-3 items-center">
                                            <div className="bg-white p-2 w-fit h-fit hidden sm:block">
                                                {depositAddress ? (
                                                    <QRCode
                                                        value={depositAddress}
                                                    />
                                                ) : (
                                                    <div className="h-[128px] w-[128px] flex items-center justify-center">
                                                        <Spinner
                                                            color="purple"
                                                            size="xl"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 flex flex-col justify-around gap-4 items-center sm:items-start">
                                                <span className="text-[1.4em]">
                                                    Deposit Address
                                                </span>
                                                <div className="bg-white p-2 w-fit h-fit sm:hidden block">
                                                    {depositAddress ? (
                                                        <QRCode
                                                            value={
                                                                depositAddress
                                                            }
                                                        />
                                                    ) : (
                                                        <div className="h-[128px] w-[128px] flex items-center justify-center">
                                                            <Spinner
                                                                color="purple"
                                                                size="xl"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="w-full flex gap-2 items-center">
                                                    <span className="flex-1 text-wrap break-all font-['Arial'] text-[1.3em] sm:text-[1.2em] md:text-[1.1em] text-center sm:text-start">
                                                        <span className="text-[#00BB5C] font-bold ">
                                                            {depositAddress?.slice(
                                                                0,
                                                                6
                                                            )}
                                                        </span>
                                                        <span className="">
                                                            {depositAddress?.slice(
                                                                6,
                                                                -4
                                                            )}
                                                        </span>
                                                        <span className="text-[#00BB5C] font-bold">
                                                            {depositAddress?.slice(
                                                                -4
                                                            )}
                                                        </span>
                                                    </span>
                                                    <button
                                                        onClick={() => {
                                                            if (depositAddress)
                                                                copyToClipboard(
                                                                    depositAddress,
                                                                    notifySuccess,
                                                                    notifyError
                                                                )
                                                        }}
                                                        className="rounded-lg px-2 py-1 text-white bg-btn-gradient enabled:hover:bg-none border border-sky-600 enabled:hover:border-[#00abfb]"
                                                        disabled={
                                                            depositAddress ==
                                                            null
                                                        }
                                                    >
                                                        Copy
                                                    </button>
                                                </div>
                                                <span className="flex gap-1 items-center bg-[#00000040] py-1 px-2 w-fit rounded-sm">
                                                    <IoWarning className="h-5 text-[#ff5b19] font-bold" />
                                                    <span className="text-[0.85em]">
                                                        Minimum: 0.025 USDT
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full rounded-md bg-[#542898] p-4">
                                            <span>
                                                <span className="text-[#00BB5C] font-bold">
                                                    NOTICE:{' '}
                                                </span>
                                                <span className="">
                                                    Send only USDT to this
                                                    deposit address. Coins will
                                                    be deposited automatically
                                                    after 6 network
                                                    confirmations. Smart
                                                    contract addresses are not
                                                    supported(Contact us).
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </Flowbite>
            ) : null}
        </>
    )
}

export default DepositModal

// return (
//     <>
//         {showModal ? (
//             <React.Fragment>
//                 <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//                     <div className="relative my-6 mx-2 w-full max-w-[700px]">
//                         {/*content*/}
//                         <div
//                             ref={modalContent}
//                             className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#42128E] outline-none focus:outline-none"
//                         >
//                             {/*header*/}
//                             <div className="flex items-start justify-between px-7 py-3 rounded-t">
//                                 <h3 className="text-lg lg:text-3xl font-semibold text-white">
//                                     Generate Affiliate Link
//                                 </h3>
//                                 <button
//                                     className="p-1 ml-auto bg-transparent border-0 text-white text-4xl float-right leading-none font-semibold outline-none focus:outline-none"
//                                     onClick={() => {
//                                         setShowModal(false)
//                                     }}
//                                 >
//                                     <CgCloseO></CgCloseO>
//                                 </button>
//                             </div>
//                             {/*body*/}

//                             <div className="relative px-3 sm:px-7 py-5 flex flex-col gap-2 text-[3.5em] sm:text-[1em]">
//                                 {/* body */}
//                                 <div className='bg-black/30 px-[1em] py-[0.4em] rounded-md'>
//                                     <div className='text-neutral-400 text-[0.6em]'>05/01/2024 11:05</div>
//                                     <div className='flex justify-between items-center'>
//                                         <div>

//                                             <span className='flex items-center text-[1em] text-neutral-100 gap-[0.4em]'>
//                                                 <img src={usdtIcon} className='h-[1.3em]'/>
//                                                 12345.6
//                                             </span>
//                                         </div>
//                                         <div className='flex flex-wrap text-neutral-100 text-[0.7em]'>
//                                             <span>Contest Reward</span>
//                                         </div>
//                                         <button className='bg-btn-gradient px-3 py-1 rounded-lg text-white text-[0.7em]'>
//                                             Claim
//                                         </button>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
//             </React.Fragment>
//         ) : null}
//     </>
// )
