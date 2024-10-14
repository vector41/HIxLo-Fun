import PlusImg from '../../assets/icon/add.png'
import MinusImg from '../../assets/icon/minus.png'
import SectionLabel from '../../components/SectionLabel'
import { useState } from 'react'
import StarBg from '../../assets/icon/star_bg.png'
interface AccordionItem {
    id: number
    title: string
    content: string
}

function FAQSection(): JSX.Element {
    const accordion_list: AccordionItem[] = [
        {
            id: 1,
            title: `What is Metamask?`,
            content: `
            MetaMask is a cryptocurrency wallet and browser extension that allows users to interact with the Ethereum blockchain. It serves as a bridge between a user's web browser and the Ethereum blockchain, enabling users to manage their Ethereum accounts, securely store Ethereum and ERC-20 tokens, and interact with decentralized applications (DApps) directly from their browser.`,
        },
        {
            id: 2,
            title: `How to mint with Metamask on a mobile phone?`,
            content: `
            Minting tokens using MetaMask on a mobile phone involves interacting with decentralized applications (DApps) that support minting functionality directly from your mobile browser.`,
        },
        {
            id: 3,
            title: `How to mint with Metamask on a computer?`,
            content: `
            Minting tokens with MetaMask on a computer involves interacting with decentralized applications (DApps) that support minting functionality directly from your web browser.`,
        },
        {
            id: 4,
            title: `Buying NFT for the first time?`,
            content: `Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button "MINT" on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !`,
        },
        {
            id: 5,
            title: `Where does my NFT go after I purchase?`,
            content: `After purchasing an NFT (Non-Fungible Token), the ownership and control of the NFT typically reside within your cryptocurrency wallet.`,
        },
    ]

    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const handleClick = (index: number): void => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <section
            className="pt-[4em]"
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            <div className="mx-auto px-[4em] lg:px-[15em] text-[2em] sm:text-[1.6em] md:text-[1.3em] lg:text-[0.8em]">
                <div className="mb-[4em]" id="faq">
                    <SectionLabel
                        title="FAQ - HIxLO Trade Game"
                        sub_title={`Welcome to our Web3 gaming platform! Here are answers to
                some common questions`}
                    ></SectionLabel>
                </div>

                {accordion_list.map((item, index) => (
                    <div
                        key={item.id}
                        className={`accordion-item mb-4 rounded-lg bg-[#11183F]  px-4 lg:px-8 ${index === activeIndex ? 'border_linear_accordion_box' : ''}`}
                    >
                        <div
                            className="accordion-title cursor-pointer text-white bg-[#11183F] py-[1.5em] flex items-center justify-between "
                            onClick={() => handleClick(index)}
                        >
                            <span>{item.title}</span>

                            <span className="accordion-icon">
                                <img
                                    className="h-[2em]"
                                    src={
                                        index === activeIndex
                                            ? MinusImg
                                            : PlusImg
                                    }
                                    alt=""
                                />
                            </span>
                        </div>
                        {index === activeIndex && (
                            <div className="accordion-content border-t pt-6 pb-10 text-[#7786CB] border-slate-700">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* <div className="line_break_gradient mt-[4em]"></div> */}
        </section>
    )
}

export default FAQSection
