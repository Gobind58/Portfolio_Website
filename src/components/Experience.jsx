import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
    {
        role:        'Senior Full Stack Engineer',
        company:     'InnovateTech Solutions',
        duration:    '2024 – Present',
        location:    'San Francisco, CA',
        type:        'Remote',
        description: 'Led a team of 5 engineers to architect and deploy a high-performance cloud platform, resulting in a 40% reduction in latency and a 25% increase in user engagement. Managed the migration of legacy apps to Next.js and Tailwind CSS.',
        skills:      ['React', 'Next.js', 'Node.js', 'AWS', 'Docker'],
    },
    {
        role:        'Frontend Developer',
        company:     'PixelPerfect Labs',
        duration:    '2022 – 2024',
        location:    'New York, NY',
        type:        'On-site',
        description: 'Developed and optimized highly interactive customer-facing web applications. Implemented complex framer-motion animations, built scalable design systems, and improved accessibility scores (WCAG AA compliant) by 35%.',
        skills:      ['TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Figma'],
    },
    {
        role:        'Software Engineering Intern',
        company:     'CloudScale Inc',
        duration:    '2021 – 2022',
        location:    'Seattle, WA',
        type:        'Hybrid',
        description: 'Collaborated on backend API optimization, writing clean and tested Python and Node.js microservices. Integrated secure third-party payment gateways and improved unit test coverage by 50%.',
        skills:      ['Node.js', 'Python', 'PostgreSQL', 'Jest'],
    },
];

export default function Experience({ isDark }) {
    const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

    const textColor    = isDark ? 'text-white'           : 'text-black';
    const mutedColor   = isDark ? 'text-white/40'        : 'text-black/40';
    const bodyColor    = isDark ? 'text-white/60'        : 'text-black/60';
    const cardBg       = isDark
        ? 'bg-white/[0.04] border-white/[0.08]'
        : 'bg-black/[0.03] border-black/[0.08]';
    const cardHover    = isDark
        ? 'hover:bg-white/[0.06] hover:border-white/[0.14]'
        : 'hover:bg-black/[0.04] hover:border-black/[0.14]';
    const badgeBg      = isDark
        ? 'bg-white/[0.06] text-white/60'
        : 'bg-black/[0.05] text-black/60';
    const tagBg        = isDark
        ? 'bg-white/[0.06] border-white/[0.08] text-white/55 hover:bg-white/[0.1] hover:text-white'
        : 'bg-black/[0.05] border-black/[0.08] text-black/55 hover:bg-black/[0.08] hover:text-black';
    const timelineBar  = isDark ? 'border-white/[0.1]'   : 'border-black/[0.1]';
    const dotBorder    = isDark ? 'border-white/[0.15]'  : 'border-black/[0.12]';
    const dotBg        = isDark ? 'bg-[#030303]'         : 'bg-[#fafafa]';
    const divider      = isDark ? 'border-white/[0.06]'  : 'border-black/[0.06]';

    return (
        <section id="experience" className="section-py" ref={ref}>
            <div className="container">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="section-header"
                >
                    <span className={`section-eyebrow ${mutedColor}`}>My Career Path</span>
                    <h2 className={`text-section-title font-bold ${textColor}`}>Work Experience</h2>
                </motion.div>

                {/* Timeline */}
                <div className={`relative border-l ${timelineBar} ml-5 sm:ml-10 lg:ml-16`}>
                    <div className="pl-8 sm:pl-10 md:pl-12 space-y-7">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -24 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <span className={`absolute -left-[3.35rem] sm:-left-[3.85rem] top-4 flex items-center justify-center w-8 h-8 rounded-full border ${dotBorder} ${dotBg} z-10`}>
                                    <HiBriefcase size={14} className={mutedColor} />
                                </span>

                                {/* Card */}
                                <div className={`p-6 md:p-7 rounded-2xl border ${cardBg} ${cardHover} transition-all duration-300`}>

                                    {/* Top row */}
                                    <div className={`flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-4 border-b ${divider}`}>

                                        {/* Role & Company */}
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                                <h3 className={`text-base font-bold tracking-tight ${textColor} leading-snug`}>
                                                    {exp.role}
                                                </h3>
                                                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${badgeBg}`}>
                                                    {exp.type}
                                                </span>
                                            </div>
                                            <p className={`text-sm font-semibold ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                                                {exp.company}
                                            </p>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                                            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium ${badgeBg}`}>
                                                <HiCalendar size={12} />
                                                {exp.duration}
                                            </span>
                                            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium ${badgeBg}`}>
                                                <HiLocationMarker size={12} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className={`${bodyColor} text-sm leading-[1.85] mb-5 font-light`}>
                                        {exp.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`px-3 py-1 text-[10px] font-semibold rounded-full border tracking-wide transition-all duration-200 ${tagBg}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
