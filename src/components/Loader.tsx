import React from 'react'

const Loader: React.FC = () => {
    return (
        <div
            className="fixed bg-[#000000e0] w-full h-full top-0 left-0"
            style={{ zIndex: 10000 }}
        >
            <div
                role="status"
                className="fixed -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 "
            >
                <div className="flex gap-[0.25em] w-[6em] h-[4em]">
                    <div
                        className="rounded-full dot-elastic"
                        style={{
                            animationDelay: '0ms',
                        }}
                    ></div>
                    <div
                        className="rounded-full dot-elastic"
                        style={{
                            animationDelay: '140ms',
                        }}
                    ></div>
                    <div
                        className="rounded-full dot-elastic"
                        style={{
                            animationDelay: '280ms',
                        }}
                    ></div>
                    <div
                        className="rounded-full dot-elastic"
                        style={{
                            animationDelay: '420ms',
                        }}
                    ></div>
                    <div
                        className="rounded-full dot-elastic"
                        style={{
                            animationDelay: '560ms',
                        }}
                    ></div>
                    <div
                        className="rounded-full dot-elastic"
                        style={{
                            animationDelay: '420ms',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
