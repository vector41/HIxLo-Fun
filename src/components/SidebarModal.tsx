import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import menuBtn from '../assets/img/menu.png'
// import RectangleShape from '../assets/img/shape/collect_wallet_rectangle.png'
// import ReloadImg from '../assets/img/icons/reload.svg'
// import WalletImg from '../assets/img/icons/wallet.svg'
// import DollarSymbolImg from '../assets/img/icons/dollar_symbol.svg'

import CameraImg from '../assets/img/icons/camera.svg'
// import UserCountryImg from '../assets/img/icons/user_country.png'
import UsaImg from '../assets/img/icons/usa.svg'
import navStart from '../assets/img/nav_start.svg'

// social icons
import FacebookImg from '../assets/img/social2/facebook.png'
import TwitterImg from '../assets/img/social2/twitter.png'
import TelegramImg from '../assets/img/social2/telegram.png'
import InstagramImg from '../assets/img/social2/instagram.png'

import ArrowImg from '../assets/img/icons/arrow.svg'

// contest list icons
import RewardImg from '../assets/img/icons/reward.svg'
import HistoryImg from '../assets/img/icons/history.svg'
import LinkImg from '../assets/img/icons/link.svg'

import Challenge from '../assets/img/icons/challenge.svg'
import Wallet from '../assets/img/icons/white_wallet.svg'

import { IoIosArrowDown } from 'react-icons/io'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// flag icon images
import usaFlag from '../assets/img/flag_icons/usa.svg'
import brazilFlag from '../assets/img/flag_icons/brazil.svg'
import chinaFlag from '../assets/img/flag_icons/china.svg'
import franchFlag from '../assets/img/flag_icons/france.svg'
import germanyFlag from '../assets/img/flag_icons/germany.svg'
import hongkongFlag from '../assets/img/flag_icons/hongkong.svg'
import indiaFlag from '../assets/img/flag_icons/india.svg'
import indonesiaFlag from '../assets/img/flag_icons/indonesia.svg'
import italyFlag from '../assets/img/flag_icons/italy.svg'
import japanFlag from '../assets/img/flag_icons/japan.svg'
import malaysiaFlag from '../assets/img/flag_icons/malaysia.svg'
import polandFlag from '../assets/img/flag_icons/poland.svg'
import russiaFlag from '../assets/img/flag_icons/russia.svg'
import southkoreaFlag from '../assets/img/flag_icons/southkorea.svg'
import spainFlag from '../assets/img/flag_icons/spain.svg'
import turkeyFlag from '../assets/img/flag_icons/turkey.svg'
import ukraineFlag from '../assets/img/flag_icons/ukraine.svg'
import vietnamFlag from '../assets/img/flag_icons/vietnam.svg'
import saudiFlag from '../assets/img/flag_icons/saudi.svg'
import ChangeAvatarModal from './ChangeAvatarModal'
import { useWeb3Trade2Earn } from '../services/trade2earn'
import config from '../config'
import { useDisconnect } from 'wagmi'
import { Link, useNavigate } from 'react-router-dom'
import NumberCounter from '../views/TradingPage/NumberCounter'
import coinIcon from '../assets/img/coin.png'
import usdtIcon from '../assets/img/usdt_brand.svg'
import navRefresh from '../assets/img/nav_refresh.png'
import bg from '../assets/img/cover_bg1.png'

// function classNames(...classes: any) {
//     return classes.filter(Boolean).join(' ')
// }

