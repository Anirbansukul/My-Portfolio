import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaRegFile, FaCloudSun } from "react-icons/fa"; // Imported icons
import "../styles/Projects.css";

// Project data
const projects = [
    {
        id: 1,
        title: "Easy Appointment",
        description: "A Full Stack Doctor Appointment Website Built with React, Node.js, and MongoDB ,Express .js.",
        icon: <FaShoppingCart size={50} />,
        link: "https://github.com/Anirbansukul/Easy-Appointment-MERN-Stack-WebApp"
    },
    {
        id: 2,
        title: "Portfolio-Cynthia-Ugwu",
        description: "Cynthia-Ugwu Demo website with animations built using React and Framer Motion.",
        icon: <FaRegFile size={50} />,
        link: "https://github.com/Anirbansukul/Portfolio-Cynthia-Ugwu"
    },
    {
        id: 3,
        title: "Blood-Bank-App",
        description: "A Full Stack Blood Bank Management Website Built with React, Node.js, and MongoDB ,Express .js.",
        icon: <FaCloudSun size={50} />,
        link: "https://github.com/Anirbansukul/my-blood-bank-app"
    }
];

const Projects = () => {
    const [clickedProjectId, setClickedProjectId] = useState(null);

    const handleCardClick = (id) => {
        setClickedProjectId(id);
    };

    return (
        <section id="projects" className="projects">
            <motion.h2
                className="projects-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
                My Projects
            </motion.h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className={`project-card ${clickedProjectId === project.id ? "clicked" : ""}`}
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                            rotate: 3,
                            transition: { duration: 0.3 },
                        }}
                        onClick={() => handleCardClick(project.id)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="project-icon">
                                    {project.icon}
                                </div>
                                <h3>{project.title}</h3>
                            </div>
                            <div className="card-back">
                                <motion.div
                                    className="overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2,
                                    }}
                                >
                                    <h4>Project Description</h4>
                                    <p>{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cta-button"
                                    >
                                        View Project
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
