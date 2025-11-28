export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

export const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

export const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const heroImageFloat = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const navUnderlineGrow = {
    hidden: { width: 0 },
    visible: {
        width: "100%",
        transition: { duration: 0.3 }
    }
};

export const themeToggleRotate = {
    initial: { rotate: 0 },
    animate: (isDark) => ({
        rotate: isDark ? 180 : 0,
        transition: { duration: 0.5, type: "spring" }
    })
};

export const serviceCardHover = {
    hover: {
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
    }
};

export const projectImageHover = {
    hover: {
        scale: 1.1,
        transition: { duration: 0.5 }
    }
};

export const projectArrowSlide = {
    rest: { x: 0 },
    hover: {
        x: 5,
        transition: { duration: 0.3 }
    }
};

export const inputFocusGlow = {
    focus: {
        boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
        transition: { duration: 0.2 }
    }
};

export const socialIconHover = {
    hover: {
        y: -5,
        color: "#3B82F6",
        transition: { duration: 0.3 }
    }
};

export const drawerSpring = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: { type: "spring", damping: 20, stiffness: 300 }
    },
    exit: {
        x: "100%",
        transition: { type: "spring", damping: 20, stiffness: 300 }
    }
};

export const shimmer = {
    initial: { backgroundPosition: "0 0" },
    animate: {
        backgroundPosition: "-200% 0",
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: "linear"
        }
    }
};

export const itemSlideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 }
    }
};

export const iconPop = {
    rest: { scale: 1 },
    hover: {
        scale: 1.2,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    }
};

export const wordContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const wordSlideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100
        }
    }
};

export const glowText = {
    initial: { textShadow: "0 0 0px rgba(59, 130, 246, 0)" },
    animate: {
        textShadow: [
            "0 0 0px rgba(59, 130, 246, 0)",
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 0px rgba(59, 130, 246, 0)"
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
