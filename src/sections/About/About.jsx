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
                    className="text-gray-600 dark:text-darkTextMuted leading-relaxed space-y-6 text-lg text-left"
                >
                    <p>
                        I'm Boulekzazel Tayeb, a Full-Stack Mobile & Web Developer and AI Engineer who builds intelligent, scalable applications using Flutter, Node.js, React, Python, and cloud technologies. I thrive on solving complex challenges from real-time mobile apps and scalable backend systems to machine learning models combining AI, data engineering, and cloud-native architecture to deliver efficient, impactful solutions from concept to production.
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
