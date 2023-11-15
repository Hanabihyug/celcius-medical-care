import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface IProps {
	question: string;

	/**
	 * @description The answer of the question.
	 */
	children: React.ReactNode;
}

export default function FAQList({ question, children }: IProps) {
	const [isOpen, setOpen] = useState(false);

	function handleOpen() {
		setOpen(!isOpen);
	}

	return (
		<div data-cy="faq-item" className="faq__list slide slide-up w-full relative">
			<div onClick={handleOpen} className="faq__question bg-white border-cs-dark border-l-[.5rem] text-xl flex items-center px-4 py-2 z-[2] shadow-[0_0_30px_0_rgba(0,0,0,.1)] cursor-pointer transition-all duration-300 sm-phone:text-sm hover:scale-[1.003]">
				<p className="text-cs-dark-500 font-bold text-ellipsis overflow-hidden">{question}</p>
				<FaAngleDown className={`ml-auto transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} />
			</div>
			<div className={`faq__answer ${isOpen ? "max-h-[100vh] py-2" : "max-h-0  py-0"} bg-cs-white-200 h-max pr-4 pl-6 transition-all duration-300 drop-shadow-sm shadow-inner overflow-hidden faq__answear sm-phone:text-sm`}>{children}</div>
		</div>
	);
}
