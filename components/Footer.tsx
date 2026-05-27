'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    };

    return (
        <footer className="mt-12 md:mt-20 border-t border-brand-muted/20 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-brand-accent">

                {/* Left Side: Copyright Notice */}
                <div className="text-center sm:text-left text-foreground/60">
                    &copy; {new Date().getFullYear()} Jayfel Pareja. All Rights Reserved.
                </div>

                {/* Right Side: Theme Switch Controllers */}
                <div className="flex items-center gap-2 bg-brand-surface/10 p-1 rounded-lg border border-brand-muted/10">
                    <button
                        onClick={toggleTheme}
                        className={`px-3 py-1.5 rounded-md transition-all duration-200 font-medium tracking-tight flex items-center justify-center w-8 h-8 ${!isDarkMode
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-foreground/40 hover:text-foreground'
                            }`}
                        aria-label="Light Mode"
                    >
                        ☼︎
                    </button>
                    <button
                        onClick={toggleTheme}
                        className={`px-3 py-1.5 rounded-md transition-all duration-200 font-medium tracking-tight flex items-center justify-center w-8 h-8 ${isDarkMode
                            ? 'bg-brand-surface text-foreground shadow-sm'
                            : 'text-foreground/40 hover:text-foreground'
                            }`}
                        aria-label="Dark Mode"
                    >
                        ☾
                    </button>
                </div>

            </div>
        </footer>
    );
}