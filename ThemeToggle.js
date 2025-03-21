import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/ThemeToggle.css";

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <button
            className={`theme-toggle ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
    );
};

export default ThemeToggle;
