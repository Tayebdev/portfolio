import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Cpu, FolderGit2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navUnderlineGrow, drawerSpring, itemSlideIn, staggerChildren, fadeIn, shimmer, iconPop } from '../../animations/animations';

const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.substring(1)).filter(id => id);
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0F1115]/95 backdrop-blur-md shadow-lg py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center max-w-[1200px]">
                <a href="#" className="text-2xl font-bold font-display tracking-tighter text-primaryText dark:text-darkText z-50 relative">
                    Boulekzazel Tayeb
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className={`text-sm font-medium transition-colors hover:text-blue-500 relative group ${activeSection === link.href.substring(1)
                                ? 'text-gray-900 dark:text-white'
                                : 'text-gray-600 dark:text-gray-300'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.span
                                    variants={navUnderlineGrow}
                                    initial="hidden"
                                    animate="visible"
                                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                />
                            )}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-transparent hover:text-blue-500 hover:border-blue-500 transition-all text-sm font-medium dark:text-darkText"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4 z-50 relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-600 dark:text-darkTextMuted focus:outline-none hover:text-blue-500 transition-colors"
                    >
                        {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            variants={drawerSpring}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-[#0F1115] via-[#1a1d23] to-[#1a1d23]/90 z-50 md:hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-2xl border-l border-white/10 rounded-l-3xl flex flex-col overflow-hidden"
                        >
                            {/* Cinematic Purple Tint Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 pointer-events-none"></div>

                            {/* Micro-Grid Tech Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-30"></div>

                            {/* Floating Ambient Glow */}
                            <motion.div
                                animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
                            />

                            {/* Drawer Header */}
                            <div className="relative p-8 pt-12 z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xl font-bold text-white tracking-tight">Boulekzazel Tayeb</h3>
                                            <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] animate-pulse"></div>
                                        </div>
                                        <motion.p
                                            variants={shimmer}
                                            initial="initial"
                                            animate="animate"
                                            className="text-sm font-medium mt-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                                        >
                                            Full Stack Developer
                                        </motion.p>
                                    </div>
                                    <motion.button
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ rotate: 180, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    >
                                        <X size={20} />
                                    </motion.button>
                                </div>
                                {/* Gradient Separator */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                            </div>

                            {/* Menu Items */}
                            <motion.div
                                variants={staggerChildren}
                                initial="hidden"
                                animate="visible"
                                className="flex-1 px-6 flex flex-col gap-3 overflow-y-auto z-10"
                            >
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        variants={itemSlideIn}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-4 p-3 rounded-xl transition-all group relative overflow-hidden ${activeSection === link.href.substring(1)
                                            ? 'bg-white/5'
                                            : 'hover:bg-white/5'
                                            }`}
                                    >
                                        {/* Hover Slide-in Underline */}
                                        <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>

                                        <motion.span
                                            variants={iconPop}
                                            initial="rest"
                                            whileHover="hover"
                                            className={`p-2 rounded-lg transition-colors ${activeSection === link.href.substring(1) ? 'text-blue-400 bg-blue-500/10' : 'text-gray-400 bg-white/5 group-hover:text-blue-400 group-hover:bg-blue-500/10'}`}
                                        >
                                            <link.icon size={18} />
                                        </motion.span>
                                        <span className={`font-medium text-lg transition-colors ${activeSection === link.href.substring(1) ? 'text-white' : 'text-white group-hover:text-white'}`}>
                                            {link.name}
                                        </span>

                                        {/* Active/Hover Glow */}
                                        {(activeSection === link.href.substring(1)) && (
                                            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                                        )}
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Drawer Footer */}
                            <div className="p-8 border-t border-white/5 z-10">
                                <motion.a
                                    href="#contact"
                                    variants={itemSlideIn}
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-lg shadow-blue-500/20 transition-all"
                                >
                                    <Mail size={18} />
                                    Contact Me
                                </motion.a>
                                <p className="text-xs text-gray-600 text-center mt-6 tracking-wide">© 2025 Boulekzazel Tayeb</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
