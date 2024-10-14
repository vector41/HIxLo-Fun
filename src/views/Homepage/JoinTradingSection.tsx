import { useState, useRef } from 'react'
import VideoCaptureImg from '../../assets/icon/video-octagon.png'
import TradeBtn from '../../components/TradeBtn'
import AffiliateProgramImg from '../../assets/img/affiliate_program.png'
import SectionLabel from '../../components/SectionLabel'
import BtcMp4 from '../../assets/media/btc.mp4'
import JoinSideImg from '../../assets/icon/join_side_icon.png'
import StarBg from '../../assets/icon/star_bg.png'

function JoinTradingSection(): JSX.Element {
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const videoSrc = useRef<HTMLVideoElement>(null)

    return (
        <section
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
            className="pt-[4em]"
        >
            <div className="container mx-auto mb-[3em] px-5">
                <SectionLabel
                    title="Join our affiliate program and start earning daily passive income"
                    sub_title={`Unlock up to a 35% commission on your friends' earnings fees - enroll now in our multi-level referral program`}
                />
            </div>

            <div className="container mx-auto px-5">
                <div className="text-center max-w-[1200px] mb-[4em] mx-auto relative">
                    <img
                        src={JoinSideImg}
                        className="absolute start-[-20px] top-[-20px] lg:start-[-50px] lg:top-[-55px] h-[27px] lg:h-[96px]"
                        alt=""
                    />
                    <img
                        src={AffiliateProgramImg}
                        alt=""
                        className={`w-full object-contain ${isPlay ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    />

                    <video
                        controls
                        ref={videoSrc}
                        src={BtcMp4}
                        className={`absolute  top-0 left-0 w-full h-full object-cover rounded-2xl ${isPlay ? 'opacity-100' : 'opacity-0'}`}
                    />

                    <button
                        onClick={() => {
                            setIsPlay(!isPlay)
                            if (videoSrc.current) {
                                isPlay
                                    ? videoSrc.current.pause()
                                    : videoSrc.current.play()
                            }
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <img
                            src={VideoCaptureImg}
                            className="max-h-[36px] sm:max-h-[120px]"
                            alt=""
                        />
                    </button>
                </div>

                <TradeBtn />
            </div>
            <div className="line_break_gradient mt-[4em]"></div>
        </section>
    )
}

export default JoinTradingSection
