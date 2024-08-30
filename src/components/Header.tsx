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
                    layout="fill"
                    objectFit='cover'
                />
            </div>

            <div className="absolute top-4 right-4 z-20">
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

            <nav className={`absolute top-16 right-4 z-20 bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'}`}>
                <a href="FDD" className="block px-4 py-2 hover:bg-gray-700">
                    Featured Daily Deals
                </a>
                <a href="Neighborhoods" className="block px-4 py-2 hover:bg-gray-700">
                    Neighborhoods
                </a>
                <a href="LateNight" className="block px-4 py-2 hover:bg-gray-700">
                    Late Night
                </a>
            </nav>
        </header>
    )
};

export default Header;