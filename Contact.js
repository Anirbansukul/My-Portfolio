import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
    };

    return (
        <motion.section
            id="contact"
            className="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="contact-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2>Contact Me</h2>
                <p>Feel free to reach out! I'm always open to new opportunities.</p>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.input
                        type="text"
                        placeholder="Your Name"
                        required
                        whileFocus={{ scale: 1.05 }}
                    />
                    <motion.input
                        type="email"
                        placeholder="Your Email"
                        required
                        whileFocus={{ scale: 1.05 }}
                    />
                    <motion.textarea
                        placeholder="Your Message"
                        rows="4"
                        required
                        whileFocus={{ scale: 1.05 }}
                    ></motion.textarea>
                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className="submit-btn"
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                {formSubmitted && (
                    <motion.div
                        className="success-message"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        ✅ Message Sent Successfully!
                    </motion.div>
                )}
            </motion.div>
        </motion.section>
    );
};

export default Contact;
