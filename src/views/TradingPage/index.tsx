import './navbar.css'
import './desktop.css'
import './mobile.css'
import React from 'react'

import bg from '../../assets/img/background.png'
// import avatar from '../../assets/img/avatar.png'
// import menuBtn from '../../assets/img/menu.png'
// import navRefresh from '../../assets/img/nav_refresh.png'
import navResult from '../../assets/img/usdt_white.svg'
// import navStart from '../../assets/img/nav_start.png'
import contentStart from '../../assets/img/usdt_dark.svg'
import startUpBtnArrow from '../../assets/img/start_up_btn_arrow.png'
import startDownBtnArrow from '../../assets/img/start_down_btn_arrow.png'
import smallGreenBetIcon from '../../assets/img/usdt_green.svg'
import smallRedBetIcon from '../../assets/img/usdt_red.svg'
// import clock from '../../assets/img/clock.png'
// import chart1 from '../../assets/img/mobile/Chart.png'
import BTC from '../../assets/img/BTC.png'
import Money from '../../assets/img/money.png'
import upRocket from '../../assets/img/up_rocket.svg'
import downRocket from '../../assets/img/down_rocket.svg'
// import resumeBtn from '../../assets/img/mobile/resume_btn.svg'
// import player1 from '../../assets/img/avatar.png'
import upStart from '../../assets/img/mobile/up_rocket.png'
import question from '../../assets/img/mobile/question.svg'
import downStart from '../../assets/img/mobile/down_rocket.png'
import { MainTradingView } from './MainTradingView'

import {
    MessageType,
    RoundPosition,
    WinStatus,
    useWeb3Trade2Earn,
} from '../../services/trade2earn'
// import loader from '../../assets/img/loader.gif'
import { useEffect, useMemo, useRef, useState } from 'react'
// import { id } from 'ethers'
import NumberCounter from './NumberCounter'
import { Tooltip } from 'flowbite-react'
import { MobileTradingView } from './MobileTradingView'

// import ConnectWalletModal from '../../components/ConnectWalletModal'
import PageGuideModal from '../../components/PageGuideModal'
import Header from '../../components/Header'
import { getImageUrl } from '../../utils/utils'
import DepositModal from '../../components/DepositModal'

interface CustomHTMLAttributes extends React.HTMLAttributes<HTMLDivElement> {
    style?: React.CSSProperties & {
        // Add the custom CSS property '--p' to the style definition
        '--p'?: string | number
        '--b'?: string
        '--c'?: string
        '--d'?: string

        // You can add more custom CSS properties here if needed
    }
}

// Now use CustomHTMLAttributes instead of HTMLAttributes<HTMLDivElement> where needed
const CustomDiv: React.FC<CustomHTMLAttributes> = (props) => {
    // Your component implementation here
    return <div {...props}>{props.children}</div>
}

// Usage example
//   <CustomDiv style={{ '--p': 'value' }} />;

