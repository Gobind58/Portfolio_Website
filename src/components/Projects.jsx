import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Medicare Bot',
        description: 'A 24/7 health assistant for Assam that provides instant first-aid tips, hospital location mapping, and tele-consultation booking. Fully supports English and Assamese.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
        tags: ['Python', 'Telegram API', 'NLP', 'SQLite'],
        github: 'https://github.com/Gobind58/Medicare-Bot',
        demo:   'https://github.com/Gobind58/Medicare-Bot#demo',
    },
    {
        title: 'Fingerprint Voting System',
        description: 'A secure biometric voting platform designed to enhance election integrity. Combines fingerprint authentication with secure database transaction logging.',
        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=500&fit=crop',
        tags: ['Python', 'Biometrics', 'Tkinter', 'MySQL'],
        github: 'https://github.com/Gobind58/Fingerprint-Voting-System',
        demo:   'https://github.com/Gobind58/Fingerprint-Voting-System#setup',
    },
    {
        title: 'Weather Forecast App',
        description: 'A sleek, dynamic weather application that fetches and displays real-time weather forecasts, wind speeds, and atmospheric metrics globally.',
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
        github: 'https://github.com/Gobind58/Weather-App',
        demo:   'https://github.com/Gobind58/Weather-App',
    },
    {
        title: 'Advanced Java Assignments',
        description: 'A comprehensive collection of object-oriented programs, algorithmic solutions, and advanced code assignments developed in Java.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
        tags: ['Java', 'Algorithms', 'Data Structures', 'OOP'],
        github: 'https://github.com/Gobind58/Coding-class-Ravi-Sir-',
        demo:   'https://github.com/Gobind58/Coding-class-Ravi-Sir-#readme',
    },
];

export default function Projects({ isDark }) {
    const [ref, inView] = useInView({ threshold: 0.06, triggerOnce: true });

    const textColor  = isDark ? 'text-white'    : 'text-black';
    const mutedColor = isDark ? 'text-white/45' : 'text-black/45';
    const bodyColor  = isDark ? 'text-white/60' : 'text-black/60';
    const cardBg     = isDark
        ? 'bg-white/[0.04] border-white/[0.08]'
        : 'bg-black/[0.03] border-black/[0.08]';
    const cardHover  = isDark
        ? 'hover:border-white/[0.16] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]'
        : 'hover:border-black/[0.16] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]';
    const tagBg      = isDark
        ? 'bg-white/[0.06] border-white/[0.09] text-white/60'
        : 'bg-black/[0.05] border-black/[0.09] text-black/60';
    const divider    = isDark ? 'border-white/[0.06]' : 'border-black/[0.06]';
    const linkColor  = isDark
        ? `${mutedColor} hover:text-white`
        : `${mutedColor} hover:text-black`;

    return (
        <section id="projects" className="section-py" ref={ref}>
            <div className="container">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="section-header"
                >
                    <span className={`section-eyebrow ${mutedColor}`}>My recent work</span>
                    <h2 className={`text-section-title font-bold ${textColor}`}>Featured Projects</h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 28 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className={`group rounded-2xl border ${cardBg} ${cardHover} overflow-hidden flex flex-col transition-all duration-400`}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                    loading="lazy"
                                />

                                {/* Permanent subtle bottom gradient for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 z-10">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20 hover:bg-white/20 transition-all tracking-wide"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`${project.title} source code`}
                                    >
                                        <FiGithub size={14} />
                                        Source
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20 hover:bg-white/20 transition-all tracking-wide"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`${project.title} live demo`}
                                    >
                                        <FiExternalLink size={14} />
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className={`text-base font-bold tracking-tight ${textColor} mb-2`}>
                                    {project.title}
                                </h3>
                                <p className={`${bodyColor} text-sm leading-[1.8] font-light flex-1 mb-5`}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`px-2.5 py-1 text-[10px] font-semibold rounded-full border tracking-wide ${tagBg}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className={`flex items-center gap-5 pt-4 border-t ${divider}`}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${linkColor}`}
                                    >
                                        <FiGithub size={13} />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${linkColor}`}
                                    >
                                        <FiExternalLink size={13} />
                                        Demo
                                    </a>
                                    <span className={`ml-auto text-[10px] font-semibold ${mutedColor}`}>
                                        #{String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/Gobind58"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-7 h-12 border rounded-full font-semibold text-sm transition-all duration-300 ${
                            isDark
                                ? 'border-white/[0.1] text-white/70 hover:bg-white/[0.06] hover:border-white/[0.2] hover:text-white'
                                : 'border-black/[0.1] text-black/70 hover:bg-black/[0.04] hover:border-black/[0.2] hover:text-black'
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FiGithub size={15} />
                        View All on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
