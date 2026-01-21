import { useState, useEffect } from "react";
import { testimonialsConfig } from "../config/testimonials.config";

export function useTestimonialsCarousel() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const total = testimonialsConfig.caseStudies.length;

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay, total]);

    const next = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev + 1) % total);
    };

    const prev = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev - 1 + total) % total);
    };

    const goTo = (index: number) => {
        setAutoplay(false);
        setCurrent(index);
    };

    const caseStudy = testimonialsConfig.caseStudies[current];

    return {
        current,
        total,
        caseStudy,
        next,
        prev,
        goTo,
    };
}
