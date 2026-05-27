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
    const [captchaToken, setCaptchaToken] = useState("");

    const captchaRef = useRef<HCaptcha>(null);

    const resetCaptcha = () => {
        captchaRef.current?.resetCaptcha();
        setCaptchaToken("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!captchaToken) {
            setStatus("error");
            setResponseMessage("Please complete the hCaptcha verification.");
            return;
        }

        setStatus("submitting");
        setResponseMessage("");

        const form = e.currentTarget;

        const formDataToSend = {
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,

            // REQUIRED FOR HCAPTCHA
            captcha: "hcaptcha",

            // FORM DATA
            name: formData.name,
            email: formData.email,
            message: formData.message,

            // OPTIONAL
            subject: "New Portfolio Message",
            from_name: "Portfolio Contact Form",

            // HCAPTCHA TOKEN
            "h-captcha-response": captchaToken,
        };

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formDataToSend),
                }
            );

            const result = await response.json();

            console.log(result);

            if (result.success) {
                setStatus("success");

                setResponseMessage(
                    "✓ Message sent successfully!"
                );

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                resetCaptcha();

                form.reset();
            } else {
                setStatus("error");

                setResponseMessage(
                    result.message ||
                    "Something went wrong. Please try again."
                );

                resetCaptcha();
            }
        } catch (error) {
            console.error(error);

            setStatus("error");

            setResponseMessage(
                "Network error. Please try again later."
            );

            resetCaptcha();
        }
    };

    return (
        <section id="getintouch" className="py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-1 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">

                {/* LEFT SIDE */}
                <div className="md:col-span-3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-muted/30 bg-brand-accent/5 text-[11px] font-mono text-brand-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                        <span>Why Work With Me?</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Let's Build Something <br /> That Converts
                    </h2>

                    <p className="text-base text-foreground/70 max-w-xl font-sans font-light leading-relaxed">
                        Need a website that looks great and actually converts?
                        I create fast, refined, and user-focused experiences
                        that help your business grow.
                    </p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="md:col-span-2 w-full rounded-2xl border border-brand-muted/20 bg-brand-surface/5 dark:bg-brand-surface/40 backdrop-blur-xs shadow-xs overflow-hidden flex flex-col"
                >
                    <div className="p-6 space-y-5">

                        {/* NAME + EMAIL */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full h-10 px-3 rounded-xl border border-brand-muted/20 bg-background/50 text-xs"
                            />

                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full h-10 px-3 rounded-xl border border-brand-muted/20 bg-background/50 text-xs"
                            />
                        </div>

                        {/* MESSAGE */}
                        <textarea
                            required
                            rows={4}
                            placeholder="Tell me about your project..."
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            className="w-full p-3 rounded-xl border border-brand-muted/20 bg-background/50 text-xs resize-none"
                        />

                        {/* HCAPTCHA */}
                        <div className="overflow-hidden">
                            <HCaptcha
                                sitekey={
                                    process.env
                                        .NEXT_PUBLIC_HCAPTCHA_SITE_KEY!
                                }
                                onVerify={(token) =>
                                    setCaptchaToken(token)
                                }
                                ref={captchaRef}
                                theme="dark"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={
                                status === "submitting"
                            }
                            className="flex h-11 w-full items-center justify-center rounded-xl bg-foreground text-sm font-medium text-background transition-all disabled:opacity-40"
                        >
                            {status === "submitting"
                                ? "Sending..."
                                : "Get Started →"}
                        </button>

                        {/* RESPONSE */}
                        {responseMessage && (
                            <p
                                className={`text-[11px] font-mono text-center ${status === "success"
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