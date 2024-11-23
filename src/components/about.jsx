import { useEffect, useState } from 'react';
import fotoProfile from '../assets/img/fathan.jpeg'
import fotoProfile2 from '../assets/img/fathan2.jpeg'
import '../assets/style/about.css'

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
                    <img src={fotoProfile} alt="" />
                    <img src={fotoProfile2} alt="" />
                </div>
                <div className="about-container">
                    <div className="about-text">
                        <p>{text}<span id='cursor' className="blinking-cursor"></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About