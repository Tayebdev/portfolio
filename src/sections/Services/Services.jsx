
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeUp, staggerChildren } from '../../animations/animations';

const services = [
    {
        id: 1,
        icon: Code,
        title: 'Web Development',
        description: 'Architecting fast, scalable, and secure web applications using modern frameworks and best practices.',
        features: ['Full-Stack Solutions', 'High-Performance APIs', 'SEO Optimized', 'Cloud Deployment']
    },
    {
        id: 2,
        icon: Smartphone,
        title: 'Mobile Development',
        description: 'Building intuitive, cross-platform mobile experiences that feel native and perform flawlessly.',
        features: ['iOS & Android', 'Flutter & React Native', 'Smooth Animations', 'Offline Capabilities']
    },
    {
        id: 3,
        icon: Brain,
        title: 'Machine Learning & AI',
        description: 'Developing intelligent systems that leverage data to automate processes and provide actionable insights.',
        features: ['Predictive Modeling', 'NLP & Computer Vision', 'Data Pipelines', 'AI Integration']
    },
    {
        id: 4,
        icon: Palette,
        title: 'UI / UX Design',
        description: 'Crafting pixel-perfect, user-centric interfaces that blend aesthetics with seamless functionality.',
        features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Interactive High-Fidelity']
    }
];

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-8 rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)]"
        >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <div className="relative z-10 mb-6 inline-flex p-4 rounded-2xl bg-[#0F1115] border border-gray-800 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500">
                <service.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-500 group-hover:text-gray-400 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-blue-500/60" />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Learn More Link (Visual only for now) */}
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-20 relative overflow-hidden bg-[#0F1115]">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/5 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Section Header - PRESERVED EXACTLY AS REQUESTED */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-bold mb-2 text-white"
                    >
                        What I Do
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-blue-500 font-medium"
                    >
                        Services I Offer
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
