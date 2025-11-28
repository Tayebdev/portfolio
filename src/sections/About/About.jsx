import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '../../animations/animations';

const About = () => {
    return (
        <section id="about" className="py-20">
            <motion.div
                className="container mx-auto px-4 max-w-4xl text-center"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold mb-2"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-blue-500 font-medium"
                >
                    My Story
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="text-gray-600 dark:text-darkTextMuted leading-relaxed space-y-6 text-lg"
                >
                    <p>
                        I'm Boulekzazel Tayeb, a Full-Stack Mobile & Web Developer and AI Engineer with extensive experience designing and building intelligent, scalable, real-world solutions. I specialize in creating high-performance applications using Flutter, Node.js, React, Python, and modern cloud technologies, delivering seamless and robust user experiences.
                    </p>
                    <p>
                        I thrive on solving complex technical challenges, whether it's developing real-time mobile apps, architecting scalable backend systems, or designing machine learning models for predictive analytics and intelligent insights.
                    </p>
                    <p>
                        With a strong foundation in data engineering, AI, ML algorithms, and cloud-native systems, I combine technical expertise, creative problem-solving, and strategic thinking to lead projects from concept to production. My mission is to build solutions that are intelligent, efficient, and impactful, pushing the boundaries of technology.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="mt-10"
                >
                    <motion.a
                        href="/cv_tayebBoulekzazel.pdf"
                        download="cv_tayebBoulekzazel.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 rounded-full border border-gray-300 dark:border-borderSoft hover:bg-transparent hover:text-blue-500 hover:border-blue-500 transition-all text-lg font-medium dark:text-darkText"
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
