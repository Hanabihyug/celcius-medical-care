import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/globals.css";
import "tailwind.config"



import useAnimateSlide from "@/lib/useAnimateSlide";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    useAnimateSlide();

    return <Component {...pageProps} />;
}




