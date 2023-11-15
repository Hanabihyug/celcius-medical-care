import Image, { StaticImageData } from "next/image";
import Skeleton from "../Skeleton";

interface IProps {
	imgSrc: StaticImageData;
	dark?: boolean;
	primary?: boolean;
	title: string;
	description: string;
	className?: string;
}

export default function Milestones({ imgSrc, dark, title, primary, description, className = "" }: IProps) {
	return (
		<div data-cy="milestones" className={`${className} content group/checklist slide slide-up flex justify-between items-start even:flex-row-reverse phone:even:flex-col phone:flex-col gap-10 phone:gap-2`}>
			<div className="milestones__image w-[calc(45%+3px)] aspect-square group-odd/checklist:pr-10 group-even/checklist:pl-10 group-odd/checklist:phone:pr-0 group-even/checklist:phone:pl-0  phone:overflow-hidden phone:pb-12 phone:w-full flex-shrink-0 group-odd/checklist:border-r-[6px] phone:border-b-[4px] group-even/checklist:phone:border-l-0 group-odd/checklist:phone:border-r-0 group-even/checklist:border-l-[6px] border-[#000] border-opacity-50 border-dashed ">
				<Skeleton variant="rounded" className="w-full h-full aspect-[6/6] phone:aspect-video">
					<Image src={imgSrc} loading="lazy" alt="" className="rounded-md brightness-75  phone:w-full phone:h-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-full h-full overflow-hidden phone:object-cover object-center" />
				</Skeleton>
			</div>
			<div className="content py-6 flex flex-col flex-grow  gap-2 phone:gap-2">
				<Skeleton variant="rounded" className="mb-4 text-2xl phone:text-2xl">
					<div className={`title text-2xl phone:text-2xl font-bold ${dark ? "text-white" : "text-cs-dark"}`}>{title}</div>
				</Skeleton>
				<Skeleton variant="rounded" className="mb-2 text-lg phone:text-base" multiline={true} lineCount={3}>
					<div className={`description phone:text-base text-lg ${dark ? "text-[#F0F8FF]" : "text-[#555]"}`}>{description}</div>
				</Skeleton>
			</div>
		</div>
	);
}
