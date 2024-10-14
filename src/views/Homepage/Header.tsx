import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/img/logo.png'
import BarImg from '../../assets/icon/bar.png'
import { CgCloseO } from 'react-icons/cg'
import StarBg from '../../assets/icon/star_bg.png'

function Header() {
    const [isToggle, setIsToggle] = React.useState(false)
    return (
        <header
            className="border-b border-slate-800 text-[4em] sm:text-[3.6em] md:text-[3.2em] lg:text-[3em] xl:text-[2.4em]"
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            <div className="mx-auto py-[0.5em] px-[0.4em]">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img
                            src={LogoImg}
                            className="max-h-[1.8em]"
                            alt="logo"
                        />
                    </Link>

                    <button
                        onClick={() => setIsToggle(true)}
                        className="sm:hidden"
                    >
                        <img
                            src={BarImg}
                            alt=""
                            className="h-[1.5em] p-[0.2em]"
                        />
                    </button>

                    <div
                        className={`fixed sm:static flex flex-col sm:flex-row items-center w-full justify-center sm:justify-between top-0 left-0 h-full bg-[#3B0D7D] sm:bg-transparent opacity-0 sm:opacity-100 transition-all duration-700  ${isToggle ? ' !opacity-100 translate-x-1 z-50' : '  translate-x-[100%] sm:translate-x-[0%]'}`}
                    >
                        <button
                            onClick={() => setIsToggle(false)}
                            className="absolute end-[0.45em] top-[0.4em] text-white text-[1.5em] block sm:hidden"
                        >
                            <CgCloseO></CgCloseO>
                        </button>
                        <ul className="flex flex-col sm:flex-row items-center gap-[1em] sm:gap-[1.5em] md:gap-[2em] lg:gap-[3em] xl:gap-[4em] mx-auto mb-[1em] sm:mb-0 text-[1em] sm:text-base">
                            <li>
                                <Link
                                    className="text-[1em] text_gradient_effect font-bold"
                                    to="/affiliate"
                                    onClick={() => setIsToggle(false)}
                                >
                                    AFFILIATE
                                </Link>
                            </li>
                            <li>
                                <a
                                    className="text-[1em] text-[#7786CB] font-semibold"
                                    href="#tutorial"
                                    onClick={() => setIsToggle(false)}
                                >
                                    HOW TO TRADE
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="text-[1em] text-[#7786CB] font-semibold"
                                    onClick={() => setIsToggle(false)}
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                        <Link
                            to="/trade"
                            className="bg-btn-gradient text-white rounded-[0.4em] px-[1.2em] py-[0.2em] flex items-center justify-center text-[1em] sm:text-[0.5em] border-t-[1.5px] border-solid border-[#5A9FFA] font-semibold"
                        >
                            Launch
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
