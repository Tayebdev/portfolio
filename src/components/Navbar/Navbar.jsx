import React, { useState, useEffect } from 'react';
import { Menu, Home, User, Briefcase, Cpu, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import MenuDrawer from './MenuDrawer';
import { navUnderlineGrow } from '../../animations/animations';

const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
];

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#0F1115]/95 backdrop-blur-md shadow-lg py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center max-w-[1400px]">
                    <a href="#" className="font-bold tracking-tight text-white z-50 relative whitespace-nowrap text-xl sm-desktop:text-2xl">
                        Boulekzazel Tayeb
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-blue-500 relative group ${activeSection === link.href.substring(1)
                                    ? 'text-white'
                                    : 'text-gray-400'
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
                            className="px-5 py-2 rounded-full border border-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-sm font-medium text-gray-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4 z-50 relative">
                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Component */}
            <MenuDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Navbar;
