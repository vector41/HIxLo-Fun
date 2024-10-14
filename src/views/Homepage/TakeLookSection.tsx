import { useRef, useState } from 'react'
import TakeLookImg from '../../assets/img/takelook.png'
import VideoCaptureImg from '../../assets/icon/video-octagon.png'
import TradeBtn from '../../components/TradeBtn'
import SectionLabel from '../../components/SectionLabel'
import BtcMp4 from '../../assets/media/btc.mp4'
import StarBg from '../../assets/icon/star_bg.png'

function TakeLookSection(): JSX.Element {
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const videoSrc = useRef<HTMLVideoElement>(null)

    return (
        <section
            className="pt-[4em]"
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            <div id="tutorial" className="container mx-auto mb-[65px] px-5">
                <SectionLabel
                    title="Take a look"
                    sub_title="Watch this short video to learn the game logic, enjoy!"
                />
            </div>

            <div className="container mx-auto px-5">
                <div className="text-center max-w-[1200px] mb-[4em] mx-auto relative">
                    <img
                        src={TakeLookImg}
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

export default TakeLookSection
