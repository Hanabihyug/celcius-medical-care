// import { Poppins } from "@next/font/google";
// const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin", "cyrillic", "vietnamese", "greek"], preload: false});

export default function Body(props: JSX.IntrinsicElements["body"]) {
    return (
        <div id="body" className={`relative m-0 p-0 overflow-x-visible ${props.className}`} style={inter.style}>
            {props.children}
        </div>
    );
}
