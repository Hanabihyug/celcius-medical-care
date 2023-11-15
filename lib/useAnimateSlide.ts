import { useEffect } from "react";
import isClientReady from "./isClientReady";

export default function useAnimateSlide() {
    function handler(entries: IntersectionObserverEntry[]) {
        entries.forEach((e) => {
            if (!e.isIntersecting) return e.target.classList.remove("i-open");
            e.target.classList.add("i:open");
            if ("animate" in (<any>e.target).dataset) e.target.classList.add("i-open");
        });
    }

    useEffect(() => {
        if (!isClientReady()) return;
        let observer: IntersectionObserver;
        observer = new IntersectionObserver(handler, { threshold: 0.25 });

        setTimeout(() => {
            let slides = document.querySelectorAll(".slide, .cs-animate");
            slides?.forEach((e) => observer.observe(e));
        }, 1100);

        return () => observer?.disconnect();
    });
}
