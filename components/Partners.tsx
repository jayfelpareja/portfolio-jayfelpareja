'use client';

interface Partner {
    name: string;
    websiteUrl?: string;
}

const partnerCompanies: Partner[] = [
    { name: "Dinsmoresteele", websiteUrl: "https://dinsmoresteele.com/" },
    { name: "The Task Ninja", websiteUrl: "https://www.thetaskninja.com/" },
    { name: "Chelsey Real Estate", websiteUrl: "https://chelseyrealestate.com/" },
    { name: "Out East Therapy", websiteUrl: "https://outeasttherapy.com/" },
    { name: "Outsourced Movere" } // Triggers a clean static typography layout seamlessly
];

export default function Partners() {
    return (
        <section id="partners" className="py-16 md:py-20 border-b border-brand-muted/20">
            <div className="max-w-[1440px] mx-auto px-1">

                {/* Editorial Minimalist Label */}
                <div className="mb-10">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-brand-accent font-medium block">
                        Partner with Me
                    </span>
                </div>

                {/* Text-Only Typographic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-12 items-baseline">
                    {partnerCompanies.map((company, index) => {
                        const hasLink = !!company.websiteUrl;

                        // Shared designer typographic style rules
                        const TypographyStyle = (
                            <span className="text-lg md:text-xl font-normal tracking-tight text-foreground/40 hover:text-foreground transition-colors duration-300 ease-in-out font-sans select-none block">
                                {company.name}
                            </span>
                        );

                        return hasLink ? (
                            <a
                                key={index}
                                href={company.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cursor-pointer group"
                                title={`Open ${company.name} interface`}
                            >
                                <div className="flex items-center gap-1">
                                    {TypographyStyle}
                                    {/* Subtle, ultra-clean external link character dot indexer for designers */}
                                    <span className="text-[9px] font-mono opacity-0 group-hover:opacity-40 transition-opacity duration-300 text-brand-accent align-super">

                                    </span>
                                </div>
                            </a>
                        ) : (
                            <div key={index} className="inline-block">
                                {TypographyStyle}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}