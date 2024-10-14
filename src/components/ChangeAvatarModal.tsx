import React, { useRef } from 'react'
import { CgCloseO } from 'react-icons/cg'
import AvatarChangeImg from '../assets/img/icons/avatar_change_img.png'
export const ChangeAvatarModal: React.FC<{
    showAvatarModal: boolean
    setShowAvatarModal: (value: boolean) => void
}> = ({ showAvatarModal, setShowAvatarModal }) => {
    const modalContent = useRef<HTMLDivElement>(null)

    return (
        <>
            {showAvatarModal ? (
                <React.Fragment>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-full max-w-[500px]">
                            {/*content*/}
                            <div
                                ref={modalContent}
                                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-[#42128E] outline-none focus:outline-none"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between px-7 py-3 rounded-t">
                                    <h3 className="text-lg lg:text-3xl font-semibold text-white">
                                        Change Your Avatar
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white text-4xl float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowAvatarModal(false)
                                        }}
                                    >
                                        <CgCloseO></CgCloseO>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-7 py-5 flex-auto">
                                    {/* body */}
                                    <input
                                        type="file"
                                        name=""
                                        className="hidden"
                                        id="change_avatar_input"
                                    />
                                    <label
                                        htmlFor="change_avatar_input"
                                        className="flex cursor-pointer items-center justify-center mb-4"
                                    >
                                        <img
                                            className="h-[90px] sm:h-[120px]"
                                            src={AvatarChangeImg}
                                            alt=""
                                        />
                                    </label>
                                    <p className="text-base text-[#7786CB]">
                                        You can upload your own favorites
                                        picture. when you done click on Apply
                                        changes button
                                    </p>

                                    <div className="pt-5 lg:pt-12 pb-6">
                                        <button className="p-2 lg:p-3 w-[180px] lg:w-[250px]  rounded-lg text-base text-white bg-btn-gradient">
                                            Apply Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </React.Fragment>
            ) : null}
        </>
    )
}

export default ChangeAvatarModal
