import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX, HiSun, HiMoon } from 'react-icons/hi';

const navLinks = [
    { name: 'Home',       href: '#home'       },
    { name: 'About',      href: '#about'      },
    { name: 'Skills',     href: '#skills'     },
    { name: 'Projects',   href: '#projects'   },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact',    href: '#contact'    },
];

export default function Navbar({ isDark, toggleTheme }) {
    const [isOpen,         setIsOpen]         = useState(false);
    const [scrolled,       setScrolled]       = useState(false);
    const [activeSection,  setActiveSection]  = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollPos = window.scrollY + 100;
            const sections = navLinks
                .map(({ href }) => {
                    const el = document.querySelector(href);
                    return el ? { id: href.slice(1), top: el.offsetTop, height: el.offsetHeight } : null;
                })
                .filter(Boolean);

            for (let i = sections.length - 1; i >= 0; i--) {
                const { id, top, height } = sections[i];
                if (scrollPos >= top && scrollPos < top + height) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close drawer on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const textColor    = isDark ? 'text-white'      : 'text-black';
    const mutedText    = isDark ? 'text-white/40'   : 'text-black/40';
    const dotColor     = isDark ? 'text-white/30'   : 'text-black/30';
    const scrolledBg   = isDark
        ? 'bg-black/70 border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.6)]'
        : 'bg-white/80 border-b border-black/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.05)]';

    const btnClass = isDark
        ? 'bg-white/[0.06] border-white/10 text-white hover:bg-white/[0.1] hover:border-white/20'
        : 'bg-black/[0.05] border-black/10 text-black hover:bg-black/[0.08] hover:border-black/20';

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
                scrolled
                    ? `${scrolledBg} backdrop-blur-2xl h-16`
                    : 'bg-transparent h-20'
            }`}
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className={`text-xl font-bold tracking-tight ${textColor} flex items-center select-none`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        GKR<span className={dotColor}>.</span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-3 py-2 text-[0.8125rem] font-medium rounded-lg transition-colors duration-200 ${
                                        isActive
                                            ? textColor
                                            : isDark
                                                ? 'text-white/50 hover:text-white/90'
                                                : 'text-black/50 hover:text-black/90'
                                    }`}
                                    initial={{ opacity: 0, y: -12 }}
                                    animate={{ opacity: 1,  y: 0  }}
                                    transition={{ delay: i * 0.04, duration: 0.4 }}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className={`absolute inset-0 rounded-lg -z-10 ${isDark ? 'bg-white/[0.07]' : 'bg-black/[0.05]'}`}
                                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                        />
                                    )}
                                </motion.a>
                            );
                        })}

                        {/* Divider */}
                        <div className={`w-px h-4 mx-2 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg border transition-all duration-300 ${btnClass}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={isDark ? 'sun' : 'moon'}
                                    initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
                                    animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                                    exit={{    rotate:  30, opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isDark ? <HiSun size={17} /> : <HiMoon size={17} />}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-2">
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg border transition-all duration-300 ${btnClass}`}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <HiSun size={17} /> : <HiMoon size={17} />}
                        </motion.button>

                        <motion.button
                            onClick={() => setIsOpen((v) => !v)}
                            className={`p-2 rounded-lg border transition-all duration-300 ${btnClass}`}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={isOpen ? 'close' : 'open'}
                                    initial={{ rotate: -30, opacity: 0 }}
                                    animate={{ rotate: 0,   opacity: 1 }}
                                    exit={{    rotate:  30, opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    {isOpen ? <HiX size={20} /> : <HiMenuAlt4 size={20} />}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer Panel */}
                        <motion.aside
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                            className={`fixed right-0 top-0 bottom-0 w-72 max-w-[82vw] z-50 flex flex-col md:hidden ${
                                isDark
                                    ? 'bg-[#0a0a0a]/98 border-l border-white/[0.07]'
                                    : 'bg-white/98 border-l border-black/[0.07]'
                            } backdrop-blur-2xl shadow-2xl`}
                        >
                            {/* Drawer Header */}
                            <div className={`flex items-center justify-between px-7 pt-6 pb-5 border-b ${isDark ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
                                <span className={`text-lg font-bold ${textColor}`}>
                                    GKR<span className={dotColor}>.</span>
                                </span>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className={`p-1.5 rounded-lg ${isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'} transition-colors`}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Close menu"
                                >
                                    <HiX size={20} />
                                </motion.button>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                                {navLinks.map((link, i) => {
                                    const isActive = activeSection === link.href.slice(1);
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                                isActive
                                                    ? `${textColor} ${isDark ? 'bg-white/[0.08]' : 'bg-black/[0.06]'}`
                                                    : isDark
                                                        ? 'text-white/50 hover:text-white hover:bg-white/[0.05]'
                                                        : 'text-black/50 hover:text-black hover:bg-black/[0.04]'
                                            }`}
                                            initial={{ opacity: 0, x: 16 }}
                                            animate={{ opacity: 1, x: 0  }}
                                            transition={{ delay: i * 0.04, duration: 0.25 }}
                                        >
                                            {isActive && (
                                                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
                                            )}
                                            {link.name}
                                        </motion.a>
                                    );
                                })}
                            </nav>

                            {/* Drawer Footer */}
                            <div className={`px-7 py-5 border-t ${isDark ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
                                <p className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-white/25' : 'text-black/25'}`}>
                                    © {new Date().getFullYear()} Gobind Kumar Rai
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
