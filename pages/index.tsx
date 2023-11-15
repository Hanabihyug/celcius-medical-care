import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import isClientReady from "@/lib/isClientReady";
import { FaAngleRight } from "react-icons/fa";
import SloganCard2 from "@/components/Service/SloganCard2";
import SloganCard1 from "@/components/Service/SloganCard1";

// Icon
import { ImWhatsapp } from "react-icons/im";


//Image
import service from "@/public/assets/home/service.png";
import service1 from "@/public/assets/home/service1.png";
import service2 from "@/public/assets/home/service2.png";
import hospital from "@/public/assets/home/bg-hospital.jpg";
import deveureka from "@/public/assets/home/deveureka.png";
import bghost from "@/public/assets/home/bg-host.jpg";
import test1 from "@/public/assets/home/testimoni1.png";
import test2 from "@/public/assets/home/testimoni2.png";
import test3 from "@/public/assets/home/testimoni3.png";
import test4 from "@/public/assets/home/testimoni4.png";
import test5 from "@/public/assets/home/testimoni5.png";
import test6 from "@/public/assets/home/testimoni6.png";
import test7 from "@/public/assets/home/testimoni7.png";
import test8 from "@/public/assets/home/testimoni8.png";
import test9 from "@/public/assets/home/testimoni9.png";
import test10 from "@/public/assets/home/testimoni10.png";
import test11 from "@/public/assets/home/testimoni11.png";
import test12 from "@/public/assets/home/testimoni12.png";
import test13 from "@/public/assets/home/testimoni13.png";
import test14 from "@/public/assets/home/testimoni14.png";
import test15 from "@/public/assets/home/testimoni15.png";
import test16 from "@/public/assets/home/testimoni16.png";
import test17 from "@/public/assets/home/testimoni17.png";
import HeroImage1 from "@/public/assets/home/desain-website celcius-(2).jpg";
import MapSlogan1 from "@/public/assets/home/map-slogan1.png";
import SloganPhone from "@/public/assets/home/slogan-phone-left.png";


//Components
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Button from "@/components/Button";
import Section from "@/components/Section";
import PartnerSlider from "@/components/Home/PartnerSlider";
import { SwiperSlide } from "swiper/react";
import Partner from "@/components/Home/Partner";
import Milestones from "@/components/About/Milestones";