function TradingPage() {
    const {
        upPlayers,
        downPlayers,
        upPlayersCount,
        downPlayersCount,
        upTotalAmount,
        downTotalAmount,
        roundStatus,
        upPayout,
        downPayout,
        winStatus,
        noMoreTrade,
        startNewRound,
        roundHistory,
        allTimesWinsPaid,
        winsPaidFor24H,
        livePlayersFor24H,
        winRatioFor24H,
        contestPrize,
        isMobile,
        setInvest,
        invest,
        wss,
        accessToken,
        getNotifications,
        isConnectedAndLogin,
        profile,
        setShowWalletModal,
        notifyError,
        balance,
    } = useWeb3Trade2Earn()

    // useEffect(() => {
    //     startTrade();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const placeBet = (direction: boolean) => {
        if (!isConnectedAndLogin) {
            setShowWalletModal(true)
            return
        }
        if (winStatus !== WinStatus.TRADE_NOT_STARTED) {
            notifyError('Wait next round')
            return
        }

        if (wss && wss.readyState === WebSocket.OPEN && accessToken !== '') {
            const data = JSON.stringify({
                direction,
                tradeSize: invest,
                jwtToken: `Bearer ${accessToken}`,
                poolId: '30:15',
                messageType: MessageType.SUBMIT_ORDER,
            })

            wss.send(data)
        }
    }

    const timeRemaining = useMemo(() => {
        return (
            (roundStatus.tradeStartIndex -
                roundStatus.currentLocalFrameIndex +
                roundStatus.roundDuration) %
            roundStatus.roundDuration
        )
    }, [roundStatus])

    const isInitialMount = useRef(true)

    const [firstStartFrameIndex, setFirstStartFrameIndex] = useState(0)

    const invest_amounts = [5, 10, 15, 25, 50, 75, 100]

    useEffect(() => {
        if (isInitialMount.current && roundStatus.startFrameIndex > 0) {
            setFirstStartFrameIndex(roundStatus.startFrameIndex)
            isInitialMount.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roundStatus.startFrameIndex])

    useEffect(() => {
        getNotifications()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnectedAndLogin])

    return (
        <div
            id="page_content"
            style={{
                background: `url(${bg}) transparent no-repeat center center / cover`,
                width: '100%',
                height: '100vh',
            }}
        >
            <div className="trade_page flex flex-col h-screen">
                <Header />
                {!isMobile && (
                    <div className="contents">
                        <div
                            className={`pool_side up ${winStatus == WinStatus.DOWN ? 'brightness-[75%]' : ''}`}
                        >
                            {roundStatus.startPrice > 0 &&
                            roundStatus.endPrice > 0 &&
                            roundStatus.currentPosition != 4 ? (
                                <div className="pool flex justify-center items-center">
                                    <div className="animate-pulse animate-infinite animate-duration-500 text-[2.5em] font-extrabold text-white">
                                        {roundStatus.startPrice >
                                        roundStatus.endPrice ? (
                                            <div className="flex flex-col items-center text-[#FF8176]">
                                                <span className="">
                                                    {upPlayersCount} Losers
                                                </span>
                                                <div className="flex items-center gap-[0.1em]">
                                                    <img
                                                        src={smallRedBetIcon}
                                                        className="h-[0.7em]"
                                                    />
                                                    <NumberCounter
                                                        startValue={
                                                            upTotalAmount
                                                        }
                                                        endValue={0}
                                                        duration={1000}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center text-[#01c363]">
                                                <span>
                                                    {upPlayersCount} Winners
                                                </span>
                                                <div className="flex items-center gap-[0.1em]">
                                                    <img
                                                        src={smallGreenBetIcon}
                                                        className="h-[0.5em] fill-[#01c363]"
                                                    />
                                                    <NumberCounter
                                                        startValue={
                                                            upTotalAmount
                                                        }
                                                        endValue={
                                                            upTotalAmount +
                                                            downTotalAmount
                                                        }
                                                        duration={1000}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="pool">
                                    <div className="pool_header">
                                        <div className="player_num">
                                            <div className="det_title font-medium">
                                                PLAYERS
                                            </div>
                                            <span>{upPlayersCount}</span>
                                        </div>
                                        <div className="pool_size up">
                                            <div
                                                className="amount space-x-5"
                                                style={{
                                                    color: 'rgba(4, 10, 47, 1)',
                                                }}
                                            >
                                                <div className="icon-matic">
                                                    <img
                                                        src={contentStart}
                                                        className="content_result"
                                                    />
                                                </div>
                                                <span>{upTotalAmount}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="players">
                                        <div className="scroll">
                                            {upPlayers
                                                .filter(
                                                    (p) =>
                                                        p.UserId ===
                                                            profile?.UserId &&
                                                        isConnectedAndLogin
                                                )
                                                .map((trader, idx) => {
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="player_position new animate-jump-in animate-once flex-start relative"
                                                        >
                                                            <div className="absolute rounded-[50%] border-[#00d170] left-[1.3em] border-[0.25em] top-[2.2em]"></div>
                                                            <img
                                                                src={
                                                                    trader.Avatar
                                                                }
                                                                className="user_avatar"
                                                            />
                                                            <div className="country">
                                                                <img
                                                                    src={getImageUrl(
                                                                        `../assets/img/flag/${trader?.CountryCode?.toLowerCase()}.svg`
                                                                    )}
                                                                    className="left"
                                                                />
                                                            </div>
                                                            <div className="invest flex items-center">
                                                                <img
                                                                    src={
                                                                        smallGreenBetIcon
                                                                    }
                                                                    className="small_bet_icon"
                                                                />
                                                                <span className="text-[1.2em]">
                                                                    {
                                                                        trader.TradeSize
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            {upPlayers
                                                .filter(
                                                    (p) =>
                                                        (p.UserId !==
                                                            profile?.UserId &&
                                                            isConnectedAndLogin) ||
                                                        !isConnectedAndLogin
                                                )
                                                .map((trader, idx) => {
                                                    return (
                                                        <div
                                                            key={
                                                                upPlayers.length -
                                                                idx
                                                            }
                                                            className="player_position new animate-jump-in animate-once flex-start relative"
                                                        >
                                                            <img
                                                                src={
                                                                    trader.Avatar
                                                                }
                                                                className="user_avatar"
                                                            />
                                                            <div className="country">
                                                                <img
                                                                    src={getImageUrl(
                                                                        `../assets/img/flag/${trader?.CountryCode?.toLowerCase()}.svg`
                                                                    )}
                                                                    className="left"
                                                                />
                                                            </div>
                                                            <div className="invest flex items-center">
                                                                <img
                                                                    src={
                                                                        smallGreenBetIcon
                                                                    }
                                                                    className="small_bet_icon"
                                                                />
                                                                <span className="text-[1.2em]">
                                                                    {
                                                                        trader.TradeSize
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button
                                className={`trade_btn overflow-hidden flex justify-center items-center w-full h-full py-[1em] ${winStatus === WinStatus.TRADE_NOT_STARTED ? '' : 'brightness-[75%]'}`}
                                // disabled={
                                //     winStatus != WinStatus.TRADE_NOT_STARTED
                                // }
                                onClick={() => placeBet(true)}
                            >
                                <img src={startUpBtnArrow} className="h-full" />
                            </button>
                        </div>
                        <div className="trade_center">
                            <div className="market">
                                <div className="stats">
                                    <div className="side up">
                                        <div className="pool_payout">
                                            <div className="title">
                                                HIGH Pool PAYOUT
                                            </div>
                                            <div className="amount up">
                                                {upPayout}
                                                <span className="sign">%</span>
                                            </div>
                                        </div>
                                        <div className="own_stats">
                                            <div className="investment">
                                                <div className="title">
                                                    YOUR INVESTMENT
                                                </div>
                                                <div className="amount">
                                                    <div className="icon-matic"></div>
                                                    {invest.toLocaleString()}
                                                </div>
                                            </div>
                                            <div className="payout">
                                                <div className="title">
                                                    POTENTIAL RETURN
                                                </div>
                                                <div className="amount large_txt">
                                                    <div className="icon-matic"></div>
                                                    {(
                                                        (invest * upPayout) /
                                                        100
                                                    ).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side down">
                                        <div className="pool_payout">
                                            <div className="title">
                                                LOW Pool PAYOUT
                                            </div>
                                            <div className="amount down">
                                                {downPayout}
                                                <span className="sign">%</span>
                                            </div>
                                        </div>
                                        <div className="own_stats">
                                            <div className="investment">
                                                <div className="title">
                                                    YOUR INVESTMENT
                                                </div>
                                                <div className="amount">
                                                    <div className="icon-matic"></div>
                                                    {invest.toLocaleString()}
                                                </div>
                                            </div>
                                            <div className="payout">
                                                <div className="title">
                                                    POTENTIAL RETURN
                                                </div>
                                                <div className="amount large_txt">
                                                    <div className="icon-matic"></div>
                                                    {(
                                                        (invest * downPayout) /
                                                        100
                                                    ).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position_timer">
                                    <div className="w-[9em] h-[9em] mt-[1em] opacity-80 rounded-full bg-[#040a2f] relative">
                                        <div className="p-[0.3em] w-full h-full">
                                            <CustomDiv
                                                className="pie w-full h-full"
                                                style={{
                                                    '--p':
                                                        winStatus !=
                                                            WinStatus.TRADE_NOT_STARTED ||
                                                        roundStatus.startFrameIndex ==
                                                            0
                                                            ? 0
                                                            : 100 -
                                                              (Math.ceil(
                                                                  timeRemaining /
                                                                      4
                                                              ) *
                                                                  4) /
                                                                  1.2,
                                                    '--b': '0.9em',
                                                    '--c': ['red', '#0064FB'][
                                                        roundStatus.startFrameIndex >
                                                            0 &&
                                                        timeRemaining <= 20
                                                            ? 0
                                                            : 1
                                                    ],
                                                    '--d': [
                                                        '#FEA613',
                                                        '#1ECDF8',
                                                    ][
                                                        roundStatus.startFrameIndex >
                                                            0 &&
                                                        timeRemaining <= 20
                                                            ? 0
                                                            : 1
                                                    ],
                                                }}
                                            >
                                                <span className="z-[10]">
                                                    {(roundStatus.startPrice >
                                                        0 &&
                                                        winStatus !=
                                                            WinStatus.TRADE_NOT_STARTED) ||
                                                    roundStatus.currentLocalFrameIndex ==
                                                        0 ? (
                                                        <div className="flex gap-[0.25em] w-[3em] h-[1.5em]">
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '0ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '140ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '280ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '420ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '560ms',
                                                                }}
                                                            ></div>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center">
                                                            <div className="relative">
                                                                <span className="text-[3em] text-[#9469FC] leading-[0.8em] z-10">
                                                                    {Math.ceil(
                                                                        timeRemaining /
                                                                            4
                                                                    )}
                                                                </span>
                                                                <span className="absolute text-[3em] text-[#9469FCAA] leading-[0.8em] blur-md left-0">
                                                                    {Math.ceil(
                                                                        timeRemaining /
                                                                            4
                                                                    )}
                                                                </span>
                                                            </div>

                                                            <span className="text-white text-[1em] leading-[1em]">
                                                                Sec
                                                            </span>
                                                        </div>
                                                    )}
                                                </span>
                                            </CustomDiv>
                                        </div>
                                        {/* <div className="top-0 absolute w-full h-full p-[0.3em]">
                                        <div className="rounded-full from-[#3d117d] to-[#040a2f] w-full h-full bg-[radial-gradient(var(--tw-gradient-stops))]"></div>
                                    </div> */}
                                        {Array.from(
                                            { length: 30 },
                                            (_, index) => index
                                        ).map((_, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    top: '4.45em',
                                                    left: '4.5em',
                                                    position: 'absolute',
                                                    rotate:
                                                        6 + idx * 12 + 'deg',
                                                    transformOrigin: 'left',
                                                    background: '#040a2f',
                                                    width: '4.5em',
                                                    height: '0.1em',
                                                    zIndex: 5,
                                                }}
                                            ></div>
                                        ))}
                                        <div className="top-0 absolute w-full h-full p-[1.2em] z-[6]">
                                            <div className="rounded-full from-[#3d117d] to-[#040a2f] w-full h-full bg-[radial-gradient(var(--tw-gradient-stops))]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="trading-view" className="graph_area">
                                    <div className="market_label w-full px-[1em] left-0">
                                        {startNewRound && (
                                            <div
                                                key={
                                                    roundStatus.startFrameIndex
                                                }
                                                className="test text-center"
                                            >
                                                <p className="animate-pulse animate-thrice animate-duration-500 whitespace-nowrap market_md_label">
                                                    PLACE YOUR TRADE
                                                </p>
                                            </div>
                                        )}

                                        {noMoreTrade && (
                                            <div
                                                key={
                                                    roundStatus.tradeStartIndex
                                                }
                                                className="test text-center"
                                            >
                                                <p className="animate-pulse animate-thrice animate-duration-500 whitespace-nowrap market_md_label">
                                                    NO MORE TRADE
                                                </p>
                                                {/* <p className="w-fit animate-pulse animate-twice animate-duration-500 whitespace-nowrap market_sm_label">
                                            Up or Down?
                                        </p> */}
                                            </div>
                                        )}

                                        {roundStatus.startPrice == 0 &&
                                            winStatus ===
                                                WinStatus.TRADE_NOT_STARTED &&
                                            !(
                                                firstStartFrameIndex ===
                                                roundStatus.startFrameIndex
                                            ) && (
                                                <div
                                                    key={
                                                        roundStatus.startFrameIndex +
                                                        1
                                                    }
                                                    className="animate-jump-out animate-once animate-duration-[0ms] animate-delay-[1500ms] text-center mt-[1em] text-[3em]"
                                                >
                                                    <p className="animate-pulse animate-thrice animate-duration-500 whitespace-nowrap market_md_label ">
                                                        MONEY DISTRIBUTED
                                                    </p>
                                                </div>
                                            )}
                                    </div>
                                    <div className="flex w-full justify-center absolute top-[5em]">
                                        <img src={BTC} className="w-[11em]" />
                                    </div>
                                    <div className="history_graph">
                                        <MainTradingView />
                                    </div>
                                    <div
                                        id="state-info"
                                        className="state_info left-[0.4em] right-[0.4em]"
                                    >
                                        <div className="content_bottom_jackpot w-full flex items-center">
                                            <a className="jackpot p-[0.5em]">
                                                <div className="toppurple w-full px-[1em] flex justify-center">
                                                    <span className="text-white font-medium text-[1.2em]">
                                                        Prize
                                                    </span>
                                                    <img
                                                        src={Money}
                                                        key={contestPrize.toLocaleString()}
                                                        className="animate-jump animate-thrice animate-duration-500 animate-ease-in-out"
                                                    />
                                                </div>
                                                <div className="bottomblue flex items-center gap-[0.4em] justify-center px-[1em]">
                                                    <img
                                                        src={navResult}
                                                        className="jackpot_money"
                                                    />
                                                    <span className="jackpot_money_label">
                                                        <NumberCounter
                                                            startValue={0}
                                                            endValue={
                                                                contestPrize
                                                            }
                                                        />
                                                        {/* {contestPrize.toLocaleString()} */}
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="items-center w-full">
                                                <div className="web_system_stats w-full flex flex-wrap justify-evenly items-center">
                                                    <div className="each_state text-[1em]">
                                                        <div className="win">
                                                            24H WIN
                                                        </div>
                                                        <div className="ratio flex items-center">
                                                            <span className="ratio_label">
                                                                RATIO:
                                                            </span>
                                                            <span className="ratio_number">
                                                                {(
                                                                    winRatioFor24H *
                                                                    100
                                                                ).toFixed(2)}
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="border_row_line"></div>

                                                    <div className="each_state text-[1em]">
                                                        <div className="win">
                                                            24H LIVE
                                                        </div>
                                                        <div className="ratio flex items-center">
                                                            <span className="ratio_label">
                                                                PLAYERS:
                                                            </span>
                                                            <span className="ratio_number">
                                                                {
                                                                    livePlayersFor24H
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="border_row_line"></div>

                                                    <div className="each_state text-[1em]">
                                                        <div className="win">
                                                            24H WINS
                                                        </div>
                                                        <div className="ratio flex items-center">
                                                            <span className="ratio_label">
                                                                PAID:
                                                            </span>
                                                            <span className="ratio_number flex items-center gap-[0.3em]">
                                                                <img
                                                                    src={
                                                                        navResult
                                                                    }
                                                                    className="h-[1.2em]"
                                                                />
                                                                <span className="">
                                                                    {winsPaidFor24H.toLocaleString()}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="border_row_line"></div>

                                                    <div className="each_state">
                                                        <div className="win text-[1em]">
                                                            ALL TIMES{' '}
                                                        </div>
                                                        <div className="ratio flex items-center">
                                                            <span className="ratio_label">
                                                                WINS PAID:
                                                            </span>
                                                            <span className="ratio_number flex items-center gap-[0.3em]">
                                                                <img
                                                                    src={
                                                                        navResult
                                                                    }
                                                                    className="h-[1.2em]"
                                                                />
                                                                <span className="text-[1em]">
                                                                    {allTimesWinsPaid.toLocaleString()}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="results gap-[0.25em]">
                                                    {roundHistory
                                                        .slice(0, -1)
                                                        .map((r, idx) => (
                                                            <div
                                                                className="flex-1"
                                                                key={idx}
                                                            >
                                                                <Tooltip
                                                                    key={`${r.startPrice}-${r.endPrice}-${idx}`}
                                                                    content={
                                                                        <div className="rocket_popUp">
                                                                            {/* <div
                                                                                className="btn_pop"
                                                                                onClick={() =>
                                                                                    window.open(
                                                                                        `https://polygonscan.com/tx/${r.txnHash}`,
                                                                                        '_blank'
                                                                                    )
                                                                                }
                                                                            >
                                                                                Click
                                                                                Hash
                                                                            </div> */}
                                                                            <span className="pop_label">
                                                                                START
                                                                                RATE
                                                                            </span>
                                                                            <span
                                                                                className={
                                                                                    r.startPrice >
                                                                                    r.endPrice
                                                                                        ? 'pop_label_up_number'
                                                                                        : 'pop_label_down_number'
                                                                                }
                                                                            >
                                                                                {r.startPrice?.toFixed(
                                                                                    3
                                                                                )}
                                                                            </span>
                                                                            <div className="divide_line h-[1px]"></div>
                                                                            {/* <hr className='border-dashed border-0 border-t-2 border-[linear-gradient(to right, #fff0, #fff)]'></hr> */}
                                                                            <span className="pop_label">
                                                                                END
                                                                                RATE
                                                                            </span>
                                                                            <span
                                                                                className={
                                                                                    r.startPrice <
                                                                                    r.endPrice
                                                                                        ? 'pop_label_up_number'
                                                                                        : 'pop_label_down_number'
                                                                                }
                                                                            >
                                                                                {r.endPrice?.toFixed(
                                                                                    3
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                    }
                                                                    arrow={
                                                                        false
                                                                    }
                                                                    className="bg-transparent text-[1em]"
                                                                    children={
                                                                        <div className="btn_purple w-full py-[0.3em] animate-fade-left1 animate-once">
                                                                            <img
                                                                                src={
                                                                                    r.startPrice >
                                                                                    r.endPrice
                                                                                        ? downRocket
                                                                                        : upRocket
                                                                                }
                                                                            />
                                                                        </div>
                                                                    }
                                                                />
                                                            </div>
                                                        ))}

                                                    {/* {
                                                    roundHistory.slice(0, -1).map((r, idx) => <div key={`${r.startPrice}-${r.endPrice}-${idx}`} className="btn_purple flex-1 py-[0.3em] animate-fade-left animate-once">
                                                        <img src={r.startPrice > r.endPrice ? downRocket : upRocket} />
                                                    </div>)
                                                } */}
                                                    {roundHistory?.length >
                                                        0 && (
                                                        <div className="flex-1">
                                                            <Tooltip
                                                                key={`${roundHistory[roundHistory.length - 1].startPrice}${roundHistory[roundHistory.length - 1].endPrice}`}
                                                                content={
                                                                    <div className="rocket_popUp">
                                                                        {/* <div
                                                                                className="btn_pop"
                                                                                onClick={() =>
                                                                                    window.open(
                                                                                        `https://polygonscan.com/tx/${roundHistory[roundHistory.length - 1].txnHash}`,
                                                                                        '_blank'
                                                                                    )
                                                                                }
                                                                            >
                                                                                Click
                                                                                Hash
                                                                            </div> */}
                                                                        <span className="pop_label">
                                                                            START
                                                                            RATE
                                                                        </span>
                                                                        <span
                                                                            className={
                                                                                roundHistory[
                                                                                    roundHistory.length -
                                                                                        1
                                                                                ]
                                                                                    .startPrice >
                                                                                roundHistory[
                                                                                    roundHistory.length -
                                                                                        1
                                                                                ]
                                                                                    .endPrice
                                                                                    ? 'pop_label_up_number'
                                                                                    : 'pop_label_down_number'
                                                                            }
                                                                        >
                                                                            {roundHistory[
                                                                                roundHistory.length -
                                                                                    1
                                                                            ].startPrice?.toFixed(
                                                                                3
                                                                            )}
                                                                        </span>
                                                                        <div className="divide_line h-[1px]"></div>
                                                                        {/* <hr className='border-dashed border-0 border-t-2 border-[linear-gradient(to right, #fff0, #fff)]'></hr> */}
                                                                        <span className="pop_label">
                                                                            END
                                                                            RATE
                                                                        </span>
                                                                        <span
                                                                            className={
                                                                                roundHistory[
                                                                                    roundHistory.length -
                                                                                        1
                                                                                ]
                                                                                    .startPrice <
                                                                                roundHistory[
                                                                                    roundHistory.length -
                                                                                        1
                                                                                ]
                                                                                    .endPrice
                                                                                    ? 'pop_label_up_number'
                                                                                    : 'pop_label_down_number'
                                                                            }
                                                                        >
                                                                            {roundHistory[
                                                                                roundHistory.length -
                                                                                    1
                                                                            ].endPrice?.toFixed(
                                                                                3
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                }
                                                                arrow={false}
                                                                className="bg-transparent text-[1em]"
                                                                children={
                                                                    <div className="btn_purple w-full py-[0.3em] animate-fade-up animate-once">
                                                                        <img
                                                                            src={
                                                                                roundHistory[
                                                                                    roundHistory.length -
                                                                                        1
                                                                                ]
                                                                                    .startPrice >
                                                                                roundHistory[
                                                                                    roundHistory.length -
                                                                                        1
                                                                                ]
                                                                                    .endPrice
                                                                                    ? downRocket
                                                                                    : upRocket
                                                                            }
                                                                        />
                                                                    </div>
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invest_select gap-[1em] px-[0.5em] pt-[0.7em] pb-[0.35em]">
                                            {invest_amounts.map((amount) => {
                                                return (
                                                    <div
                                                        className={`invest_btn ${invest == amount ? 'invest_btn_active' : ''} flex-1`}
                                                        onClick={() =>
                                                            setInvest(amount)
                                                        }
                                                        key={amount}
                                                    >
                                                        <p>{amount}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`pool_side down ${winStatus == WinStatus.UP ? 'brightness-[75%]' : ''}`}
                        >
                            {roundStatus.startPrice > 0 &&
                            roundStatus.endPrice > 0 &&
                            roundStatus.currentPosition !=
                                RoundPosition.DISTRIBUTED ? (
                                <div className="pool flex justify-center items-center">
                                    <div className="animate-pulse animate-infinite animate-duration-500 text-[2.5em] font-extrabold text-white">
                                        {roundStatus.startPrice <
                                        roundStatus.endPrice ? (
                                            <div className="flex flex-col items-center text-[#FF8176]">
                                                <span className="">
                                                    {downPlayersCount} Losers
                                                </span>
                                                <div className="flex items-center gap-[0.1em]">
                                                    <img
                                                        src={smallRedBetIcon}
                                                        className="h-[0.5em] fill-[#FF8176]"
                                                    />
                                                    <NumberCounter
                                                        startValue={
                                                            downTotalAmount
                                                        }
                                                        endValue={0}
                                                        duration={1000}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center text-[#01c363]">
                                                <span>
                                                    {downPlayersCount} Winners
                                                </span>
                                                <div className="flex items-center gap-[0.1em]">
                                                    <img
                                                        src={smallGreenBetIcon}
                                                        className="h-[0.7em]"
                                                    />
                                                    <NumberCounter
                                                        startValue={
                                                            downTotalAmount
                                                        }
                                                        endValue={
                                                            upTotalAmount +
                                                            downTotalAmount
                                                        }
                                                        duration={1000}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="pool">
                                    <div className="pool_header">
                                        <div className="player_num">
                                            <div className="det_title font-medium">
                                                PLAYERS
                                            </div>
                                            <span>{downPlayersCount}</span>
                                        </div>
                                        <div className="pool_size down">
                                            <div
                                                className="amount space-x-5"
                                                style={{
                                                    color: 'rgba(4, 10, 47, 1)',
                                                }}
                                            >
                                                <span>{downTotalAmount}</span>
                                                <div className="icon-matic">
                                                    <img
                                                        src={contentStart}
                                                        className="content_result"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="players">
                                        <div className="scroll">
                                            {downPlayers
                                                .filter(
                                                    (p) =>
                                                        p.UserId ===
                                                            profile?.UserId &&
                                                        isConnectedAndLogin
                                                )
                                                .map((trader, idx) => {
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="player_position new animate-jump-in animate-once flex-start"
                                                        >
                                                            <div className="absolute rounded-[50%] border-[#fb7063] left-[1.3em] border-[0.25em] top-[2.2em]"></div>
                                                            <img
                                                                src={
                                                                    trader.Avatar
                                                                }
                                                                className="user_avatar"
                                                            />
                                                            <div className="country">
                                                                <img
                                                                    src={getImageUrl(
                                                                        `../assets/img/flag/${trader?.CountryCode?.toLowerCase()}.svg`
                                                                    )}
                                                                    className="right"
                                                                />
                                                            </div>
                                                            <div className="invest flex items-center">
                                                                <img
                                                                    src={
                                                                        smallRedBetIcon
                                                                    }
                                                                    className="small_bet_icon"
                                                                />
                                                                <span className="text-[1.2em]">
                                                                    {
                                                                        trader.TradeSize
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            {downPlayers
                                                .filter(
                                                    (p) =>
                                                        (p.UserId !==
                                                            profile?.UserId &&
                                                            isConnectedAndLogin) ||
                                                        !isConnectedAndLogin
                                                )
                                                .map((trader, idx) => {
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="player_position new animate-jump-in animate-once flex-start"
                                                        >
                                                            <img
                                                                src={
                                                                    trader.Avatar
                                                                }
                                                                className="user_avatar"
                                                            />
                                                            <div className="country">
                                                                <img
                                                                    src={getImageUrl(
                                                                        `../assets/img/flag/${trader?.CountryCode?.toLowerCase()}.svg`
                                                                    )}
                                                                    className="right"
                                                                />
                                                            </div>
                                                            <div className="invest flex items-center">
                                                                <img
                                                                    src={
                                                                        smallRedBetIcon
                                                                    }
                                                                    className="small_bet_icon"
                                                                />
                                                                <span className="text-[1.2em]">
                                                                    {
                                                                        trader.TradeSize
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button
                                className={`trade_btn overflow-hidden flex justify-center items-center w-full h-full py-[1em] ${winStatus === WinStatus.TRADE_NOT_STARTED ? '' : 'brightness-[75%]'}`}
                                // disabled={
                                //     winStatus != WinStatus.TRADE_NOT_STARTED
                                // }
                                onClick={() => placeBet(false)}
                            >
                                <img
                                    src={startDownBtnArrow}
                                    className="h-full"
                                />
                            </button>
                        </div>
                    </div>
                )}
                {isMobile && (
                    <div className="mobile_contents flex-1 flex flex-col pt-2">
                        <div className="px-[2em] relative text-[0.8em]">
                            <div className="pool_label_1">
                                <span className="m_left">HIGH Pool Payout</span>
                                <span className="m_right">LOW Pool Payout</span>
                            </div>

                            <div className="pool_label_2 text-[1.3em]">
                                <span className="m_left">
                                    {(
                                        (invest * upPayout) /
                                        100
                                    ).toLocaleString()}
                                </span>
                                <span className="m_right">
                                    {(
                                        (invest * downPayout) /
                                        100
                                    ).toLocaleString()}
                                </span>
                            </div>

                            <div className="pool_label_3 text-[1.2em]">
                                <span className="m_left">{upPayout}%</span>
                                <span className="m_right">{downPayout}%</span>
                            </div>

                            <div className="clock" id="clock">
                                {/* <img src={clock} /> */}
                                <div className="position_timer text-[3.5em] absolute top-[-0.8em]">
                                    <div className="w-[9em] h-[9em] mt-[1em] opacity-100 rounded-full bg-[#040a2f] relative">
                                        <div className="p-[0.3em] w-full h-full">
                                            <CustomDiv
                                                className="pie w-full h-full"
                                                style={{
                                                    '--p':
                                                        winStatus !=
                                                            WinStatus.TRADE_NOT_STARTED ||
                                                        roundStatus.startFrameIndex ==
                                                            0
                                                            ? 0
                                                            : 100 -
                                                              (Math.ceil(
                                                                  timeRemaining /
                                                                      4
                                                              ) *
                                                                  4) /
                                                                  1.2,
                                                    '--b': '0.9em',
                                                    '--c': ['red', '#0064FB'][
                                                        roundStatus.startFrameIndex >
                                                            0 &&
                                                        timeRemaining <= 20
                                                            ? 0
                                                            : 1
                                                    ],
                                                    '--d': [
                                                        '#FEA613',
                                                        '#1ECDF8',
                                                    ][
                                                        roundStatus.startFrameIndex >
                                                            0 &&
                                                        timeRemaining <= 20
                                                            ? 0
                                                            : 1
                                                    ],
                                                }}
                                            >
                                                <span className="z-[10]">
                                                    {(roundStatus.startPrice >
                                                        0 &&
                                                        winStatus !=
                                                            WinStatus.TRADE_NOT_STARTED) ||
                                                    roundStatus.currentLocalFrameIndex ==
                                                        0 ? (
                                                        <div className="flex gap-[0.25em] w-[3em] h-[1.5em]">
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '0ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '140ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '280ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '420ms',
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="rounded-full dot-elastic"
                                                                style={{
                                                                    animationDelay:
                                                                        '560ms',
                                                                }}
                                                            ></div>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center">
                                                            <div className="relative">
                                                                <span className="text-[3em] text-[#9469FC] leading-[0.8em] z-10">
                                                                    {Math.ceil(
                                                                        timeRemaining /
                                                                            4
                                                                    )}
                                                                </span>
                                                                <span className="absolute text-[3em] text-[#9469FCAA] leading-[0.8em] blur-md left-0">
                                                                    {Math.ceil(
                                                                        timeRemaining /
                                                                            4
                                                                    )}
                                                                </span>
                                                            </div>

                                                            <span className="text-white text-[1em] leading-[1em]">
                                                                Sec
                                                            </span>
                                                        </div>
                                                    )}
                                                </span>
                                            </CustomDiv>
                                        </div>

                                        {Array.from(
                                            { length: 30 },
                                            (_, index) => index
                                        ).map((_, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    top: '4.45em',
                                                    left: '4.5em',
                                                    position: 'absolute',
                                                    rotate:
                                                        6 + idx * 12 + 'deg',
                                                    transformOrigin: 'left',
                                                    background: '#040a2f',
                                                    width: '4.5em',
                                                    height: '0.1em',
                                                    zIndex: 5,
                                                }}
                                            ></div>
                                        ))}
                                        <div className="top-0 absolute w-full h-full p-[1.2em] z-[6]">
                                            <div className="rounded-full from-[#3d117d] to-[#040a2f] w-full h-full bg-[radial-gradient(var(--tw-gradient-stops))]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btc absolute top-[30em]">
                            <img src={BTC} />
                        </div>

                        <div
                            className="flex-1 relative overflow-hidden"
                            id="trading-view"
                        >
                            {/* <img src={chart1} /> */}
                            <div className="market_label w-full text-[2em] px-[1em] left-0 top-[-2em]">
                                {startNewRound && (
                                    <div
                                        key={roundStatus.startFrameIndex}
                                        className="test text-center"
                                    >
                                        <p className="animate-pulse animate-thrice animate-duration-500 whitespace-nowrap market_md_label">
                                            PLACE YOUR TRADE
                                        </p>
                                    </div>
                                )}

                                {noMoreTrade && (
                                    <div
                                        key={roundStatus.tradeStartIndex}
                                        className="test text-center"
                                    >
                                        <p className="animate-pulse animate-thrice animate-duration-500 whitespace-nowrap market_md_label">
                                            NO MORE TRADE
                                        </p>
                                        {/* <p className="w-fit animate-pulse animate-twice animate-duration-500 whitespace-nowrap market_sm_label">
                                            Up or Down?
                                        </p> */}
                                    </div>
                                )}

                                {roundStatus.startPrice == 0 &&
                                    winStatus === WinStatus.TRADE_NOT_STARTED &&
                                    !(
                                        firstStartFrameIndex ===
                                        roundStatus.startFrameIndex
                                    ) && (
                                        <div
                                            key={
                                                roundStatus.startFrameIndex + 1
                                            }
                                            className="animate-jump-out animate-once animate-duration-[0ms] animate-delay-[1500ms] text-center mt-[1em] text-[2em]"
                                        >
                                            <p className="animate-pulse animate-thrice animate-duration-500 whitespace-nowrap market_md_label">
                                                MONEY DISTRIBUTED
                                            </p>
                                        </div>
                                    )}
                            </div>
                            <div className="h-full overflow-y-auto">
                                <MobileTradingView />
                            </div>
                        </div>
                        <div className="px-[1em]" id="state-infos">
                            <div className="results">
                                <div className="jacket text-white">
                                    <div className="jacket_label flex justify-center gap-[0.3em]">
                                        <span className="text-white font-bold z-50">
                                            Prize Pool
                                        </span>
                                        <img src={Money} />
                                    </div>

                                    <div className="jacket_number flex justify-center items-center rounded-b-[0.3em] px-[1em] pt-[0.2em] pb-[0.1em] text-[2.8em] gap-[0.2em] min-w-[8em]">
                                        <img
                                            src={navResult}
                                            className="h-[0.8em]"
                                        />
                                        <NumberCounter
                                            startValue={0}
                                            endValue={contestPrize}
                                        />
                                        {/* {contestPrize.toLocaleString()} */}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex mb-[0.5em]">
                                        <div className="w-full text-[2.5em] leading-[1.2em] flex items-end">
                                            <div className="flex-1 text-[#7786cb]">
                                                24H WIN RATIO:
                                            </div>
                                            <span className="flex-1 text-white">
                                                {(winRatioFor24H * 100).toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            {/* </div>
                                        <div className='w-full text-[2.3em] flex items-center'> */}
                                            <div className="flex-1 text-[#7786cb]">
                                                24H WINs PAID:
                                            </div>
                                            <span className="px-[0.3em] flex-1 text-white flex items-center gap-[0.1em] justify-center">
                                                <img
                                                    src={navResult}
                                                    className="h-[1em]"
                                                />
                                                <span className="align-bottom">
                                                    {winsPaidFor24H}
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-[0.5em]">
                                        {roundHistory
                                            .slice(
                                                Math.max(
                                                    roundHistory.length - 6,
                                                    0
                                                ),
                                                -1
                                            )
                                            .map((r, idx) => (
                                                <div className="flex-1">
                                                    <Tooltip
                                                        key={`${r.startPrice}-${r.endPrice}-${idx}`}
                                                        content={
                                                            <div className="rocket_popUp">
                                                                {/* <div
                                                                    className="btn_pop"
                                                                    onClick={() =>
                                                                        window.open(
                                                                            `https://polygonscan.com/tx/${r.txnHash}`,
                                                                            '_blank'
                                                                        )
                                                                    }
                                                                >
                                                                    Click Hash
                                                                </div> */}
                                                                <span className="pop_label">
                                                                    START RATE
                                                                </span>
                                                                <span
                                                                    className={
                                                                        r.startPrice >
                                                                        r.endPrice
                                                                            ? 'pop_label_up_number'
                                                                            : 'pop_label_down_number'
                                                                    }
                                                                >
                                                                    {r.startPrice?.toFixed(
                                                                        3
                                                                    )}
                                                                </span>
                                                                <div className="divide_line h-[1px]"></div>
                                                                {/* <hr className='border-dashed border-0 border-t-2 border-[linear-gradient(to right, #fff0, #fff)]'></hr> */}
                                                                <span className="pop_label">
                                                                    END RATE
                                                                </span>
                                                                <span
                                                                    className={
                                                                        r.startPrice <
                                                                        r.endPrice
                                                                            ? 'pop_label_up_number'
                                                                            : 'pop_label_down_number'
                                                                    }
                                                                >
                                                                    {r.endPrice?.toFixed(
                                                                        3
                                                                    )}
                                                                </span>
                                                            </div>
                                                        }
                                                        arrow={false}
                                                        className="bg-transparent text-[4em]"
                                                        children={
                                                            <div
                                                                className="w-full py-[0.8em] animate-fade-left1 animate-once rounded-[1em] border flex justify-center"
                                                                style={
                                                                    r.startPrice >
                                                                    r.endPrice
                                                                        ? {
                                                                              borderColor:
                                                                                  '#FF685A',
                                                                          }
                                                                        : {
                                                                              borderColor:
                                                                                  '#02ED8E',
                                                                          }
                                                                }
                                                            >
                                                                <img
                                                                    src={
                                                                        r.startPrice >
                                                                        r.endPrice
                                                                            ? downRocket
                                                                            : upRocket
                                                                    }
                                                                    className="h-[3.2em]"
                                                                />
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                            ))}

                                        {/* {
                                        roundHistory.slice(0, -1).map((r, idx) => <div key={`${r.startPrice}-${r.endPrice}-${idx}`} className="btn_purple flex-1 py-[0.3em] animate-fade-left animate-once">
                                            <img src={r.startPrice > r.endPrice ? downRocket : upRocket} />
                                        </div>)
                                    } */}
                                        {roundHistory?.length > 0 && (
                                            <div className="flex-1">
                                                <Tooltip
                                                    key={`${roundHistory[roundHistory.length - 1].startPrice}${roundHistory[roundHistory.length - 1].endPrice}`}
                                                    content={
                                                        <div className="rocket_popUp">
                                                            {/* <div
                                                                className="btn_pop"
                                                                onClick={() =>
                                                                    window.open(
                                                                        `https://polygonscan.com/tx/${roundHistory[roundHistory.length - 1].txnHash}`,
                                                                        '_blank'
                                                                    )
                                                                }
                                                            >
                                                                Click Hash
                                                            </div> */}
                                                            <span className="pop_label">
                                                                START RATE
                                                            </span>
                                                            <span
                                                                className={
                                                                    roundHistory[
                                                                        roundHistory.length -
                                                                            1
                                                                    ]
                                                                        .startPrice >
                                                                    roundHistory[
                                                                        roundHistory.length -
                                                                            1
                                                                    ].endPrice
                                                                        ? 'pop_label_up_number'
                                                                        : 'pop_label_down_number'
                                                                }
                                                            >
                                                                {roundHistory[
                                                                    roundHistory.length -
                                                                        1
                                                                ].startPrice?.toFixed(
                                                                    3
                                                                )}
                                                            </span>
                                                            <div className="divide_line h-[1px]"></div>
                                                            {/* <hr className='border-dashed border-0 border-t-2 border-[linear-gradient(to right, #fff0, #fff)]'></hr> */}
                                                            <span className="pop_label">
                                                                END RATE
                                                            </span>
                                                            <span
                                                                className={
                                                                    roundHistory[
                                                                        roundHistory.length -
                                                                            1
                                                                    ]
                                                                        .startPrice <
                                                                    roundHistory[
                                                                        roundHistory.length -
                                                                            1
                                                                    ].endPrice
                                                                        ? 'pop_label_up_number'
                                                                        : 'pop_label_down_number'
                                                                }
                                                            >
                                                                {roundHistory[
                                                                    roundHistory.length -
                                                                        1
                                                                ].endPrice?.toFixed(
                                                                    3
                                                                )}
                                                            </span>
                                                        </div>
                                                    }
                                                    arrow={false}
                                                    className="bg-transparent text-[4em]"
                                                    children={
                                                        <div
                                                            className="w-full py-[0.8em] animate-fade-up animate-once rounded-[1em] border flex justify-center"
                                                            style={
                                                                roundHistory[
                                                                    roundHistory.length -
                                                                        1
                                                                ].startPrice >
                                                                roundHistory[
                                                                    roundHistory.length -
                                                                        1
                                                                ].endPrice
                                                                    ? {
                                                                          borderColor:
                                                                              '#FF685A',
                                                                      }
                                                                    : {
                                                                          borderColor:
                                                                              '#02ED8E',
                                                                      }
                                                            }
                                                        >
                                                            <img
                                                                src={
                                                                    roundHistory[
                                                                        roundHistory.length -
                                                                            1
                                                                    ]
                                                                        .startPrice >
                                                                    roundHistory[
                                                                        roundHistory.length -
                                                                            1
                                                                    ].endPrice
                                                                        ? downRocket
                                                                        : upRocket
                                                                }
                                                                className="h-[3.2em]"
                                                            />
                                                        </div>
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="pool item">
                                <div className="text_white">
                                    {upPlayersCount} PLAYERS
                                </div>
                                <div className="text_green">
                                    {upTotalAmount}
                                </div>
                                <div className="text_red">
                                    {downTotalAmount}
                                </div>
                                <div className="text_white">
                                    {downPlayersCount} PLAYERS
                                </div>
                            </div>
                            <div className="players items-start justify-between gap-[1em] pb-[1em]">
                                <div className="up_players flex-1 grid grid-cols-6 gap-[0.9em]">
                                    {upPlayers
                                        .filter(
                                            (up) =>
                                                up.UserId === profile?.UserId &&
                                                isConnectedAndLogin
                                        )
                                        .slice(0, 6)
                                        .map((p, idx) => {
                                            return (
                                                <div
                                                    key={idx}
                                                    className="relative"
                                                >
                                                    <img
                                                        src={p.Avatar}
                                                        className="player_position new animate-jump-in animate-once flex-start"
                                                    />
                                                    <div className="absolute rounded-[50%] border-white left-[0em] border-[0.6em] top-[3.8em]"></div>
                                                </div>
                                            )
                                        })}
                                    {upPlayers.filter(
                                        (up) =>
                                            up.UserId === profile?.UserId &&
                                            isConnectedAndLogin
                                    ).length < 6 &&
                                        upPlayers
                                            .filter(
                                                (up) =>
                                                    (up.UserId !==
                                                        profile?.UserId &&
                                                        isConnectedAndLogin) ||
                                                    !isConnectedAndLogin
                                            )
                                            .slice(
                                                0,
                                                6 -
                                                    upPlayers.filter(
                                                        (up) =>
                                                            up.UserId ===
                                                                profile?.UserId &&
                                                            isConnectedAndLogin
                                                    ).length
                                            )
                                            .map((p, idx) => {
                                                return (
                                                    <div
                                                        key={
                                                            upPlayers.length -
                                                            idx
                                                        }
                                                        className="relative"
                                                    >
                                                        <img
                                                            src={p.Avatar}
                                                            className="player_position new animate-jump-in animate-once flex-start"
                                                        />
                                                    </div>
                                                )
                                            })}

                                    {upPlayers.length === 0 &&
                                        Array.from({ length: 6 }).map(
                                            (_, idx) => {
                                                return (
                                                    <img
                                                        key={
                                                            upPlayers.length -
                                                            idx
                                                        }
                                                        src={question}
                                                        className="player_position new animate-jump-in animate-once flex-start p-[0.5em]"
                                                    />
                                                )
                                            }
                                        )}
                                </div>
                                <div className="center_btn">
                                    <div className="line"></div>
                                </div>
                                <div
                                    className="down_players flex-1 grid grid-cols-6 gap-[0.9em]"
                                    style={{ direction: 'rtl' }}
                                >
                                    {downPlayers
                                        .filter(
                                            (dp) =>
                                                dp.UserId === profile?.UserId &&
                                                isConnectedAndLogin
                                        )
                                        .slice(0, 6)
                                        .map((p, idx) => {
                                            return (
                                                <div className="relative">
                                                    <img
                                                        key={idx}
                                                        src={p.Avatar}
                                                        className="player_position new animate-jump-in animate-once flex-start"
                                                    />
                                                    <div className="absolute rounded-[50%] border-white left-[0em] border-[0.6em] top-[3.8em]"></div>
                                                </div>
                                            )
                                        })}

                                    {downPlayers.filter(
                                        (dp) =>
                                            dp.UserId === profile?.UserId &&
                                            isConnectedAndLogin
                                    ).length < 6 &&
                                        downPlayers
                                            .filter(
                                                (dp) =>
                                                    (dp.UserId !==
                                                        profile?.UserId &&
                                                        isConnectedAndLogin) ||
                                                    !isConnectedAndLogin
                                            )
                                            .slice(
                                                0,
                                                6 -
                                                    downPlayers.filter(
                                                        (dp) =>
                                                            dp.UserId ===
                                                                profile?.UserId &&
                                                            isConnectedAndLogin
                                                    ).length
                                            )
                                            .map((p, idx) => {
                                                return (
                                                    <img
                                                        key={
                                                            downPlayers.length -
                                                            idx
                                                        }
                                                        src={p.Avatar}
                                                        className="player_position new animate-jump-in animate-once flex-start"
                                                    />
                                                )
                                            })}

                                    {downPlayers.length === 0 &&
                                        Array.from({ length: 6 }).map(
                                            (_, idx) => {
                                                return (
                                                    <img
                                                        key={
                                                            upPlayers.length -
                                                            idx
                                                        }
                                                        src={question}
                                                        className="player_position new animate-jump-in animate-once flex-start p-[0.5em]"
                                                    />
                                                )
                                            }
                                        )}
                                </div>
                            </div>
                            <div className="attend_number gap-[1em]">
                                {invest_amounts.map((amount) => {
                                    return (
                                        <div
                                            className={`attend_btn ${invest == amount ? 'attend_btn_active' : ''} flex-1`}
                                            key={amount}
                                            onClick={() => setInvest(amount)}
                                        >
                                            <p>{amount}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div
                                className={`betting_btn py-[1em] ${winStatus === WinStatus.TRADE_NOT_STARTED ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <button
                                    className="flex-1"
                                    onClick={() => placeBet(true)}
                                >
                                    <img
                                        src={upStart}
                                        className="object-stretch w-full h-full"
                                    />
                                </button>
                                <button
                                    className="flex-1"
                                    onClick={() => placeBet(false)}
                                >
                                    <img
                                        src={downStart}
                                        className="object-stretch w-full h-full"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* default modal */}
            <PageGuideModal></PageGuideModal>
            {isConnectedAndLogin && balance && balance < 5 && <DepositModal />}
        </div>
    )
}

export default TradingPage
