import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface IProps {
	src: StaticImageData;
	alt?: string;
	title: string;
	text: string;
}

export default function ValueCard({ src, alt = "", title = "", text = "" }: IProps) {
	let [isOpen, setOpen] = useState(false);

	function handleClick(e: any) {
		setOpen(!isOpen);
	}

	return (
		<div data-cy="values-card" className="w-full h-[110px] bg-transparent phone:h-[90px] flip-card mb-[80px]">
			<div className="flip-card-front absolute flex flex-col">
				<div className="px-[14px] z-[1] opacity-90 phone:px-[11px] ml-[20px]">
					<Image src={src} alt="" className="icon w-[48px] phone:w-[36px] ml-[-16px]" />
				</div>
				<div className="mt-2 text-left ml-[20px]">
					<p className="text type-head-3 font-semibold text-white yellow-border">{title}</p>
					<p className="mt-2 text w-full text-[18px] font-light text-white">{`"${text}"`}</p>
				</div>
			</div>
		</div>
	);
}
