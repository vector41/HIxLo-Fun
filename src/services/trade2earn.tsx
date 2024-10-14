import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import config from '../config'
import { max, min } from '@visx/vendor/d3-array'
import { scaleTime, scaleLinear } from '@visx/scale'
import axios, { AxiosError } from 'axios'
import { ScaleLinear, ScaleTime } from '@visx/vendor/d3-scale'
import { useAccount, useSignMessage } from 'wagmi'
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'
import { getPublicCompressed } from '@toruslabs/eccrypto'
import toast from 'react-hot-toast'
import { Affiliate } from '../interfaces/Affiliate'
import { Network } from '../interfaces/CoinManager'
import { IHighRollers } from '../interfaces/IHighRoller'
import { ITop100Winner } from '../interfaces/ITop100Winner'
import { INotification } from '../interfaces/INotification'
import { IWithdrawFee } from '../interfaces/IWithdrawFee'
import { ITopWinRatioPlayers } from '../interfaces/IWinRatioPlayer'
import { AllChallengeStatus } from '../interfaces/IFutureBTCChallenge'

// eslint-disable-next-line react-refresh/only-export-components
export enum MessageType {
    BTC_PRICE = 0,
    SUBMITTED_TRADER = 1,
    ERROR = 2,
    BALANCE = 3,
    DEPOSIT = 4,
    PONG = 5,
    WITHDRAW = 6,
    NORMAL_ALERT = 7,
    SUBMIT_ORDER = 8,
}

const delay = (milliseconds: number) =>
    new Promise<void>((resolve) => {
        setTimeout(resolve, milliseconds)
    })

// creating the custom useInterval hook
export const useInterval = (callback: () => void, delay: number | null) => {
    // Creating a ref to store the latest callback
    const savedCallback = useRef<() => void>()

    // Remember the latest callback when it changes
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval
    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current()
            }
        }

        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

export interface UserModel {
    idToken?: string
    typeOfLogin: string
    profileImage?: string
    name?: string
    email?: string
    whiteLabel: string
    referralLink?: string | null
    signature: string
    countryCode: string
    address: string
    appPubKey: string
}

// Define enum and interfaces
export enum RoundPosition {
    NONE = 0,
    LOCKING = 1,
    LOCKED = 2,
    DISTRIBUTING = 3,
    DISTRIBUTED = 4,
}

export enum WinStatus {
    TRADE_NOT_STARTED = 0,
    UP = 1,
    DOWN = 2,
    DRAW = 3,
}

export interface Profile {
    Avatar?: string
    CountryCode: string
    WhiteLabel?: string
    UserId: string
    Username?: string
}

interface BtcPrice {
    value: number
    localTimeIndex: number
}

export interface RoundStatus {
    currentLocalFrameIndex: number
    currentBtcPrice: BtcPrice | undefined | null
    startFrameIndex: number
    startPrice: number
    endPrice: number
    txnHash: string
    currentPosition: RoundPosition
    previousPosition: RoundPosition
    endFrameIndex: number
    tradeStartIndex: number
    cycle: number
    tradeDuration: number
    betDuration: number
    roundDuration: number
}

export interface Trader {
    UserId: string
    TradeSize: number
    Direction: boolean
    PoolId: string
    NewTotal: number
    CountryCode?: string
    Avatar?: string
}

export interface RoundResult {
    startPrice: number
    endPrice: number
}

// Define colors and constants
export const background = '#3b6978'
export const background2 = '#204051'
export const accentColor = '#edffea'
export const accentColorDark = '#75daad'
export const topPos = 0.27
export const bottomPos = 0.9
export interface IWeb3Trade2Earn {
    name: string
    xScale: ScaleTime<number, number, never>
    yScale: ScaleLinear<number, number, never>
    yScaleForAxis: ScaleLinear<number, number, never>
    startPointHeight: number
    midHeight: number
    roundStatus: RoundStatus
    slicedBtcPrices: BtcPrice[]
    maxY: number
    minY: number
    getX: (d: BtcPrice) => number
    getY: (d: BtcPrice) => number
    maxX: number
    minX: number
    btcPrices: BtcPrice[]
    lastData: BtcPrice
    traders: Trader[]
    height: number
    width: number
    upPlayers: Trader[]
    downPlayers: Trader[]
    upPlayersCount: number
    downPlayersCount: number
    upTotalAmount: number
    downTotalAmount: number
    winStatus: WinStatus
    downPayout: number
    upPayout: number
    noMoreTrade: boolean
    startNewRound: boolean
    roundHistory: RoundResult[]
    allTimesWinsPaid: number
    winsPaidFor24H: number
    livePlayersFor24H: number
    winRatioFor24H: number
    contestPrize: number
    isMobile: boolean
    isLogin: boolean
    isConnectedAndLogin: boolean | undefined
    profile: Profile | null
    balance: number
    // distributedMoney: boolean MutableRefObject<null>
    showWalletModal: boolean
    setShowWalletModal: Dispatch<React.SetStateAction<boolean>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    walletBtn: React.RefObject<any>
    invest: number
    setInvest: Dispatch<React.SetStateAction<number>>
    address: `0x${string}` | undefined
    wss: WebSocket | null
    accessToken: string
    getBalance: () => void
    generateLink: (name: string) => void
    affiliates: Affiliate[] | null
    getReferralLinks: () => void
    getNetworks: () => void
    network: Network | null
    networks: Network[]
    depositAddress: string | null
    startTrade: () => void
    setNetwork: Dispatch<React.SetStateAction<Network | null>>
    notifySuccess: (message: string) => void
    notifyError: (message: string) => void
    withdraw: (toAddress: string, amount: number, chain: string) => void
    getHighRollers: () => void
    highRollers: IHighRollers | null
    // posHighRoller: number
    loading: boolean
    top100Winners: ITop100Winner[] | null
    getTop100Winners: (option: string) => void
    coinBalance: number
    notifications: INotification[]
    getNotifications: () => void
    claim: (rewardId: string) => void
    withdrawFee: IWithdrawFee | null
    getWinRatioPlayers: () => void
    winRatioPlayers: ITopWinRatioPlayers | null
    submitFutureBTCPrice: (position: number) => void
    challengeData: AllChallengeStatus | null
    getFutureBTCChallenges: () => void
}