function SidebarModal() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = React.useState(false)
    const { disconnect } = useDisconnect()

    const {
        profile,
        isConnectedAndLogin,
        setShowWalletModal,
        getBalance,
        walletBtn,
        balance,
        coinBalance,
    } = useWeb3Trade2Earn()
    const contest_list = [
        {
            id: 4,
            name: 'My Info',
            list: [
                {
                    id: 3,
                    title: 'My Wallet',
                    icon: Wallet,
                    router: '/wallet',
                },
                {
                    id: 1,
                    title: 'Trades History',
                    icon: HistoryImg,
                },

                {
                    id: 2,
                    title: 'Affiliate Link Manager',
                    icon: LinkImg,
                    router: '/affiliate',
                },
                {
                    id: 4,
                    title: 'Transactions',
                    icon: LinkImg,
                    router: '/transaction',
                },
            ],
            requireLogin: true,
        },
        {
            id: 1,
            name: 'Daily Contest',
            list: [
                {
                    id: 1,
                    title: 'TOP 10 High Rollers',
                    icon: RewardImg,
                    router: '/high-rollers',
                },
                {
                    id: 2,
                    title: 'Top 10 Win Ratio',
                    icon: RewardImg,
                    router: '/win-ratio',
                },
            ],
            requireLogin: false,
        },
        {
            id: 2,
            name: 'Weekly Challenges',
            list: [
                {
                    id: 1,
                    title: 'Future BTC Challenge',
                    icon: Challenge,
                    router: '/future-challenge'
                },
                {
                    id: 2,
                    title: 'BTC HIxLO Challenge (Coming soon)',
                    icon: Challenge,
                },
                // {
                //     id: 3,
                //     title: 'History',
                //     icon: HistoryImg,
                // },
            ],
            requireLogin: false,
        },
        {
            id: 3,
            name: 'Leaderboard',
            list: [
                {
                    id: 1,
                    title: 'Top 100 Winners',
                    icon: RewardImg,
                },
            ],
            requireLogin: false,
        },

        // {
        //     id: 5,
        //     name: 'Referral Program',
        //     list: [
        //         {
        //             id: 1,
        //             title: 'Link Manager',
        //             icon: LinkImg,
        //             router: '/affiliate',
        //         },
        //         {
        //             id: 2,
        //             title: 'Earnings Report',
        //             icon: EarningImg,
        //         },
        //         {
        //             id: 3,
        //             title: 'Dashboard',
        //             icon: DashboardImg,
        //         },
        //         {
        //             id: 4,
        //             title: 'Affiliate Leaderboard',
        //             icon: RewardImg,
        //         },
        //         {
        //             id: 5,
        //             title: 'Affiliate Program Tutorial',
        //             icon: AffiliateImg,
        //         },
        //     ],
        // },
        // {
        //     id: 6,
        //     name: 'Become a White Label',
        //     list: [
        //         {
        //             id: 1,
        //             title: 'Start Web3 white label program',
        //             icon: ProgramImg,
        //         },
        //         {
        //             id: 2,
        //             title: 'Become a super affiliate now',
        //             icon: ProgramImg,
        //         },
        //     ],
        // },
        // {
        //     id: 7,
        //     name: 'Info',
        //     list: [
        //         {
        //             id: 1,
        //             title: 'FAQ',
        //             icon: FaqImg,
        //         },
        //         {
        //             id: 2,
        //             title: 'Tutorial',
        //             icon: AffiliateImg,
        //         },
        //         {
        //             id: 3,
        //             title: 'Privacy Policy',
        //             icon: PrivacyImg,
        //         },
        //         {
        //             id: 4,
        //             title: 'Contact Us',
        //             icon: ContactImg,
        //         },
        //     ],
        // },
    ]

    const language_list = [
        {
            id: 1,
            lang: 'English',
            icon: usaFlag,
        },
        {
            id: 2,
            lang: '简体中文',
            icon: chinaFlag,
        },
        {
            id: 3,
            lang: '繁體中文',
            icon: hongkongFlag,
        },
        {
            id: 4,
            lang: '日本語',
            icon: japanFlag,
        },
        {
            id: 5,
            lang: '한국어',
            icon: southkoreaFlag,
        },
        {
            id: 6,
            lang: 'ภาษาไทย',
            icon: southkoreaFlag,
        },
        {
            id: 7,
            lang: 'Bahasa Melayu',
            icon: malaysiaFlag,
        },
        {
            id: 8,
            lang: 'tiếng việt',
            icon: vietnamFlag,
        },
        {
            id: 9,
            lang: 'Bahasa Indonesia',
            icon: indonesiaFlag,
        },
        {
            id: 10,
            lang: 'العربية',
            icon: saudiFlag,
        },
        {
            id: 11,
            lang: 'português',
            icon: brazilFlag,
        },
        {
            id: 12,
            lang: 'Русский',
            icon: russiaFlag,
        },
        {
            id: 13,
            lang: 'Deutsch',
            icon: germanyFlag,
        },
        {
            id: 14,
            lang: 'français',
            icon: franchFlag,
        },
        {
            id: 15,
            lang: 'italiano',
            icon: italyFlag,
        },
        {
            id: 16,
            lang: 'Türkçe',
            icon: turkeyFlag,
        },
        {
            id: 17,
            lang: 'Español',
            icon: spainFlag,
        },
        {
            id: 18,
            lang: 'Język polski',
            icon: polandFlag,
        },
        {
            id: 19,
            lang: 'हिन्दी',
            icon: indiaFlag,
        },
        {
            id: 20,
            lang: 'Українська',
            icon: ukraineFlag,
        },
    ]

    // const [showWalletModal, setShowWalletModal] = React.useState(false)
    const [showAvatarModal, setShowAvatarModal] = React.useState(false)
    // const walletBtn = React.useRef(null)
    return (
        <div className=" ms-4 sm:ms-0 sm:text-[1em] text-[2.2em] flex items-center">
            <button
                className="hover:opacity-70"
                onClick={() => setShowModal(true)}
            >
                <img
                    className="h-[2em] my-auto items-center"
                    src={menuBtn}
                    data-xblocker="passed"
                    style={{ visibility: 'visible' }}
                />
            </button>

            <div
                style={{
                    background: `url(${bg}) transparent no-repeat center center / cover`,
                    width: '100%',
                    // backgroundColor: 'rgba(48, 4, 117, 0.9)',
                }}
                className={`sidebar_modal fixed top-0 w-full overflow-auto h-full z-[1000]  duration-1000 transition-all ${showModal ? 'left-[0%]' : 'left-[110%]'}`}
            >
                <button
                    className="absolute right-[0.2em] top-[0.3em] bg-transparent text-white outline-none focus:outline-none text-[3em]"
                    onClick={() => {
                        setShowModal(false)
                    }}
                >
                    <CgCloseO></CgCloseO>
                </button>
                <div className="w-3/3 flex justify-center ">
                    {isConnectedAndLogin && (
                        <div className="flex items-center  justify-center gap-[1em] bg-[#00000059] rounded-bl-[1.5em] rounded-br-[1.5em] p-[0.7em]">
                            <button
                                className="hover:opacity-70"
                                onClick={getBalance}
                            >
                                <img
                                    src={navRefresh}
                                    className="h-[1.2em]"
                                    alt=""
                                />
                            </button>
                            <span className="flex gap-1 items-center sm:text-[1.2em] text-[1.5em] leading-[100%] font-medium text-white">
                                <img src={usdtIcon} className="h-[0.8em]" />
                                <NumberCounter
                                    startValue={0}
                                    endValue={balance}
                                />
                            </span>
                            <span className="flex gap-1 items-center sm:text-[1.2em] text-[1.5em] leading-[100%] font-medium text-white">
                                <img src={coinIcon} className="h-[0.8em]" />
                                <NumberCounter
                                    startValue={0}
                                    endValue={coinBalance}
                                />
                            </span>
                            <Link
                                to={'/wallet'}
                                ref={walletBtn}
                                onClick={() => setShowWalletModal(true)}
                                className="hover:opacity-70"
                            >
                                <img
                                    src={navStart}
                                    className="h-[1.3em]"
                                    alt="wallet"
                                    // onClick={disconnect as () => void}
                                />
                            </Link>
                        </div>
                    )}
                </div>

                <div className="sidebar_body mt-[2em]">
                    <div className="flex justify-around pt-[1em] pb-[1em] px-5 w-full max-w-[40em] mx-auto">
                        <div className="item text-center text-white flex flex-col justify-center items-center flex-1">
                            <button
                                onClick={() => setShowAvatarModal(true)}
                                className="h-[3.5em] w-[3.5em] flex justify-center items-center bg-white rounded-[0.2em] opacity-1 hover:opacity-70"
                            >
                                <img
                                    className="h-[1.5em]"
                                    src={CameraImg}
                                    alt=""
                                />
                            </button>
                            <span className="w-full text-[1em]">
                                Edit Avatar
                            </span>
                            <ChangeAvatarModal
                                showAvatarModal={showAvatarModal}
                                setShowAvatarModal={setShowAvatarModal}
                            ></ChangeAvatarModal>
                        </div>

                        <a className=" text-center text-white flex flex-col justify-center items-center">
                            <div className="w-[3.5em] h-[3.5em] rounded-[0.2em] border-[0.25em] border-[#12A2F9] hover:opacity-70">
                                <img
                                    className="w-full h-full"
                                    src={
                                        profile
                                            ? profile.Avatar
                                            : config.DEFAULT_AVATAR
                                    }
                                />
                            </div>
                            <span className="text-white text-[1em]">
                                {profile?.Username || 'Azuki'}
                            </span>
                        </a>

                        {/* dropdown */}
                        {/* <div className='w-[10em] text-center'> */}
                        <Menu as="div" className="relative flex-1 text-center ">
                            {/* <div> */}
                            <Menu.Button className="w-full item text-center justify-center text-white flex flex-col items-center hover:opacity-70">
                                <div className="flex items-center relative gap-[0.6em]">
                                    <div>
                                        <img
                                            className="h-[3.5em] w-[3.5em]"
                                            src={UsaImg}
                                            alt=""
                                        />
                                        <span className="w-full">English</span>
                                    </div>
                                    <div className="pb-[1em]">
                                        <IoIosArrowDown />
                                    </div>
                                </div>
                            </Menu.Button>
                            {/* </div> */}

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 w-[250px] sm:w-[400px] p-3 origin-top-right bg-[#42128E] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className=" max-h-[400px] bg-[#390D7C] overflow-y-auto">
                                        {language_list.map((value) => {
                                            return (
                                                <Menu.Item key={value.id}>
                                                    {() => (
                                                        <button className="w-full text-white text-start flex items-center bg-[#42128E] p-3 hover:bg-opacity-25">
                                                            <img
                                                                className="me-2 h-[32px]"
                                                                src={value.icon}
                                                                alt={value.lang}
                                                            />
                                                            <span className="text-sm sm:text-base">
                                                                {value.lang}
                                                            </span>
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            )
                                        })}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        {/* </div> */}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={
                                isConnectedAndLogin
                                    ? (disconnect as () => void)
                                    : () => setShowWalletModal(true)
                            }
                            className="px-[2em] py-[0.5em] rounded-lg text-white bg-btn-gradient font-semibold text-[1.2em] hover:opacity-70"
                        >
                            {isConnectedAndLogin
                                ? 'Disconnect Account'
                                : 'Connect Account'}
                        </button>
                        {/* <p className="text-center text-sm p-3 text-white">
                            YOU <span className="text-[#0576FA]">BRING</span>{' '}
                            THE TRAFFIC WE BRING THE{' '}
                            <span className="text-[#0576FA]">TECH</span>
                        </p> */}
                    </div>
                    <div className="container mx-auto px-5 mt-[2em]">
                        {/* <p className="text-white text-base sm:text-xl text-center">
                            Join our social
                        </p> */}
                        <ul className="flex justify-center items-center gap-5 mt-3 mb-5">
                            <li>
                                <a href="#">
                                    <img
                                        className="h-[40px] sm:h-[60px] hover:opacity-70"
                                        src={FacebookImg}
                                        alt="facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        className="h-[40px] sm:h-[60px] hover:opacity-70"
                                        src={InstagramImg}
                                        alt="instagram"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        className="h-[40px] sm:h-[60px] hover:opacity-70"
                                        src={TwitterImg}
                                        alt="twitter"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        className="h-[40px] sm:h-[60px] hover:opacity-70"
                                        src={TelegramImg}
                                        alt="telegram"
                                    />
                                </a>
                            </li>
                        </ul>

                        {/* grid */}
                        <div className="grid grid-cols-1 gap-4 py-10">
                            {contest_list.map((value) => {
                                return (
                                    (!value.requireLogin ||
                                        (value.requireLogin &&
                                            isConnectedAndLogin)) && (
                                        <div className="item" key={value.id}>
                                            <p className="text-white text-base sm:text-xl mb-4">
                                                {' '}
                                                {value.name}{' '}
                                            </p>

                                            <ul className="grid grid-cols-1 gap-4">
                                                {value.list.map((value2) => {
                                                    return (
                                                        <li key={value2.id}>
                                                            <button
                                                                onClick={() =>
                                                                    navigate(
                                                                        value2.router ||
                                                                            '/'
                                                                    )
                                                                }
                                                                className="w-full py-1 px-3 sm:py-2 sm:px-5 bg-[#441B93a2] rounded-lg"
                                                            >
                                                                <div className="flex justify-between text-white items-center">
                                                                    <div className="item flex items-center">
                                                                        <img
                                                                            src={
                                                                                value2.icon
                                                                            }
                                                                            className="me-2 sm:me-4 h-[40px] sm:h-[50px] lg:h-[70px]"
                                                                            alt=""
                                                                        />
                                                                        <span className="me-2 sm:me-4 text-base sm:text-xl">
                                                                            {
                                                                                value2.title
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <span>
                                                                        <img
                                                                            className="h-[13px] sm:h-auto"
                                                                            src={
                                                                                ArrowImg
                                                                            }
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                )
                            })}

                            {/* <div className="item">
                                <p className="text-white text-base sm:text-xl mb-4">
                                    Settings
                                </p>

                                <ul className="grid grid-cols-1 gap-4">
                                    <li>
                                        <button className="w-full py-1 px-3 sm:py-2 sm:px-5 bg-[#44178D] rounded-lg">
                                            <div className="flex justify-between text-white items-center">
                                                <div className="item flex items-center">
                                                    <img
                                                        src={SoundEffectImg}
                                                        className="me-2 sm:me-4 h-[40px] sm:h-[50px] lg:h-[70px]"
                                                        alt=""
                                                    />
                                                    <span className="me-2 sm:me-4 text-base sm:text-xl">
                                                        Sound Effects
                                                    </span>
                                                </div>

                                                <div className="flex items-center">
                                                    <input
                                                        className="hidden"
                                                        type="checkbox"
                                                        name=""
                                                        id="sound_effect_checkbox"
                                                    />
                                                    {!isSoundEffect && (
                                                        <span className="me-2 leading-0 text-sm sm:text-base">
                                                            OFF
                                                        </span>
                                                    )}
                                                    <label
                                                        onClick={() =>
                                                            setIsSoundEffect(
                                                                !isSoundEffect
                                                            )
                                                        }
                                                        htmlFor="sound_effect_checkbox"
                                                        className="flex items-center cursor-pointer"
                                                    >
                                                        <div className="w-[40px] sm:w-[60px] h-[20px] sm:h-[30px] mb-0 rounded-full bg-[#361274] inline-block relative">
                                                            <span
                                                                className={`w-[20px] sm:w-[30px] h-full rounded-full transition-all duration-400 ${isSoundEffect ? 'bg-[#00ED8B] translate-x-[100%]' : 'bg-[#DDD8E5] translate-x-[0%]'} inline-block absolute left-0 top-0`}
                                                            ></span>
                                                        </div>
                                                    </label>
                                                    {isSoundEffect && (
                                                        <span className="ms-2 leading-0 text-sm sm:text-base">
                                                            ON
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-full py-1 px-3 sm:py-2 sm:px-5 bg-[#44178D] rounded-lg">
                                            <div className="flex justify-between text-white items-center">
                                                <div className="item flex items-center">
                                                    <img
                                                        src={VoiceOverImg}
                                                        className="me-2 sm:me-4 h-[40px] sm:h-[50px] lg:h-[70px]"
                                                        alt=""
                                                    />
                                                    <span className="me-2 sm:me-4 text-base sm:text-xl">
                                                        Voiceover
                                                    </span>
                                                </div>

                                                <div className="flex items-center">
                                                    <input
                                                        className="hidden"
                                                        type="checkbox"
                                                        name=""
                                                        id="voice_over_effect_checkbox"
                                                    />
                                                    {!isVoiceOver && (
                                                        <span className="me-2 leading-0 text-sm sm:text-base">
                                                            OFF
                                                        </span>
                                                    )}
                                                    <label
                                                        onClick={() =>
                                                            setIsVoiceOver(
                                                                !isVoiceOver
                                                            )
                                                        }
                                                        htmlFor="voice_over_effect_checkbox"
                                                        className="flex items-center cursor-pointer"
                                                    >
                                                        <div className="w-[40px] sm:w-[60px] h-[20px] sm:h-[30px] mb-0 rounded-full bg-[#361274] inline-block relative">
                                                            <span
                                                                className={`w-[20px] sm:w-[30px] h-full rounded-full transition-all duration-400 ${isVoiceOver ? 'bg-[#00ED8B] translate-x-[100%]' : 'bg-[#DDD8E5] translate-x-[0%]'} inline-block absolute left-0 top-0`}
                                                            ></span>
                                                        </div>
                                                    </label>
                                                    {isVoiceOver && (
                                                        <span className="ms-2 leading-0 text-sm sm:text-base">
                                                            ON
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-full py-1 px-3 sm:py-2 sm:px-5 bg-[#44178D] rounded-lg">
                                            <div className="flex justify-between text-white items-center">
                                                <div className="item flex items-center">
                                                    <img
                                                        src={BackgroundMusic}
                                                        className="me-2 sm:me-4 h-[40px] sm:h-[50px] lg:h-[70px]"
                                                        alt=""
                                                    />
                                                    <span className="me-2 sm:me-4 text-base sm:text-xl">
                                                        Background Music
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        className="hidden"
                                                        type="checkbox"
                                                        name=""
                                                        id="voice_over_effect_checkbox"
                                                    />
                                                    {!isBgMusic && (
                                                        <span className="me-2 leading-0 text-sm sm:text-base">
                                                            OFF
                                                        </span>
                                                    )}
                                                    <label
                                                        onClick={() =>
                                                            setIsBgMusic(
                                                                !isBgMusic
                                                            )
                                                        }
                                                        htmlFor="voice_over_effect_checkbox"
                                                        className="flex items-center cursor-pointer"
                                                    >
                                                        <div className="w-[40px] sm:w-[60px] h-[20px] sm:h-[30px] mb-0 rounded-full bg-[#361274] inline-block relative">
                                                            <span
                                                                className={`w-[20px] sm:w-[30px] h-full rounded-full transition-all duration-400 ${isBgMusic ? 'bg-[#00ED8B] translate-x-[100%]' : 'bg-[#DDD8E5] translate-x-[0%]'} inline-block absolute left-0 top-0`}
                                                            ></span>
                                                        </div>
                                                    </label>
                                                    {isBgMusic && (
                                                        <span className="ms-2 leading-0 text-sm sm:text-base">
                                                            ON
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-full py-1 px-3 sm:py-2 sm:px-5 bg-[#44178D] rounded-lg">
                                            <div className="flex justify-between text-white items-center">
                                                <div className="item flex items-center">
                                                    <img
                                                        src={DisconnectImg}
                                                        className="me-2 sm:me-4 h-[40px] sm:h-[50px] lg:h-[70px]"
                                                        alt=""
                                                    />
                                                    <span className="me-2 sm:me-4 text-base sm:text-xl">
                                                        Disconnect Wallet
                                                    </span>
                                                </div>
                                                <span>
                                                    <img
                                                        className="h-[13px] sm:h-auto"
                                                        src={ArrowImg}
                                                        alt="icon"
                                                    />
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarModal
