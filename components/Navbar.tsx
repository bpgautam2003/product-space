import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="w-full p-2 pt-4 lg:px-4 flex justify-between items-center">
            <span className="text-xl lg:text-2xl px-4 lg:px-8 py-2 font-semibold">
                Product <span className="text-[var(--golden)]">Space</span>
            </span>
            <div className="hidden md:flex px-4 text-sm lg:text-[16px] lg:px-8 gap-4 lg:gap-8 items-center">
                <Link href={'#'}>
                    <span className="hover:text-[var(--golden)]">
                        PM Fellowship Course
                    </span>
                </Link>
                <Link href={'#'}>
                    <span className="hover:text-[var(--golden)]">
                        Scholarship
                    </span>
                </Link>
                <Link href={'#'}>
                    <span className="hover:text-[var(--golden)]">
                        Masterclass
                    </span>
                </Link>
                <Link href={'#'}>
                    <span className="hover:text-[var(--golden)]">
                        Resources
                    </span>
                </Link>
                <Link href={'#'}>
                    <span className="hover:text-[var(--golden)]">
                        Contact
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
