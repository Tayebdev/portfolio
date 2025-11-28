import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { themeToggleRotate } from '../../animations/animations';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
        >
            <motion.div
                variants={themeToggleRotate}
                initial="initial"
                animate="animate"
                custom={theme === 'dark'}
            >
                {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