export default function Home() {
  const heroText = ["PRIORITY"];

  let [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (!isClientReady) return;
    let interval = setInterval(() => setTextIndex((i) => i + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <Meta />
        <meta
          name="google-site-verification"
          content="0mpLFCflX5eoinzJeEOw4x9ojyviSgQ_aTMcF3qwU84"
        />
        <title>Celcius - Medical Care</title>
        <link
          rel="shortcut icon"
          href="/assets/home/favicon.ico"
          type="image/x-icon"
        />
      </Head>

      <Body>
        <Navbar home={true} />
        
        {/* FLOATING WHATSAPP */}
        <div onClick={() => window.open("https://wa.me/6281339157979")} className="fixed w-14 h-14 bottom-10 right-10 bg-[#25d366] text-white rounded-full flex justify-center items-center first-letter:first-line shadow-lg z-50 cursor-pointer">
          <ImWhatsapp className=" text-3xl" />
        </div>

        

        {/* HERO SECTION */}
        <div
          data-cy="hero"
          id="hero"
          className="relative min-h-screen flex justify-center"
        >
          <Image
            src={bghost}
            alt=""
            loading="lazy"
            data-cy="hero-background"
            className="w-full h-full object-cover phone:object-cover"
            style={{ objectPosition: "80% center", filter: "brightness(0.3)" }}
          />

          <div className="container h-full flex items-center md:px-20 absolute  gap-[3rem] phone:justify-start phone:pt-0">
            <div className="content flex flex-col justify-start phone:w-full gap-9 w-1/2   bg-opacity-20 lg:pt-[8rem] ">
              <div className="selection-list">
                <h1 className="  header-title drop-shadow-[0_0_.1rem_rgb(0_0_0)] text-white animate-slide-up bold-text ">
                  Celcius <span style={{ color: "#66A8EC" }}>Medical Care</span>
                </h1>
              </div>

              <p className="text-white  header-text  drop-shadow-[0_0_.1rem_rgb(0_0_0)] text-justify animate-slide-up  ">
                Welcome to Celcius Medical Care, a leading healthcare center
                located in the heart of Ubud, Bali. We are dedicated to
                providing high-quality medical services tailored to meet your
                healthcare needs. With a skilled medical team and modern
                facilities, we offer a range of healthcare services, including
                medical check-ups, general care, specialist consultations, as
                well as holistic treatments. We are here to help you lead a
                healthy, happy, and energetic life. Trust your healthcare to
                Celcius Medical Care Ubud, where your health is our top priority
              </p>
              <span className="slide slide-left">
                <Button
                  type="anchor"
                  href="#milestones"
                  title="Learn More"
                  className="px-4 py-2 !type-body-sm !type-body-sm rounded-full hover:gap-3 select-none shadow-lg backdrop-blur-sm text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 text-white bg-accent flex items-center gap-2"
                >
                  Learn more
                  <FaAngleRight />
                </Button>
              </span>
            </div>
          </div>
        </div>

        <main>

          
                    {/* Milestones Section */}
                    <div data-cy="milestones" id="milestones" className="relative bg-cs-white-200  h-[auto] overflow-hidden ">
                        <Section title="Quality is our priority" subtitle="Discover Celcius Medical Care" className="py-[90px] z-10 type-head-2 ">
                            <div className="content mt-16 flex flex-col justify-start gap-[4rem] ">
                                <Milestones
                                    imgSrc={service}
                                    title="An exceptional clinic nestled in the vibrant heart of Ubud"
                                    description="Our dedicated
                                    health team is devoted to delivering unparalleled care
                                    with a friendly touch, ensuring every patient&apos;s
                                    experience is optimal and comforting. With our
                                    unwavering motto, &quot;,Quality is our Priority,&quot;,
                                    we pledge to provide you with the highest standard of
                                    healthcare. Explore our array of outstanding services,
                                    from specialized rabies vaccines (VAR and SAR) that
                                    guarantee your safety, to the convenience of homecare
                                    and on-call services that prioritize your comfort and
                                    well-being. Additionally, we offer the assurance of
                                    health insurance, solidifying our commitment to your
                                    holistic care. At Celsius Medical Care, your health is
                                    not just a service – it&apos;s our genuine priority."
                                />
                            </div>
                        </Section>
                    </div>
          

          {/* FEATURES SECTION */}
          <div
            data-cy="feature"
            id="features"
            className="bg-white  z-10 lg:pt-[6rem]"
          >
            <Section
            
              className="animate-slide-uppy-1 bold-text"
              title="Our Services "
              subtitle="Gather all you needs, provide the simplest guide for prioritizing a healthy life."
            >
              
              <div className="selection-feat">
                <Image
                  className="selection-feat-img"
                  alt={"Checklist blue"}
                  src={HeroImage1}
                />{" "}
                <div className="content selection-feat slide slide-right">
                  <div className="selection-feat-content red-border">
                    <div className="selection-checklist">
                      <div className="selection-list">
                        <p className="p-text">
                          Doctor On Consultation
                        </p>{" "}
                      </div>
                      <div className="selection-list">
                        <p className="p-text">
                          Doctor On Call
                        </p>{" "}
                      </div>
                      <div className="selection-list">
                        <div className="p-text">
                          Doctor Teleconsultation
                        </div>{" "}
                      </div>
                      <div className="selection-list">
                        <div className="p-text">
                          Vaccine (VAR, SAR, TETANUS, etc)
                        </div>{" "}
                      </div>
                      <div className="selection-list">
                        <div className="p-text">
                          Laboratory
                        </div>{" "}
                      </div>
                      <div className="selection-list">
                        <div className="p-text">
                          Medical Service for Events
                        </div>{" "}
                      </div>
                      <div className="selection-list">
                        <div className="p-text">
                          First Aids Training
                        </div>{" "}
                      </div>
                      <div className="selection-list">
                        <div className="p-text">
                          Rental of Medical Aids (Wheel Chair, Crutch, Elbow
                          Crutch, Tripod,Walker)
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="selection-feat-content red-border">
                    <div className="selection-list">
                      <div className="p-text">
                        Wound Treatment
                      </div>{" "}
                    </div>
                    <div className="selection-list">
                      <div className="p-text">
                        Intravenous Therapy
                      </div>{" "}
                    </div>

                    <div className="selection-list">
                      <div className="p-text">
                        Nurse Home Care
                      </div>{" "}
                    </div>
                    <div className="selection-list">
                      <div className="p-text">
                        Professional Babysitter
                      </div>{" "}
                    </div>
                    <div className="selection-list">
                      <div className="p-text">Pharmacy</div>{" "}
                    </div>
                    <div className="selection-list">
                      <div className="img1 p-text">
                        Medical Service for Corporate
                      </div>{" "}
                    </div>
                    <div className="selection-list">
                      <div className="p-text">
                        RInsurance Service
                      </div>{" "}
                    </div>
                    <div className="selection-list">
                      <div className="p-text">
                        Ambulan Service
                      </div>{" "}
                    </div>

                    
                  </div>
                </div>
              </div>

              <div></div>
            </Section>
            <div className="phone:flex lg:pb-[4rem] lg:ml-[40rem] button-service ">
                      <Button
                        type="anchor"
                        href="/contact"
                        title="Learn More"
                        className="btnsss phone:text-sm rounded-[20px] hover:gap-3 select-none 
                        shadow-lg backdrop-blur-sm text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2
                         text-white bg-accent flex items-center md:px-6 gap-2  "
                      >
                        Contact Us
                        <FaAngleRight />
                      </Button>
                    </div>
          </div>

          {/* Slogan Section 1 */}
          <div
            data-cy="slogancard"
            id="slogancard"
            className="relative bg-F6F9FC h-[auto]"
          >
            <Section
              title="Main Services"
              subtitle="Health is our top priority concern."
              className="relative py-[90px] phone:py-[20px] z-9 isolate bold-text"
            >
              <div className="content w-full flex flex-row flex-wrap  phone:flex-col tablet:gap-5 justify-center text-cs-dark">
                <SloganCard1
                  data-vmleft
                  imgSrc={service1}
                  title="Health Management & Support"
                  text="Providing ongoing care and support for your health concern"
                />
                <SloganCard2
                  data-vmleft
                  imgSrc={service2}
                  title="Digital Consulting"
                  text="Find the best solution and advice for your health"
                />
              </div>
            </Section>
          </div>

          {/* PARTNER SECTION */}
          <div
            id="testimonial"
            className="bold-text md:pt-[3rem] lg:pt-[6rem] pb-6"
            data-cy="partner"
          >
            <Section
              title="Testimonial"
              subtitle="Clients benefit from Celcius innovative and effective advice & solutions."
            >
              <div
                data-cy="partner-list"
                className="wrapper flex flex-col w-full gap-12"
              >
                <PartnerSlider id="normal">
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test5} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test4} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test6} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test7} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test8} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test9} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test10} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test11} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test12} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test13} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test14} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test15} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test16} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Partner title="Testimoni" src={test17} />
                  </SwiperSlide>
                </PartnerSlider>
              </div>
            </Section>
          </div>

          {/* SLOGAN SECTION */}
          <div
            id="slogan"
            className="relative grid   place-items-center min-h-[20rem] "
          >
            <div className="opacity-70 slogan__bg absolute overflow-hidden 
            left-0 after:bg-gradient-to-r top-0 w-[60%] h-full z-[-2] phone:hidden 
            after:absolute after:left-0 after:top-0 after:w-full after:h-full 
            after:from-transparent after:z-[1] after:to-white">
              <Image
                loading="lazy"
                src={MapSlogan1}
                alt=""
                className="object-cover object-center scale-[1.4] h-full "
              />
            </div>
            <Section>
              <div className="wrapper flex justify-end phone:flex-col relative items-center gap-2 h-full pb-12">
                <div
                  data-cy="slogan-content"
                  className="content w-[60%] phone:w-full flex flex-col gap-5"
                >
                  <h1 className="text-cs-dark slide slide-left bold-text leading-[4rem] phone:leading-none type-head-2">
                    Get to know us more
                  </h1>
                  <div className="wrapper type-body-base flex flex-col gap-4">
                    <p className="text-[#555] slide slide-left">
                      We believe that the optimal health is important. Feel free
                      to get us know more page and we will give an and best
                      advice for you.
                    </p>
                  </div>
                  <span className="slide slide-left">
                    <Button
                      type="anchor"
                      href="/contact"
                      title="Learn More"
                      className="px-4 py-2 !type-body-sm !type-body-sm rounded-full hover:gap-3 select-none shadow-lg backdrop-blur-sm text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 text-white bg-accent flex items-center gap-2"
                    >
                      Contact Us
                      <FaAngleRight />
                    </Button>
                  </span>
                </div>
              </div>
            </Section>
            <div className="left-1/2 top-1/2 -translate-y-1/2 -translate-x-[170%] w-[16rem] phone:hidden h-auto phone:w-3/4 absolute phone:relative z-[4] ">
              <Image
                className="drop-shadow-[0_0_1rem_rgb(0_0_0_/_.3)] h-[100] w-full object-contain 
                slide slide-right  "
                loading="lazy"
                src={SloganPhone}
                alt="plotigo-phone"
              />
            </div>
          </div>
        </main>
        <Footer />
      </Body>
    </>
  );
}