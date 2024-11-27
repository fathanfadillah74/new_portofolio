import fotoProfile from "../assets/img/fathan.jpeg";
import fotoProfile2 from "../assets/img/fathan2.jpeg";
import fotoProfile3 from "../assets/img/fathan3.jpeg";
import fotoProfile4 from "../assets/img/fathan4.jpeg";
import fotoProfile5 from "../assets/img/fathan5.jpeg";
import fotoProfile6 from "../assets/img/fathan6.jpeg";
import "../assets/style/about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDesktop]);

  return (
    <>
      <motion.section
        id="about"
        className="about-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div>
          <div className="section-text-about">
            <h1>About Me</h1>
          </div>
        </motion.div>
        <div className="big-container">
          <div className="photo-container">
            {isDesktop >= 768 && (
              <Swiper
                modules={[Autoplay, Pagination, EffectCards]}
                effect={"cards"}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={100}
              >
                <SwiperSlide>
                  <img src={fotoProfile} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile6} alt="" />
                </SwiperSlide>
              </Swiper>
            )}
            {isDesktop < 768 && (
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectCards]}
                effect={"crative"}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={2}
                spaceBetween={100}
                navigation={true}
              >
                <SwiperSlide>
                  <img src={fotoProfile} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotoProfile6} alt="" />
                </SwiperSlide>
              </Swiper>
            )}

          </div>
          <div className="about-container">
            <div className="about-text">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                <p>
                  Im Fathan Fadillah, and I'm a software developer. Born in
                  Jakarta on May 23, 2002, I graduated from Telkom University in
                  2020 with a diploma in information systems. Becoming a developer
                  is a challenge in itself for me, where time is spent studying to
                  increase my knowledge and survive in this field. but because of
                  that, I also feel comfortable being part of this field.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
