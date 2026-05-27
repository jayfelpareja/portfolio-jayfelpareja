import React from "react";

// ==========================================
// 1. TypeScript Interfaces
// ==========================================
export interface StackItem {
    name: string;
    icon: React.ReactNode;
}

export interface SkillSubCategory {
    name: string;
    stack: StackItem[];
}

export interface SkillGroup {
    category: string;
    items: SkillSubCategory[];
}

// ==========================================
// 2. Main Data Structure
// ==========================================
const skillGroups: SkillGroup[] = [
    {
        category: "Web Development (AI-Assisted)",
        items: [
            {
                name: "Core Languages",
                stack: [
                    {
                        name: "HTML5",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.3 6H7.1l.3 3.1h8l-.3 3.4-3.1.9-3.1-.9-.2-2.1H5.7l.4 4.3 5.9 1.6 5.9-1.6.6-6.7H17l-.2-2z" />
                            </svg>
                        )
                    },
                    {
                        name: "CSS3",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6H6.1l.3 3h10.4l-.3 3.3-4.5 1.2-4.5-1.2-.3-3H4.2l.6 6.2 7.2 2 7.2-2 .8-8.5H17.3z" />
                            </svg>
                        )
                    },
                    {
                        name: "JavaScript",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#F7DF1E] rounded-xs" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h24v24H0V0z" />
                                <path d="M18.43 19c0-.88-.41-1.57-1.42-2.13-.74-.41-1.31-.62-2-.92-.61-.25-.84-.45-.84-.79 0-.35.29-.58.74-.58.45 0 .8.18 1.05.54l1.72-1.07c-.49-.82-1.31-1.31-2.48-1.31-1.54 0-2.67.94-2.67 2.27 0 1.03.58 1.7 1.76 2.2.82.35 1.48.6 1.95.88.39.23.53.49.53.8s-.33.58-.92.58c-.66 0-1.15-.31-1.5-.94l-1.74 1.05c.57 1.11 1.68 1.74 3.2 1.74 2.05 0 3.02-1.03 3.02-2.46zM10.15 13.58H8.08v5.5c0 .76-.25 1.21-.92 1.21-.43 0-.66-.23-.84-.51L4.8 20.8c.45.74 1.17 1.15 2.15 1.15 1.93 0 3.2-.9 3.2-3.16v-5.21z" fill="#000" />
                            </svg>
                        )
                    },
                    {
                        name: "PHP",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#777BB4]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 10.3c-.05.23-.15.42-.3.58-.15.16-.36.28-.6.35-.24.07-.5.1-.78.1H11v-2.4h.6c.3 0 .55.05.77.15.22.1.39.24.5.42.11.18.17.4.17.65 0 .22-.05.42-.14.65zm-5.5 0c-.05.23-.15.42-.3.58-.15.16-.36.28-.6.35-.24.07-.5.1-.78.1H5.5v-2.4h.6c.3 0 .55.05.77.15.22.1.39.24.5.42.11.18.17.4.17.65 0 .22-.05.42-.14.65zm11.55-1.4c-.1.3-.26.56-.47.78-.21.22-.49.39-.81.5-.32.11-.7.17-1.12.17h-1.7v1.8h-1.2V9.5h2.5c.42 0 .79.06 1.1.18.31.12.57.3.76.53.19.23.3.52.32.86.02.2-.02.42-.1.63zm-5.5 0c-.1.3-.26.56-.47.78-.21.22-.49.39-.81.5-.32.11-.7.17-1.12.17H6.1v1.8H4.9V9.5H7.4c.42 0 .79.06 1.1.18.31.12.57.3.76.53.19.23.3.52.32.86.02.2-.02.42-.1.63z" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Frameworks & Runtime",
                stack: [
                    {
                        name: "Reactjs",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
                                <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
                                <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                            </svg>
                        )
                    },
                    {
                        name: "Next.js",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm6.117 18.883l-5.834-7.534V18.5h-1.93V7.5h1.93l5.513 7.156V7.5h1.93v11.383zM16.5 12.5l-2.05-2.656v6.234h1.05z" />
                            </svg>
                        )
                    },
                    {
                        name: "Tailwind CSS",
                        icon: (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                <path d="M12 6.036c-2.286 0-3.428 1.143-3.428 3.429 0 2.285 1.142 3.428 3.428 3.428m0-6.857c2.286 0 3.428 1.143 3.428 3.429 0 2.285-1.142 3.428-3.428 3.428m-6.857 3.429c-2.286 0-3.429 1.143-3.429 3.428 0 2.286 1.143 3.429 3.429 3.429m0-6.857c2.286 0 3.429 1.143 3.429 3.429 0 2.285-1.143 3.428-3.429 3.428" />
                                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 0.913 0.228 1.565 0.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-0.913-0.228-1.565-0.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 0.913 0.228 1.565 0.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-0.913-0.228-1.565-0.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                            </svg>
                        )
                    },
                    {
                        name: "Laravel",
                        icon: (
                            <svg className="h-3.5 w-auto object-contain text-[#FF2D20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
                                <path d="M12 22V12" />
                                <path d="M20.5 7L12 12 3.5 7" />
                                <path d="M16.5 4.5v5l4 2.5" />
                                <path d="M7.5 4.5v5l-4 2.5" />
                            </svg>
                        )
                    },
                    {
                        name: "Nodejs",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1.084L2.247 6.715v11.233L12 23.582l9.753-5.634V6.715L12 1.084zm0 2.553l7.541 4.354v8.708L12 21.053l-7.541-4.354V7.991L12 3.637zm-1.636 6.364v3.504c0 .874.686 1.42 1.5 1.42.748 0 1.25-.403 1.442-1.01l1.411.55c-.477 1.298-1.548 1.947-2.853 1.947-2.029 0-3.483-1.34-3.483-3.447v-3.411c0-2.115 1.417-3.473 3.483-3.473 1.348 0 2.37.662 2.83 1.947l-1.42.564c-.184-.576-.667-1.024-1.41-1.024-.841 0-1.503.546-1.503 1.436z" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Data & Compilation",
                stack: [
                    {
                        name: "TypeScript",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#3178C6] rounded-xs" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h24v24H0V0z" />
                                <path d="M19.7 18.2c0-.7-.3-1.2-1-1.6-.5-.3-1-.5-1.6-.7-.5-.2-.7-.4-.7-.6 0-.3.2-.5.6-.5.4 0 .6.1.8.4l1.3-.9c-.4-.6-1-1-1.9-1-1.2 0-2.1.7-2.1 1.8 0 .8.4 1.3 1.3 1.7.6.3 1.1.5 1.4.7.3.2.4.4.4.6 0 .4-.3.6-.8.6-.5 0-.9-.2-1.2-.7l-1.3.8c.4.9 1.3 1.4 2.5 1.4 1.6 0 2.3-.8 2.3-2zm-8.8-4.2H5.7v1.5h2.1V21h1.6v-5.5h2.1v-1.5z" fill="white" />
                            </svg>
                        )
                    },
                    {
                        name: "MySQL",
                        icon: (
                            <svg className="h-3.5 w-auto object-contain text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.117 1a10.932 10.932 0 0 0-4.062.83 9.4 9.4 0 0 0-4.326 3.963 8.1 8.1 0 0 0-.612 4.195c.294 1.83.67 2.455.94 2.502.264.047.45-.164.717-.545a16.657 16.657 0 0 1 3.5-3.8c1.378-1.077 2.656-1.571 3.733-1.638.163-.012.3-.122.34-.28a.423.423 0 0 0-.174-.46c-.534-.356-1.042-.872-1.312-1.423-.075-.152-.025-.337.114-.43a.354.354 0 0 1 .412.016c.552.41 1.25.753 1.942.873a.4.4 0 0 0 .438-.258c.287-.768.804-1.74 1.554-2.22a.377.377 0 0 1 .5.07c.095.122.083.3-.028.406-.615.586-.98 1.455-1.127 2.298-.03.172.062.338.223.393a6.83 6.83 0 0 0 4.14-.093.383.383 0 0 0 .235-.487c-.378-1.18-.894-2.122-1.606-2.825a.36.36 0 0 1 .006-.513.344.344 0 0 1 .494-.006c.86.852 1.464 2.01 1.884 3.42a.42.42 0 0 0 .493.284c.83-.162 1.96-.54 2.372-1.154a.342.342 0 0 1 .524-.04c.123.123.12.32-.012.44-.652.595-1.892 1.013-2.907 1.153a.386.386 0 0 0-.317.48c.452 1.764.55 3.774-.014 5.39-.773 2.217-2.617 3.864-4.887 4.542a11.168 11.168 0 0 1-5.186.2c-1.373-.292-2.325-1.01-2.9-2.02a.407.407 0 0 1 .064-.52.378.378 0 0 1 .52.052c.467.545 1.34 1.1 2.502 1.253a9.882 9.882 0 0 0 5.484-.528c2.47-.98 4.212-3.176 4.394-5.592.05-.66-.024-1.353-.18-2.023a.382.382 0 0 0-.46-.285 7.6 7.6 0 0 1-3.66.19c-.196-.03-.356-.176-.382-.375a5.53 5.53 0 0 1 .28-2.527c.068-.19-.035-.395-.224-.448a5.545 5.545 0 0 0-3.64.3c-.167.075-.366.012-.455-.145a3.1 3.1 0 0 1-.365-1.503c0-.188-.135-.35-.32-.38A11.393 11.393 0 0 0 12.117 1z" />
                            </svg>
                        )
                    },
                    {
                        name: "Vite",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#646CFF]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.9 2.5L12 19.5 4.1 2.5h15.8zM12 14.5l3.9-8.5H8.1l3.9 8.5z" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Version Control",
                stack: [
                    {
                        name: "Git",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.3 11.1L12.9.7c-.4-.4-1-.4-1.4 0L8.1 4.1l3.3 3.3c.3-.1.7-.1 1-.1.8 0 1.5.5 1.8 1.2l3.2-.9c.1-.5.5-.8 1-.8.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.5 0-.9-.3-1.1-.7l-3.2.9c-.1.3-.3.6-.6.8v3.3c.5.2.8.7.8 1.2 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.5.3-.9.7-1.2V11c-.4-.2-.7-.6-.7-1.1 0-.3.1-.6.3-.8L8.1 5.8l-7.4 7.4c-.4.4-.4 1 0 1.4l10.4 10.4c.4.4 1 .4 1.4 0l10.8-10.8c.4-.4.4-1.1 0-1.5z" />
                            </svg>
                        )
                    },
                    {
                        name: "Github",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5V19.3c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 015.1 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z" />
                            </svg>
                        )
                    },
                    {
                        name: "Antigravity",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V5M5 12l7-7 7 7" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Deployment & Hosting",
                stack: [
                    {
                        name: "Vercel",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 22h20L12 2z" />
                            </svg>
                        )
                    },
                    {
                        name: "Cpanel",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#FF6C2C]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 14.5c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h1c.3 0 .5 .2.5.5v5zm-.5-6.8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8zm5.3 6.8c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-2.8c0-.4-.3-.7-.7-.7h-.6c-.4 0-.7.3-.7.7v2.8c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v.4c.3-.4.8-.6 1.4-.6 1.1 0 2 .9 2 2v2.7z" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Dev Environments",
                stack: [
                    {
                        name: "Laragon",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 22V2m0 5h12a5 5 0 0 1 0 10H4" />
                            </svg>
                        )
                    },
                    {
                        name: "Xampp",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#FB7A24]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.5 13.5c-.3.3-.8.3-1.1 0L12 12.1l-3.4 3.4c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1l3.4-3.4-3.4-3.4c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.4 3.4 3.4-3.4c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L13.1 12l3.4 3.4c.3.3.3.8 0 1.1z" />
                            </svg>
                        )
                    }
                ]
            }
        ]
    },
    {
        category: "WordPress Ecosystem",
        items: [
            {
                name: "WordPress Installation",
                stack: [
                    {
                        name: "Core Setup",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.158 12.786l-2.698 7.83c2.147.624 4.434.307 6.34-.914a11.4 11.4 0 01-.197-1.743c0-1.42.338-2.413.731-3.143.535-.956 1.04-1.77 1.04-3.143 0-1.293-.45-2.503-1.238-3.486l-4.01 11.391-3.18-9.022.022-.008c.84-.04 1.547-.354 1.547-.354.45-.253.394-.872-.057-.844 0 0-1.07.113-2.31.113s-2.333-.113-2.333-.113c-.45-.028-.506.59-.056.844 0 0 .675.284 1.492.34l2.164 6.121-1.6 4.81-3.092-9.288c.59-.028 1.152-.169 1.152-.169.45-.225.394-.844-.056-.844 0 0-.844.084-1.884.084-.703 0-1.574-.056-1.574-.056-.45-.028-.506.59-.056.844 0 0 .618.225 1.152.31l3.541 10.457c-2.476-1.89-4.062-4.887-4.062-8.257 0-3.328 1.547-6.29 3.963-8.182l4.904 14.195zm6.818-6.173c.731.956 1.152 2.165 1.152 3.515 0 1.574-.534 2.923-1.04 3.823-.422.759-.871 1.462-.871 2.305 0 .647.225 1.152.506 1.743.084.14.168.31.253.478A11.905 11.905 0 0024 12c0-5.327-3.463-9.845-8.31-11.49l3.286 6.103z" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Page Builders",
                stack: [
                    {
                        name: "Elementor",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#92003B]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.571 17.143H6.857V6.857h1.714v10.286zm8.572 0H10.286v-1.714h6.857v1.714zm0-4.286H10.286v-1.714h6.857v1.714zm0-4.286H10.286V6.857h6.857v1.714z" />
                            </svg>
                        )
                    },
                    {
                        name: "Divi",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#7E3BD0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 3h6a6 6 0 0 1 0 12H6V3z" />
                                <path d="M6 21h12" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "SEO Solutions",
                stack: [
                    {
                        name: "Rankmath",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#00BCD4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="4" />
                                <line x1="12" y1="20" x2="12" y2="10" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        )
                    },
                    {
                        name: "Yoast SEO",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#77B227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="10.5" cy="10.5" r="6.5" />
                                <line x1="22" y1="22" x2="15.1" y2="15.1" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Performance & Ops",
                stack: [
                    {
                        name: "Imagify",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#E65026]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        )
                    },
                    {
                        name: "WP Rocket",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#F37022]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                                <path d="M12 2s-5 4.85-5 10.5c0 2.49 2.24 4.5 5 4.5s5-2.01 5-4.5C17 6.85 12 2 12 2z" />
                                <line x1="12" y1="12" x2="12" y2="16" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Forms & Data Security",
                stack: [
                    {
                        name: "WP Forms",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#E27730]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                            </svg>
                        )
                    },
                    {
                        name: "Security",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        )
                    }
                ]
            }
        ]
    },
    {
        category: "Alternative CMS & Design Tools",
        items: [
            {
                name: "Alternative CMS",
                stack: [
                    {
                        name: "Duda",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#F58220]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2 4h6c4.4 0 8 3.6 8 8s-3.6 8-8 8H2V4zm6 12c2.2 0 4-1.8 4-4s-1.8-4-4-4H6v8h2zm10-8h4v8h-4V8z" />
                            </svg>
                        )
                    },
                    {
                        name: "Squarespace",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a4 4 0 0 0-7.14-2.52L4 10l11 4 4.14 4.52A4 4 0 0 1 16 20H8" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Automation & CRM",
                stack: [
                    {
                        name: "GoHighLevel",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#1877F2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                <polyline points="2 17 12 22 22 17" />
                                <polyline points="2 12 12 17 22 12" />
                            </svg>
                        )
                    },
                    {
                        name: "ClickFunnel",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#1A99F4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 12 17 2 7" />
                                <path d="M12 17V2" />
                            </svg>
                        )
                    }
                ]
            },
            {
                name: "Creative Asset Design",
                stack: [
                    {
                        name: "Adobe Photoshop",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#31A8FF]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2 2h20v20H2V2zm4.5 12.5h2.8V11H6.5v3.5zm7.8.2c.4.3.9.5 1.5.5.8 0 1.2-.4 1.2-1 0-.6-.5-.9-1.4-1.2-1.3-.4-2.2-1-2.2-2.3 0-1.3 1.1-2.2 2.6-2.2 1 0 1.8.3 2.3.7l-.6 1.4c-.4-.3-.9-.5-1.5-.5-.6 0-1 .3-1 .8 0 .5.5.7 1.3 1 1.5.5 2.3 1.1 2.3 2.4 0 1.5-1.1 2.5-2.9 2.5-1.1 0-2.1-.4-2.6-.9l.7-1.2z" />
                            </svg>
                        )
                    },
                    {
                        name: "Canva",
                        icon: (
                            <svg className="h-3 w-auto object-contain text-[#00C4CC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                                <path d="M18 7a7 7 0 1 0 0 10" />
                            </svg>
                        )
                    }
                ]
            }
        ]
    }
];

// ==========================================
// 3. Original Component Layout & Rendering
// ==========================================
export default function Skills() {
    return (
        <section id="expertise" className="py-12 md:py-16 border-b border-brand-muted/20">
            {/* Header Layout Block */}
            <div className="flex flex-col sm:flex-row justify-between items-baseline gap-2 mb-8 md:mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Design, Development & Conversion Expertise
                </h2>
            </div>

            {/* Matrix Grid Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillGroups.map((group: SkillGroup, idx: number) => (
                    <div
                        key={idx}
                        className="border p-6 rounded-2xl bg-[#F3F4F5] dark:bg-[#0C0F15] border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col"
                    >
                        <h3 className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 mb-5 uppercase font-mono">
                            {group.category}
                        </h3>

                        <div className="space-y-5">
                            {group.items.map((subCategory: SkillSubCategory, subIdx: number) => (
                                <div key={subIdx}>
                                    <h4 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2.5">
                                        {subCategory.name}
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {subCategory.stack.map((item: StackItem, itemIdx: number) => (
                                            <div
                                                key={itemIdx}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/30 shadow-2xs"
                                            >
                                                <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full">
                                                    {item.icon}
                                                </span>
                                                <span>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}