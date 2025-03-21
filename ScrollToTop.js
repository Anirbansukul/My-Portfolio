import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
            >
                <FaArrowUp />
            </motion.button>
        )
    );
};

export default ScrollToTop;
