import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Skeleton from "../Skeleton";

interface IProps {
    src: StaticImageData;
    title?: string;
    alt?: string;
    className?: string;
}

export default function Partner({ src, title = "", alt = "", className = "" }: IProps) {
    return (
        <div data-cy="partner-card" title={title} className="group/partner grid aspect-3/4 place-items-center  w-full h-full btn duration-300 rounded-md">
            <div data-cy="partner-image" className="group-hover/partner:scale-[1.05] transition-all duration-200">
                <Image src={src} alt={alt} className={`h-[10rem] w-[30rem] object-contain ${className}`} />
            </div>
        </div>
    );
}
