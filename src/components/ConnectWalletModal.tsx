import React, { useRef, useEffect } from 'react'
// import ConnectWalletImg from '../assets/img/connect_wallet_img.png'
// social icons
import { CgCloseO } from 'react-icons/cg'
import FacebookImg from '../assets/img/social/facebook.png'
import GoogleImg from '../assets/img/social/google.png'
import CoinbaseImg from '../assets/img/social/coinbase.png'
import MetamaskImg from '../assets/img/social/metamask.png'
import WalletImg from '../assets/img/social/walletConnect.png'

// import menuBtn from '../../assets/img/menu.png'
import navRefresh from '../assets/img/nav_refresh.png'
// import navResult from '../assets/img/nav_result.png'
import navStart from '../assets/img/nav_start.svg'
// import balanceBox from '../assets/img/balance_box.png';

// other social icons
import AppleImg from '../assets/img/social/login-apple-light.svg'
import LinkedinImg from '../assets/img/social/linkedin.svg'
import RedditImg from '../assets/img/social/login-reddit-active.svg'
import DiscordImg from '../assets/img/social/discord.svg'
import TwitchImg from '../assets/img/social/login-twitch-active.svg'
import LineChatImg from '../assets/img/social/login-line-active.svg'
import GithubImg from '../assets/img/social/login-github-light.svg'
import KakaoImg from '../assets/img/social/login-kakao-active.svg'
import TwitterImg from '../assets/img/social/twitter.svg'
import WeiboImg from '../assets/img/social/weibo.svg'
import WechatImg from '../assets/img/social/wechat.svg'
import { useConnect } from 'wagmi'
import { useWeb3Trade2Earn } from '../services/trade2earn'
import NumberCounter from '../views/TradingPage/NumberCounter'
import { Link } from 'react-router-dom'
import btnBack from '../assets/img/connect_wallet.svg'
import { Modal } from 'flowbite-react'
import usdtIcon from '../assets/img/usdt_brand.svg'

import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Flowbite } from 'flowbite-react'

const customTheme: CustomFlowbiteTheme = {
    modal: {
        content: {
            base: 'relative h-full w-full px-4 md:h-auto',
            inner: 'min-h-screen flex flex-col justify-center',
        },
        body: {
            base: 'overflow-auto p-6',
        },
    },
}

