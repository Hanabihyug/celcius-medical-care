import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface IProps {
    children: React.ReactNode;
    id: string;
    reverse?: boolean;
}

export default function PartnerSlider({ children, id, reverse }: IProps) {
    return (
        <Swiper
            id={id}
            loop={true}
            slidesPerView={2}
            autoplay={{ delay: 0, reverseDirection: reverse }}
            modules={[Autoplay]}
            updateOnWindowResize={false}
            freeMode
            spaceBetween={25}
            speed={9000}
            wrapperClass="swiper-wrapper ease-linear"
            breakpoints={{
                568: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 4,
                },
            }}
            draggable={true}
            allowTouchMove={true}
            className="w-full"
        >
            {children}
            {children}
            {children}
        </Swiper>
    );
}
