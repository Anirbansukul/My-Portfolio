import React from "react";
import "../styles/Skills.css";

const skills = [
    { "name": "HTML", "icon": "🔥", "description": "Markup Language for the Web" },
    { "name": "CSS", "icon": "🎨", "description": "Style Sheets for Layout & Design" },
    { "name": "JavaScript", "icon": "⚡", "description": "Programming Language for the Web" },
    { "name": "React", "icon": "⚛️", "description": "Library for Building User Interfaces" },
    { "name": "Node.js", "icon": "🌱", "description": "JavaScript Runtime for Server-Side" },
    { "name": "RDBMS", "icon": "🗄️", "description": "Relational Database Management System" },
    { "name": "MongoDB", "icon": "🍃", "description": "NoSQL Database for Modern Applications" },
    { "name": "SQL", "icon": "📊", "description": "Structured Query Language for Databases" },
    { "name": "Express.js", "icon": "🚀", "description": "Minimalist Web Framework for Node.js" },
    { "name": "Git", "icon": "🔧", "description": "Version Control System" }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon-container">
                            <span className="skill-icon">{skill.icon}</span>
                        </div>
                        <div className="skill-details">
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
