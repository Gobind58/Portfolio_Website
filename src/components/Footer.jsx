import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const socialLinks = [
    { icon: FiGithub,   href: 'https://github.com/Gobind58',  label: 'GitHub'   },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/gobind-kumar-rai-b7674a323/', label: 'LinkedIn' },
    { icon: FiTwitter,  href: 'https://x.com/GobindKumar5283', label: 'Twitter'  },
];

const navLinks = [
    { name: 'About',      href: '#about'      },
    { name: 'Projects',   href: '#projects'   },
    { name: 'Contact',    href: '#contact'    },
];

export default function Footer({ isDark }) {
    const textColor  = isDark ? 'text-white'    : 'text-black';
    const mutedColor = isDark ? 'text-white/30' : 'text-black/30';
    const hoverColor = isDark ? 'hover:text-white' : 'hover:text-black';
    const divider    = isDark ? 'border-white/[0.07]' : 'border-black/[0.07]';
    const dotColor   = isDark ? 'text-white/20'  : 'text-black/20';

    return (
        <footer className={`border-t ${divider} py-10`}>
            <div className="container">

                {/* Top row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    {/* Logo + tagline */}
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <motion.a
                            href="#home"
                            className={`text-xl font-bold tracking-tight ${textColor}`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            GKR<span className={dotColor}>.</span>
                        </motion.a>
                        <p className={`text-xs ${mutedColor} font-medium`}>
                            Building experiences that matter
                        </p>
                    </div>

                    {/* Quick nav */}
                    <nav className="flex items-center gap-6" aria-label="Footer navigation">
                        {navLinks.map(({ name, href }) => (
                            <a
                                key={name}
                                href={href}
                                className={`text-xs font-medium ${mutedColor} ${hoverColor} transition-colors duration-200`}
                            >
                                {name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-9 h-9 flex items-center justify-center rounded-xl ${mutedColor} ${hoverColor} transition-colors duration-200`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.92 }}
                                aria-label={label}
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom divider + copyright */}
                <div className={`pt-6 border-t ${divider} flex flex-col sm:flex-row items-center justify-between gap-3`}>
                    <p className={`text-[11px] ${mutedColor} flex items-center gap-1.5`}>
                        Crafted with{' '}
                        <FiHeart className="text-rose-400/70 fill-rose-400/20" size={11} />{' '}
                        by Gobind Kumar Rai
                    </p>
                    <p className={`text-[11px] ${mutedColor}`}>
                        © {new Date().getFullYear()} · All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
