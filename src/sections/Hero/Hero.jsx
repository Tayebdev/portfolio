import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook } from 'lucide-react';
import { staggerChildren, fadeUp, wordContainer, wordSlideUp, glowText } from '../../animations/animations';

const Hero = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/Tayebdev', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/tayeb-boulekzazel-23288a26b/', label: 'LinkedIn' },
        { icon: Facebook, href: 'https://www.facebook.com/ta.yeb.209541', label: 'Facebook' },
    ];

    // Floating animation for profile image
    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-start px-4 py-20 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
            </div>

            {/* Bottom Shadow Gradient for smooth transition to About section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/5 dark:to-black/20 pointer-events-none z-10"></div>

            <div className="container mx-auto max-w-[1400px] z-10">
                {/* Responsive Grid: Stacks on mobile, Side-by-side on sm-desktop (1024px+) */}
                {/* Reduced gap from gap-40 to gap-12/20 to prevent overlap on small desktops */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg-desktop:gap-24 2xl-desktop:gap-40 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        variants={staggerChildren}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 text-left order-2 lg:order-1"
                    >
                        {/* Title - Animated Heading - VERTICAL STACK */}
                        <motion.h1
                            variants={wordContainer}
                            initial="hidden"
                            animate="visible"
                            className="font-bold text-white leading-tight flex flex-col gap-2"
                        >
                            {/* Line 1: "Hi, I'm" - Single line */}
                            <div className="whitespace-nowrap text-4xl lg:text-5xl lg-desktop:text-6xl xl-desktop:text-7xl">
                                {["Hi,", "I'm"].map((word, i) => (
                                    <motion.span key={i} variants={wordSlideUp} className="inline-block mr-3">
                                        {word}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Line 2: Name - Stacked BELOW "Hi, I'm" */}
                            <motion.div
                                variants={wordSlideUp}
                                className="text-blue-500 relative whitespace-nowrap text-4xl lg:text-5xl lg-desktop:text-6xl xl-desktop:text-7xl"
                            >
                                <motion.span
                                    variants={glowText}
                                    initial="initial"
                                    animate="animate"
                                >
                                    Boulekzazel Tayeb
                                </motion.span>
                            </motion.div>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.div
                            variants={fadeUp}
                            className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-darkTextMuted flex items-center justify-start gap-2"
                        >
                            Full stack developer
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="text-lg text-gray-600 dark:text-darkTextMuted leading-relaxed max-w-xl"
                        >
                            I'm a Full-Stack Mobile & Web Developer, specialized in building real-world, scalable digital solutions.
                            I'm also an AI & Machine Learning Engineer, focused on intelligent systems for logistics optimization, recommendation engines, and smart booking platforms.
                        </motion.p>

                        {/* Contact Button & Social Icons */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-wrap items-center gap-6 pt-4 justify-start"
                        >
                            {/* Contact Button */}
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium transition-all shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40"
                            >
                                Contact Me
                            </motion.a>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.15, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Circular Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
                    >
                        {/* Floating Image Container */}
                        <motion.div
                            animate={floatingAnimation}
                            className="relative"
                        >
                            {/* Soft Subtle Shadow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/15 to-gray-300/15 dark:from-blue-500/5 dark:to-blue-500/5 rounded-full blur-2xl"></div>

                            {/* Circular Image - Fluid Sizing */}
                            {/* 1024px: w-[320px], 1280px: w-[380px], 1440px: w-[440px] */}
                            {/* Using clamp() to ensure it never gets too small or too big */}
                            <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-[clamp(300px,30vw,480px)] lg:h-[clamp(300px,30vw,480px)] rounded-full overflow-hidden shadow-lg border-4 border-white/5">
                                <img
                                    src="/profile.jpg"
                                    alt="Boulekzazel Tayeb"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
