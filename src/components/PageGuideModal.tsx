import React, { useEffect } from 'react'
import { CgCloseO } from 'react-icons/cg'
import MXEXImg from '../assets/img/mx_ex.png'
import PoolImg from '../assets/img/pools_img.png'
import InvestmentImg from '../assets/img/investment.png'
import { RxTriangleDown } from 'react-icons/rx'
import RocketHighImg from '../assets/img/rocket_high.png'
import RocketLowImg from '../assets/img/rocket_low.png'
import EarningImg from '../assets/img/earning.png'
import ConnectMobileImg from '../assets/img/connect_mobile.png'
import EarningD from '../assets/img/earnings_D.png'
function PageGuideModal() {
    // modal toggle
    const [showConfirmModal, setShowConfirmModal] = React.useState(false)
    const [showOneModal, setShowOneModal] = React.useState(
        localStorage.getItem('hi_lo_tutorial_finished') == null
    )
    const [showTwoModal, setShowTwoModal] = React.useState(false)
    const [showThreeModal, setShowThreeModal] = React.useState(false)
    const [showFourModal, setShowFourModal] = React.useState(false)
    const [showFiveModal, setShowFiveModal] = React.useState(false)
    const [showSixModal, setShowSixModal] = React.useState(false)
    const [showSevenModal, setShowSevenModal] = React.useState(false)

    const [isConfirmAnimate, setIsConfirmAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsConfirmAnimate(true)
        }, 1000)
    }, [])

    return (
        <>
            {/* confirm modal */}
            {showConfirmModal ? (
                <React.Fragment>
                    <div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-100 ${isConfirmAnimate ? 'translate-y-[0%]' : 'translate-y-[-100%]'}`}
                    >
                        <div className="relative my-6 mx-auto w-full max-w-[80%] sm:max-w-[800px]  px-5">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-end px-7 py-3 rounded-t">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white text-4xl float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowConfirmModal(false)
                                        }}
                                    >
                                        <CgCloseO></CgCloseO>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto text-center text-white">
                                    <img
                                        src={MXEXImg}
                                        className="h-[150px] mx-auto"
                                        alt=""
                                    />
                                    <h3 className="text-lg sm:text-xl lg:text-4xl mt-2">
                                        Maximize You Experience
                                    </h3>
                                    <p className="opacity-50 mt-2 text-sm sm:text-base lg:text-lg">
                                        In order to maximize your experience,
                                        please confirm the sound effect
                                    </p>
                                    <div className="py-4">
                                        <button
                                            onClick={() => {
                                                setShowConfirmModal(false) // for modal
                                                setIsConfirmAnimate(false) // for modal
                                                setShowOneModal(true) // for next modal
                                            }}
                                            className="p-2 lg:p-3 w-[180px] lg:w-[250px]  rounded-lg text-base text-white bg-btn-gradient"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </React.Fragment>
            ) : null}

            {/* 1st step modal */}
            <ShowOneModalStep
                showOneModal={showOneModal}
                setShowOneModal={setShowOneModal}
                setShowTwoModal={setShowTwoModal}
            ></ShowOneModalStep>

            {/* 2nd step modal */}
            <ShowTwoModalStep
                showTwoModal={showTwoModal}
                setShowTwoModal={setShowTwoModal}
                setShowThreeModal={setShowThreeModal}
            ></ShowTwoModalStep>

            {/* 3rd step modal */}
            <ShowThreeModalStep
                showThreeModal={showThreeModal}
                setShowThreeModal={setShowThreeModal}
                setShowFourModal={setShowFourModal}
            ></ShowThreeModalStep>

            {/* 4th step modal */}
            <ShowFourModalStep
                showFourModal={showFourModal}
                setShowFourModal={setShowFourModal}
                setShowFiveModal={setShowSixModal}
            ></ShowFourModalStep>

            {/* 5th step modal */}
            <ShowFiveModalStep
                showFiveModal={showFiveModal}
                setShowFiveModal={setShowFiveModal}
                setShowSixModal={setShowSixModal}
            ></ShowFiveModalStep>

            {/* 6th step modal */}
            <ShowSixModalStep
                showSixModal={showSixModal}
                setShowSixModal={setShowSixModal}
                setShowSevenModal={setShowSevenModal}
            ></ShowSixModalStep>

            {/* 7th step modal */}
            <ShowSevenModalStep
                showSevenModal={showSevenModal}
                setShowSevenModal={setShowSevenModal}
            ></ShowSevenModalStep>
        </>
    )
}

export default PageGuideModal

const ShowOneModalStep: React.FC<{
    showOneModal: boolean
    setShowOneModal: (value: boolean) => void
    setShowTwoModal: (value: boolean) => void
}> = ({ showOneModal, setShowOneModal, setShowTwoModal }) => {
    const [isOneAnimate, setIsOneAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsOneAnimate(true)
        }, 3000)
    }, [])

    return (
        <React.Fragment>
            {/* 1st step modal */}
            {showOneModal ? (
                <React.Fragment>
                    <div
                        className={`justify-center items-end sm:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500 ${isOneAnimate ? 'translate-y-[-10%] sm:translate-y-[0%]' : 'translate-y-[-100%]'}`}
                    >
                        <div className="relative my-6 mx-auto w-full max-w-[80%] sm:max-w-[800px]  px-5">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5f15d3] sm:bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto text-center text-white">
                                    <img
                                        src={PoolImg}
                                        className="w-full object-contain block "
                                        alt=""
                                    />

                                    <div className="flex align-center justify-between mt-3 sm:mt-[80px] ">
                                        <button
                                            onClick={() => {
                                                setShowOneModal(false)
                                                localStorage.setItem(
                                                    'hi_lo_tutorial_finished',
                                                    'true'
                                                )
                                            }}
                                            className="py-1 sm:py-3 px-5 rounded sm:rounded-lg text-white border text-sm lg:text-base border-white sm:border-slate-500"
                                        >
                                            Skip
                                        </button>

                                        <button
                                            onClick={() => {
                                                setShowOneModal(false) // for modal
                                                setIsOneAnimate(false) // for modal
                                                setShowTwoModal(true) // for next modal
                                            }}
                                            className="py-1 sm:py-3 px-5 sm:px-10 rounded sm:rounded-lg text-[#0277CA] sm:text-white bg-white sm:bg-btn-gradient text-sm lg:text-base"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute sm:hidden start-[70%] bottom-[-40px]">
                                <RxTriangleDown className="text-7xl text-[#5f15d3]"></RxTriangleDown>
                            </div>
                            <div className="absolute sm:hidden end-[70%] bottom-[-40px]">
                                <RxTriangleDown className="text-7xl text-[#5f15d3]"></RxTriangleDown>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

const ShowTwoModalStep: React.FC<{
    showTwoModal: boolean
    setShowTwoModal: (value: boolean) => void
    setShowThreeModal: (value: boolean) => void
}> = ({ showTwoModal, setShowTwoModal, setShowThreeModal }) => {
    const [isTwoAnimate, setIsTwoAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsTwoAnimate(true)
        }, 5000)
    }, [])

    return (
        <React.Fragment>
            {/* 1st step modal */}
            {showTwoModal ? (
                <React.Fragment>
                    <div
                        className={`justify-center items-end flex  fixed inset-0 bottom-[100px] z-50 outline-none focus:outline-none transition-all duration-500 ${isTwoAnimate ? 'translate-y-[0%]' : 'translate-y-[100%]'}`}
                    >
                        <div className="relative my-6 mx-auto w-full max-w-[80%] sm:max-w-[800px] px-5">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5f15d3] sm:bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto text-center text-white">
                                    <img
                                        src={InvestmentImg}
                                        className="w-full h-[160px] object-contain hidden sm:block "
                                        alt=""
                                    />

                                    <img
                                        src={InvestmentImg}
                                        className="w-full mt-[-70px] h-[120px] object-contain block sm:hidden "
                                        alt=""
                                    />

                                    <h3 className="text-lg font-semibold sm:text-xl lg:text-4xl mt-2">
                                        Select Your Investment
                                    </h3>

                                    <div className="flex align-center justify-between mt-3 sm:mt-[80px]">
                                        <button
                                            onClick={() => {
                                                setShowTwoModal(false)
                                                localStorage.setItem(
                                                    'hi_lo_tutorial_finished',
                                                    'true'
                                                )
                                            }}
                                            className="py-1 sm:py-3 px-5 rounded sm:rounded-lg text-white border text-sm lg:text-base border-white sm:border-slate-500"
                                        >
                                            Skip
                                        </button>

                                        <button
                                            onClick={() => {
                                                setShowTwoModal(false) // for modal
                                                setIsTwoAnimate(false) // for modal
                                                setShowThreeModal(true) // for next modal
                                            }}
                                            className="py-1 sm:py-3 px-5 sm:px-10 rounded sm:rounded-lg text-[#0277CA] sm:text-white bg-white sm:bg-btn-gradient text-sm lg:text-base"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute start-[50%] bottom-[-40px] translate-x-[-50%]">
                                <RxTriangleDown className="text-7xl text-[#5f15d3] sm:text-[#5f15d3]"></RxTriangleDown>
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

const ShowThreeModalStep: React.FC<{
    showThreeModal: boolean
    setShowThreeModal: (value: boolean) => void
    setShowFourModal: (value: boolean) => void
}> = ({ showThreeModal, setShowThreeModal, setShowFourModal }) => {
    const [isThreeAnimate, setIsThreeAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsThreeAnimate(true)
        }, 7000)
    }, [])

    return (
        <React.Fragment>
            {/* 1st step modal */}
            {showThreeModal ? (
                <React.Fragment>
                    <div
                        className={`justify-start items-end flex  fixed inset-0  bottom-[60px] sm:bottom-[80px] z-50 outline-none focus:outline-none transition-all duration-500 ${isThreeAnimate ? 'translate-x-[0%]' : 'translate-x-[-100%]'}`}
                    >
                        <div className="relative my-6 px-3 w-full max-w-[70%] sm:max-w-[540px]">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5f15d3] sm:bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto text-center text-white">
                                    <img
                                        src={RocketHighImg}
                                        className="w-full h-[160px] object-contain hidden sm:block "
                                        alt=""
                                    />

                                    <img
                                        src={RocketHighImg}
                                        className="w-full  h-[120px] mt-[-70px] sm:h-[160px] object-contain block sm:hidden "
                                        alt=""
                                    />

                                    <h3 className="text-lg sm:text-xl lg:text-4xl mt-2 font-semibold">
                                        Join HIGH Pool If You Think Bitcoin Is
                                        Going Up
                                    </h3>

                                    <div className="flex align-center justify-between mt-3 sm:mt-[80px]">
                                        <button
                                            onClick={() => {
                                                setShowThreeModal(false)

                                                localStorage.setItem(
                                                    'hi_lo_tutorial_finished',
                                                    'true'
                                                )
                                            }}
                                            className="py-1 sm:py-3 px-5 rounded sm:rounded-lg text-white border text-sm lg:text-base border-white sm:border-slate-500"
                                        >
                                            Skip
                                        </button>

                                        <button
                                            onClick={() => {
                                                setShowThreeModal(false) // for modal
                                                setIsThreeAnimate(false) // for modal
                                                setShowFourModal(true) // for next modal
                                            }}
                                            className="py-1 sm:py-3 px-5 sm:px-10 rounded sm:rounded-lg text-[#0277CA] sm:text-white bg-white sm:bg-btn-gradient text-sm lg:text-base"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute start-[20%] bottom-[-40px] translate-x-[-50%]">
                                <RxTriangleDown className="text-7xl text-[#5f15d3] sm:text-[#5f15d3]"></RxTriangleDown>
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

const ShowFourModalStep: React.FC<{
    showFourModal: boolean
    setShowFourModal: (value: boolean) => void
    setShowFiveModal: (value: boolean) => void
}> = ({ showFourModal, setShowFourModal, setShowFiveModal }) => {
    const [isFourAnimate, setIsFourAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsFourAnimate(true)
        }, 9000)
    }, [])

    return (
        <React.Fragment>
            {/* 1st step modal */}
            {showFourModal ? (
                <React.Fragment>
                    <div
                        className={`justify-end items-end flex  fixed inset-0 bottom-[80px] z-50 outline-none focus:outline-none transition-all duration-500 ${isFourAnimate ? 'translate-x-[0%]' : 'translate-x-[150%]'}`}
                    >
                        <div className="relative my-6 ms-auto px-3 w-full max-w-[70%] sm:max-w-[540px]">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5f15d3] sm:bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto text-center text-white">
                                    <img
                                        src={RocketLowImg}
                                        className="w-full h-[160px] object-contain hidden sm:block "
                                        alt=""
                                    />

                                    <img
                                        src={RocketLowImg}
                                        className="w-full  h-[120px] mt-[-70px] sm:h-[160px] object-contain block sm:hidden "
                                        alt=""
                                    />

                                    <h3 className="text-lg sm:text-xl lg:text-4xl mt-2 font-semibold">
                                        Join LOW Pool If You Think Bitcoin Is
                                        Going Down
                                    </h3>

                                    <div className="flex align-center justify-between mt-3 sm:mt-[80px]">
                                        <button
                                            onClick={() => {
                                                setShowFourModal(false)
                                                localStorage.setItem(
                                                    'hi_lo_tutorial_finished',
                                                    'true'
                                                )
                                            }}
                                            className="py-1 sm:py-3 px-5 rounded sm:rounded-lg text-white border text-sm lg:text-base border-white sm:border-slate-500"
                                        >
                                            Skip
                                        </button>

                                        <button
                                            onClick={() => {
                                                setShowFourModal(false)
                                                setIsFourAnimate(false)
                                                setShowFiveModal(true) // next modal
                                            }}
                                            className="py-1 sm:py-3 px-5 sm:px-10 rounded sm:rounded-lg text-[#0277CA] sm:text-white bg-white sm:bg-btn-gradient text-sm lg:text-base"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute start-[70%] sm:start-[60%] bottom-[-40px] translate-x-[-50%]">
                                <RxTriangleDown className="text-7xl text-[#5f15d3] sm:text-[#5f15d3]"></RxTriangleDown>
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

const ShowFiveModalStep: React.FC<{
    showFiveModal: boolean
    setShowFiveModal: (value: boolean) => void
    setShowSixModal: (value: boolean) => void
}> = ({ showFiveModal, setShowFiveModal, setShowSixModal }) => {
    const [isFiveAnimate, setIsFiveAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsFiveAnimate(true)
        }, 11000)
    }, [])

    return (
        <React.Fragment>
            {/* 1st step modal */}
            {showFiveModal ? (
                <React.Fragment>
                    <div
                        className={`justify-end items-start flex  fixed inset-0 top-[100px] z-50 outline-none focus:outline-none transition-all duration-500 ${isFiveAnimate ? 'translate-y-[0%]' : 'translate-y-[-100%]'}`}
                    >
                        <div className="relative my-6 mx-auto px-3 w-full max-w-[600px]">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5f15d3] sm:bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto text-center text-white">
                                    <img
                                        src={EarningImg}
                                        className="w-full h-[160px] object-contain hidden sm:block rotate-180"
                                        alt=""
                                    />

                                    <img
                                        src={EarningD}
                                        className="w-full mt-[-70px] h-[120px] sm:h-[160px] object-contain sm:hidden block rotate-180"
                                        alt=""
                                    />

                                    <h3 className="text-lg sm:text-xl lg:text-4xl mt-2">
                                        Earnings Distribution
                                    </h3>

                                    <p className="opacity-50 mt-2 text-sm sm:text-base lg:text-lg">
                                        At the End of The Round. The Winners
                                        Will Get Their Earnings Directly To The
                                        Some Digital Wallet They Signed The
                                        Trade With
                                    </p>

                                    <div className="flex align-center justify-between mt-3 sm:mt-[80px]">
                                        <button
                                            onClick={() => {
                                                setShowFiveModal(false)
                                                localStorage.setItem(
                                                    'hi_lo_tutorial_finished',
                                                    'true'
                                                )
                                            }}
                                            className="py-1 sm:py-3 px-5 rounded sm:rounded-lg text-white border text-sm lg:text-base border-white sm:border-slate-500"
                                        >
                                            Skip
                                        </button>

                                        <button
                                            onClick={() => {
                                                setIsFiveAnimate(false)
                                                setShowFiveModal(false)
                                                setShowSixModal(true) // for next modal
                                            }}
                                            className="py-1 sm:py-3 px-5 sm:px-10 rounded sm:rounded-lg text-[#0277CA] sm:text-white bg-white sm:bg-btn-gradient text-sm lg:text-base"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute start-[30%] sm:start-[50%] top-[-40px] translate-x-[-50%] rotate-180">
                                <RxTriangleDown className="text-7xl text-[#5f15d3] sm:text-[#5f15d3]"></RxTriangleDown>
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

const ShowSixModalStep: React.FC<{
    showSixModal: boolean
    setShowSixModal: (value: boolean) => void
    setShowSevenModal: (value: boolean) => void
}> = ({ showSixModal, setShowSixModal, setShowSevenModal }) => {
    const [isSixAnimate, setIsSixAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsSixAnimate(true)
        }, 13000)
    }, [])

    return (
        <React.Fragment>
            {/* 1st step modal */}
            {showSixModal ? (
                <React.Fragment>
                    <div
                        className={`justify-end items-start flex  fixed inset-0 top-[100px] z-50 outline-none focus:outline-none transition-all duration-500 ${isSixAnimate ? 'translate-y-[0%]' : 'translate-y-[-120%]'}`}
                    >
                        <div className="relative my-6 mx-auto px-3 w-full max-w-[600px]">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5f15d3] sm:bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto text-center text-white">
                                    <img
                                        src={ConnectMobileImg}
                                        className="w-full h-[160px] object-contain hidden sm:block rotate-180"
                                        alt=""
                                    />

                                    <img
                                        src={ConnectMobileImg}
                                        className="w-full  h-[120px] sm:h-[160px] object-contain sm:hidden block rotate-180"
                                        alt=""
                                    />

                                    <h3 className="text-lg sm:text-xl lg:text-4xl mt-2 font-semibold">
                                        Connect Your Wallet, or Create Social
                                        Wallet
                                    </h3>

                                    <div className="flex align-center justify-between mt-3 sm:mt-[80px]">
                                        <button
                                            onClick={() => {
                                                setShowSixModal(false)
                                                localStorage.setItem(
                                                    'hi_lo_tutorial_finished',
                                                    'true'
                                                )
                                            }}
                                            className="py-1 sm:py-3 px-5 rounded sm:rounded-lg text-white border text-sm lg:text-base border-white sm:border-slate-500"
                                        >
                                            Skip
                                        </button>

                                        <button
                                            onClick={() => {
                                                setShowSixModal(false)
                                                setIsSixAnimate(false)
                                                setShowSevenModal(true) // next modal
                                            }}
                                            className="py-1 sm:py-3 px-5 sm:px-10 rounded sm:rounded-lg text-[#0277CA] sm:text-white bg-white sm:bg-btn-gradient text-sm lg:text-base"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute start-[50%] top-[-40px] translate-x-[-50%] rotate-180">
                                <RxTriangleDown className="text-7xl text-[#5f15d3] sm:text-[#5f15d3]"></RxTriangleDown>
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

const ShowSevenModalStep: React.FC<{
    showSevenModal: boolean
    setShowSevenModal: (value: boolean) => void
}> = ({ showSevenModal, setShowSevenModal }) => {
    const [isSevenAnimate, setIsSevenAnimate] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsSevenAnimate(true)
        }, 15000)
    }, [])

    const [isAgree, setIsAgree] = React.useState(false)

    return (
        <React.Fragment>
            {/* 1st step modal */}
            {showSevenModal ? (
                <React.Fragment>
                    <div
                        className={`justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500 ${isSevenAnimate ? 'translate-y-[0%]' : 'translate-y-[-120%]'}`}
                    >
                        <div className="relative my-6 mx-auto px-3 w-full max-w-[600px]">
                            {/*content*/}
                            <div
                                // ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5f15d3] sm:bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*body*/}
                                <div className="relative px-7 py-5 pt-10 flex-auto text-center text-white">
                                    <h3 className="text-lg sm:text-xl lg:text-4xl mt-2 font-semibold">
                                        Disclaimer
                                    </h3>

                                    <div className="mt-4 flex items-center">
                                        <input
                                            onChange={() =>
                                                setIsAgree(!isAgree)
                                            }
                                            type="checkbox"
                                            id="agreement_checkbox"
                                            className="min-w-[20px] h-[20px] sm:w-[35px] sm:min-w-[35px] sm:h-[35px] text-xl rounded-md"
                                        />
                                        <label
                                            htmlFor="agreement_checkbox"
                                            className="opacity-50 text-base sm:text-lg px-3 text-start cursor-pointer"
                                        >
                                            I Agree To All Technology License
                                            Agreements
                                        </label>
                                    </div>

                                    <div className="flex align-center justify-center mt-6 sm:mt-[80px]">
                                        <button
                                            onClick={() => {
                                                setShowSevenModal(false)
                                                localStorage.setItem(
                                                    'hi_lo_tutorial_finished',
                                                    'true'
                                                )
                                            }}
                                            className={`py-2 ${isAgree ? '' : 'opacity-50 pointer-events-none'} sm:py-3 px-5 w-[80%] sm:w-[50%] sm:px-10 rounded sm:rounded-lg text-[#0277CA] sm:text-white bg-white sm:bg-btn-gradient text-sm lg:text-base`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}
