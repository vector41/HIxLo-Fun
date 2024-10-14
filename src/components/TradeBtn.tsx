import React from 'react'
import { useNavigate } from 'react-router-dom'

interface TradeBtnProps {
    padding_bottom?: string
    text_align?: string
    margin_inline?: string
}

const TradeBtn: React.FC<TradeBtnProps> = ({
    text_align = 'text-center',
    margin_inline = 'mx-auto',
}) => {
    const navigate = useNavigate()
    return (
        <div className={`${text_align}`}>
            <button
                onClick={() => navigate('/trade')}
                className={`bg-btn-gradient text-white rounded-2xl text-sm lg:text-[22px] ${margin_inline} w-[157px] lg:w-[240px] h-[50px] lg:h-[60px] flex items-center justify-center font-medium`}
            >
                Trade to earn
            </button>
        </div>
    )
}

export default TradeBtn
