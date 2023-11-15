import Link from "next/link";
import Skeleton from "../Skeleton";

interface IProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function Item({ className, href, children }: IProps) {
    return (
        <Link href={href} className={`${className} text-base phone:text-xs`}>
            {children}
        </Link>
    );
}
