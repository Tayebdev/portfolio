import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
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
                    className={`w-full h-full ${['Transigo', 'Trendify', 'Blood Donation', 'Foodu', 'Barber Shop', 'PowerStack'].includes(project.title) ? 'object-contain p-1' : 'object-cover'}`}
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

                {project.title === 'Transigo' ? (
                    <div className="mt-auto">
                        <p className="text-xs text-gray-400 italic">

                        </p>
                    </div>
                ) : (
                    <motion.a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-accentCyan dark:hover:text-accentCyan/80 mt-auto"
                        initial="rest"
                        whileHover="hover"
                    >
                        <Github size={18} />
                        GitHub
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
