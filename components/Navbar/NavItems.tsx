import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ href, children, contact, dark }: { href: string; children: React.ReactNode; contact?: boolean; dark?: boolean }) {
    let route = useRouter();
    let isSamePath = route.asPath == href;

    return (
        <>
            <Link
                href={href}
                className={`nav__item px-4 py-2 phone:pl-4 group/navlink select-none text-sm bg-gradient-to-r
                ${dark ? `text-cs-darkhover:underline decoration-[1.5px] decoration-slate-200 underline-offset-[6px] ${isSamePath ? "underline" : ""}` : `text-cs-dark cs-gradient hover:text-unfill ${isSamePath ? "text-unfill" : ""}`}
                ${contact ? `!from-accent !to-accent text-white rounded-[10px] ${dark ? "!from-accent !to-accent !text-cs-white " : "!text-fill"}` : `bg-clip-text`}
            
            `}
            >
                {children}
            </Link>
        </>
    );
}
