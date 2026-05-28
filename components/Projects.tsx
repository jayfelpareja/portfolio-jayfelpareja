import Image from 'next/image';
import {
    Code,
    Layers,
    FileText,
    Globe,
    Laptop,
    PenTool
} from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    image: string;
}

const featuredProjects: Project[] = [
    {
        title: "01. The Task Ninja",
        description: "The Task Ninja provides dedicated virtual assistant and operations support for busy entrepreneurs and business owners across the US.",
        tags: ["Squarespace"],
        link: "https://www.thetaskninja.com/",
        image: "/images/thetaskninja.png"
    },
    {
        title: "02. Chelsey Real Estate",
        description: "Chelsey Real Estate is a modern real estate platform focused on helping clients buy, sell, and invest in premium properties with ease and confidence through a seamless digital experience.",
        tags: ["WordPress", "Elementor", "Yoast SEO", "Contact Form 7", "PHP"],
        link: "https://chelseyrealestate.com/",
        image: "/images/chelseyrealestate.png"
    },
    {
        title: "03. Out East Therapy",
        description: "Out East Therapy offers compassionate mental health counseling and therapy services, helping individuals and families improve emotional wellness through personalized and professional care.",
        tags: ["WordPress", "Elementor", "Astra", "Contact Form 7", "PHP"],
        link: "https://outeasttherapy.com/",
        image: "/images/outeasttherapy.png"
    },
    {
        title: "04. Luntian",
        description: "Luntian is a local clothing brand based in Surigao that showcases minimalist streetwear and lifestyle apparel inspired by Filipino culture, nature, and modern fashion trends.",
        tags: ["WordPress", "Elementor", "Astra", "Contact Form 7", "PHP"],
        link: "#",
        image: "/images/lntn.png"
    },
    {
        title: "05. Manila Cafe",
        description: "Manila Cafe is a concept cafe web design project created in Photoshop, featuring a cozy and modern aesthetic tailored for coffee lovers and casual dining experiences.",
        tags: ["Adobe Photoshop"],
        link: "#",
        image: "/images/manila.cafe.jpg"
    },
];

// Map your project tags cleanly using your existing Lucide set
const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
        case 'wordpress':
            return <Globe className="w-3.5 h-3.5 text-sky-500" />;
        case 'squarespace':
            return <Laptop className="w-3.5 h-3.5 text-zinc-400" />;
        case 'elementor':
            return <Layers className="w-3.5 h-3.5 text-pink-500" />;
        case 'adobe photoshop':
            return <PenTool className="w-3.5 h-3.5 text-blue-400" />;
        case 'yoast seo':
            return <FileText className="w-3.5 h-3.5 text-emerald-500" />;
        case 'contact form 7':
            return <FileText className="w-3.5 h-3.5 text-teal-400" />;
        case 'astra':
            return <Layers className="w-3.5 h-3.5 text-purple-400" />;
        case 'php':
            return <Code className="w-3.5 h-3.5 text-indigo-400" />;
        default:
            return <Code className="w-3.5 h-3.5 text-brand-accent" />;
    }
};

export default function Projects() {
    return (
        <section id="casestudies" className="py-12 md:py-16 border-b border-brand-muted/20">
            <div className="flex flex-col sm:flex-row justify-between items-baseline gap-2 mb-8 md:mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Selected Work & Case Studies</h2>
                <span className="font-mono text-xs text-brand-accent">
                    [ {String(featuredProjects.length).padStart(2, '0')} Projects Total ]
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => {
                    const hasValidLink = project.link && project.link !== '#';

                    return (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-between rounded-2xl border border-brand-muted/20 bg-brand-surface/5 dark:bg-brand-surface/20 shadow-sm hover:border-brand-accent transition-all duration-300 overflow-hidden"
                        >
                            <div>
                                {/* Image Container */}
                                {hasValidLink ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-brand-muted/10 cursor-pointer"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            priority={index === 0}
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        />
                                    </a>
                                ) : (
                                    <div className="block relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-brand-muted/10 select-none grayscale opacity-80">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        />
                                    </div>
                                )}

                                {/* Text Content */}
                                <div className="p-6 pb-0">
                                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Footer Tags & Actions */}
                            <div className="p-6 pt-0">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-brand-surface/10 dark:bg-brand-surface/40 border border-brand-muted/20 text-foreground/80 transition-colors group-hover:border-brand-muted/40"
                                        >
                                            {getTagIcon(tag)}
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Link Row */}
                                {hasValidLink ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs font-medium tracking-tight text-foreground hover:text-brand-accent transition-colors cursor-pointer"
                                    >
                                        Explore Implementation <span className="ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center text-xs font-mono opacity-30 select-none">
                                        Internal Archive
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}