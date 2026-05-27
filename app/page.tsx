import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Navbar />
      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Hero />
        <Partners />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}