export const Web3Trade2EarnContext = createContext<IWeb3Trade2Earn>({
    name: '',
    xScale: scaleTime<number>(), // You need to replace these with actual scale functions
    yScale: scaleLinear<number>(),
    yScaleForAxis: scaleLinear<number>(),
    startPointHeight: 0,
    midHeight: 0,
    roundStatus: {
        betDuration: config.BET_DURATION / config.LOCAL_CYCLE,
        cycle: config.LOCAL_CYCLE,
        tradeDuration: config.TRADE_DURATION / config.LOCAL_CYCLE,
        currentBtcPrice: { localTimeIndex: 0, value: 0 },
        currentLocalFrameIndex: 0,
        currentPosition: RoundPosition.NONE,
        startFrameIndex: 0,
        startPrice: 0,
        endPrice: 0,
        txnHash: '',
        previousPosition: RoundPosition.NONE,
        endFrameIndex: 0,
        tradeStartIndex: 0,
        roundDuration:
            (config.TRADE_DURATION + config.BET_DURATION) / config.LOCAL_CYCLE,
    }, // You need to replace this with an actual default value from the enum
    slicedBtcPrices: [],
    maxY: 0,
    minY: 0,
    getX: () => 0,
    getY: () => 0,
    maxX: 0,
    minX: 0,
    btcPrices: [],
    lastData: { localTimeIndex: 0, value: 0 },
    width: 0,
    height: 0,
    traders: [],
    upPlayers: [],
    downPlayers: [],
    upPlayersCount: 0,
    downPlayersCount: 0,
    upTotalAmount: 0,
    downTotalAmount: 0,
    winStatus: WinStatus.TRADE_NOT_STARTED,
    upPayout: 0,
    downPayout: 0,
    noMoreTrade: false,
    startNewRound: false,
    roundHistory: [],
    allTimesWinsPaid: 0,
    winsPaidFor24H: 0,
    livePlayersFor24H: 0,
    winRatioFor24H: 0,
    contestPrize: 0,
    isMobile: false,
    isLogin: false,
    isConnectedAndLogin: false,
    // distributedMoney: true,
    profile: null,
    balance: 0,
    showWalletModal: false,
    setShowWalletModal: () => { },
    walletBtn: { current: null },
    invest: 10,
    setInvest: () => { },
    address: undefined,
    wss: null,
    accessToken: '',
    getBalance: () => { },
    generateLink: () => { },
    affiliates: null,
    getReferralLinks: () => { },
    getNetworks: () => { },
    network: null,
    networks: [],
    depositAddress: null,
    startTrade: () => { },
    setNetwork: () => { },
    notifySuccess: () => { },
    notifyError: () => { },
    getHighRollers: () => { },
    highRollers: null,
    // posHighRoller: -1,
    withdraw: () => { },
    loading: false,
    top100Winners: null,
    getTop100Winners: () => { },
    coinBalance: 0,
    notifications: [],
    getNotifications: () => { },
    claim: () => { },
    withdrawFee: null,
    getWinRatioPlayers: () => { },
    winRatioPlayers: null,
    submitFutureBTCPrice: () => { },
    challengeData: null,
    getFutureBTCChallenges: () => { }
})

// eslint-disable-next-line react-refresh/only-export-components
export const useWeb3Trade2Earn = (): IWeb3Trade2Earn =>
    useContext(Web3Trade2EarnContext)

