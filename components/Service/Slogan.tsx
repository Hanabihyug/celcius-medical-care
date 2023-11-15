import Image from "next/image";
import { StaticImageData } from "next/image";

interface IProps {
    src: StaticImageData;
    alt: string;
    title: React.ReactNode;
    text: string;
}

export default function Slo({ src, alt = "", title, text = "" }: IProps) {
    return (
        <div
            data-cy="Slogan"
            className="w-full h-[240px] slide slide-up drop-shadow-xl items-center bg-white p-2 rounded-[15px]"
        >
            <div className="text-center gap-[13px]">
                <div className=" flex justify-center flex-col items-center gap-2 phone:gap-2 mt-[20px]">
                    <Image src={src} alt={alt} loading="lazy" className="logo items-center w-[55px] h-[55px]"></Image>
                    <h1 className="text text-center font-bold ">{title}</h1>
                    <p className="text text-[14px]">{text}</p>
                </div>
            </div>
        </div>
    );
}
