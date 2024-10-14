// import './navbar.css'
// import './desktop.css'
// import './mobile.css'
import React, { useState } from 'react'

// import bg from '../../assets/img/background.png'
import siteLogo from '../assets/img/logo.png'
import mobileLogo from '../assets/img/logo.svg'
import mobilePrize from '../assets/img/mobile/prize.svg'
import chatBallon from '../assets/img/notification.svg'
import SidebarModal from '../components/SidebarModal'
import config from '../config'
import { ConnectWalletModal } from './ConnectWalletModal'
import { useNavigate } from 'react-router-dom'
import { useWeb3Trade2Earn } from '../services/trade2earn'
import Notifications from './Notifications'

const Header: React.FC = () => {
    const {
        profile,
        notifications,
    } = useWeb3Trade2Earn()
    const navigate = useNavigate()
    const [notificationModal, setNotificationModal] = useState<boolean>(false)

    return (
        <div className="header flex justify-between bg-[#25055d] z-[100] shadow-[0_0_3em_rgba(0,0,0,0.6)] ">
            <div
                className="site_logo flex-1 cursor-pointer"
                onClick={() => navigate('/trade')}
            >
                <img
                    src={siteLogo}
                    className="h-[3em] my-[0.8em]"
                    alt="Site Logo"
                />
            </div>
            <div className="mobile_logo flex-1 flex gap-[4em]">
                <img className="h-[9em]" src={mobileLogo} alt="Mobile Logo" />
                <div className="mobile_prize">
                    <img
                        className="h-[9em]"
                        onClick={() => navigate('/high-rollers')}
                        src={mobilePrize}
                        alt="Mobile Prize"
                    />
                </div>
            </div>
            <a
                className="header_leftbtn pr-[1em] "
                onClick={() => {
                    navigate('/affiliate')
                }}
            >
                <div></div>
            </a>
            <div className="h-full">
                <div className="balance_box h-[95%] drop-shadow-[0_0_2em_rgba(0,0,0,0.3)] md:text-[1em]">
                    <ConnectWalletModal />
                </div>
            </div>
            <a className="pl-[1em]">
                <div
                    className="header_rightbtn"
                    onClick={() => {
                        navigate('/high-rollers')
                    }}
                >
                    <div></div>
                </div>
            </a>
            <div className="flex items-center flex-1 justify-end gap-[2em]">
                <div
                    id="intercom_button"
                    onClick={() => setNotificationModal(true)}
                    className="relative sm:text-[1em] text-[2.2em] cursor-pointer hover:opacity-70 "
                >
                    <img
                        src={chatBallon}
                        className="h-[3em]"
                        alt="Chat Balloon"
                    />
                    <span className="sm:text-[1em] text-[1.3em]">
                        <span className="absolute w-fit rounded-full bg-red-600 text-white top-[0.6em] sm:right-[0.2em] right-0 text-[0.6em] px-[0.4em]">
                            {notifications.length > 0
                                ? notifications.length
                                : ''}
                        </span>
                    </span>
                </div>
                <a className="w-[3em] h-[3em] rounded-md border-[0.25em] border-[#12A2F9] hidden sm:block hover:opacity-70">
                    <img
                        className=""
                        src={profile ? profile.Avatar : config.DEFAULT_AVATAR}
                        alt="User Profile"
                    />
                </a>
                {/* menu */}
                <SidebarModal />
                <Notifications
                    showModal={notificationModal}
                    setShowModal={setNotificationModal}
                />
            </div>
        </div>
    )
}

export default Header