export const ConnectWalletModal: React.FC = () => {
    // const [showModal, setShowWalletModal] = React.useState(false)
    const [otherSocial, setOtherSocial] = React.useState(false)
    const modalContent = useRef<HTMLDivElement>(null)
    // const walletBtn = useRef<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const otherSocialBtn = useRef<any>(null)

    const {
        isConnectedAndLogin,
        balance,
        showWalletModal,
        setShowWalletModal,
        getBalance,
        walletBtn,
    } = useWeb3Trade2Earn()
    const { connect, connectors } = useConnect()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalContent.current &&
                !modalContent.current.contains(event.target as Node) &&
                walletBtn.current &&
                !walletBtn.current.contains(event.target as Node) &&
                otherSocialBtn.current &&
                !otherSocialBtn.current.contains(event.target as Node)
            ) {
                // setShowWalletModal(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const other_social_list = [
        {
            id: 1,
            alt: 'facebook',
            icon: FacebookImg,
        },
        {
            id: 2,
            alt: 'apple',
            icon: AppleImg,
        },
        {
            id: 3,
            alt: 'linkedin',
            icon: LinkedinImg,
        },
        {
            id: 4,
            alt: 'Reddit',
            icon: RedditImg,
        },
        {
            id: 5,
            alt: 'Discord',
            icon: DiscordImg,
        },
        {
            id: 6,
            alt: 'Twitch',
            icon: TwitchImg,
        },
        {
            id: 7,
            alt: 'linechat',
            icon: LineChatImg,
        },
        {
            id: 8,
            alt: 'github',
            icon: GithubImg,
        },
        {
            id: 9,
            alt: 'Kakao',
            icon: KakaoImg,
        },
        {
            id: 10,
            alt: 'Twitter',
            icon: TwitterImg,
        },
        {
            id: 11,
            alt: 'Weibo',
            icon: WeiboImg,
        },
        {
            id: 12,
            alt: 'Wechat',
            icon: WechatImg,
        },
    ]

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <div className="h-full sm:text-[1em] text-[1.8em] flex items-center">
                {!isConnectedAndLogin && (
                    <button
                        ref={walletBtn}
                        onClick={() => setShowWalletModal(true)}
                        className="drop-shadow-md hover:opacity-70"
                    >
                        <img src={btnBack} className="h-[3em]" />
                    </button>
                )}

                {isConnectedAndLogin && (
                    <div className="w-full transform text-white flex flex-col h-full justify-center">
                        <h6 className="opacity-70 text-[1em] text-center">
                            USDT BALANCE
                        </h6>

                        <div className="flex justify-center items-center gap-[1.2em]">
                            <button
                                className="hover:opacity-70"
                                onClick={getBalance}
                            >
                                <img
                                    src={navRefresh}
                                    className="h-[1.8em]"
                                    alt=""
                                />
                            </button>
                            <h6 className="flex items-center">
                                <span className="flex gap-1 items-center sm:text-[2em] text-[1.8em] leading-[100%] font-medium">
                                    <img src={usdtIcon} className="h-[0.7em]" />
                                    <NumberCounter
                                        startValue={0}
                                        endValue={balance}
                                    />
                                </span>
                            </h6>
                            <Link
                                to={'/wallet'}
                                ref={walletBtn}
                                onClick={() => setShowWalletModal(true)}
                                className="hover:opacity-70"
                            >
                                <img
                                    src={navStart}
                                    className="h-[1.8em]"
                                    alt="wallet"
                                    // onClick={disconnect as () => void}
                                />
                            </Link>
                        </div>
                    </div>
                )}

                <Modal
                    dismissible
                    show={showWalletModal && !isConnectedAndLogin}
                    onClose={() => setShowWalletModal(false)}
                    className="z-[9999999]"
                >
                    {/* <Modal.Body className=' bg-transparent'> */}

                    <Modal.Body className="">
                        <div className="relative my-6 mx-auto">
                            {/*content*/}
                            <div
                                ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#5F15D3] outline-none focus:outline-none"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between px-7 py-3 rounded-t">
                                    <h3 className="text-lg lg:text-3xl font-semibold text-white">
                                        Connect With
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white text-4xl float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowWalletModal(false)
                                            setOtherSocial(false)
                                        }}
                                    >
                                        <CgCloseO></CgCloseO>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto">
                                    {!otherSocial ? (
                                        <React.Fragment>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    onClick={() => {
                                                        connect({
                                                            connector:
                                                                connectors[3],
                                                        })
                                                        setShowWalletModal(
                                                            false
                                                        )
                                                    }}
                                                    className="bg-[#7224EE] text-white p-2 lg:p-4 rounded-2xl text-base lg:text-2xl"
                                                >
                                                    <img
                                                        className="inline-block me-3 align-middle h-[37px]"
                                                        src={GoogleImg}
                                                        alt="google"
                                                    />
                                                    Google
                                                </button>
                                                <button className="bg-[#7224EE] text-white p-2 lg:p-4 rounded-2xl text-base lg:text-2xl">
                                                    <img
                                                        className="inline-block me-3 align-middle h-[37px]"
                                                        src={FacebookImg}
                                                        alt="facebook"
                                                    />
                                                    Facebook
                                                </button>
                                            </div>
                                            <div className="text-center pt-3">
                                                <button
                                                    ref={otherSocialBtn}
                                                    onClick={() =>
                                                        setOtherSocial(true)
                                                    }
                                                    className="text-[#1BC3F8] underline text-base"
                                                >
                                                    Connect With Other Social
                                                    Networks
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 pt-3">
                                                <button
                                                    onClick={() => {
                                                        connect({
                                                            connector:
                                                                connectors[0],
                                                        })
                                                        setShowWalletModal(
                                                            false
                                                        )
                                                    }}
                                                    className="bg-[#7224EE] text-white p-2 lg:p-4 rounded-2xl text-base lg:text-2xl"
                                                >
                                                    <img
                                                        className="inline-block me-3 align-middle h-[37px]"
                                                        src={CoinbaseImg}
                                                        alt="Coinbase"
                                                    />
                                                    Coinbase
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        connect({
                                                            connector:
                                                                connectors[2],
                                                        })
                                                    }
                                                    className="bg-[#7224EE] text-white p-2 lg:p-4 rounded-2xl text-base lg:text-2xl"
                                                >
                                                    <img
                                                        className="inline-block me-3 align-middle h-[37px]"
                                                        src={MetamaskImg}
                                                        alt="Metamask"
                                                    />
                                                    Metamask
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        connect({
                                                            connector:
                                                                connectors[1],
                                                        })
                                                        setShowWalletModal(
                                                            false
                                                        )
                                                    }}
                                                    className="bg-[#7224EE] text-white p-2 lg:p-4 rounded-2xl text-base lg:text-2xl"
                                                >
                                                    <img
                                                        className="inline-block me-3 align-middle h-[37px]"
                                                        src={WalletImg}
                                                        alt="Wallet Connect"
                                                    />
                                                    Wallet Connect
                                                </button>
                                            </div>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <div className="grid grid-cols-1 gap-4 mb-4">
                                                <button className="bg-[#7224EE] text-white p-2 lg:p-4 rounded-2xl text-base lg:text-2xl">
                                                    <img
                                                        className="inline-block me-3 align-middle h-[37px]"
                                                        src={GoogleImg}
                                                        alt="google"
                                                    />
                                                    Google
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4">
                                                {other_social_list.map(
                                                    (value) => {
                                                        return (
                                                            <button
                                                                key={value.id}
                                                                className="bg-[#7224EE] text-white p-2 lg:p-4 rounded-2xl text-base lg:text-2xl"
                                                            >
                                                                <img
                                                                    className="inline-block align-middle h-[37px]"
                                                                    src={
                                                                        value.icon
                                                                    }
                                                                    alt={
                                                                        value.alt
                                                                    }
                                                                />
                                                            </button>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </React.Fragment>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    {/* </Modal.Body> */}
                </Modal>
            </div>
        </Flowbite>
    )
}
