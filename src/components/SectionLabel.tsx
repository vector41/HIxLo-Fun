import React from 'react'

interface SectionLabelProps {
    title?: string
    sub_title?: React.ReactNode
    text_align?: string
    margin_inline?: string
    width?: string
}

const SectionLabel: React.FC<SectionLabelProps> = ({
    title = '',
    sub_title = '',
    text_align = 'text-center',
    margin_inline = 'mx-auto',
    width = 'max-w-[852px]',
}) => {
    return (
        <div className={`${text_align} ${width} ${margin_inline}`}>
            <h2 className="text-white text-2xl lg:text-[44px] mb-2 leading-[33.6px] lg:mb-4  lg:leading-[61px] font-bold">
                {title}
            </h2>
            <p className="text-sm lg:text-[22px] text-[#7786CB] leading-[15.6px] lg:leading-[32px]">
                {sub_title}
            </p>
        </div>
    )
}

export default SectionLabel
