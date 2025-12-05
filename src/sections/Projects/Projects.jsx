import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { fadeUp } from '../../animations/animations';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(6);

    return (
        <section id="projects" className="py-20 bg-[#0F1115]">
            <div className="container mx-auto px-4 max-w-6xl lg-desktop:max-w-7xl">
                <div className="text-center mb-12">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-bold mb-2 dark:text-darkText"
                    >
                        Projects
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-blue-500 font-medium"
                    >
                        Selected Work
                    </motion.p>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg-desktop:grid-cols-3 gap-6 sm-desktop:gap-8"
                >
                    <AnimatePresence>
                        {projects.slice(0, visibleProjects).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {projects.length > visibleProjects && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setVisibleProjects(prev => prev + 6)}
                            className="px-8 py-3 rounded-full border border-gray-300 dark:border-borderSoft hover:bg-gray-100 dark:hover:bg-darkCard transition-all text-sm font-medium dark:text-darkText"
                        >
                            View All
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
