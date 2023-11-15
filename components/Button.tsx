import Link from "next/link";

interface IAnchorProps {
    children: React.ReactNode;
    type: "anchor";
    href: string;
    title?: string;
    className?: string;
}
interface IButtonProps {
    children: React.ReactNode;
    type?: string;
    href: never;
}

type ButtonProps = (IButtonProps & JSX.IntrinsicElements["button"]) | IAnchorProps;

export default function Button({ type, children, href, className, title = "", ...props }: ButtonProps) {
    if (type == "anchor") {
        return (
            <Link href={href} scroll={false} className={`hover:bg-accent-300 btn type-body-base text-white bg-accent-400 ${className}`} title={title}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`hover:bg-accent-300 btn type-body-base text-white bg-accent-400 ${className}`} {...props}>
            {children}
        </button>
    );
}
