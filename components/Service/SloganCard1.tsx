import Image from "next/image";
import { StaticImageData } from "next/image";

interface IProps {
    src?: string;
    imgSrc: StaticImageData;
    alt?: string;
    text?: string;
    title?: string;
    className?: string;
}

export default function SloganCard1({ src, imgSrc, alt = "", text = "", title = "", className }: Omit<IProps, "arrowright" | "arrowleft">) {

    return (
        <div data-cy="slogancard" className="flex flex-col lg:flex-row items-center">
            {title === "Digital Consulting" || title === "Health Management & Support" || title === "Application Development" ? (
                <div className="flex flex-row phone:flex-col-reverse phone:items-center phone:justify-center">
                    <Image src={imgSrc} alt="" className="icon1 w-[350px] phone:mt-[3%] tablet:mt-[0%] phone:w-[120px] phone: justify-center tablet:w-[200px]" />
                    <div className="flex flex-col justify-center phone:items-center phone:justify-center">
                        <p className="textServiceL type-head-3 font-bold mt-[2%] text-left phone:text-[20px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl red-border">{title}</p>
                        <div className="h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]">
                            <p className="textServiceL type-body-lg font-light text-left phone:text-center phone:text-[15px] tablet:text-base ">{text}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row phone:flex-col-reverse phone:items-center phone:justify-center">
                    <div className="flex flex-col justify-center mr-[3%] phone:items-center phone:justify-center">
                        <p className="textServiceR type-head-3 font-bold mt-[2%] text-left phone:text-[20px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl red-border">{title}</p>
                        <div className="h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]">
                            <p className="textServiceR type-body-lg font-light text-left phone:text-center phone:text-[15px] tablet:text-base">{text}</p>
                        </div>
                    </div>
                    <Image src={imgSrc} alt="" className="icon1 w-[350px] phone:mt-[3%] tablet:mt-[0%] phone:w-[300px] phone: justify-center tablet:w-[200px]" />
                </div>
            )}

            {/* {title === "IT Consulting" || title === "Maintenance & Support" || title === "Application Development" ? (
                <>
                    <Image src={imgSrc} alt="" className="icon1 w-[550px] phone:mt-[3%] tablet:mt-[4%]" />
                    <div className="flex flex-col justify-center">
                        <p className="textServiceL type-head-3 font-bold mt-[2%] text-left phone:text-[32px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl yellow-border">{title}</p>
                        <div className="h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]">
                            <p className="textServiceL type-body-lg font-light text-left phone:text-[18px] tablet:text-base ">{text}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center mr-[3%]">
                        <p className="textServiceR type-head-3 font-bold mt-[2%] text-left phone:text-[32px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl yellow-border">{title}</p>
                        <div className="h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]">
                            <p className="textServiceR type-body-lg font-light text-left phone:text-[18px] tablet:text-base">{text}</p>
                        </div>
                    </div>
                    <Image src={imgSrc} alt="" className="icon1 w-[550px] phone:mt-[3%] tablet:mt-[4%]" />
                </>
            )} */}
        </div>
    );
}
