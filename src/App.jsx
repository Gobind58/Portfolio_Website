import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <div className={`relative min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#030303]' : 'bg-[#fafafa]'}`}>
            <CustomCursor />
            <ParticleBackground isDark={isDark} />

            <AnimatePresence mode="wait">
                {isLoading ? (
                    <Loader key="loader" />
                ) : (
                    <motion.div
                        key="app"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
                        <main className="w-full max-w-full relative">
                            <Hero isDark={isDark} />
                            <About isDark={isDark} />
                            <Skills isDark={isDark} />
                            <Projects isDark={isDark} />
                            <Experience isDark={isDark} />
                            <Contact isDark={isDark} />
                        </main>
                        <Footer isDark={isDark} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ── Premium Loading Screen ─────────────────────────────── */
function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            {/* Outer ring */}
            <div className="relative w-20 h-20">
                <motion.div
                    className="absolute inset-0 rounded-full border border-white/10"
                />
                <motion.div
                    className="absolute inset-0 rounded-full border-t-2 border-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                />
                {/* Inner pulse */}
                <motion.div
                    className="absolute inset-3 rounded-full bg-white/5"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Logo text */}
            <motion.p
                className="mt-6 text-sm font-semibold tracking-[0.25em] uppercase text-white/40"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                GKR
            </motion.p>
        </motion.div>
    );
}

export default App;
