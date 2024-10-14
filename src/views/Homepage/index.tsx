import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import TradingScreenSection from './TradingScreenSection'
import PartnershipSection from './PartnershipSection'
import AffiliateSection from './AffiliateSection'
import TakeLookSection from './TakeLookSection'
import TopWinnersSection from './TopWinnersSection'
import FAQSection from './FAQSection'
import Footer from './Footer'
import RadiusGradientBG from '../../assets/img/radius_gradient_light.png'
import SupportedNetworksSection from './SupportedNetworksSection'

function Homepage() {
    return (
        <React.Fragment>
            <div className="bg-[#050C35] w-full relative">
                <Header></Header>
                <main className="mx-0 px-0 overflow-hidden">
                    <HeroSection></HeroSection>
                    <TradingScreenSection></TradingScreenSection>
                    <AffiliateSection></AffiliateSection>
                    <TakeLookSection></TakeLookSection>
                    {/* <JackportSection></JackportSection> */}
                    {/* <BenefitsSection></BenefitsSection> */}
                    <TopWinnersSection></TopWinnersSection>
                    {/* <JoinTradingSection></JoinTradingSection> */}
                    {/* <PolygonBlockChainSection></PolygonBlockChainSection> */}
                    {/* <FeedbackSection></FeedbackSection> */}

                    <PartnershipSection></PartnershipSection>

                    <SupportedNetworksSection></SupportedNetworksSection>

                    <FAQSection></FAQSection>
                </main>
                <Footer></Footer>
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
                    style={{
                        backgroundImage: `url(${RadiusGradientBG})`,
                        backgroundSize: '100% auto',
                        backgroundRepeat: 'repeat-y',
                    }}
                ></div>
            </div>
        </React.Fragment>
    )
}

export default Homepage
