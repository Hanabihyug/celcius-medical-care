interface IProps {
    className?: string;
    state: boolean;
    onClick: () => any;
}

export default function Hamburger({ className, state, onClick, ...props }: IProps & JSX.IntrinsicElements["div"]) {
    return (
        <div className={`flex aspect-[4/3] justify-center gap-2 px-2 items-center h-[1rem] relative ${className}`} onClick={onClick} {...props}>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] left-1/2 -translate-x-1/2 top-0 absolute bg-black origin-center ${!state ? "top-0" : "rotate-45 top-1/2 -translate-y-1/2"}`}></span>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute bg-black ${state && "opacity-0"}`}></span>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] left-1/2 -translate-x-1/2 bottom-0 absolute bg-black origin-center ${state && "rotate-[-45deg] bottom-1/2 translate-y-1/2"}`}></span>
        </div>
    );
}
