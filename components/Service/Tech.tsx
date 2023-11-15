import Image from "next/image";
import { StaticImageData } from "next/image";
import Backhed from "@/public/assets/service/bgtech2.svg";

interface IProps {
    src: StaticImageData;
    alt: string;
}

export default function Tech() {
    return (
        <Image
            src={Backhed}
            alt="person"
            data-cy="Tech"
            className="Tech slide slide-down phone:relative bottom-0 right-0 h-full w-auto object-contain"
        />
    );
}
