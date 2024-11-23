import { useEffect, useState } from "react";
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
import { EffectCards } from "swiper/modules";

const About = () => {
  const [text, setText] = useState("");
  const fullText =
    "Im Fathan Fadillah, and I'm a software developer. Born in Jakarta on May 23, 2002, I graduated from Telkom University in 2020 with a diploma in information systems. Becoming a developer is a challenge in itself for me, where time is spent studying to increase my knowledge and survive in this field. but because of that, I also feel comfortable being part of this field.";

  useEffect(() => {
    let index = 0;
    const typingEffect = setInterval(() => {
      if (index < fullText.length - 1) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingEffect);
        document.getElementById("cursor").style.display = "none";
      }
    }, 30);

    return () => clearInterval(typingEffect);
  }, [fullText]);
  return (
    <>
      <div className="big-container">
        <div className="photo-container">
          <Swiper
            spaceBetween={50}
            modules={[EffectCards]}
            effect={"cards"}
            grabCursor={true}
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
        </div>
        <div className="about-container">
          <div className="about-text">
            <p>
              {text}
              <span id="cursor" className="blinking-cursor"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
