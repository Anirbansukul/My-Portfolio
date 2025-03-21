import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.p
                className="footer-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                &copy; {new Date().getFullYear()} Anirban Sukul. All Rights Reserved.
            </motion.p>

            <div className="social-links">
                <motion.a
                    href="https://github.com/Anirbansukul"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#ffcc00" }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaGithub />
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/anirban-sukul-0063b82b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#0e76a8" }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaLinkedin />
                </motion.a>

                <motion.a
                    href="mailto:anirbansukul2021@gmail.com"
                    whileHover={{ scale: 1.2, color: "#ff4d4d" }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaEnvelope />
                </motion.a>

                <motion.a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaTwitter />
                </motion.a>
            </div>
        </motion.footer>
    );
};

export default Footer;
