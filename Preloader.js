import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Preloader.css";

const Preloader = ({ onFinish }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            if (onFinish) {
                onFinish();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!loading) return null;

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="spinner"></div>
            <h2 className="loading-text">Loading...</h2>
        </motion.div>
    );
};

export default Preloader;
