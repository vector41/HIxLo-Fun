import BitcoinImg from '../../assets/icon/bitcoin.svg'
import VectorImg from '../../assets/icon/Vector.png'
import MaticImg from '../../assets/icon/usdt_icon.png'
import Vector2Img from '../../assets/icon/Vector2.png'
import Vector3Img from '../../assets/icon/Vector3.png'
// import BitcoinBImg from '../../assets/icon/bitcoin_b.png'
import BtcBg from '../../assets/img/btc_bg.png'
import BtcNameBg from '../../assets/icon/btc_name.png'
import StarBg from '../../assets/icon/star_bg.png'
import { Link, useNavigate } from 'react-router-dom'
import { useWeb3Trade2Earn } from '../../services/trade2earn'
function HeroSection() {
    const { winRatioFor24H, winsPaidFor24H, allTimesWinsPaid } =
        useWeb3Trade2Earn()

    const navigate = useNavigate()
    return (
        <section
            className=""
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            {/* <img
                src={StarBg}
                className="absolute top-0 left-0 w-full  pointer-events-none"
                alt=""
            /> */}
            <div className="container mx-auto px-5 relative flex justify-evenly flex-col gap-[0em] min-h-[calc(100vh-7em)] sm:min-h-[calc(100vh-5em)]">
                <img
                    src={BtcBg}
                    className=" pointer-events-none absolute end-0 top-[-3vh] sm:top-0 h-[55vw] sm:h-[30vw]"
                    alt=""
                />
                <div className="flex-1"></div>
                <div className="flex-1 sm:hidden"></div>
                <div className="relative z-10">
                    <h1 className="text-center text-[8em] sm:text-[6em] md:text-[5.5em] lg:text-[4.1em] flex items-center flex-col text-white leading-1">
                        <img
                            src={BtcNameBg}
                            className="w-[55%] sm:max-w-[5em] md:max-w-[4.5em] lg:max-w-[4em]"
                            alt=""
                        />
                        <span className="font-bold">High Or Low?</span>

                        <p className="text-[0.55em] py-[1em] text-center text-[#7786CB] font-medium">
                            100% Fair BTC Trading Game
                        </p>
                    </h1>
                </div>

                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1 sm:hidden"></div>
                <div className="hidden sm:flex items-center justify-center gap-5 sm:text-[1.8em] md:text-[1.5em] lg:text-[1.2em] xl:text-[1em]">
                    <button
                        className="max-w-[12em] flex-1 rounded-2xl h-[3em] text-white border_linear_btn font-medium"
                        onClick={() =>
                            document
                                .getElementById('tutorial')
                                ?.scrollIntoView()
                        }
                    >
                        How to trade
                    </button>
                    <Link
                        to={'/trade'}
                        className="max-w-[12em] flex-1 flex items-center rounded-2xl h-[3em] text-white bg-btn-gradient font-bold justify-center gap-[0.5em]"
                    >
                        <img src={BitcoinImg} className="h-[1.5em]" alt="" />{' '}
                        Predict to earn
                    </Link>
                    <button
                        className="max-w-[12em] flex-1 rounded-2xl h-[3em] text-white border_linear_btn font-medium"
                        onClick={() => navigate('/affiliate')}
                    >
                        Be an Affiliate
                    </button>
                </div>

                <div className="space-y-[8em]">
                    {/* <div className="w-full rounded-xl border_linear_box p-[20px] sm:p-[32px] flex sm:hidden items-center justify-between text-[1.5em]">
                        <div className="flex flex-col gap-[0.5em]">
                            <span className="text-[#7786CB] text-[2.5em]">
                                All Time
                            </span>
                            <span className="text-[3em] text-[#02ED8E] inline-flex pt-1 items-center justify-center pb-[2px]">
                                <img
                                    src={MaticImg}
                                    className="h-[1.2em] sm:h-[1.2em] rounded-full me-1 sm:me-2"
                                    alt=""
                                />
                                {
                                    allTimesWinsPaid.toLocaleString()
                                }
                            </span>
                            <span className="text-[2.5em] text-white font-medium">
                                Wins Paid
                            </span>
                        </div>

                        <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full border_linear_box">
                            <img
                                src={Vector3Img}
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>
                    </div> */}
                    <div className="grid sm:hidden grid-cols-2 items-center justify-center gap-4 text-[3em]">
                        <button className="col-span-1 rounded-2xl h-[3em] text-white border_linear_btn ">
                            How to trade
                        </button>

                        <button className="col-span-1 rounded-2xl h-[3em] text-white border_linear_btn ">
                            Be an Affiliate
                        </button>
                        <button
                            onClick={() => navigate('/trade')}
                            className="col-span-2 flex items-center justify-center rounded-2xl h-[4em] text-white bg-btn-gradient gap-[0.4em]"
                        >
                            <img
                                src={BitcoinImg}
                                className="h-[1.8em]"
                                alt=""
                            />{' '}
                            <span className="font-semibold leading-6 text-[1.5em]">
                                Predict to earn
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-[2em] px-[4em] sm:px-[5em] md:px-[15em] lg:px-[20em] xl:px-[30em] text-[0.9em] sm:text-[0.55em] md:text-[0.5em] lg:text-[0.4em] xl:text-[0.35em]">
                <div className="w-full rounded-xl border_linear_box px-[3em] py-[2em] flex items-center justify-between">
                    <div className="flex flex-col gap-[0.5em]">
                        <span className="text-[#7786CB] text-[2.5em]">
                            Last 24h
                        </span>
                        <span className="text-[3em] text-[#02ED8E] inline-block pt-1 pb-[2px] font-medium">
                            {((winRatioFor24H || 0.51) * 100).toFixed(2)}%
                        </span>
                        <span className="text-[2.5em] text-white font-medium">
                            Win Ratio
                        </span>
                    </div>
                    <div className="h-[10em] rounded-full p-[3em] border_linear_box font-medium">
                        <img
                            src={VectorImg}
                            className="w-full h-full object-contain"
                            alt=""
                        />
                    </div>
                </div>

                <div className="w-full rounded-xl border_linear_box px-[3em] py-[2em] flex items-center justify-between">
                    <div className="flex flex-col gap-[0.5em]">
                        <span className="text-[#7786CB] text-[2.5em]">
                            Last 24h
                        </span>
                        <span className="text-[3em] text-[#02ED8E] inline-flex pt-1 items-center pb-[2px]">
                            <img
                                src={MaticImg}
                                className="h-[1.2em] sm:h-[1.2em] rounded-full me-1 sm:me-2"
                                alt=""
                            />
                            {winsPaidFor24H.toLocaleString()}
                        </span>
                        <span className="text-[2.5em] text-white font-medium">
                            Wins Paid
                        </span>
                    </div>
                    <div className="h-[10em] rounded-full p-[3em] border_linear_box">
                        <img
                            src={Vector2Img}
                            className="w-full h-full object-contain"
                            alt=""
                        />
                    </div>
                </div>

                <div className="w-full rounded-xl border_linear_box px-[3em] py-[2em] flex items-center justify-between">
                    <div className="flex flex-col gap-[0.5em]">
                        <span className="text-[#7786CB] text-[2.5em]">
                            All Time
                        </span>
                        <span className="text-[3em] text-[#02ED8E] inline-flex pt-1 items-center pb-[2px]">
                            <img
                                src={MaticImg}
                                className="h-[1.2em] sm:h-[1.2em] rounded-full me-1 sm:me-2"
                                alt=""
                            />
                            {allTimesWinsPaid.toLocaleString()}
                        </span>
                        <span className="text-[2.5em] text-white font-medium">
                            Wins Paid
                        </span>
                    </div>
                    <div className="h-[10em] rounded-full p-[3em] border_linear_box">
                        <img
                            src={Vector3Img}
                            className="w-full h-full object-contain"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="line_break_gradient mt-[4em]"></div>
        </section>
    )
}

export default HeroSection
