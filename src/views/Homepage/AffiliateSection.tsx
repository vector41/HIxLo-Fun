import GiftImg from '../../assets/img/card_gift_box.png'
import SectionLabel from '../../components/SectionLabel'
import AffiliateBg from '../../assets/img/affiliate_bg.png'
import StarBg from '../../assets/icon/star_bg.png'
import { useNavigate } from 'react-router-dom'
function AffiliateSection() {
    const navigate = useNavigate()
    const card_list = [
        {
            id: 1,
            size: 'UP TO 25%',
            size_icon: '',
            title: 'Multi Level Affiliate Program',
            desc: `Get up to 25% commission an your friends earnings
            fees`,
            btn_title: 'Join Affiliate',
            navigate: '/affiliate',
        },
        {
            id: 2,
            size: '35%',
            // size_icon: MeticImg,
            title: 'Weekly Challenge Prize',
            desc: `Winners take home their share 
            through our Weekly Free Contest 
            and Weekly Wager Contest`,
            btn_title: 'Trade Now',
            navigate: '/high-rollers',
        },
        // {
        //     id: 3,
        //     size: '50K',
        //     size_icon: MeticImg,
        //     title: 'Sign Up Bonus',
        //     desc: `Sign up for a $50,000 bonus to start your crypto gaming adventure!`,
        //     btn_title: 'Trade Now',
        // },
        // {
        //     id: 4,
        //     size: '60K',
        //     size_icon: MeticImg,
        //     title: 'Weekly Prize Pool',
        //     desc: `Winners take home their share
        //     through our Weekly Free Contest
        //     and Weekly Wager Contest`,
        //     btn_title: 'Trade Now',
        // },
    ]
    return (
        <section
            className="relative pt-[4em]"
            style={{
                backgroundImage: `url(${StarBg})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
            }}
        >
            <div className="container mx-auto  px-5 relative">
                <div className="z-10 relative">
                    <div className="mb-[3em]">
                        <SectionLabel
                            title="Affiliate & Prize Pools"
                            sub_title={`With our intuitive interface, advanced tools, and
                        responsive design, you'll be able to trade confidently
                        and profitably from anywhere in the world.`}
                        ></SectionLabel>
                    </div>

                    <div className="text-[3em] sm:text-[2em] md:text-[1.8em] lg:text-[1.3em] xl:text-[1.1em]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-10 max-w-[90%] sm:max-w-full lg:max-w-[80%] xl:max-w-[60%] mx-auto">
                            {card_list.map((value) => {
                                return (
                                    <div
                                        key={value.id}
                                        className="rounded-2xl bg-[#FFFFFF0D] p-[32px_26px] text-center w-full flex flex-col justify-between"
                                    >
                                        <div className="text-center mb-[1em]">
                                            <img
                                                src={GiftImg}
                                                alt=""
                                                className="mx-auto h-[5em]"
                                            />
                                        </div>

                                        <h3 className="text-[1em] text-white flex items-center justify-center font-bold">
                                            {value.size_icon && (
                                                <img
                                                    src={value.size_icon}
                                                    className="me-1 h-[1em]"
                                                    alt=""
                                                />
                                            )}{' '}
                                            {value.size}
                                        </h3>
                                        <h6 className="text-[0.8em] text-white mb-2 font-medium">
                                            {value.title}
                                        </h6>
                                        <p className="text-[0.7em] text-[#7786CB] min-h-[4em] mb-[1em]">
                                            {value.desc}
                                        </p>

                                        <div className="text-center px-[2em]">
                                            <button
                                                className="p-[1em] font-bold text-[0.6em] rounded-2xl border_linear_btn_card w-full text-white"
                                                onClick={() =>
                                                    navigate(value.navigate)
                                                }
                                            >
                                                <span className="text_linear_color">
                                                    {value.btn_title}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="line_break_gradient mt-[4em]"></div>

            <img
                src={AffiliateBg}
                className="absolute  top-0 start-0 h-full pointer-events-none object-contain"
                alt=""
            />
        </section>
    )
}

export default AffiliateSection
