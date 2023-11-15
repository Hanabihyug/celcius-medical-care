import BrandImage from "@/public/assets/brand.png";
import BrandImagePhone from "@/public/assets/plotigo-favicon.svg";
import Image from "next/image";
import NavItem from "./NavItems";
import { useEffect, useState } from "react";
import isClientReady from "@/lib/isClientReady";
import Hamburger from "./Hamburger";
import Button from "../Button";
import Link from "next/link";
import logo from "@/public/assets/home/logo-celcius.jpeg";

export default function Navbar({ home = false }: { home?: boolean }) {
    const [isHome, setHome] = useState(home);
    const [isNavOpen, setNavOpen] = useState(false);

    function handleClick() {
        setNavOpen(!isNavOpen);
    }

    useEffect(() => {
        if (!isClientReady || !home) return;
        let hero = document.querySelector("#hero");

        let observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) return setHome(true);
                    setHome(false);
                }),
            { threshold: 0.9 }
        );

        

        if (hero) observer.observe(hero);

        return () => observer.disconnect();
    });

    return (
        <nav data-cy="nav" id="navbar" className={`${home ? " fixed phone:sticky" : "sticky"} left-0 right-0 top-0 z-[1000]`}>
            {/* Mobile Nav */}
            <div
                data-cy="nav-items"
                className={`${
                    isNavOpen ? "translate-y-0" : "-translate-y-full"
                } z-[-1] transition-all duration-500 nav__items phone:flex py-4 items-start gap-[2rem] absolute flex-col bg-cs-white-200 shadow-sm  top-full nav__items hidden right-0 left-0`}
            >
                <NavItem href="/">Home</NavItem>
                <NavItem href="/#features">Our Services</NavItem>
                <NavItem href="/#testimonial">Testimonial</NavItem>
                <NavItem href="/contact">Contact Us</NavItem>
            </div>

            <div className={`bg-white wrapper ${isHome ? " pt-[0.75rem] "  : "bg-white shadow-lg "} phone:py-1 phone:bg-white  phone:shadow-lg transition-all duration-300`}>
                <div className="container flex justify-between items-center py-4 ">
                    <Link href="/" data-cy="nav-brand" className="brand phone:hidden flex gap-3 items-center flex-start">
                        <Image src={logo} alt="brand" className="h-[3.5rem] w-auto" />
                        {isHome ? <h1 className="text-[1.9rem] phone:text-[1rem] brand text-cs-dark !font-black ">Celcius</h1> : <h1 className="text-[1.9rem] brand text-cs-dark !font-black">Celcius</h1>}
                        {/* {isHome ? <Image src={BrandImage} alt="brand" className="h-[3rem] brightness-50 invert w-auto" /> : <Image src={BrandImage} alt="brand" className="h-[3rem] w-auto" />} */}
                    </Link>
                    <Link href="/" data-cy="nav-brand" className="brand hidden selection-list-navbar phone:block selection-list-navbarr">
                        <Image src={logo} alt="brand" className="h-[2.3rem]  w-auto" /> 
                        <h1 className="text-[1.5rem] brand text-cs-dark bold-text">Celcius</h1>
                    </Link>

                    <Hamburger onClick={handleClick} className="phone:block hidden" state={isNavOpen} />

                    {/* Desktop Nav */}
                    <div data-cy="nav-items" className={` nav__items flex items-start gap-[22px] phone:hidden padding text-cs-dark`}>
                        <NavItem dark={isHome} href="/">
                            Home
                        </NavItem>
                        <NavItem dark={isHome} href="/#features">
                            Our Services
                        </NavItem>
                        <NavItem dark={isHome} href="/#testimonial">
                            Testimonial
                        </NavItem>
                        <NavItem dark={isHome} contact href="/contact">
                            Contact Us
                        </NavItem>
                    </div>
                </div>
            </div>
        </nav>
    );
}
