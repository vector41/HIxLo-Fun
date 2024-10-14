import { Link } from 'react-router-dom'
import Logo2Img from '../../assets/img/logo.png'

import FacebookImg from '../../assets/icon/facebook.png'
import TwitterImg from '../../assets/icon/twitter.png'
import InstagramImg from '../../assets/icon/Instagram.png'
import GithubImg from '../../assets/icon/github.png'
import FooterRadiusBg from '../../assets/img/footer_radius.png'
import FooterShadowM from '../../assets/img/footer_shadow_m.png'
import StarBg from '../../assets/icon/star_bg.png'

function Footer(): JSX.Element {
    return (
        <section
            className="pt-[2em]"
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            <div className="container mx-auto px-5 text-[2em] sm:text-[1.6em] md:text-[1.3em] lg:text-[0.8em]">
                <div className="text-center mb-[1em]">
                    <Link to="/">
                        <img
                            src={Logo2Img}
                            className="h-[3em] mb-[1em] mx-auto"
                            alt=""
                        />
                    </Link>
                </div>
                <p className="text-[#7786CB] mb-4 lg:max-w-[70%] mx-auto text-center">
                    A multi-award winning crypto casino. With a player-centric
                    approach, BC. Game is able to satisfy millions of gamblers
                    across the globe. BC.GAME has its priority set on its
                    community, ensuring an everlasting and endlessly
                    entertaining gambling experience.
                </p>

                <div className="flex items-center justify-center gap-[2em] mb-4 lg:mb-8">
                    <Link to="/" className="text-white">
                        {' '}
                        Affiliate{' '}
                    </Link>
                    <a href="#tutorial" className="opacity-80 text-white">
                        {' '}
                        How to trade{' '}
                    </a>
                    <Link to="/" className="opacity-80 text-white">
                        {' '}
                        FAQ{' '}
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-[1.2em]">
                    <a href="#">
                        <img src={TwitterImg} className="h-[40px]" alt="" />
                    </a>
                    <a href="#">
                        <img src={FacebookImg} className="h-[40px]" alt="" />
                    </a>
                    <a href="#">
                        <img src={InstagramImg} className="h-[40px]" alt="" />
                    </a>
                    <a href="#">
                        <img src={GithubImg} className="h-[40px]" alt="" />
                    </a>
                </div>
            </div>

            {/* <div className="line_break_gradient my-[3em]"></div> */}

            <div className="pb-[3em] mt-[2em] ">
                <p className="text-center text-white relative text-[2em] sm:text-[1.6em] md:text-[1.3em] lg:text-[0.8em]">
                    ©2024 HIxLO.GG ALL RIGHTS RESERVED
                </p>

                <img
                    src={FooterRadiusBg}
                    className="hidden sm:block absolute end-0 w-full h-[499px] bottom-[0] start-[50%] translate-x-[-50%] pointer-events-none"
                    alt=""
                />
                <img
                    src={FooterShadowM}
                    className=" sm:hidden absolute end-0 w-full h-[499px] bottom-[0] start-[50%] translate-x-[-50%] pointer-events-none"
                    alt=""
                />
            </div>
        </section>
    )
}

export default Footer
