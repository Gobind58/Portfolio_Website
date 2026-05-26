import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
    SiFigma, SiGit, SiDocker, SiGraphql, SiFirebase, SiVercel,
} from 'react-icons/si';
import { TbBrandAdobeXd, TbBrandAws } from 'react-icons/tb';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React',      icon: SiReact,       level: 95 },
            { name: 'Next.js',    icon: SiNextdotjs,   level: 90 },
            { name: 'TypeScript', icon: SiTypescript,  level: 85 },
            { name: 'Tailwind',   icon: SiTailwindcss, level: 95 },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js',    icon: SiNodedotjs,   level: 88 },
            { name: 'Python',     icon: SiPython,      level: 82 },
            { name: 'PostgreSQL', icon: SiPostgresql,  level: 80 },
            { name: 'MongoDB',    icon: SiMongodb,     level: 85 },
        ],
    },
    {
        title: 'Design',
        skills: [
            { name: 'Figma',      icon: SiFigma,       level: 90 },
            { name: 'Adobe XD',   icon: TbBrandAdobeXd, level: 75 },
        ],
    },
    {
        title: 'Tools & Cloud',
        skills: [
            { name: 'Git',        icon: SiGit,         level: 92 },
            { name: 'Docker',     icon: SiDocker,      level: 78 },
            { name: 'AWS',        icon: TbBrandAws,    level: 72 },
            { name: 'GraphQL',    icon: SiGraphql,     level: 80 },
            { name: 'Firebase',   icon: SiFirebase,    level: 85 },
            { name: 'Vercel',     icon: SiVercel,      level: 90 },
        ],
    },
];

export default function Skills({ isDark }) {
    const [ref, inView] = useInView({ threshold: 0.06, triggerOnce: true });

    const textColor  = isDark ? 'text-white'    : 'text-black';
    const mutedColor = isDark ? 'text-white/40' : 'text-black/40';
    const levelColor = isDark ? 'text-white/55' : 'text-black/55';
    const cardBg     = isDark
        ? 'bg-white/[0.04] border-white/[0.08]'
        : 'bg-black/[0.03] border-black/[0.08]';
    const cardHover  = isDark
        ? 'hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-1'
        : 'hover:bg-black/[0.05] hover:border-black/[0.14] hover:-translate-y-1';
    const trackBg    = isDark ? 'bg-white/[0.08]' : 'bg-black/[0.08]';
    const fillBg     = isDark ? 'bg-white'         : 'bg-black';
    const divider    = isDark ? 'border-white/[0.08]' : 'border-black/[0.08]';

    return (
        <section id="skills" className="section-py" ref={ref}>
            <div className="container">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="section-header"
                >
                    <span className={`section-eyebrow ${mutedColor}`}>What I work with</span>
                    <h2 className={`text-section-title font-bold ${textColor}`}>Skills & Technologies</h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
                    {skillCategories.map((cat, ci) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 28 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] }}
                            className={`p-6 rounded-2xl border ${cardBg} ${cardHover} flex flex-col transition-all duration-300`}
                        >
                            {/* Card Header */}
                            <div className={`flex items-center justify-between mb-5 pb-4 border-b ${divider}`}>
                                <h3 className={`text-xs font-bold tracking-[0.08em] uppercase ${textColor}`}>
                                    {cat.title}
                                </h3>
                                <span className={`text-[10px] font-semibold ${mutedColor}`}>
                                    {cat.skills.length} skills
                                </span>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-col gap-4">
                                {cat.skills.map((skill, si) => (
                                    <div key={skill.name} className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between min-w-0">
                                            <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                                                <skill.icon
                                                    size={14}
                                                    className={`shrink-0 ${isDark ? 'text-white/60' : 'text-black/60'}`}
                                                />
                                                <span className={`${textColor} text-xs font-medium truncate`}>
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className={`${levelColor} text-[10px] font-semibold ml-2 shrink-0 tabular-nums`}>
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress track */}
                                        <div className={`h-1 w-full rounded-full ${trackBg} overflow-hidden`}>
                                            <motion.div
                                                className={`h-full rounded-full ${fillBg}`}
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{
                                                    duration: 1.4,
                                                    delay: 0.2 + ci * 0.06 + si * 0.05,
                                                    ease: [0.33, 1, 0.68, 1],
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
