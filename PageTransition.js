import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.4 } },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
