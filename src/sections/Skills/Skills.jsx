import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { fadeUp, staggerChildren } from '../../animations/animations';

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-bold mb-2"
                    >
                        Skills, Tools & Technologies
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-blue-500 font-medium"
                    >
                        The skills, tools and technologies I am really good at
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                            <motion.div
                                key={skill.id}
                                variants={fadeUp}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center gap-3 group cursor-pointer"
                            >
                                <motion.div
                                    className="transition-shadow duration-300 rounded-lg p-4 bg-[#111827] group-hover:shadow-xl border border-transparent dark:border-borderSoft"
                                    whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                                >
                                    <IconComponent
                                        className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300"
                                        style={{ color: skill.color }}
                                    />
                                </motion.div>
                                <span className="text-sm md:text-base font-medium text-white text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
