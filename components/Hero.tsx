'use client';



import { useState } from 'react';



export default function Hero() {

    // Handles active tab navigation inside the focus panel component

    const [activeTab, setActiveTab] = useState<'stack' | 'status'>('stack');

    // Dynamic state management tracking the simulated environment compile logs

    const [isCompiling, setIsCompiling] = useState(false);

    const [buildLogs, setBuildLogs] = useState<string[]>([

        '// System idling...',

        'Ready to process document requests.'

    ]);



    const handleTriggerBuild = () => {

        if (isCompiling) return;



        setIsCompiling(true);

        setBuildLogs(prev => [

            ...prev,

            '⚡ fetch static_asset: /jayfelpareja_resume.pdf',

            '📡 establishing document environment stream...'

        ]);



        // Simulates processing loading latency for a few seconds before firing open tab hooks

        setTimeout(() => {

            setIsCompiling(false);

            setBuildLogs(prev => [

                ...prev,

                '✔ document generated successfully.',

                '✨ opening preview window instance...'

            ]);



            // Native window action executing clean target blank preview triggers

            window.open('/resume2026.pdf', '_blank', 'noopener,noreferrer');

        }, 1800);

    };



    return (

        <section className="py-12 md:py-28 border-b border-brand-muted/20">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">



                {/* Left Column Typography */}

                <div className="md:col-span-2 space-y-6">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-muted/30 bg-brand-accent/5 text-xs font-mono text-brand-accent max-w-full">

                        <span className="w-2 h-2 rounded-full bg-brand-muted animate-pulse flex-shrink-0" />

                        <span className="truncate">Websites & Funnels Built to Perform</span>

                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
                        Design That Works.<br></br>Not Just Looks.
                    </h1>

                    <p className="text-base text-foreground/70 max-w-xl font-sans font-light leading-relaxed">
                        Clean visuals, smooth UX, and conversion-first thinking—built to help your business grow, not just exist online.
                    </p>
                </div>



                {/* Right Columns: Interactive System Panel Container */}

                <div className="rounded-2xl border border-brand-muted/20 bg-brand-surface/5 dark:bg-brand-surface/40 backdrop-blur-sm shadow-sm overflow-hidden w-full flex flex-col">



                    {/* Panel Top Terminal Navigation Header bar */}

                    <div className="flex items-center justify-between px-4 py-3 bg-brand-surface/10 dark:bg-brand-surface/30 border-b border-brand-muted/10">

                        <div className="flex items-center gap-1.5">

                            <span className="w-2.5 h-2.5 rounded-full bg-brand-muted/40" />

                            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent/40" />

                            <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />

                        </div>



                        {/* Minimal Tab Toggles */}

                        <div className="flex gap-1 bg-foreground/5 p-0.5 rounded-lg text-[10px] font-mono">

                            <button

                                onClick={() => setActiveTab('stack')}

                                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${activeTab === 'stack' ? 'bg-background text-foreground shadow-xs font-semibold' : 'text-foreground/50'}`}

                            >

                                CMS | Builder

                            </button>

                            <button

                                onClick={() => setActiveTab('status')}

                                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${activeTab === 'status' ? 'bg-background text-foreground shadow-xs font-semibold' : 'text-foreground/50'}`}

                            >

                                request_resume

                            </button>

                        </div>

                    </div>



                    {/* Dynamic Tab Body Displays */}

                    <div className="p-5 min-h-[165px] flex flex-col justify-between gap-4">

                        {activeTab === 'stack' ? (

                            /* TAB 1: STACK MATRIX FOCUS VIEWER */

                            <div className="space-y-2.5 animate-[fadeIn_0.2s_ease-out]">

                                <div className="text-[11px] font-mono text-brand-accent tracking-widest">WordPress</div>

                                <div className="space-y-2">

                                    <div className="flex justify-between text-sm gap-4">

                                        <span className="text-foreground/60">Page Builders</span>

                                        <span className="font-mono font-medium text-right text-foreground">Elementor | Divi</span>

                                    </div>

                                    <div className="flex justify-between text-sm gap-4">

                                        <span className="text-foreground/60">SEO Tools</span>

                                        <span className="font-mono font-medium text-right text-foreground">Rankmath | Yoast SEO</span>

                                    </div>

                                    <div className="flex justify-between text-sm gap-4">

                                        <span className="text-foreground/60">Security</span>

                                        <span className="font-mono font-medium text-right text-foreground">Security Optimizer</span>

                                    </div>

                                    <div className="flex justify-between text-sm gap-4">

                                        <span className="text-foreground/60">Performance Tools</span>

                                        <span className="font-mono font-medium text-right text-foreground">Imagify | WP Rocket</span>

                                    </div>

                                    <div className="flex justify-between text-sm gap-4">

                                        <span className="text-foreground/60">Forms & Verification</span>

                                        <span className="font-mono font-medium text-right text-foreground">WP Forms | Recaptcha</span>

                                    </div>

                                    <div className="text-[11px] font-mono text-brand-accent tracking-widest">Other CMS</div>

                                    <div className="flex justify-between text-sm gap-4">

                                        <span className="text-foreground/60">Website Builder</span>

                                        <span className="font-mono font-medium text-right text-foreground">Duda | Squarespace</span>

                                    </div>

                                    <div className="flex justify-between text-sm gap-4">

                                        <span className="text-foreground/60">Funnels</span>

                                        <span className="font-mono font-medium text-right text-foreground">HighLevel & Clickfunnels</span>

                                    </div>

                                </div>

                            </div>

                        ) : (

                            /* TAB 2: INTERACTIVE LIVE CONSOLE LOGS RUNNER */

                            <div className="font-mono text-xs space-y-1.5 text-foreground/70 flex-1 overflow-y-auto max-h-[125px] scrollbar-none animate-[fadeIn_0.2s_ease-out]">

                                {buildLogs.map((log, i) => (

                                    <div key={i} className={`truncate ${log.startsWith('✔') || log.startsWith('✨') ? 'text-brand-accent' : log.startsWith('⚡') ? 'text-foreground font-bold' : 'opacity-60'}`}>

                                        {log}

                                    </div>

                                ))}

                                {isCompiling && (

                                    <div className="text-brand-muted animate-pulse flex items-center gap-1 text-[11px] mt-1">

                                        <span className="w-1 h-3 bg-brand-muted inline-block animate-bounce" />

                                        compiling pipeline...

                                    </div>

                                )}

                            </div>

                        )}



                        {/* Context-Specific Lower Control CTA Actions Button */}

                        <div className="pt-2">

                            {activeTab === 'stack' ? (

                                <a

                                    href="#casestudies"

                                    className="flex h-9 w-full items-center justify-center rounded-xl bg-foreground text-xs font-medium text-background transition-colors hover:opacity-90"

                                >

                                    View Case Studies &rarr;

                                </a>

                            ) : (

                                <button

                                    onClick={handleTriggerBuild}

                                    disabled={isCompiling}

                                    className="flex h-9 w-full items-center justify-center rounded-xl border border-brand-muted/30 bg-background text-xs font-mono font-medium text-foreground transition-all hover:bg-foreground/5 active:scale-[0.99] disabled:opacity-50 cursor-pointer"

                                >

                                    {isCompiling ? 'Opening Document...' : 'Resume'}

                                </button>

                            )}

                        </div>

                    </div>



                </div>



            </div>

        </section>

    );

}

