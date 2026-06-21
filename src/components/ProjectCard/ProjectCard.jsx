import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { projectImageHover } from '../../animations/animations';

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongDescription = project.description.length > 100;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111827] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent dark:border-borderSoft hover:-translate-y-1 dark:hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.1)] flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden flex-shrink-0">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${['Transigo', 'Kwitely', 'Kwitely Service', 'Trendify', 'Blood Donation', 'Foodu', 'Barber Shop', 'PowerStack'].includes(project.title) ? 'object-contain p-1' : 'object-cover'}`}
                    variants={projectImageHover}
                    whileHover="hover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-black hover:text-accentCyan"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ExternalLink size={20} />
                    </motion.a>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>

                <div className="mb-4 flex-grow">
                    <p className={`text-gray-300 text-sm transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {project.description}
                    </p>
                    {isLongDescription && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-blue-500 hover:text-blue-600 dark:text-accentCyan dark:hover:text-accentCyan/80 text-xs font-medium mt-1 hover:underline flex items-center gap-1"
                        >
                            {isExpanded ? (
                                <>See Less <ChevronUp size={12} /></>
                            ) : (
                                <>See More <ChevronDown size={12} /></>
                            )}
                        </button>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-[#1a1f2e] border border-transparent dark:border-borderSoft text-xs font-medium rounded-full text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                    {project.link && (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-accentCyan dark:hover:text-accentCyan/80"
                            initial="rest"
                            whileHover="hover"
                        >
                            {project.link.includes('github.com') ? (
                                <>
                                    <Github size={18} />
                                    GitHub
                                </>
                            ) : (
                                <>
                                    <Globe size={18} />
                                    Website
                                </>
                            )}
                        </motion.a>
                    )}
                    {project.playStore && (
                        <motion.a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-accentCyan dark:hover:text-accentCyan/80"
                            initial="rest"
                            whileHover="hover"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="flex-shrink-0"
                            >
                                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                            </svg>
                            Play Store
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
