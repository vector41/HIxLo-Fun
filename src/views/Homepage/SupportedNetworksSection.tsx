import NetworksImage from '../../assets/img/networks.svg'
import SectionLabel from '../../components/SectionLabel'
import TradeBtn from '../../components/TradeBtn'
import StarBg from '../../assets/icon/star_bg.png'

function SupportedNetworksSection() {
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
                <SectionLabel title="Networks Supported"></SectionLabel>
                <div className="w-full sm:max-w-[40em] mx-auto text-center my-[4em]">
                    <img
                        src={NetworksImage}
                        className="object-contain w-full"
                        alt=""
                    />
                </div>
                <div className="mt-[4em]">
                    <TradeBtn></TradeBtn>
                </div>
            </div>
            <div className="line_break_gradient mt-[4em]"></div>
        </section>
    )
}

export default SupportedNetworksSection
