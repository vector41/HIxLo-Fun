import React, { useRef } from 'react'
import { CgCloseO } from 'react-icons/cg'
import { useWeb3Trade2Earn } from '../services/trade2earn'
import usdtIcon from '../assets/img/usdt_brand.svg'
import coinIcon from '../assets/img/coin.png'
import { dateFormat } from '../utils/utils'

export const Notifications: React.FC<{
    showModal: boolean
    setShowModal: (value: boolean) => void
}> = ({ showModal, setShowModal }) => {
    const modalContent = useRef<HTMLDivElement>(null)

    const { notifications, claim } = useWeb3Trade2Earn()

    return (
        <>
            {showModal && notifications.length > 0 ? (
                <React.Fragment>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none">
                        <div className="relative my-6 mx-2 w-full max-w-[700px]">
                            {/*content*/}
                            <div
                                ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#42128E] outline-none focus:outline-none"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between px-7 py-3 rounded-t">
                                    <h3 className="text-lg lg:text-3xl font-semibold text-white">
                                        Notifications
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white text-2xl sm:text-4xl float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowModal(false)
                                        }}
                                    >
                                        <CgCloseO></CgCloseO>
                                    </button>
                                </div>
                                {/*body*/}

                                <div className="relative px-3 sm:px-7 py-5 flex flex-col gap-2 text-[3.5em] sm:text-[1em]">
                                    {/* body */}
                                    {notifications.map((notification, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-black/30 px-[1em] py-[0.4em] rounded-md"
                                        >
                                            <div className="text-neutral-400 text-[0.6em]">
                                                {dateFormat(
                                                    notification.CreatedAt
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <span className="flex items-center text-[1em] text-neutral-100 gap-[0.4em]">
                                                        <img
                                                            src={
                                                                notification.currency ===
                                                                'USDT'
                                                                    ? usdtIcon
                                                                    : coinIcon
                                                            }
                                                            className="h-[1.3em]"
                                                        />
                                                        {notification.amount.toFixed(
                                                            2
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap text-neutral-100 text-[0.7em]">
                                                    <span>
                                                        {
                                                            notification.description
                                                        }
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        claim(notification._id)
                                                    }
                                                    className="bg-btn-gradient px-3 py-1 rounded-lg text-white text-[0.7em]"
                                                >
                                                    Claim
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
                </React.Fragment>
            ) : null}
        </>
    )
}

export default Notifications
