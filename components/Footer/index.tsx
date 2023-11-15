import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/assets/home/logo-celcius.jpeg";
import Link from "next/link";


export default function Navbar() {
  
  return (
    <footer
      data-cy="footer"
      id="footer"
      className="relative bottom-0 pt-5 mt-auto bg-cs-white-100 flex flex-col overflow-y-hidden"
    >
      <div className="container flex items-start phone:flex-col phone:items-center phone:gap-6 w-full py-10 justify-between">
      <div className="footer__link flex gap-4 w-full justify-between">
                    <div className="footer__link">
                        <div className="link__heading mb-2">
                            <h2 className="uppercase font-bold text-xl phone:text-base text-[#333]">OUR LOCATION</h2>
                        </div>
                        <div className="items flex flex-col gap-1 text-base text-[#888]">
                            
                        <a
  href="https://maps.app.goo.gl/NqwKJ75tjTgYmR6F9"
  target="_blank"
  rel="noreferrer"
>
  Address: Jl. Monkey Forest, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571
</a>
<a
>
  Operational Hours: 12 Hours Everyday
</a>

<a
  href="https://wa.me/6281339157979"
  target="_blank"
  rel="noreferrer"
  onClick={() => {
    window.open("https://wa.me/6281339157979", "_blank");
  }}
>
  Phone Number: +62 81 339 157 979
</a>


                        </div>
                    </div>
        </div>
        <div className="lg:pl-[25rem]   brands flex flex-col gap-4 w-full">
          <Image
            src={logo}
            alt="Celcius"
            className="w-[5em] phone:w-[7rem] h-auto"
            loading="lazy"
          />

          <p className="text-sm text-[#555]">
            We are happy to get your feedback
          </p>

          <div className="social flex justify-start phone:text-sm gap-4 items-center text-3xl text-[#888]">
            <Link
              href="https://www.instagram.com/celciusmedicalcare/"
              className="hover:opacity-75 transition-all duration-200"
              target="_blank"
            >
              <FaInstagram></FaInstagram>
            </Link>

            <Link
              href="https://wa.me/6281339157979"
              target="_blank"
              className="hover:opacity-75 transition-all duration-200"
            >
              <FaWhatsapp></FaWhatsapp>
            </Link>
          </div>

          <p className="text-sm text-[#555]">Feel free to contact us</p>
        </div>

                
      </div>

      <div className=" border-t border-[#555] border-opacity-20">
        <div className="container font-medium py-5 text-[#555] w-full flex justify-center items-center relative gap-2 phone:flex-col">
          <p className="type-body-sm">© 2023 Celcius. All rights reserved.</p>
          <span className="phone:hidden"></span>
        </div>
      </div>
    </footer>
  );
}
