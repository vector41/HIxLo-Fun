import BenefitImg from '../../assets/img/benefit_img.png'
import TradeBtn from '../../components/TradeBtn'
function BenefitsSection() {
    const benefit_list = [
        'Best win ration, 50%',
        'No deposit, you control your funds',
        'You play peer to peer, not against the house',
        'Win and go, you get your winning to your personal wallet.',
        'The smart contract that manages the game is fully audited and verified by the best company in the industry: CERTIK!',
    ]
    return (
        <section className="pt-0 lg:pt-[187px]">
            <div className="container mx-auto px-5">
                <div className="flex flex-col lg:flex-row items-center gap-9 lg:gap-[107px] mb-[84px]">
                    <div className="w-full lg:w-[55%]">
                        <img src={BenefitImg} className="" alt="img" />
                    </div>
                    <div className="w-full lg:w-[45%]">
                        <h2 className="text-white text-2xl lg:text-[44px] mb-3 lg:mb-4">
                            5 Key Benefits
                        </h2>
                        <ul>
                            {benefit_list.map((value, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            benefit_list.length > index + 1
                                                ? 'mb-4 flex items-center'
                                                : 'flex items-center'
                                        }
                                    >
                                        <span className="inline-block w-[9px]  min-w-[9px] h-[9px] rounded-full bg-btn-gradient me-4"></span>

                                        <span className="text-[#7786CB] text-sm lg:text-[22px]">
                                            {value}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="pt-11">
                            <TradeBtn
                                text_align="text-start"
                                margin_inline="mx-0"
                            ></TradeBtn>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line_break_gradient mb-9"></div>
        </section>
    )
}

export default BenefitsSection
