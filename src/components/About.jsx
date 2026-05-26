import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLightBulb, HiHeart, HiCode } from 'react-icons/hi';

const highlights = [
    { icon: HiAcademicCap, title: 'Education',  desc: 'Computer Science Major'    },
    { icon: HiCode,         title: 'Focus',      desc: 'Full Stack Development'    },
    { icon: HiLightBulb,    title: 'Goal',       desc: 'Building Impactful Products'},
    { icon: HiHeart,        title: 'Passion',    desc: 'Open Source & Innovation'  },
];

export default function About({ isDark }) {
    const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

    const textColor  = isDark ? 'text-white'           : 'text-black';
    const mutedColor = isDark ? 'text-white/50'        : 'text-black/50';
    const bodyColor  = isDark ? 'text-white/60'        : 'text-black/60';
    const cardBg     = isDark
        ? 'bg-white/[0.04] border-white/[0.07]'
        : 'bg-black/[0.03] border-black/[0.07]';
    const cardHover  = isDark ? 'hover:bg-white/[0.07] hover:border-white/[0.14]'
                              : 'hover:bg-black/[0.05] hover:border-black/[0.14]';
    const iconBg     = isDark ? 'bg-white/[0.06] text-white' : 'bg-black/[0.05] text-black';

    return (
        <section id="about" className="section-py" ref={ref}>
            <div className="container">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="section-header"
                >
                    <span className={`section-eyebrow ${mutedColor}`}>Get to know me</span>
                    <h2 className={`text-section-title font-bold ${textColor}`}>About Me</h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-full group">
                            {/* Main frame */}
                            <div className={`w-full aspect-square rounded-3xl border ${cardBg} overflow-hidden relative`}>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                                    alt="Gobind Kumar Rai"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    loading="lazy"
                                />
                            </div>

                            {/* Decorative offset frame */}
                            <div className={`absolute -bottom-3 -right-3 w-full h-full border ${
                                isDark ? 'border-white/[0.08]' : 'border-black/[0.08]'
                            } rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />

                            {/* Corner badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className={`absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl border backdrop-blur-xl shadow-xl ${
                                    isDark
                                        ? 'bg-black/80 border-white/10 text-white'
                                        : 'bg-white/80 border-black/10 text-black'
                                }`}
                            >
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-0.5">Based in</p>
                                <p className="text-xs font-semibold">Guwahati, India</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className={`text-card-title font-bold tracking-tight ${textColor} mb-5 leading-tight`}>
                            A passionate developer crafting digital experiences
                        </h3>

                        <p className={`${bodyColor} text-base leading-[1.85] mb-4 font-light`}>
                            I'm a Computer Science student with a deep passion for building elegant,
                            user-centric applications. My journey in tech began when I was 14,
                            tinkering with HTML and CSS to build my first website.
                        </p>

                        <p className={`${bodyColor} text-base leading-[1.85] mb-10 font-light`}>
                            Today, I focus on full-stack development, combining clean code with
                            thoughtful design. I believe great software should be accessible, beautiful,
                            and purposeful — and I'm building towards that every day.
                        </p>

                        {/* Highlight Cards */}
                        <div className="grid grid-cols-2 gap-3">
                            {highlights.map(({ icon: Icon, title, desc }, i) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.35 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                    className={`p-4 rounded-2xl border ${cardBg} ${cardHover} flex flex-col gap-2.5 transition-all duration-300 group/card`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBg} transition-transform duration-300 group-hover/card:scale-110`}>
                                        <Icon size={16} />
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold ${textColor} text-sm mb-0.5`}>{title}</h4>
                                        <p className={`${mutedColor} text-xs leading-relaxed`}>{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
