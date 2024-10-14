import GameImg from '../../assets/icon/game.png'
import RaffleImg from '../../assets/img/raffle_home.png'
import TradeBtn from '../../components/TradeBtn'
import SectionLabel from '../../components/SectionLabel'
function JackportSection() {
    return (
        <section>
            <div className="container mx-auto mb-[65px] px-5">
                <SectionLabel
                    title="Weekly & Monthly Jackpot"
                    sub_title={`  The introduction of weekly and monthly jackpots adds an
                        exciting dimension to the realm of rewards and
                        incentives.`}
                ></SectionLabel>

                <div className="text-center">
                    <div className="mx-auto max-w-[495px] rounded-2xl bg-[#1A2E5A] inline-flex items-center lg:p-1 mt-[61px] mb-[75px]">
                        <button className=" bg-btn-gradient text-white rounded-2xl text-sm lg:text-[22px] mx-auto w-[157px] lg:w-[240px] h-[50px] lg:h-[60px] flex items-center justify-center">
                            Weekly Jackpot
                        </button>
                        <button className=" text-white rounded-2xl text-sm lg:text-[22px] mx-auto w-[157px] lg:w-[240px] h-[50px] lg:h-[60px] flex items-center justify-center">
                            Monthly Jackpot
                        </button>
                    </div>
                </div>

                <div className="mx-auto p-4 lg:max-w-[1240px] mb-9 rounded-2xl bg-[#0F163D] min-h-[502px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-[100px]">
                    <div className="lg:ps-[64px] pt-[69px] lg:pb-[96px] max-w-[685px]">
                        <button className="bg-btn-gradient text-sm text-white rounded-lg px-4 py-2">
                            🥳 Best Offer
                        </button>

                        <div className="pt-3 pb-4">
                            <SectionLabel
                                title={`10% of Platform's Income Up for Grabs in Exclusive
                            Participant Raffle!`}
                                sub_title={` You can participate in five distinct prize pools,
                            maximizing your winning opportunities. Whether
                            you're a seasoned trader or just starting out,
                            everyone has a shot at winning.`}
                                text_align="text-start"
                                margin_inline="mx-0"
                                width="w-auto"
                            ></SectionLabel>
                        </div>
                        <button className="px-6 lg:px-8 py-2 lg:py-4 text-sm rounded-xl border_linear_btn_card  inline-flex items-center text-white">
                            <img
                                src={GameImg}
                                className="h-[24px] me-2"
                                alt=""
                            />
                            <span className="text_linear_color">Play Now</span>
                        </button>
                    </div>

                    <div className="lg:pt-9 pb-6">
                        <img src={RaffleImg} alt="" />
                    </div>
                </div>

                <TradeBtn></TradeBtn>
                <div className="line_break_gradient mb-9"></div>
            </div>
        </section>
    )
}

export default JackportSection
