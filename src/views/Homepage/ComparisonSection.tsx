// import CloseImg from './assets/icon/close_icon.png'
// import CheckImg from './assets/icon/check_icon.png'
import CompImg from '../../assets/img/comp_img.png'
import TradeBtn from '../../components/TradeBtn'
import SectionLabel from '../../components/SectionLabel'
import CompSmTBBG from '../../assets/img/comparison_sm_table.png'

function ComparisonSection() {
    return (
        <section>
            <div className="container mx-auto px-5">
                <SectionLabel
                    title="Comparison With Others"
                    sub_title={` Understanding the context within a broader framework
                        helps in identifying areas of excellence and areas for
                        improvement.`}
                    text_align="text-start"
                    margin_inline="mx-0"
                ></SectionLabel>

                <div className="lg:mt-[212px]">
                    <div className="flex items-center">
                        <img
                            src={CompImg}
                            className="w-full hidden lg:block object-contain mx-auto"
                            alt=""
                        />

                        <img
                            src={CompSmTBBG}
                            className="w-full lg:hidden object-contain mx-auto"
                            alt=""
                        />
                    </div>
                </div>

                <TradeBtn></TradeBtn>
                <div className="line_break_gradient mb-[38px]"></div>
            </div>
        </section>
    )
}

export default ComparisonSection
