'use client';

import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
            <div className="mx-auto flex max-w-[1440px] h-16 items-center justify-between px-6 md:px-12">

                {/* Logo Brand Title */}
                <a href="#" className="font-mono text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-50 z-50 relative">
                    {"</jayfelpareja>"}
                </a>

                {/* Desktop Navigation Links (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <a href="#casestudies" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">Case Studies</a>
                    <a href="#expertise" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">Expertise</a>
                    <a href="#getintouch" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">Get In Touch</a>
                </div>

                {/* Burger Button Controller */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-1.5 justify-center items-center w-6 h-6 md:hidden z-50 relative focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <span className={`w-6 h-0.5 bg-zinc-900 dark:bg-zinc-50 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 bg-zinc-900 dark:bg-zinc-50 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-zinc-900 dark:bg-zinc-50 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Fixed Mobile Overlay Container */}
                <div
                    className={`fixed inset-0 h-screen w-screen bg-white dark:bg-zinc-950 z-40 flex flex-col justify-start pt-24 px-8 space-y-6 text-xl font-semibold transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <a
                        href="#casestudies"
                        onClick={() => setIsOpen(false)}
                        className="text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-900 pb-4 block"
                    >
                        Case Studies
                    </a>
                    <a
                        href="#expertise"
                        onClick={() => setIsOpen(false)}
                        className="text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-900 pb-4 block"
                    >
                        Expertise
                    </a>
                    <a
                        href="#getintouch"
                        onClick={() => setIsOpen(false)}
                        className="text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-900 pb-4 block"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </nav>
    );
}