export const Web3Trade2EarnProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const triggerXScaleRef = useRef(false)
    const [btcPrices, setBtcPrices] = useState<BtcPrice[]>([])
    const [roundHistory, setRoundHistory] = useState<RoundResult[]>([])
    const [allTimesWinsPaid, setAllTimesWinsPaid] = useState<number>(0)
    const [winsPaidFor24H, setWinsPaidFor24H] = useState<number>(0)
    const [livePlayersFor24H, setLivePlayersFor24H] = useState<number>(0)
    const [winRatioFor24H, setWinRatioFor24H] = useState<number>(0)
    const [contestPrize, setContestPrize] = useState<number>(0)
    const [isMobile, setIsMobile] = useState(false)
    const [wss, setWss] = useState<WebSocket | null>(null)
    const [balance, setBalance] = useState<number>(0)
    const [notifications, setNotifications] = useState<INotification[]>([])
    const [affiliates, setAffiliates] = useState<Affiliate[] | null>(null)
    const [network, setNetwork] = useState<Network | null>(null)
    const [networks, setNetworks] = useState<Network[]>([])
    const [depositAddress, setDepositAddress] = useState<string | null>(null)
    const [withdrawFee, setWithdrawFee] = useState<IWithdrawFee | null>(null)
    const [ping, setPing] = useState<boolean>(false)
    const [highRollers, setHighRollers] = useState<IHighRollers | null>(null)
    const [winRatioPlayers, setWinRatioPlayers] =
        useState<ITopWinRatioPlayers | null>(null)
    const [top100Winners, setTop100Winners] = useState<ITop100Winner[] | null>(
        null
    )
    // const [expiredFutureBTCChallenge, setExpiredFutureBTCChallenge] = useState<>(null);
    // const [posHighRoller, setPosHighRoller] = useState<number>(-1)
    const [loading, setLoading] = useState<boolean>(false)
    const [coinBalance, setCoinBalance] = useState<number>(0)
    const [challengeData, setChallengeData] = useState<AllChallengeStatus | null>(null);

    const [roundStatus, setRoundStatus] = useState<RoundStatus>({
        betDuration: config.BET_DURATION / config.LOCAL_CYCLE,
        cycle: config.LOCAL_CYCLE,
        tradeDuration: config.TRADE_DURATION / config.LOCAL_CYCLE,
        currentBtcPrice: { localTimeIndex: 0, value: 0 },
        currentLocalFrameIndex: 0,
        currentPosition: RoundPosition.NONE,
        startFrameIndex: 0,
        startPrice: 0,
        endPrice: 0,
        txnHash: '',
        previousPosition: RoundPosition.NONE,
        endFrameIndex: 0,
        tradeStartIndex: 0,
        roundDuration:
            (config.TRADE_DURATION + config.BET_DURATION) / config.LOCAL_CYCLE,
    })
    const [slicedIndex, setSlicedIndex] = useState<number>(0)
    // const isInitialMountForSkippingFirstValue = useRef(true)
    const isInitialMount = useRef(true)

    const isDevMode = () => process.env.NODE_ENV === 'development'

    const slicedBtcPrices = useMemo(() => {
        return btcPrices.filter((price, index) => {
            if (index < slicedIndex) return false
            if (
                price.localTimeIndex % 4 &&
                index < btcPrices.length - 1 &&
                index > 0
            )
                return false
            return true
        })
    }, [slicedIndex, btcPrices])

    const slice = useMemo(() => {
        return Math.round(
            ((config.BET_DURATION + config.TRADE_DURATION) /
                config.LOCAL_CYCLE) *
            (isMobile ? 1 : 1.5)
        )
    }, [isMobile])

    const winStatus = useMemo(() => {
        return roundStatus.currentLocalFrameIndex <=
            roundStatus.tradeStartIndex ||
            roundStatus.currentLocalFrameIndex > roundStatus.endFrameIndex
            ? WinStatus.TRADE_NOT_STARTED
            : roundStatus.startPrice < (roundStatus.currentBtcPrice?.value || 0)
                ? WinStatus.UP
                : roundStatus.startPrice >
                    (roundStatus.currentBtcPrice?.value || 0)
                    ? WinStatus.DOWN
                    : WinStatus.DRAW
    }, [roundStatus])

    // Data accessors
    const getX = (d: BtcPrice) => d?.localTimeIndex
    const getY = (d: BtcPrice) => d?.value

    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    const handleAxiosError = (error: AxiosError) => {
        setLoading(false)
        let errorMsg = 'An error occurred.'

        console.error(
            'Error during initial data fetch:',
            error.message || 'Unknown error'
        )
        if (error.response) {
            console.error(
                'Server responded with an error status:',
                error.response.status
            )
            console.error('Error data:', error.response.data)
            errorMsg = (error.response.data as { error: string })
                .error as string
        } else if (error.request) {
            console.error('No response received from the server')
            errorMsg = 'No response received from the server'
        } else {
            console.error('Error setting up the request:', error.message)

            errorMsg = error.message
        }

        notifyError(errorMsg)
    }

    const updateDimensions = () => {
        setIsMobile(window.innerWidth < 640)

        const tradingViewDOM = document.getElementById(
            'trading-view'
        ) as HTMLDivElement | null
        const stateInfo = document.getElementById(
            'state-info'
        ) as HTMLDivElement | null

        if (tradingViewDOM && stateInfo && !isMobile) {
            const { width: tWidth, height: tHeight } =
                tradingViewDOM.getBoundingClientRect()
            const { height: sHeight } = stateInfo.getBoundingClientRect()
            setWidth(tWidth)
            setHeight(tHeight - sHeight)
        }

        if (isMobile && tradingViewDOM) {
            const { width: tWidth, height: tHeight } =
                tradingViewDOM.getBoundingClientRect()

            setWidth(tWidth)
            setHeight(tHeight)
        }
    }

    useEffect(() => {
        updateDimensions()

        // Add event listener for resize
        window.addEventListener('resize', updateDimensions)

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateDimensions)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.href, document.getElementById('trading-view')]) // Empty dependency array ensures this effect runs only once after initial mount

    const minY = useMemo(
        () => min(slicedBtcPrices, getY) || 0,
        [slicedBtcPrices]
    )
    const maxY = useMemo(
        () => max(slicedBtcPrices, getY) || 0,
        [slicedBtcPrices]
    )
    const minX = useMemo(
        () => min(slicedBtcPrices, getX) || 0,
        [slicedBtcPrices]
    )
    const maxX = useMemo(
        () => max(slicedBtcPrices, getX) || 0,
        [slicedBtcPrices]
    )

    // Scales
    const xScale = useMemo(
        () =>
            scaleTime<number>({
                domain: [minX, maxX],
                range: [0, width * 0.7],
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [maxX, minX]
    )

    const smoothZoomIn = async () => {
        const len = Math.round(btcPrices?.length / 2)
        const initDelay = 3000 / ((len * (len + 1)) / 2)

        for (let i = 1; i < len; i++) {
            await delay(initDelay * i)
            setSlicedIndex((x) =>
                x > Math.round(btcPrices.length / 2)
                    ? Math.round(btcPrices.length / 2)
                    : x + 1
            )
        }
    }

    const smoothZoomOut = async () => {
        const len = slicedIndex
        const initDelay = 3000 / ((len * (len + 1)) / 2)

        for (let i = len; i > 0; i--) {
            await delay(initDelay * i)
            setSlicedIndex((x) => (x > 0 ? x - 1 : 0))
        }
    }

    const yScale = useMemo(
        () =>
            scaleLinear<number>({
                domain: [minY, maxY],
                range: [height * bottomPos, height * topPos],
            }),
        [height, minY, maxY]
    )

    const lastData = useMemo(
        () => roundStatus.currentBtcPrice || { localTimeIndex: 0, value: 0 },
        [roundStatus.currentBtcPrice]
    )

    const yRange = useMemo(() => maxY - minY, [maxY, minY])

    const yScaleForAxis = useMemo(
        () =>
            scaleLinear<number>({
                domain: [
                    Number(minY) - yRange * (1 - bottomPos),
                    Number(maxY) + yRange * topPos,
                ],
                range: [height, 0],
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [yRange, height]
    )

    const midHeight = useMemo(
        () => (lastData ? (lastData.value - minY) / yRange : 0),
        [lastData, minY, yRange]
    )
    const startPointHeight = useMemo(
        () =>
            roundStatus.startPrice
                ? (roundStatus.startPrice - minY) / yRange
                : 0,
        [roundStatus, minY, yRange]
    )

    const roundPositionLookup: { [key: number]: RoundPosition } = {
        0: RoundPosition.NONE,
        1: RoundPosition.LOCKING,
        2: RoundPosition.LOCKED,
        3: RoundPosition.DISTRIBUTING,
        4: RoundPosition.DISTRIBUTED,
    }

    const numberToEnum = <T extends { [key: number]: U }, U>(
        num: number,
        lookup: T
    ): U => lookup[num]

    const onMessage = (event: MessageEvent) => {
        const { data, messageType } = JSON.parse(event.data)

        if (messageType === MessageType.PONG) {
            setPing(true)
        }

        if (messageType === MessageType.SUBMITTED_TRADER) {
            const trader: Trader = {
                UserId: data.UserId,
                TradeSize: data.TradeSize,
                Direction: data.Direction,
                PoolId: data.PoolId,
                NewTotal: data.NewTotal,
                Avatar: data.Avatar,
                CountryCode: data.CountryCode,
            }

            setTraders((pre) => [trader, ...pre])
            if (trader.UserId === profile?.UserId)
                notifySuccess(
                    `Sent ${trader.TradeSize} USDT ${trader.Direction ? 'High Pool' : 'Low Pool'} successfully`
                )
        }

        if (messageType === MessageType.ERROR) {
            notifyError(data)
        }

        if (messageType === MessageType.BALANCE) {
            setBalance(data.balance)
            setCoinBalance(data.coin)
        }

        if (messageType === MessageType.DEPOSIT) {
            setBalance(data.balance)
            notifySuccess(`${data.amount} USDT deposited successfully!`)
        }

        if (messageType === MessageType.NORMAL_ALERT) {
            notifySuccess(data)
        }

        if (messageType === MessageType.BTC_PRICE) {
            const currentBtcPrice = {
                localTimeIndex: data?.currentBtcPrice?.localTimeIndex,
                value: data?.currentBtcPrice?.value,
            }

            setRoundStatus((prevStatus) => ({
                ...prevStatus,
                currentBtcPrice,
                currentLocalFrameIndex: data.currentLocalFrameIndex || 0,
                currentPosition:
                    numberToEnum(data?.currentPosition, roundPositionLookup) ||
                    RoundPosition.NONE,
                previousPosition:
                    numberToEnum(data?.previousPosition, roundPositionLookup) ||
                    RoundPosition.NONE,
                startPrice: data?.startPrice || 0,
                endPrice: data?.endPrice || 0,
                txnHash: data?.txnHash || '',
                startFrameIndex: data?.startFrameIndex || 0,
                tradeStartIndex: data?.startFrameIndex + prevStatus.betDuration,
                endFrameIndex:
                    data?.startFrameIndex +
                    prevStatus.betDuration +
                    prevStatus.tradeDuration,
            }))

            setBtcPrices((prev) =>
                [...prev, currentBtcPrice]
                    .sort((a, b) => a.localTimeIndex - b.localTimeIndex)
                    .filter(
                        (btcPrice) =>
                            btcPrice.localTimeIndex >
                            data.currentLocalFrameIndex - slice
                    )
            )
        }
    }

    const subscription = () => {
        const ws = new WebSocket(config.BASE_WSS_URL)

        ws.onopen = () => {
            console.log('Connected to WebSocket')

            setPing(false)

            setLoading(true)

            axios
                .get(`${config.BASE_HTTPS_URL}/api`)
                .then((res) => {
                    const {
                        BtcPrices,
                        RoundResult,
                        AllTimeWinsPaid,
                        WinsPaidFor24H,
                        LivePlayersFor24H,
                        WinRatioFor24H,
                        ContestPrize,
                        Traders,
                        Top100Winners,
                    } = res.data.fullStatistics
                    setBtcPrices(BtcPrices)
                    setRoundHistory(RoundResult)
                    setAllTimesWinsPaid(AllTimeWinsPaid)
                    setWinsPaidFor24H(WinsPaidFor24H)
                    setLivePlayersFor24H(LivePlayersFor24H)
                    setWinRatioFor24H(WinRatioFor24H)
                    setContestPrize(ContestPrize)
                    setTraders(Traders)
                    setTop100Winners(Top100Winners)

                    ws.onmessage = (event) => onMessage(event)
                })
                .catch(handleAxiosError)
                .finally(() => {
                    setLoading(false)
                })
        }

        ws.onclose = () => {
            console.log('Disconnected from WebSocket')
            ws.close()
            setTimeout(() => subscription(), 3000)
        }

        ws.onerror = (ev: Event) => {
            if (ev instanceof ErrorEvent) {
                console.log(ev.message)
                ws.close()
                setTimeout(() => subscription(), 5000)
            }
        }

        return ws
    }

    // const getRandomInteger = (min: number, max: number): number => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min
    // }

    // const detectMintedTransactions = () => {
    //     alchemy.ws.on(filter, (log) => {
    //         const decodedData = decode(log.data)
    //         // const avatarId = getRandomInteger(1, 12)

    //         const trader: Trader = {
    //             Address: String(decodedData[1]).toLowerCase(),
    //             TxnHash: log.transactionHash,
    //             TradeSize: parseFloat(ethers.formatEther(decodedData[2])),
    //             Direction: decodedData[3] === 'UP' ? true : false,
    //             PoolId: String(decodedData[0]).toLowerCase(),
    //             WhiteLabel: decodedData[8],
    //             NewTotal: parseFloat(ethers.formatEther(decodedData[4])),
    //             CountryCode: decodedData[6],
    //             Avatar: decodedData[5],
    //         }

    //         setTraders((pre) => [trader, ...pre])
    //     })
    // }

    useEffect(() => {
        if (
            roundStatus.currentLocalFrameIndex >= roundStatus.tradeStartIndex &&
            !triggerXScaleRef.current
        ) {
            smoothZoomIn()
            triggerXScaleRef.current = true
        }

        if (
            roundStatus.currentLocalFrameIndex < roundStatus.tradeStartIndex &&
            triggerXScaleRef.current
        ) {
            triggerXScaleRef.current = false
        }

        if (
            roundStatus.currentLocalFrameIndex >= roundStatus.startFrameIndex &&
            roundStatus.currentLocalFrameIndex < roundStatus.tradeStartIndex &&
            slicedIndex > 0
        ) {
            smoothZoomOut()
            triggerXScaleRef.current = false
        }

        if (roundStatus.currentPosition == RoundPosition.DISTRIBUTED) {
            // delay(500).then(() => setTraders([]));
            setTraders([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roundStatus.currentLocalFrameIndex])
    const noMoreTrade = useMemo(() => {
        return (
            roundStatus.currentLocalFrameIndex > 0 &&
            roundStatus.currentLocalFrameIndex >= roundStatus.tradeStartIndex
        )
    }, [roundStatus.currentLocalFrameIndex, roundStatus.tradeStartIndex])

    const startNewRound = useMemo(() => {
        return (
            roundStatus.currentLocalFrameIndex > 0 &&
            roundStatus.currentLocalFrameIndex < roundStatus.tradeStartIndex
        )
    }, [roundStatus.currentLocalFrameIndex, roundStatus.tradeStartIndex])

    useEffect(() => {
        if (roundStatus.currentPosition === RoundPosition.DISTRIBUTING)
            setRoundHistory((prev) => [
                ...prev.slice(-9),
                {
                    startPrice: roundStatus.startPrice,
                    endPrice: roundStatus.endPrice,
                },
            ])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roundStatus.currentPosition])

    const [traders, setTraders] = useState<Trader[]>([])

    const upPlayers = useMemo(
        () => traders.filter((trader) => trader.Direction),
        [traders]
    )
    const downPlayers = useMemo(
        () => traders.filter((trader) => !trader.Direction),
        [traders]
    )
    const upPlayersCount = useMemo(() => upPlayers.length, [upPlayers])
    const downPlayersCount = useMemo(() => downPlayers.length, [downPlayers])
    const downTotalAmount = useMemo(
        () => (downPlayers.length > 0 ? downPlayers[0].NewTotal : 0),
        [downPlayers]
    )
    const upTotalAmount = useMemo(
        () => (upPlayers.length > 0 ? upPlayers[0].NewTotal : 0),
        [upPlayers]
    )

    const upPayout = useMemo(() => {
        if (upTotalAmount > 0 && downTotalAmount > 0)
            return (
                Math.ceil(
                    ((upTotalAmount + downTotalAmount * 0.9) / upTotalAmount) *
                    100
                ) || 200
            )
        return 200
    }, [upTotalAmount, downTotalAmount])

    const downPayout = useMemo(() => {
        if (upTotalAmount > 0 && downTotalAmount > 0)
            return (
                Math.ceil(
                    ((upTotalAmount * 0.9 + downTotalAmount) /
                        downTotalAmount) *
                    100
                ) || 200
            )
        return 200
    }, [upTotalAmount, downTotalAmount])

    const getFullStatistics = () => {
        axios
            .get(`${config.BASE_HTTPS_URL}/api/full-statistics`)
            .then((res) => {
                setAllTimesWinsPaid(res.data.AllTimeWinsPaid)
                setWinsPaidFor24H(res.data.WinsPaidFor24H)
                setLivePlayersFor24H(res.data.LivePlayersFor24H)
                setWinRatioFor24H(res.data.WinRatioFor24H)
                setContestPrize(res.data.ContestPrize)
            })
    }

    useInterval(getFullStatistics, 45 * 1000)

    // ================ Mount ======================
    const startTrade = () => {
        if (isInitialMount.current) {
            const ws = subscription()

            setWss(ws)

            // detectMintedTransactions()

            isInitialMount.current = false

            return () => {
                if (!isDevMode()) ws.close()
                // alchemy.ws.removeAllListeners()
                // clearInterval(cleanInterval);
            }
        }
    }

    useEffect(() => {
        startTrade()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ================== Web3Auth ======================

    const { address, connector, isConnected } = useAccount({
        onDisconnect: () => {
            setPing(false)
            reset()

            if (accessToken !== '') {
                wss?.send(
                    JSON.stringify({
                        jwtToken: `Bearer ${accessToken}`,
                        msg: 'LOG_OUT',
                    })
                )
            }

            localStorage.removeItem('accessToken')
            localStorage.removeItem('profile')

            setAccessToken('')
            setProfile(null)
        },
    })

    // Initialize tokens state with initial values or null
    const [accessToken, setAccessToken] = useState<string>(() => {
        // Retrieve tokens from localStorage when component mounts
        return localStorage.getItem('accessToken') || ''
    })

    // Initialize tokens state with initial values or null
    const [profile, setProfile] = useState<Profile | null>(() => {
        try {
            const storedProfile = localStorage.getItem('profile')
            if (storedProfile !== null && storedProfile !== '') {
                return JSON.parse(storedProfile) as Profile
            } else {
                return null
            }
        } catch (error) {
            console.error('Error parsing profile from localStorage:', error)
            return null
        }
    })

    const updateAccessToken = (accessToken: string) => {
        setAccessToken(accessToken)
        localStorage.setItem('accessToken', accessToken)
    }

    const updateProfile = (pf: Profile) => {
        setProfile(pf)
        localStorage.setItem('profile', JSON.stringify(pf))
    }

    const signin = async (userInfo: UserModel) => {
        setLoading(true)
        axios
            .post(`${config.BASE_HTTPS_URL}/api/signin`, {
                userInfo,
            })
            .then((res) => {
                const { accessToken, user } = res.data

                updateAccessToken(accessToken)
                updateProfile(user)
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const verify = () => {
        setLoading(true)
        axios
            .post(
                `${config.BASE_HTTPS_URL}/api/verify`,
                {
                    address,
                } // Request body
            )
            .then((res) => {
                signMessage({ message: res.data.nonce })
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const isLogin = useMemo(() => {
        return accessToken !== '' && profile !== null
    }, [accessToken, profile])

    const isConnectedAndLogin: boolean | undefined = useMemo(() => {
        return (
            accessToken !== '' &&
            profile !== null &&
            address &&
            connector &&
            isConnected
        )
    }, [accessToken, profile, address, connector, isConnected])

    const getBalance = () => {
        if (!isConnectedAndLogin) {
            setShowWalletModal(true)
            return
        }
        axios
            .get(`${config.BASE_HTTPS_URL}/api/balance`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                setBalance(res.data.balance)
                setCoinBalance(res.data.coin)
            })
            .catch(handleAxiosError)
    }

    const getNotifications = () => {
        if (!isConnectedAndLogin) return
        axios
            .get(`${config.BASE_HTTPS_URL}/api/notifications`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                setNotifications(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        if (isConnectedAndLogin) getBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnectedAndLogin])

    const { data: signMessageData, signMessage, reset } = useSignMessage()
    // const { data: signMessageData, error, isLoading, signMessage, variables } = useSignMessage()

    useEffect(() => {
        if (address && isConnected && connector && !isLogin) {
            verify()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address, isConnected, connector, isLogin])

    const isSocialLogin = () => {
        return (
            (
                connector as {
                    id: string
                    name: string
                }
            ).id === 'web3auth'
        )
    }

    const countryCode = async (): Promise<string> => {
        try {
            const res = await axios.get<{ country_code: string }>(
                'https://ipapi.co/json/?key=pYGqWyFbfKV4u0XjlBN4jK187g99L6wubM9FWFiurGTDWfAJqL'
            )
            return res.data.country_code
        } catch (err) {
            console.error('Error fetching country code:', err)
            throw err
        }
    }

    const getAppPubKey = async (): Promise<string> => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const app_scoped_privkey: any = await (
            await (connector as Web3AuthConnector).getProvider()
        ).request({
            method: 'eth_private_key',
        })

        return getPublicCompressed(
            Buffer.from(app_scoped_privkey.padStart(64, '0'), 'hex')
        ).toString('hex')
    }

    useEffect(() => {
        (async () => {
            if (signMessageData && connector) {
                if (!signMessageData.startsWith('0x')) {
                    console.log('Rejected!')
                    return
                }

                const socialWallet = isSocialLogin()
                const cc = await countryCode()

                if (socialWallet) {
                    (connector as Web3AuthConnector).options.web3AuthInstance
                        .getUserInfo()
                        .then(async (u) => {
                            signin({
                                address: String(address),
                                typeOfLogin: u.typeOfLogin as string,
                                signature: signMessageData,
                                referralLink:
                                    localStorage.getItem('referralId'),
                                whiteLabel: config.WHITE_LABEL,
                                idToken: u.idToken,
                                email: u.email,
                                profileImage: u.profileImage,
                                countryCode: cc,
                                appPubKey: socialWallet
                                    ? await getAppPubKey()
                                    : '',
                            })
                        })
                } else {
                    signin({
                        address: String(address),
                        typeOfLogin: 'web3',
                        signature: signMessageData,
                        referralLink: localStorage.getItem('referralId'),
                        whiteLabel: config.WHITE_LABEL,
                        idToken: '',
                        email: '',
                        profileImage: '',
                        countryCode: cc,
                        appPubKey: '',
                    })
                }
            }
        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signMessageData, connector])

    const [showWalletModal, setShowWalletModal] = useState(false)
    const walletBtn = useRef(null)

    const [invest, setInvest] = useState<number>(10)

    const notifyError = (message: string) =>
        toast.error(message, {
            position: 'top-right',
        })

    const notifySuccess = (message: string) =>
        toast.success(message, {
            position: 'top-right',
        })

    // Generate referral link
    const generateLink = (name: string) => {
        if (!isConnectedAndLogin) {
            setShowWalletModal(true)
            return
        }
        setLoading(true)
        axios
            .post(
                `${config.BASE_HTTPS_URL}/api/create-referral-link`,
                {
                    name,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((res) => {
                const { affiliate } = res.data
                setAffiliates((prevAffiliates) =>
                    prevAffiliates
                        ? [...prevAffiliates, affiliate]
                        : [affiliate]
                )
                notifySuccess('Generated your referral link successfully!')
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const getReferralLinks = () => {
        if (!isConnectedAndLogin) {
            setShowWalletModal(true)
            return
        }

        setLoading(true)
        axios
            .get(`${config.BASE_HTTPS_URL}/api/referral-links`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                const { affiliates } = res.data
                console.log(affiliates)
                setAffiliates(affiliates)
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const getTop100Winners = (duration: string) => {
        setLoading(true)
        axios
            .post(`${config.BASE_HTTPS_URL}/api/top100winners`, {
                duration,
            })
            .then((res) => {
                const { Top100Winners } = res.data

                console.log(Top100Winners)

                setTop100Winners(Top100Winners)
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const getNetworks = () => {
        if (networks.length > 0) return
        setLoading(false)
        axios
            .get(`${config.BASE_HTTPS_URL}/api/networks`)
            .then((res) => {
                const { networks } = res.data
                setNetworks(networks)
                setNetwork(networks[1])
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const getFutureBTCChallenges = () => {
        setLoading(false)
        axios
            .get<AllChallengeStatus>(`${config.BASE_HTTPS_URL}/api/future-btc-challenges`)
            .then((res) => {
                setChallengeData(res.data)
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const getDepositAndWithdrawFee = async (chain: string) => {
        try {
            setLoading(true)
            const res = await axios.post(
                `${config.BASE_HTTPS_URL}/api/depositAndWithdrawFee`,
                {
                    chain,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )

            return res.data
        } catch (error) {
            handleAxiosError(error as AxiosError)
            return null
        } finally {
            setLoading(false);
        }
    }

    const submitFutureBTCPrice = async (position: number) => {

        if (!isConnectedAndLogin) {
            setShowWalletModal(true)
            return
        }

        try {
            setLoading(true)
            await axios.post(
                `${config.BASE_HTTPS_URL}/api/submit-future-position`,
                {
                    position,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            notifySuccess("Submitted successfully.")
        } catch (error) {
            handleAxiosError(error as AxiosError)
        } finally {
            setLoading(false);
        }
    }

    const claim = (rewardId: string) => {
        if (!isConnectedAndLogin) {
            setShowWalletModal(true)
            return
        }

        setLoading(true)

        axios
            .post(
                `${config.BASE_HTTPS_URL}/api/claim-rewards`,
                {
                    rewardId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((res) => {
                getBalance()

                notifySuccess(res.data.message)
                setNotifications(
                    notifications.filter((n) => n._id !== rewardId)
                )
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const withdraw = async (
        toAddress: string,
        amount: number,
        chain: string
    ) => {
        if (!isConnectedAndLogin) {
            setShowWalletModal(true)
            return
        }

        if (!toAddress || toAddress == '')
            notifyError('Enter your USDT wallet address')

        if (amount == 0 || !amount) notifyError('Enter your withdrawal amount')

        if (!chain) notifyError('Select a chain.')
        setLoading(true)
        axios
            .post(
                `${config.BASE_HTTPS_URL}/api/withdraw`,
                {
                    toAddress,
                    amount,
                    chain,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((res) => {
                setBalance(res.data.balance)
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        if (network?.chain && isConnectedAndLogin) {
            console.log(network)
            getDepositAndWithdrawFee(network.chain).then((data) => {
                if (
                    data &&
                    data.address &&
                    data.chain === network.chain &&
                    data.minWithdraw &&
                    data.fee
                ) {
                    setDepositAddress(data.address)
                    setWithdrawFee({
                        fee: data.fee,
                        minWithdraw: data.minWithdraw,
                    })
                }
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [network, isConnectedAndLogin])

    const tryPing = () => {
        wss?.send(
            JSON.stringify({
                msg: 'ping',
                jwtToken: `Bearer ${accessToken}`,
            })
        )
    }

    useEffect(() => {
        console.log(wss?.readyState)
        if (
            isConnectedAndLogin &&
            wss &&
            wss.readyState === WebSocket.OPEN &&
            !ping
        ) {
            // alert(wss.readyState);
            tryPing()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnectedAndLogin, wss?.readyState, ping])

    useInterval(() => {
        if (
            isConnectedAndLogin &&
            wss &&
            wss.readyState === WebSocket.OPEN &&
            !ping
        ) {
            tryPing()
        }
    }, 1000)

    // Top 10 high rollers
    const getHighRollers = () => {
        setLoading(true)

        axios
            .get(
                `${config.BASE_HTTPS_URL}/api/${isConnectedAndLogin ? 'auth-highrollers' : 'highrollers'}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((res) => {
                // Handle response
                const {
                    highRollers,
                    position,
                    timeLeft,
                    rewards,
                    tradingVolume,
                } = res.data
                
                setHighRollers({
                    highRollers,
                    position,
                    timeLeft,
                    rewards,
                    tradingVolume,
                })
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    // Top 10 Win Ratio Players
    const getWinRatioPlayers = () => {
        setLoading(true)

        axios
            .get(
                `${config.BASE_HTTPS_URL}/api/${isConnectedAndLogin ? 'auth-winratio' : 'winratio'}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((res) => {
                // Handle response
                const { winRatioPlayers, position, timeLeft, rewards, detail } =
                    res.data

                console.log(position)

                setWinRatioPlayers({
                    winRatioPlayers,
                    position,
                    timeLeft,
                    rewards,
                    detail,
                })
            })
            .catch(handleAxiosError)
            .finally(() => {
                setLoading(false)
            })
    }

    const contextProvider = {
        name: 'hello',
        xScale,
        yScale,
        yScaleForAxis,
        startPointHeight,
        midHeight,
        roundStatus,
        slicedBtcPrices,
        maxY,
        minY,
        getX,
        getY,
        maxX,
        minX,
        btcPrices,
        lastData,
        traders,
        width,
        height,
        upPlayers,
        downPlayers,
        upPlayersCount,
        downPlayersCount,
        upTotalAmount,
        downTotalAmount,
        winStatus,
        upPayout,
        downPayout,
        noMoreTrade,
        startNewRound,
        roundHistory,
        allTimesWinsPaid,
        winsPaidFor24H,
        livePlayersFor24H,
        winRatioFor24H,
        contestPrize,
        isMobile,
        isLogin,
        isConnectedAndLogin,
        profile,
        balance,
        showWalletModal,
        setShowWalletModal,
        walletBtn,
        setInvest,
        invest,
        address,
        wss,
        accessToken,
        getBalance,
        generateLink,
        affiliates,
        getReferralLinks,

        getNetworks,
        network,
        networks,
        depositAddress,
        startTrade,
        setNetwork,
        notifySuccess,
        notifyError,
        withdraw,
        getHighRollers,
        highRollers,
        // posHighRoller,
        loading,
        top100Winners,
        getTop100Winners,
        coinBalance,
        notifications,
        getNotifications,
        claim,
        withdrawFee,
        getWinRatioPlayers,
        winRatioPlayers,
        submitFutureBTCPrice,
        // distributedMoney
        getFutureBTCChallenges,
        challengeData
    }

    return (
        <Web3Trade2EarnContext.Provider value={contextProvider}>
            {children}
        </Web3Trade2EarnContext.Provider>
    )
}
