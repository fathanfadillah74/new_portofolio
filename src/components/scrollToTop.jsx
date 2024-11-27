import { motion } from "framer-motion";
import upIcon from "../assets/img/upIcon.png";
import '../assets/style/scrolltotop.css';
import { useEffect, useState } from "react";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const click = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={click}
                    className="scroll-button"
                >
                    <img src={upIcon} alt="back to top" />
                </motion.button>
            )}
        </>
    )
}

export default ScrollToTop;