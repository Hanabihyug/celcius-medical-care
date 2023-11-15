interface ISectionProps {
	title?: string;
	subtitle?: string;
	dark?: boolean;
	children: React.ReactNode;
}

export default function Section({ title, dark, subtitle, style, className, children, ...props }: ISectionProps & JSX.IntrinsicElements["section"]) {
	return (
		<section className={`${className} py-6 w-full`} {...props}>
			<div className="container">
				{title && (
					<div className="section__heading mb-10 phone:mb-5 relative w-full flex flex-col gap-2">
						<h1 data-slide className={`section-heading text-center ${dark ? "text-white" : "text-cs-dark"} phone:text-[20px]`}>
							{title}
						</h1>
						<p className={`section-subheading text-center ${dark ? "text-[#F8F8FF]" : "text-[#555]"} phone:text-[15px]`}>{subtitle}</p>
					</div>
				)}
				{children}
			</div>
		</section>
	);
}
