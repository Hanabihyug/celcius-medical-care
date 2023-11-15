import Head from "next/head";
//Components
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { Icon2, Icon3 } from "@/components/Contact/Assets";

import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  createRef,
  useEffect,
} from "react";
import isClientReady from "@/lib/isClientReady";
import axios from "axios";

interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      [k: string]: {
        official: string;
        common: string;
      };
    };
  };
  altSpellings: string[];
}

interface IProps {
  countries: (ICountry & { flagUrl: string })[];
}

export const getStaticProps: GetStaticProps<IProps> = async (ctx) => {
  try {
    let data = (
      await axios.get<ICountry[]>(
        "https://restcountries.com/v3.1/all?fields=altSpellings,name"
      )
    ).data;
    let res = data
      .filter((e) => e.altSpellings[0].length == 2)
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .map<ICountry & { flagUrl: string }>((e) => ({
        ...e,
        flagUrl: `https://flagsapi.com/${e.altSpellings[0]}/flat/64.png`,
      }));

    return {
      props: { countries: res },
    };
  } catch (e) {
    return {
      props: { countries: [] },
    };
  }
};

export default function Contact({ countries }: IProps) {
    let contactRef = createRef<any>();
    let route = useRouter();
    
    

  useEffect(() => {
    if (isClientReady()) window.history.pushState({}, "", "/contact");
  });


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
    
        const emailBody = Array.from(formData)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
          .join("&");
    
        const mailtoLink = `mailto:hello@plotigo.app?${emailBody}`;
    
        window.location.href = mailtoLink;
      }

    return (
        <>
            <Head>
                <Meta />
                <title>Celcius - Contact</title>
            </Head>
            <Body>
                <Navbar />
                <main>
                    

                    {/*Social Media*/}
                    <Section data-cy="media sosial" className="bg-cs-white-200 phone:w-full bold-text" title="We Are Here">
                        <div className="wrapper flex phone:flex-col content w-full phone:w-full justify-evenly items-start gap-4">
                            <Link data-cy="link1" href="https://wa.me/6281339157979" target="_blank" title="" className="flex items-center text-base gap-6">
                                <Image src={Icon3} alt="" className=" w-[1.25em] h-auto" />
                                <span className="">+62 813-3915-7979</span>
                            </Link>

              <Link
                data-cy="link2"
                href="mailto:celcius.medicalcare1@gmail.com"
                title=""
                className="flex items-center text-base gap-6"
                target="_blank"
              >
                <Image src={Icon2} alt="" className=" w-[1.25em] h-auto" />
                <span className="">celcius.medicalcare1@gmail.com</span>
              </Link>
            </div>
          </Section>

          {/*maps*/}
          <Section
            data-cy="maps"
            className="section__heading bg-cs-white-200  phone:w-full pb-[3rem]"
          >
            <div data-cy="maps" id="maps" className="content phone:w-full">
              <div data-cy="maps" className="relative w-[100%] h-auto mt-4">
                <div className="content w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263.17114974198637!2d115.25934106480423!3d-8.517393542108854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d537c1effab%3A0x6ec813a4b9693c2f!2sCelcius%20Medical%20Care%20Ubud!5e0!3m2!1sid!2sid!4v1696310975496!5m2!1sid!2sid"
                    width="100%"
                    height="600"
                    loading="lazy"
                    className="z-[-1]"
                  ></iframe>
                </div>
              </div>
            </div>
          </Section>
        </main>
        <Footer />
      </Body>
    </>
  );
}
