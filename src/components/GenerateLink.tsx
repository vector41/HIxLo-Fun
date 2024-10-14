import React, { useRef, useState } from 'react'
import { CgCloseO } from 'react-icons/cg'
import { useWeb3Trade2Earn } from '../services/trade2earn'

export const GenerateLink: React.FC<{
    showModal: boolean
    setShowModal: (value: boolean) => void
}> = ({ showModal, setShowModal }) => {
    const modalContent = useRef<HTMLDivElement>(null)
    const { generateLink } = useWeb3Trade2Earn()
    const [affiliateName, setAffiliateName] = useState<string>()

    return (
        <>
            {showModal ? (
                <React.Fragment>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-full md:max-w-[30em] max-w-[70em]">
                            {/*content*/}
                            <div
                                ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#42128E] outline-none focus:outline-none"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between px-7 py-4 rounded-t">
                                    <h2 className="text-[4em] lg:text-3xl font-semibold text-white">
                                        Generate Affiliate Link
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

                                <div className="relative px-7 py-5 flex-auto">
                                    {/* body */}
                                    <input
                                        autoFocus
                                        onChange={(e) =>
                                            setAffiliateName(e.target.value)
                                        }
                                        className="w-full text-lg rounded-md px-[1em] py-[0.4em]"
                                        placeholder="Enter your affiliate name"
                                        value={affiliateName}
                                    />
                                    {/* <p className="text-base text-[#7786CB]">
                                        You can upload your own favorites
                                        picture. when you done click on Apply
                                        changes button
                                    </p> */}

                                    <div className="pt-5 lg:pt-12 pb-6">
                                        <button
                                            onClick={() => {
                                                if (affiliateName) {
                                                    generateLink(affiliateName)
                                                    setAffiliateName('')
                                                    setShowModal(false)
                                                }
                                            }}
                                            className="p-2 lg:p-3 w-full font-medium rounded-lg text-base text-white bg-btn-gradient"
                                        >
                                            Create Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </React.Fragment>
            ) : null}
        </>
    )
}

export default GenerateLink

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
