import React from 'react';
import { useTranslation } from 'react-i18next';

const PaginatorBtn = ({ paginator }) => {
    const { t } = useTranslation();

    const next = () => {
        paginator.pager.next();
    };

    const previous = () => {
        paginator.pager.previous();
    };

    return (
        <div className="w-[206.23px] self-end font-open-sans rounded-[4px] text-[.875rem] leading-[20px] font-normal h-[34.4px] flex">
            <p
                onClick={previous}
                className="w-[99.86px] cursor-pointer  flex justify-center items-center gap-1  bg-white text-[#999999] border border-[#DDDDDD] rounded-tl-[4px] rounded-bl-[4px]"
            >
                <span className="hidden md:block">←</span>
                <span>{t('paginator.previous')}</span>
            </p>
            <p className="w-[34.02px] md:hidden bg-[#E74C3C] flex items-center justify-center text-white">
                1
            </p>
            <p
                onClick={next}
                className="w-[74.36px] cursor-pointer flex-grow gap-1 text-[#999999] border border-[#DDDDDD] flex items-center justify-center rounded-tr-[4px] rounded-br-[4px]"
            >
                <span>{t('paginator.next')}</span>
                <span className="hidden md:block">→</span>
            </p>
        </div>
    );
};

export default PaginatorBtn;
