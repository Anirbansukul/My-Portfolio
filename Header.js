import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/Header.css";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const navLinks = ["home", "about", "projects", "skills", "contact"];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.header
            className="header"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className="logo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Anirban
            </motion.div>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    {navLinks.map((section, index) => (
                        <li key={index}>
                            <Link
                                to={section}
                                smooth={true}
                                duration={800}
                                spy={true}
                                offset={-70}
                                className="nav-item"
                                onClick={() => setMenuOpen(false)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <ThemeToggle />

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
        </motion.header>
    );
};

export default Header;
