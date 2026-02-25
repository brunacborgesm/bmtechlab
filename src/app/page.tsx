"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BmLabNav } from "./components/bmlab-nav";
import { BmLabHero } from "./components/bmlab-hero";
import { BmLabServices } from "./components/bmlab-services";
import { BmLabProjects } from "./components/bmlab-projects";
import { BmLabFaq } from "./components/bmlab-faq";
import { BmLabCta } from "./components/bmlab-cta";
import { BmLabFooter } from "./components/bmlab-footer";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

gsap.registerPlugin(ScrollTrigger);

export default function BmTechLabPage() {
    useEffect(() => {
        // Only on desktop
        if (window.innerWidth < 768) return;

        const lenis = new Lenis({
            duration: 1.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5,
        });

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf as any);
        };
    }, []);

    return (
        <div className="bmlab-page">
            <BmLabNav />
            <main className="relative z-10">
                <BmLabHero />
                <BmLabServices />
                <BmLabProjects />
                <BmLabFaq />
                <BmLabCta />
            </main>
            <BmLabFooter />
            <LanguageSwitcher />
        </div>
    );
}
