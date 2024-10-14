// import TradeBtn from '../../components/TradeBtn'
import PolygonImg from '../../assets/img/polygon_blockchain.png'
import SectionLabel from '../../components/SectionLabel'
function PolygonBlockChainSection() {
    return (
        <section>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <div className="">
                        <SectionLabel
                            title="POLYGON BLOCKCHAIN"
                            sub_title={`The game is running on #Web3 polygon blockchain
                            network, to play the game you need to have polygon
                            Matic coins. Our game is #1 Web3 game in the polygon
                            network and Top in sending Matic coins !`}
                            margin_inline="mx-0"
                            text_align="text-start"
                            width="w-auto"
                        ></SectionLabel>
                    </div>

                    <div className="mb-9 sm:mb-0">
                        <img
                            className="h-[288px] sm:h-auto mx-auto sm:mx-0"
                            src={PolygonImg}
                            alt=""
                        />
                    </div>
                </div>

                <div className="line_break_gradient mb-[38px]"></div>
            </div>
        </section>
    )
}

export default PolygonBlockChainSection
