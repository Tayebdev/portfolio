import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Github, Linkedin, Facebook, Check, MapPin } from 'lucide-react';
import { fadeUp } from '../../animations/animations';

const Contact = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Tayebdev', label: 'GitHub' },
        { icon: Facebook, href: 'https://www.facebook.com/ta.yeb.209541', label: 'Facebook' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/tayeb-boulekzazel-23288a26b/', label: 'LinkedIn' },
    ];

    return (
        <section id="contact" className="py-20 bg-[#0F1115] text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="space-y-12"
                >
                    {/* Header Text */}
                    <div className="text-center mb-12">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-bold mb-2 text-white"
                        >
                            Get In Touch
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-blue-500 font-medium"
                        >
                            What's next?
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4"
                        >
                            Feel free to reach out to me if you're looking for a
                            developer, have a query, or simply want to connect.
                        </motion.p>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        {/* Email */}
                        <div className="flex items-center gap-4 group">
                            <Mail className="w-6 h-6 text-white" />
                            <span className="text-xl md:text-2xl font-bold text-white">ttayeb769@gmail.com</span>
                            <button
                                onClick={() => handleCopy('ttayeb769@gmail.com', 'email')}
                                className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative"
                                aria-label="Copy email"
                            >
                                {copied === 'email' ? (
                                    <Check className="w-5 h-5 text-green-500" />
                                ) : (
                                    <Copy className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                )}
                            </button>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 group">
                            <Phone className="w-6 h-6 text-white" />
                            <span className="text-xl md:text-2xl font-bold text-white">+213 777 34 22 52</span>
                            <button
                                onClick={() => handleCopy('+213 777 34 22 52', 'phone')}
                                className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative"
                                aria-label="Copy phone number"
                            >
                                {copied === 'phone' ? (
                                    <Check className="w-5 h-5 text-green-500" />
                                ) : (
                                    <Copy className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Location and Availability */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        {/* Location */}
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-300">Sétif, Algeria</span>
                        </div>

                        {/* Availability Status */}
                        <div className="flex items-center gap-3">
                            <div className="relative flex items-center">
                                <span className="flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            </div>
                            <span className="text-gray-300">Available for new projects</span>
                        </div>
                    </div>

                    {/* Social Platforms */}
                    <div className="space-y-6">
                        <p className="text-gray-400">You may also find me on these platforms!</p>
                        <div className="flex justify-center gap-6">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-12 text-sm text-gray-500">
                        © {new Date().getFullYear()} | Designed and coded with <span className="text-red-500"></span> by Boulekzazel Tayeb
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
