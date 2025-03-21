import React from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <section id="about" className="about">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: { color: "#000" },
                    particles: {
                        number: { value: 50 },
                        size: { value: 3 },
                        move: { enable: true, speed: 1 },
                        opacity: { value: 0.7 },
                        color: { value: "#ffffff" },
                        links: {
                            enable: true,
                            distance: 120,
                            color: "#ffffff",
                        },
                    },
                }}
            />

            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="about-title"
            >
                About Me
            </motion.h2>

            <div className="about-text-wrapper">
                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="about-text"
                >
                    Hey there! 👋 I'm <span className="gradient-text">Anirban Sukul</span>, a
                    <span className="gradient-text"> Full-Stack Web Developer</span> passionate about solving
                    <span className="highlight"> real-world problems</span> through technology.
                    Currently pursuing my <span className="highlight">Bachelor's degree</span> at
                    <span className="gradient-text"> Siksha 'O' Anusandhan</span>, I have maintained a
                    <span className="highlight"> CGPA of 9.62</span>, constantly pushing myself to learn and innovate.
                    <br /><br />
                    I specialize in building <span className="highlight">scalable, high-performance web applications</span>,
                    working with <span className="gradient-text">MongoDB, SQL, Express.js, React, Node.js, Tailwind CSS,
                        and GIS applications</span>. From crafting smooth UI/UX experiences to designing
                    efficient backend architectures, I love every aspect of full-stack development.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
