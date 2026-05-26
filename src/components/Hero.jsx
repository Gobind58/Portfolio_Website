import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 20 },
    animate:    { opacity: 1, y: 0  },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero({ isDark }) {
    const textColor  = isDark ? 'text-white'     : 'text-black';
    const mutedColor = isDark ? 'text-white/45'  : 'text-black/45';
    const bodyColor  = isDark ? 'text-white/60'  : 'text-black/60';

    const socialLinks = [
        { icon: FiGithub,   href: 'https://github.com/Gobind58',   label: 'GitHub'   },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/gobind-kumar-rai-b7674a323/', label: 'LinkedIn' },
        { icon: FiTwitter,  href: 'https://x.com/GobindKumar5283', label: 'Twitter'  },
        { icon: FiMail,     href: 'mailto:raigobindkumar@gmail.com', label: 'Email'  },
    ];

    return (
        <section
            id="home"
            className="relative flex items-center justify-center overflow-hidden"
            style={{ minHeight: '100svh', paddingTop: '5rem', paddingBottom: '4rem' }}
        >
            {/* Ambient glow blob — decorative */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
                <div className={`w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] ${
                    isDark ? 'bg-white' : 'bg-black'
                }`} />
            </div>

            <div className="container z-10 flex flex-col items-center text-center">

                {/* Status badge */}
                <motion.div {...fadeUp(0)}>
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border mb-8 ${
                        isDark
                            ? 'bg-white/[0.05] border-white/10 text-white/60'
                            : 'bg-black/[0.04] border-black/10 text-black/60'
                    }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className={`text-hero font-extrabold tracking-tighter ${textColor} mb-4 leading-[0.95]`}
                >
                    Gobind{' '}
                    <span className={isDark
                        ? 'bg-gradient-to-br from-white via-white/70 to-white/25 bg-clip-text text-transparent'
                        : 'bg-gradient-to-br from-black via-black/70 to-black/25 bg-clip-text text-transparent'
                    }>
                        Kumar Rai
                    </span>
                </motion.h1>

                {/* Typing subtitle */}
                <motion.div
                    {...fadeUp(0.2)}
                    className={`text-lg sm:text-xl md:text-2xl font-medium ${mutedColor} mb-5 flex items-center justify-center min-h-[2rem]`}
                >
                    <TypeAnimation
                        sequence={[
                            'Computer Science Student', 2200,
                            'Full Stack Developer',     2200,
                            'UI/UX Designer',           2200,
                            'Open Source Contributor',  2200,
                        ]}
                        wrapper="span"
                        speed={55}
                        deletionSpeed={70}
                        repeat={Infinity}
                        className="inline-block"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    {...fadeUp(0.3)}
                    className={`${bodyColor} text-base md:text-lg max-w-lg mx-auto mb-10 leading-[1.8] font-light`}
                >
                    Passionate about crafting elegant, high-performance digital experiences.
                    Building the future one clean line of code at a time.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    {...fadeUp(0.4)}
                    className="flex flex-col sm:flex-row flex-wrap gap-3 items-center justify-center mb-10 w-full"
                >
                    <motion.a
                        href="#projects"
                        className={`h-12 px-8 rounded-full font-semibold text-[0.8125rem] flex items-center justify-center gap-2.5 transition-all duration-300 w-full sm:w-auto tracking-wide group ${
                            isDark
                                ? 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]'
                                : 'bg-black text-white hover:bg-black/90 hover:shadow-[0_0_40px_rgba(0,0,0,0.18)]'
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View My Work
                        <HiArrowDown className="group-hover:translate-y-0.5 transition-transform duration-300" size={15} />
                    </motion.a>

                    <motion.a
                        href="mailto:raigobindkumar@gmail.com"
                        className={`h-12 px-8 rounded-full font-semibold text-[0.8125rem] flex items-center justify-center gap-2.5 border transition-all duration-300 w-full sm:w-auto tracking-wide ${
                            isDark
                                ? 'border-white/12 text-white/80 hover:bg-white/[0.06] hover:border-white/20 hover:text-white'
                                : 'border-black/12 text-black/70 hover:bg-black/[0.05] hover:border-black/20 hover:text-black'
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                {/* Divider */}
                <motion.div
                    {...fadeUp(0.5)}
                    className={`w-px h-6 mb-5 ${isDark ? 'bg-white/15' : 'bg-black/15'}`}
                />

                {/* Social Links */}
                <motion.div
                    {...fadeUp(0.55)}
                    className="flex justify-center items-center gap-2"
                >
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${
                                isDark
                                    ? 'bg-white/[0.04] border-white/10 text-white/50 hover:bg-white/[0.09] hover:border-white/20 hover:text-white'
                                    : 'bg-black/[0.03] border-black/10 text-black/50 hover:bg-black/[0.07] hover:border-black/20 hover:text-black'
                            }`}
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.92 }}
                            aria-label={label}
                        >
                            <Icon size={17} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase ${isDark ? 'text-white/25' : 'text-black/25'}`}>
                    scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`w-[1px] h-10 ${isDark ? 'bg-gradient-to-b from-white/30 to-transparent' : 'bg-gradient-to-b from-black/30 to-transparent'}`}
                />
            </motion.div>
        </section>
    );
}
