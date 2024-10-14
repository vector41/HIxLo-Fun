import SectionLabel from '../../components/SectionLabel'
function FeedbackSection() {
    return (
        <section>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-5 gap-[72px] mb-9 lg:mb-[108px]">
                    <div className="col-span-5 lg:col-span-3">
                        <SectionLabel
                            title="Join our affiliate program and Get rewarded for your
                            valuable feedback"
                            sub_title={
                                <>
                                    At Airbnb, we made it a goal to unify our
                                    visualization stack across the company and
                                    in the process, we created a new project
                                    that brings together the power of D3 with
                                    the joy of React.
                                    <br />
                                    <br />
                                    Un-opinionated on purpose. Bring your own
                                    state management, animation library, or
                                    CSS-in-JS solution. Odds are good your React
                                    app already has an opinion on how animation,
                                    theming, or styling is done. visx is careful
                                    not to add another one and integrates with
                                    all of them.
                                </>
                            }
                            margin_inline="mx-0"
                            text_align="text-start"
                            width="w-auto"
                        ></SectionLabel>
                    </div>
                    <div className="col-span-5 lg:col-span-2 text-white">
                        <h4 className="text-[22px] mb-4 text-white">
                            Help us improve your experience
                        </h4>
                        {/* textarea */}
                        <div className="mb-5">
                            <textarea
                                className="h-[192px] p-4 w-full bg-[#101A45] border border-slate-700"
                                placeholder="Found a bug or have any recommendations? Please leave your message here"
                            ></textarea>
                        </div>

                        <h4 className="mb-4">
                            Now get rewarded for your valuable feedback.
                        </h4>
                        <button
                            className={`bg-btn-gradient text-white rounded-2xl text-sm lg:text-[22px] w-[183px] lg:w-[253px] h-[50px] lg:h-[60px] flex items-center justify-center`}
                        >
                            Leave a Message
                        </button>
                        <p className="text-sm mt-4">
                            Or{' '}
                            <span className="text_gradient_effect">
                                Email us: feedback@trading5x.game
                            </span>
                        </p>
                    </div>
                </div>

                <div className="line_break_gradient mb-[38px]"></div>
            </div>
        </section>
    )
}

export default FeedbackSection
