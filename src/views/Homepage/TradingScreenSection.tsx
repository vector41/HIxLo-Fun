import TradeImg from '../../assets/img/trading_view_img.png'
import SectionLabel from '../../components/SectionLabel'
import TradeBtn from '../../components/TradeBtn'
import StarBg from '../../assets/icon/star_bg.png'
function TradingScreenSection() {
    return (
        <section
            className="pt-[4em]"
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            <div className="container mx-auto px-5">
                <SectionLabel
                    title="Ready To Start BTC Trading"
                    sub_title={`With our intuitive interface, advanced tools, and
                        responsive design, you'll be able to trade confidently
                        and profitably from anywhere in the world.`}
                ></SectionLabel>
                <div className="sm:max-w-[40em] mx-auto text-center my-[4em]">
                    <img
                        src={TradeImg}
                        className="object-contain w-full"
                        alt=""
                    />
                </div>

                <TradeBtn />
            </div>
            <div className="line_break_gradient mt-[4em]"></div>
        </section>
    )
}

export default TradingScreenSection
