'use client';

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    const [responseMessage, setResponseMessage] = useState("");

    const captchaRef = useRef<HCaptcha>(null);

    // Web3Forms Access Key
    const WEB3FORMS_KEY =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setStatus("submitting");
        setResponseMessage("");

        try {
            // Execute Invisible hCaptcha
            const tokenResponse =
                await captchaRef.current?.execute({
                    async: true,
                });

            // Validation check
            if (!tokenResponse?.response) {
                setStatus("error");
                setResponseMessage(
                    "Could not validate hCaptcha. Please try later."
                );
                return;
            }

            // Web3Forms Payload
            const payload = {
                access_key: WEB3FORMS_KEY,

                // REQUIRED FOR HCAPTCHA
                captcha: "hcaptcha",

                subject:
                    "New Portfolio Contact Form Submission",

                from_name:
                    "Jayfel Pareja Portfolio",

                name: formData.name,
                email: formData.email,
                message: formData.message,

                // REQUIRED HCAPTCHA TOKEN
                "h-captcha-response":
                    tokenResponse.response,
            };

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();

            console.log(result);

            if (result.success) {
                setStatus("success");

                setResponseMessage(
                    "✓ Message sent successfully! Speak soon."
                );

                // Reset Form
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                captchaRef.current?.resetCaptcha();
            } else {
                setStatus("error");

                setResponseMessage(
                    result.message ||
                    "Something went wrong. Please try again."
                );

                captchaRef.current?.resetCaptcha();
            }
        } catch (error) {
            console.error(error);

            setStatus("error");

            setResponseMessage(
                "Network error. Please try again later."
            );

            captchaRef.current?.resetCaptcha();
        }
    };

    return (
        <section
            id="getintouch"
            className="py-16 md:py-24"
        >
            <div className="max-w-[1440px] mx-auto px-1 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">

                {/* LEFT COLUMN: Strategic Headline & Core Telemetry */}
                <div className="md:col-span-3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-muted/30 bg-brand-accent/5 text-[11px] font-mono text-brand-accent max-w-full tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                        <span>Why Work With Me?</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Let’s Build Something <br />
                        That Converts
                    </h2>

                    <p className="text-base text-foreground/70 max-w-xl font-sans font-light leading-relaxed">
                        Need a website that looks
                        great and actually converts?
                        I create fast, refined, and
                        user-focused experiences
                        that help your business grow.
                    </p>

                    <div className="pt-4 grid grid-cols-2 gap-4 max-w-md text-[11px] font-mono text-foreground/40 border-t border-brand-muted/10">
                        <div>
                            <span className="block text-foreground/60 font-semibold">
                                Availability
                            </span>
                            <span>
                                Accepting Projects
                            </span>
                        </div>

                        <div>
                            <span className="block text-foreground/60 font-semibold">
                                Location
                            </span>
                            <span>Bulacan, PH</span>
                        </div>
                    </div>

                    {/* Footer Directory Action */}
                    <div className="space-y-1">
                        <span className="text-[10px] font-mono text-foreground/60 uppercase tracking-widest block">
                            More About Code
                        </span>

                        <p className="text-xs text-foreground/50">
                            Take a look at
                            behind-the-scenes
                            building blocks of how I
                            build websites.
                        </p>
                    </div>

                    {/* Action Row Container */}
                    <div className="flex items-center gap-2.5 mt-4">
                        <a
                            href="https://github.com/jayfelpareja"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View GitHub Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-brand-muted/20 bg-background text-foreground transition-all hover:bg-foreground/5 hover:border-brand-accent/30 active:scale-[0.95] shadow-xs cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>

                        <a
                            href="https://facebook.com/jayfelpareja"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Facebook Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-brand-muted/20 bg-background text-foreground transition-all hover:bg-foreground/5 hover:border-brand-accent/30 active:scale-[0.95] shadow-xs cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: Interactive Control Panel Form */}
                <form
                    onSubmit={handleSubmit}
                    className="md:col-span-2 w-full rounded-2xl border border-brand-muted/20 bg-brand-surface/5 dark:bg-brand-surface/40 backdrop-blur-xs shadow-xs overflow-hidden flex flex-col"
                >
                    {/* Header Utility Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-brand-surface/10 dark:bg-brand-surface/30 border-b border-brand-muted/10">
                        <div className="flex items-center gap-1.5">
                            <span
                                className={`w-2 h-2 rounded-full ${status ===
                                        "submitting"
                                        ? "bg-amber-500 animate-pulse"
                                        : "bg-brand-accent/60"
                                    }`}
                            />

                            <span className="text-[10px] font-mono text-foreground/50 tracking-wider">
                                Let's Talk About Your
                                Project
                            </span>
                        </div>

                        <span className="text-[9px] font-mono text-foreground/30 font-medium">
                            v1.0.01
                        </span>
                    </div>

                    {/* Form Body */}
                    <div className="p-6 space-y-5">

                        <div className="space-y-1">
                            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block">
                                Drop a Message
                            </span>

                            <p className="text-xs text-foreground/50">
                                Send a direct note
                                right into my inbox to
                                start a conversation.
                            </p>
                        </div>

                        {/* Form Inputs */}
                        <div className="space-y-3">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                <div className="space-y-1">
                                    <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        value={
                                            formData.name
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e
                                                    .target
                                                    .value,
                                            })
                                        }
                                        placeholder="Your name"
                                        className="w-full h-10 px-3 rounded-xl border border-brand-muted/20 bg-background/50 dark:bg-brand-surface/20 text-xs text-foreground placeholder:text-foreground/30 focus:outline-hidden focus:border-brand-accent/50 transition-colors"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        required
                                        value={
                                            formData.email
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e
                                                    .target
                                                    .value,
                                            })
                                        }
                                        placeholder="you@example.com"
                                        className="w-full h-10 px-3 rounded-xl border border-brand-muted/20 bg-background/50 dark:bg-brand-surface/20 text-xs text-foreground placeholder:text-foreground/30 focus:outline-hidden focus:border-brand-accent/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">
                                    Project Details
                                </label>

                                <textarea
                                    required
                                    rows={3}
                                    value={
                                        formData.message
                                    }
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message:
                                                e.target
                                                    .value,
                                        })
                                    }
                                    placeholder="Tell me briefly about what you're trying to build..."
                                    className="w-full p-3 rounded-xl border border-brand-muted/20 bg-background/50 dark:bg-brand-surface/20 text-xs text-foreground placeholder:text-foreground/30 focus:outline-hidden focus:border-brand-accent/50 transition-colors resize-none"
                                />
                            </div>
                        </div>

                        {/* hCaptcha */}
                        <HCaptcha
                            ref={captchaRef}
                            sitekey={
                                process.env
                                    .NEXT_PUBLIC_HCAPTCHA_SITE_KEY ||
                                ""
                            }
                            size="invisible"
                            theme="dark"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={
                                status ===
                                "submitting"
                            }
                            className="flex h-11 w-full items-center justify-center rounded-xl bg-foreground text-sm font-medium text-background transition-all hover:opacity-95 active:scale-[0.99] shadow-xs cursor-pointer group disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <span>
                                {status ===
                                    "submitting"
                                    ? "Sending..."
                                    : "Get Started"}
                            </span>

                            {status !==
                                "submitting" && (
                                    <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                                        &rarr;
                                    </span>
                                )}
                        </button>

                        {/* Status Feedback */}
                        {responseMessage && (
                            <p
                                className={`text-[11px] font-mono text-center ${status ===
                                        "success"
                                        ? "text-emerald-500"
                                        : "text-rose-500"
                                    }`}
                            >
                                {responseMessage}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}