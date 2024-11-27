import { motion } from "framer-motion";
import '../assets/style/contact.css';
import data from '../assets/data/dataContact';

const ContactFooter = () => {
    return (
        <motion.section
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            id="contact"
            className="contact-footer"
        >
            <motion.div className="contact-info">
                <h3>Connect with Me :</h3>
                <ul>
                    {data.map((item,index) => (
                        <li key={index}><a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.name} /></a></li>
                    ))}
                </ul>
            </motion.div>

            <motion.div className="footer-note">
                <p>&copy; Thankyou for scrolling my portfolio, {new Date().getFullYear()}</p>
            </motion.div>
        </motion.section>
    );
};

export default ContactFooter;
