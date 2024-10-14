import TradeBtn from '../../components/TradeBtn'
import SectionLabel from '../../components/SectionLabel'

import paybis from '../../assets/img/partnership/paybis.svg'
import cwallet from '../../assets/img/partnership/cwallet.svg'
import web3auth from '../../assets/img/partnership/web3auth.svg'
import ccpayment from '../../assets/img/partnership/ccpayment.svg'
import StarBg from '../../assets/icon/star_bg.png'

function PartnershipSection() {
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
                <SectionLabel title="Partnership"></SectionLabel>

                <div className="grid grid-cols-2 gap-10 w-full sm:w-[50em] sm:mx-auto px-8 mt-8 sm:mt-12">
                    <a
                        href="https://paybis.com/"
                        target="_blank"
                        className="flex items-center justify-center max-h-[5em]"
                    >
                        <img src={paybis} className="h-full" />
                    </a>
                    <a
                        href="https://cwallet.com/"
                        target="_blank"
                        className="flex items-center justify-center max-h-[5em]"
                    >
                        <img src={cwallet} className="h-full" />
                    </a>
                    <a
                        href="https://web3auth.io/"
                        target="_blank"
                        className="flex items-center justify-center max-h-[5em]"
                    >
                        <img src={web3auth} className="h-full" />
                    </a>
                    <a
                        href="https://ccpayment.com/"
                        target="_blank"
                        className="flex items-center justify-center max-h-[5em]"
                    >
                        <img src={ccpayment} className="h-full" />
                    </a>
                </div>

                <div className="mt-[4em]">
                    <TradeBtn></TradeBtn>
                </div>
            </div>

            <div className="line_break_gradient mt-[4em]"></div>
        </section>
    )
}

export default PartnershipSection
