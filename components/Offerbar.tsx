import React from 'react';

const Offerbar = () => {
    return (
        <div
            className="p-1 py-2 sm:p-2 w-full text-xs sm:text-sm text-[var(--golden)] flex justify-center items-center bg-[var(--goldenbg)] gradient-bg"
        >
            <span className="">
                NEXT COHORT STARTS: 22ND JUNE
                <span className="text-[10px] sm:text-xs ml-2 bg-[var(--brown)] p-[5px] sm:p-2 rounded-md">25 DAYS TO GO</span>
            </span>
        </div>
    );
};

export default Offerbar;
