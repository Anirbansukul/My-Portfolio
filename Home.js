import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import "../styles/Home.css";
import ParallaxWrapper from "./ParallaxWrapper";
import { Element } from "react-scroll";

const Home = () => {
    return (
        <ParallaxWrapper speed={-20}>
            <Element name="home">
                <section id="home" className="home">

                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={0.2} />
                        <pointLight position={[10, 10, 10]} />
                        <Stars />
                        <OrbitControls />
                    </Canvas>

                    <motion.h1
                        className="home-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span className="reverse-typing-effect">Welcome to Anirban`s Portfolio</span>
                    </motion.h1>


                    <motion.h2
                        className="home-subtitle"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {splitText("Let's bring your ideas to life with innovative design and technology.")}
                    </motion.h2>

                    <motion.div
                        className="scroll-down"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                    >
                    </motion.div>
                </section>
            </Element>
        </ParallaxWrapper>
    );
};

const splitText = (text) => {
    return text.split(" ").map((word, index) => (
        <motion.span
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3, ease: "easeOut" }}
        >
            {word}{" "}
        </motion.span>
    ));
};

function Stars() {
    const starCount = 500;
    const positions = Array.from({ length: starCount }).map(() => [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
    ]);

    return (
        <group>
            {positions.map((position, index) => (
                <mesh key={index} position={position}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

export default Home;
