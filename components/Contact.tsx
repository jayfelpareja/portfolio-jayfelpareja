'use client';

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const captchaRef = useRef<HCaptcha>(null);

    // Ensure these keys match your Vercel Environment Variables exactly
    const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

    const handleVerificationSuccess = (token: string) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please verify that you are human via the hCaptcha checkpoint.");
            return;
        }

        setStatus("submitting");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    // Required field for Web3Forms
                    apikey: WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    "h-captcha-response": captchaToken,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setCaptchaToken(null);
                captchaRef.current?.resetCaptcha();
            } else {
                console.error("Submission Error:", result);
                setStatus("error");
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="getintouch" className="py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-1 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">

                {/* LEFT COLUMN */}
                <div className="md:col-span-3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-muted/30 bg-brand-accent/5 text-[11px] font-mono text-brand-accent max-w-full tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                        <span>Why Work With Me?</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Let’s Build Something <br /> That Converts
                    </h2>

                    <p className="text-base text-foreground/70 max-w-xl font-sans font-light leading-relaxed">
                        Need a website that looks great and actually converts? I create fast, refined, and user-focused experiences that help your business grow.
                    </p>

                    <div className="pt-4 grid grid-cols-2 gap-4 max-w-md text-[11px] font-mono text-foreground/40 border-t border-brand-muted/10">
                        <div>
                            <span className="block text-foreground/60 font-semibold">Availability</span>
                            <span>Accepting Projects</span>
                        </div>
                        <div>
                            <span className="block text-foreground/60 font-semibold">Location</span>
                            <span>Bulacan, PH</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <form
                    onSubmit={handleSubmit}
                    className="md:col-span-2 w-full rounded-2xl border border-brand-muted/20 bg-brand-surface/5 dark:bg-brand-surface/40 backdrop-blur-xs shadow-xs overflow-hidden flex flex-col"
                >
                    <div className="flex items-center justify-between px-4 py-3 bg-brand-surface/10 dark:bg-brand-surface/30 border-b border-brand-muted/10">
                        <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${status === "submitting" ? "bg-amber-500 animate-pulse" : "bg-brand-accent/60"}`} />
                            <span className="text-[10px] font-mono text-foreground/50 tracking-wider">Let's Talk About Your Project</span>
                        </div>
                        <span className="text-[9px] font-mono text-foreground/30 font-medium">v1.0.01</span>
                    </div>

                    <div className="p-6 space-y-5">
                        <div className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full h-10 px-3 rounded-xl border border-brand-muted/20 bg-background/50 dark:bg-brand-surface/20 text-xs text-foreground placeholder:text-foreground/30 focus:outline-hidden focus:border-brand-accent/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full h-10 px-3 rounded-xl border border-brand-muted/20 bg-background/50 dark:bg-brand-surface/20 text-xs text-foreground placeholder:text-foreground/30 focus:outline-hidden focus:border-brand-accent/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">Project Details</label>
                                <textarea
                                    required
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full p-3 rounded-xl border border-brand-muted/20 bg-background/50 dark:bg-brand-surface/20 text-xs text-foreground placeholder:text-foreground/30 focus:outline-hidden focus:border-brand-accent/50 transition-colors resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex justify-start overflow-hidden">
                            <HCaptcha
                                size="normal"
                                sitekey={HCAPTCHA_SITE_KEY || ""}
                                ref={captchaRef}
                                onVerify={handleVerificationSuccess}
                                onExpire={() => setCaptchaToken(null)}
                                theme="dark"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || !captchaToken}
                            className="flex h-11 w-full items-center justify-center rounded-xl bg-foreground text-sm font-medium text-background transition-all hover:opacity-95 active:scale-[0.99] shadow-xs cursor-pointer group disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <span>{status === "submitting" ? "Sending..." : "Get Started"}</span>
                            {status !== "submitting" && (
                                <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
                            )}
                        </button>

                        {status === "success" && (
                            <p className="text-[11px] font-mono text-emerald-500 text-center">✓ Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-[11px] font-mono text-rose-500 text-center">✕ Something went wrong. Please try again.</p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}