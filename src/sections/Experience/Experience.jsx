import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { fadeUp } from '../../animations/animations';

const experienceData = [
    {
        id: 1,
        category: 'education',
        degree: 'Master\'s in Data Engineering',
        institution: 'University of Ferhat Abbas Setif-1',
        period: 'Expected 2025',
        details: 'Specialization in Web Technologies, Machine Learning, and AI Systems.'
    },
    {
        id: 2,
        category: 'experience',
        role: 'Freelance Software Developer',
        company: 'Remote',
        location: 'Setif, Algeria',
        period: 'Present',
        description: 'Architecting and developing high-performance full-stack applications. Specializing in scalable mobile and web solutions using modern technologies.',
        achievements: [
            'Designed RESTful APIs & real-time systems (Firebase)',
            'Built ML-powered logistics & booking engines',
            'Deployed scalable admin dashboards & payment systems',
            'Delivered AI-driven solutions for international clients'
        ]
    },
    {
        id: 3,
        category: 'education',
        degree: 'Bachelor\'s in Information Systems',
        institution: 'University of Ferhat Abbas Setif-1',
        period: '2020 – 2023',
        details: 'Foundation in Software Engineering, Databases, and Computer Networks.'
    },
    {
        id: 4,
        category: 'experience',
        role: 'IT & Tech Services Provider',
        company: 'Self-employed',
        location: 'Setif, Algeria',
        period: 'Sept 2020 – Aug 2021',
        description: 'Provided comprehensive IT support and infrastructure management for educational and business sectors.',
        achievements: [
            'Network configuration & system maintenance',
            'Educational IT tool deployment & support',
            'Hardware/Software troubleshooting'
        ]
    }
];

const Card = ({ item, index }) => {
    const isEven = index % 2 === 0;
    const isEducation = item.category === 'education';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-20 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Timeline Node (Desktop) */}
            <div className="absolute left-0 md:left-1/2 top-0 w-px h-full md:-translate-x-1/2 flex flex-col items-center pointer-events-none">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 + (index * 0.1) }}
                    className="w-4 h-4 rounded-full bg-[#0F1115] border-2 border-accentCyan shadow-[0_0_15px_rgba(0,240,255,0.5)] z-10 mt-8"
                />
            </div>

            {/* Date & Label (Desktop Side) */}
            <div className={`hidden md:flex flex-col w-1/2 pt-8 ${isEven ? 'items-start text-left pl-16' : 'items-end text-right pr-16'}`}>
                <span className="text-accentCyan font-mono text-sm tracking-wider mb-2 flex items-center gap-2">
                    <Calendar size={14} />
                    {item.period}
                </span>
                <h4 className="text-gray-400 font-medium flex items-center gap-2 text-sm">
                    {isEducation ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                    {isEducation ? item.institution : item.company}
                </h4>
            </div>

            {/* Content Card */}
            <div className={`md:w-1/2 relative ${isEven ? 'pr-0' : 'pl-0'}`}>
                <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative bg-[#111827] border border-gray-800 rounded-2xl p-6 md:p-8 overflow-hidden hover:border-accentCyan/50 transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.1)]"
                >
                    {/* Hover Gradient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accentCyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Mobile Header */}
                    <div className="md:hidden mb-4 border-b border-gray-800 pb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-accentCyan font-mono text-xs">{item.period}</span>
                            <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                                {isEducation ? <GraduationCap size={12} /> : <Briefcase size={12} />}
                                <span>{isEducation ? item.institution : item.company}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start gap-4 mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accentCyan transition-colors duration-300 leading-tight">
                                {isEducation ? item.degree : item.role}
                            </h3>
                            {item.location && (
                                <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full whitespace-nowrap">
                                    <MapPin size={12} />
                                    {item.location}
                                </div>
                            )}
                        </div>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                            {item.description || item.details}
                        </p>

                        {item.achievements && (
                            <ul className="space-y-3 mb-6">
                                {item.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400/90">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accentCyan/60 shrink-0" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="py-20 relative overflow-hidden bg-[#0F1115]" ref={containerRef}>
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-bold mb-2"
                    >
                        Experience & Education
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-600 dark:text-darkTextMuted"
                    >
                        Professional Journey
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Central Timeline Track */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2" />

                    {/* Animated Progress Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accentCyan via-blue-500 to-transparent md:-translate-x-1/2 origin-top shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    />

                    <div className="space-y-4">
                        {experienceData.map((item, index) => (
                            <Card key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
