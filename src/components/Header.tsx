"use client";

import { useState } from 'react'
import Image from 'next/image'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <header className="bg-gray-800 p-4 flex items-center justify-between">
            <div className="flex items-center">
                <Image
                    src="/Denver.png"
                    alt="Denver Happy Hour Header"
                    width={150}
                    height={50}
                />
            </div>

            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 118h16"
                    ></path>
                </svg>
                </button>
            </div>

            <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                <a href="FDD" className="text-white px-4 py-2 hover:bg-gray-700">
                    Featured Daily Deals
                </a>
                <a href="Neighborhoods" className="text-white px-4 py-2 hover:bg-gray-700">
                    Neighborhoods
                </a>
                <a href="LateNight" className="text-white px-4 py-2 hover:bg-gray-700">
                    Late Night
                </a>
            </nav>
        </header>
    )
};

export default Header;