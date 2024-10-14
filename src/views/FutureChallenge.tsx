import usdt from '../assets/img/usdt_brand.svg'
import topRate from '../assets/img/coin.png'
import Header from '../components/Header'
import bg from '../assets/img/cover_bg.png'
import { getImageUrl, getRandomInteger } from '../utils/utils'
import { useEffect, useMemo, useState } from 'react'
import { CgCloseO } from 'react-icons/cg'
import { useWeb3Trade2Earn } from '../services/trade2earn'

// eslint-disable-next-line react-refresh/only-export-components
export enum ChallengeStatus {
    EXPIRED = "EXPIRED",
    LIVE = "LIVE",
    FUTURE = "FUTURE"
}

function FutureChallenge() {

    const [showModal, setShowModal] = useState(false);
    const { getFutureBTCChallenges, submitFutureBTCPrice, challengeData, coinBalance, roundStatus, profile, notifyError, isConnectedAndLogin, setShowWalletModal } = useWeb3Trade2Earn();
    const [timeLeft, setTimeLeft] = useState(0);
    const [challengeStatus, setChallengeStatus] = useState<ChallengeStatus>(ChallengeStatus.FUTURE);
    const [futurePrice, setFuturePrice] = useState<string>("");

    useEffect(() => {
        getFutureBTCChallenges();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (challengeData?.nextChallengeStatus.status?.EndTime) {
            const currentTime: Date = new Date();
            const endTime: Date = new Date(challengeData?.nextChallengeStatus.status?.StartTime);
            // setTimeLeft(challengeData?.nextChallengeStatus.status?.EndTime.getTime() - currentTime.getTime())
            setTimeLeft(endTime.getTime() - currentTime.getTime())
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [challengeData?.nextChallengeStatus.status?.EndTime])

    useEffect(() => {
        if (timeLeft <= 0) return

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000) // Decrease time by 1000ms (1 second)
        }, 1000)

        return () => clearInterval(timerId) // Cleanup the interval on component unmount
    }, [timeLeft])

    // Format the time left into hours, minutes, and seconds
    const days = Math.floor((timeLeft / ((1000 * 60 * 60) * 24)) / 1000)
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    // Function to pad single digit numbers with leading zero
    function padZero(num: number): string {
        return num < 10 ? `0${num}` : `${num}`
    }

    // Format the time into HH:MM:SS
    const formattedTime = `${padZero(days)}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`

    const myPositions = useMemo(() => {
        if (!isConnectedAndLogin) return [];
        return roundStatus.currentBtcPrice && challengeData?.nextChallengeStatus?.positions?.sort((p1, p2) => {
            let d1 = 0, d2 = 0;
            if (roundStatus.currentBtcPrice) {
                d1 = Math.abs(p1.Position - roundStatus.currentBtcPrice?.value);
                d2 = Math.abs(p2.Position - roundStatus.currentBtcPrice?.value);
            }

            return d1 - d2;
        }).map((_, idx) => ({ ..._, Place: idx })).filter(p => p.User._id === profile?.UserId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roundStatus.currentBtcPrice])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFuturePrice(e.target.value);
    };

    const validatePrice = (price: string): boolean => {
        const position = parseFloat(price);
        if (position === undefined || position === null || typeof position !== 'number' || isNaN(position) || position <= 0) {
            notifyError("The position is invalid.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        if (!isConnectedAndLogin) {
            setShowWalletModal(true);
            return;
        }
        e.preventDefault();
        if (validatePrice(futurePrice)) {
            // Submit the valid price
            // submitFutureBTCPrice(parseFloat(futurePrice))
            submitFutureBTCPrice(getRandomInteger(68000, 69000));
            // Reset form or perform other actions
        }
    };

    const createForm = <>
        <div className='flex items-start justify-between rounded-t text-[1.2em] px-[0.7em] py-[0.5em] pb-[0.5em] font-semibold'>
            <h4 className="text-[#36A9FF] ">
                Create Position
            </h4>
            <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:opacity-70 ml-auto bg-transparent block lg:hidden border-0 text-white text-[1.3em] float-right leading-none font-semibold outline-none focus:outline-none"
            >
                <CgCloseO></CgCloseO>
            </button>
        </div>

        <span className="text-white text-[0.9em] pl-[0.7em]">
            I predict BTC Price will be:
        </span>
        <div className="flex justify-between m-[0.7em] my-[0.5em]">
            <input
                type="text"
                value={futurePrice}
                onChange={handleChange}
                placeholder='Enter your future BTC price.'
                className="bg-[#0000004F] outline-none rounded text-white w-full mr-[1em]"
            ></input>
            <button
                className="bg-[#0064FA] text-white hover:opacity-75 active:opacity-50 text-[0.9em] py-[0.8em] px-[2em] rounded ml-[1em] w-[12em]"
                style={{
                    boxShadow: '0px 4px 4px 0px #00000040',
                }}
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
        <div className="flex text-[0.7em] text-[#9ca3af] font-medium pl-[1em]">
            <img
                src={topRate}
                alt={topRate}
                className="w-[1.3em] h-[1.3em] self-center"
            />
            <span className="ml-1"> 1500 per position</span>
        </div>
        <h4 className="text-[#36A9FF] text-[1em] p-[0.7em] pb-[0.5em] font-semibold">
            Open Positions ({myPositions?.length})
        </h4>
        <div className="overflow-auto scrollbar px-[0.7em] mb-[0.8em] h-[calc(100vh-30em)] lg:h-[calc(100vh-29.2em)] xl:h-[calc(100vh-30.2em)] sm:h-[calc(100vh-25.5em)] md:h-[calc(100vh-35.5em)]">
            <table className="w-[100%]">
                <thead className="sticky top-[0em] bg-[#470BB0]">
                    <tr className="bg-[#2A0A61] text-center border-b-[0.1em] border-[#470BB0] rounded">
                        <th className="text-white text-[0.9em] px-[0.5em] font-medium py-[1em] sticky top-0 z-2">
                            Place
                        </th>
                        <th className="text-white text-[0.9em] px-[0.5em] font-medium py-[1em] sticky top-0 z-2">
                            Future Price
                        </th>
                        <th className="text-white text-[0.9em] px-[0.5em] font-medium py-[1em] sticky top-0 z-2">
                            Delta
                        </th>
                        <th className="text-white text-[0.9em] px-[0.5em] font-medium py-[1em] sticky top-0 z-2">
                            Prize
                        </th>
                        <th className="text-white text-[0.9em] px-[0.5em] font-medium py-[1em] sticky top-0 z-2">
                            Close
                        </th>
                    </tr>
                </thead>
                <tbody className="overflow-y-auto">
                    {

                        // Array.from({ length: 1000 }).map((_, idx) =>
                        myPositions?.map((_, idx) =>
                            <tr key={idx} className="bg-[#2A0A61] text-center border-b-[0.1em] border-[#470BB0]">
                                <td className="text-white text-[0.9em] font-light py-[0.6em] ">
                                    {_.Place + 1}
                                </td>
                                <td className="text-white text-[0.9em] font-light py-[0.6em]">
                                    {_.Position}
                                </td>
                                <td className="text-white text-[0.9em] font-light py-[0.6em]">
                                    {roundStatus.currentBtcPrice && Math.abs(roundStatus.currentBtcPrice.value - _.Position).toFixed(3)}
                                </td>
                                <td className="text-white text-[0.9em] font-light py-[0.6em]">
                                    236
                                </td>
                                <td className="text-white text-[0.9em] font-light py-[0.6em]">
                                    <button
                                        className="bg-[#FF685A] px-[0.5em] py-[0.2em] rounded hover:opacity-75 active:opacity-50"
                                        type="button"
                                        style={{
                                            boxShadow:
                                                '0px 4px 4px 0px #00000040',
                                        }}
                                    >
                                        Close
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>

            </table>
        </div>
    </>;

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
            <div className="flex flex-col flex-1 text-[2em] sm:text-[1.6em] md:text-[1.3em] lg:text-[1.1em] xl:text-[0.9em] overflow-hidden relative">
                <div className="flex justify-center p-[1em] py-[1em]">
                    <div
                        className="font-bold text-[2em]"
                        style={{
                            backgroundImage:
                                'linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)',
                            // webkitBackgroundClip: "text",
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        FUTURE BTC CHALLENGE
                    </div>
                </div>
                <div className="flex justify-center mx-auto">
                    <div className="flex items-center">
                        {ChallengeStatus.EXPIRED === challengeStatus ?
                            <button className="text-white hover:opacity-80 px-[1.7em] py-[0.3em] bg-[#6323D1] flex border-0 gap-[0.2em] items-center rounded-l-[0.3em]" style={{ boxShadow: '0px 4px 4px 0px #0000008a' }}>
                                <div className="bg-[#FF5D4F] h-[0.5em] w-[0.5em] rounded-full self-center"></div>
                                <div className="">Expired</div>
                            </button> :
                            <button onClick={() => setChallengeStatus(ChallengeStatus.EXPIRED)} className="text-white active:opacity-100 hover:opacity-80 px-[1.7em] py-[0.3em] bg-[#3D0F8D] rounded-l-[0.3em]" style={{ boxShadow: '0px 4px 4px 0px #0000008a' }}>
                                Expired
                            </button>}

                        {ChallengeStatus.LIVE === challengeStatus ?
                            <button className="text-white hover:opacity-80 px-[1.7em] py-[0.3em] bg-[#6323D1] flex border-0 gap-[0.2em] items-center" style={{ boxShadow: '0px 4px 4px 0px #0000008a' }}>
                                <div className="bg-[#FF5D4F] h-[0.5em] w-[0.5em] rounded-full self-center"></div>
                                <div className="">Live</div>
                            </button> :
                            <button onClick={() => setChallengeStatus(ChallengeStatus.LIVE)} className="text-white active:opacity-100 hover:opacity-80 px-[1.7em] py-[0.3em] bg-[#3D0F8D]" style={{ boxShadow: '0px 4px 4px 0px #0000008a' }}>
                                Live
                            </button>}

                        {ChallengeStatus.FUTURE === challengeStatus ?
                            <button className="text-white hover:opacity-80 px-[1.7em] py-[0.3em] bg-[#6323D1] flex border-0 gap-[0.2em] items-center rounded-r-[0.3em]" style={{ boxShadow: '0px 4px 4px 0px #0000008a' }}>
                                <div className="bg-[#FF5D4F] h-[0.5em] w-[0.5em] rounded-full self-center"></div>
                                <div className="">Future</div>
                            </button> :
                            <button onClick={() => setChallengeStatus(ChallengeStatus.FUTURE)} className="text-white active:opacity-100 hover:opacity-80 px-[1.7em] py-[0.3em] bg-[#3D0F8D] rounded-r-[0.3em]" style={{ boxShadow: '0px 4px 4px 0px #0000008a' }}>
                                Future
                            </button>}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mx-auto mt-[1em] text-[1.1em] gap-x-[2em] gap-y-[0.5em] px-[1em] sm:px-[1em] md:px-[3em]">
                    <div className="flex flex-col items-center">
                        <div className="text-slate-400 text-[0.85em]">
                            Prize Pool
                        </div>
                        <div className="flex">
                            <img
                                src={usdt}
                                alt=""
                                className="w-[0.9em] h-[0.9em] self-center mr-[0.3em]"
                            />
                            <div className="text-[#36A9FF] text-[1.2em] font-semibold">
                                {challengeData?.nextChallengeStatus.status?.Prize || 0}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-slate-400 text-[0.85em]">
                            Total positions
                        </div>
                        <div className="flex">
                            <div className="text-[#36A9FF] text-[1.2em] font-semibold">
                                {challengeData?.nextChallengeStatus.positions?.length || 0}
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex flex-col items-center justify-between">
                        <div className="text-slate-400 text-[0.85em]">
                            Status
                        </div>
                        <div className="bg-[#000000] px-[0.4em] py-[0.2em] rounded-md flex gap-[0.5em]">
                            <div className="bg-[#0064FB] h-[0.5em] w-[0.5em] rounded-full self-center"></div>
                            <span className="text-[#0064FB] text-[0.8em] font-bold">
                                In Progress
                            </span>
                        </div>
                    </div> */}

                    <div className="flex flex-col items-center">
                        <div className="text-slate-400 text-[0.85em]">
                            Coin Balance
                        </div>
                        <div className="flex">
                            <img
                                src={topRate}
                                alt=""
                                className="w-[0.9em] h-[0.9em] self-center"
                            />
                            <div className="text-[#36A9FF] text-[1.2em] font-semibold">
                                {coinBalance}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-slate-400 text-[0.85em]">
                            Per Position
                        </div>
                        <div className="flex">
                            <img
                                src={topRate}
                                alt=""
                                className="w-[0.9em] h-[0.9em] self-center"
                            />
                            <div className="text-[#36A9FF] text-[1.2em] font-semibold">
                                1500
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-slate-400 text-[0.85em]">
                            Live BTC Price
                        </div>
                        <div className="flex">
                            <div className="text-white text-[1.2em] font-semibold">
                                ${roundStatus.currentBtcPrice?.value}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-slate-400 text-[0.85em]">
                            Locks in
                        </div>
                        <div className="flex">
                            <div className="text-white text-[1.2em] font-semibold">
                                {formattedTime}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-[1em] flex-1 py-[0.8em] flex flex-col gap-[0.8em]">
                    <div className="flex justify-center w-full lg:hidden">
                        <button
                            className="bg-[#0064FA] text-white hover:opacity-75 active:opacity-50 py-[0.4em] px-[3em] text-[1.1em] rounded-md"
                            style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
                            onClick={() => setShowModal(true)}
                        >
                            Create Position
                        </button>
                    </div>
                    <div className="flex flex-1 gap-[0.5em] flex-wrap relative">
                        <div
                            style={{
                                background:
                                    'linear-gradient(180deg, #470BB0 0%, #502697 100%)',
                                borderRadius: '8px',
                            }}
                            className="w-full lg:w-[66%]"
                        >
                            <div className="overflow-auto scrollbar px-[0.7em] sm:h-[calc(100vh-17.5em)] h-[calc(100vh-26em)]">
                                <table className="w-[100%] text-[1.2em] md:text-[1.3em] lg:text-[1.1em] xl:text-[0.75em]">
                                    <thead className="sticky top-0 z-20 text-white sm:table-header-group bg-[#470bb0]">
                                        <tr className=" sticky top-0 rounded-lg sm:rounded-t-lg font-light">
                                            <th className="sticky top-0 z-0 py-[1em] px-[1em] text-left font-medium">
                                                #
                                            </th>
                                            <th className="sticky top-0 py-[1em] text-left font-medium">
                                                Username
                                            </th>
                                            <th className="sticky top-0 py-[1em] text-left font-medium">
                                                Future Price
                                            </th>
                                            <th className="sticky top-0 py-[1em] text-left font-medium">
                                                Delta
                                            </th>
                                            <th className="sticky top-0 py-[1em] text-left font-medium">
                                                Prize
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="overflow-y-auto z-10">
                                        {
                                            roundStatus.currentBtcPrice && challengeData?.nextChallengeStatus?.positions?.sort((p1, p2) => {
                                                let d1 = 0, d2 = 0;
                                                if (roundStatus.currentBtcPrice) {
                                                    d1 = Math.abs(p1.Position - roundStatus.currentBtcPrice?.value);
                                                    d2 = Math.abs(p2.Position - roundStatus.currentBtcPrice?.value);
                                                }

                                                return d1 - d2;
                                            }).map((_, idx) =>
                                                <tr key={idx} className="bg-[#2A0A61] text-left border-b-[4px] border-[#470BB0]">
                                                    <td className="text-white">
                                                        <span className="flex px-[1em] w-[2.5em]">
                                                            {idx + 1}
                                                        </span>

                                                    </td>
                                                    <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                        <span className="flex items-center gap-[0.5em]">
                                                            <a
                                                                className="w-[3em] h-[3em] rounded-md border-[0.2em] border-[#0064fb] hidden sm:block relative z-0"
                                                            >
                                                                <img
                                                                    className=""
                                                                    src={
                                                                        _.User.Avatar
                                                                    }
                                                                />
                                                                <div className="absolute w-[1em] top-[-0.2em] right-[-0.4em] rounded-[0.2em] overflow-hidden">
                                                                    <img
                                                                        src={getImageUrl(
                                                                            `../assets/img/flag/${_.User.CountryCode}.svg`
                                                                        )}
                                                                        className="left"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <span>{_.User.Username}</span>
                                                        </span>
                                                    </td>
                                                    <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                        {_.Position}
                                                    </td>
                                                    <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                        {roundStatus.currentBtcPrice && Math.abs(roundStatus.currentBtcPrice.value - _.Position).toFixed(3)}
                                                    </td>
                                                    <td className="border border-transparent border-t-2 text-white py-[0.5em]">
                                                        <span className="flex gap-[0.5em] items-center">
                                                            <img
                                                                src={usdt}
                                                                className="h-[1.5em]"
                                                            />
                                                            {100}
                                                        </span>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* =============== */}
                        {challengeStatus === ChallengeStatus.FUTURE && <div
                            style={{
                                background:
                                    'linear-gradient(180deg, #470BB0 0%, #502697 100%)',
                                borderRadius: '8px',
                            }}
                            className="absolute top-[calc(100%+2em)] lg:relative lg:top-0 lg:block w-full lg:w-[33%]"
                        >
                            {createForm}
                        </div>}

                    </div>



                </div>
                <div className={`absolute z-50 w-full bottom-0 lg:hidden text-[1.3em] sm:text-[1.6em] md:text-[1.3em] lg:text-[1.1em] xl:text-[0.9em] transition-all duration-500 ${showModal ? 'translate-y-[0%]' : 'translate-y-[100%]'}`} style={{
                    background:
                        'linear-gradient(180deg, #11002f 0%, #502697 100%)',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 4px 0px #0000008a'
                }}>
                    {createForm}
                </div>
            </div>
        </div>
    )
}

export default FutureChallenge
