import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact({ isDark }) {
    const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
    const [formData,    setFormData]    = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted,   setSubmitted]   = useState(false);

    const textColor  = isDark ? 'text-white'    : 'text-black';
    const mutedColor = isDark ? 'text-white/40' : 'text-black/40';
    const bodyColor  = isDark ? 'text-white/60' : 'text-black/60';
    const cardBg     = isDark
        ? 'bg-white/[0.04] border-white/[0.08]'
        : 'bg-black/[0.03] border-black/[0.08]';
    const inputBase  = isDark
        ? 'bg-white/[0.04] border-white/[0.1] text-white placeholder-white/20 focus:border-white/25 focus:bg-white/[0.07]'
        : 'bg-black/[0.03] border-black/[0.1] text-black placeholder-black/25 focus:border-black/25 focus:bg-black/[0.06]';
    const iconBg     = isDark
        ? 'bg-white/[0.05] border-white/[0.1] text-white/60 group-hover:bg-white/[0.09]'
        : 'bg-black/[0.04] border-black/[0.1] text-black/60 group-hover:bg-black/[0.07]';
    const socialBtn  = isDark
        ? 'bg-white/[0.04] border-white/[0.09] text-white/50 hover:bg-white/[0.09] hover:border-white/[0.18] hover:text-white'
        : 'bg-black/[0.03] border-black/[0.09] text-black/50 hover:bg-black/[0.07] hover:border-black/[0.18] hover:text-black';
    const divider    = isDark ? 'border-white/[0.07]' : 'border-black/[0.07]';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 1600));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
    };

    const contactInfo = [
        {
            icon: HiMail,
            label: 'Email',
            value: 'raigobindkumar@gmail.com',
            href: 'mailto:raigobindkumar@gmail.com',
        },
        {
            icon: HiLocationMarker,
            label: 'Location',
            value: 'Guwahati, Assam, India',
            href: null,
        },
    ];

    const socialLinks = [
        { icon: FiGithub,   href: 'https://github.com/Gobind58',  label: 'GitHub'   },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/gobind-kumar-rai-b7674a323/', label: 'LinkedIn' },
        { icon: FiTwitter,  href: 'https://x.com/GobindKumar5283', label: 'Twitter'  },
    ];

    return (
        <section id="contact" className="section-py" ref={ref}>
            <div className="container">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="section-header"
                >
                    <span className={`section-eyebrow ${mutedColor}`}>Get in touch</span>
                    <h2 className={`text-section-title font-bold ${textColor}`}>Contact Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">

                    {/* ── Info Column ─────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <h3 className={`text-card-title font-bold tracking-tight ${textColor} mb-4 leading-tight`}>
                                Let's work together
                            </h3>
                            <p className={`${bodyColor} text-base leading-[1.85] font-light`}>
                                I'm always open to discussing new opportunities, collaborations,
                                or just chatting about technology and design. Feel free to reach out!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-4">
                            {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                <div key={label} className="flex items-center gap-4 group">
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-300 ${iconBg}`}>
                                        <Icon size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className={`${mutedColor} text-[10px] font-bold uppercase tracking-[0.15em] mb-0.5`}>{label}</p>
                                        {href ? (
                                            <a href={href} className={`${textColor} text-sm font-medium hover:underline truncate block transition-opacity duration-200`}>
                                                {value}
                                            </a>
                                        ) : (
                                            <p className={`${textColor} text-sm font-medium`}>{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className={`flex gap-2.5 pt-6 border-t ${divider}`}>
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-all duration-300 ${socialBtn}`}
                                    whileHover={{ scale: 1.06, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={label}
                                >
                                    <Icon size={17} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Form Column ─────────────────────────────────── */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 28 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className={`p-6 md:p-8 rounded-2xl border ${cardBg} flex flex-col gap-5`}
                    >
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="contact-name" className={`text-[10px] font-bold tracking-[0.15em] uppercase ${mutedColor}`}>
                                Name
                            </label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                autoComplete="name"
                                className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm outline-none transition-all duration-300 ${inputBase}`}
                                placeholder="Your full name"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="contact-email" className={`text-[10px] font-bold tracking-[0.15em] uppercase ${mutedColor}`}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                autoComplete="email"
                                className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm outline-none transition-all duration-300 ${inputBase}`}
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="contact-message" className={`text-[10px] font-bold tracking-[0.15em] uppercase ${mutedColor}`}>
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={6}
                                className={`w-full p-4 rounded-xl border bg-transparent text-sm outline-none transition-all duration-300 resize-none leading-relaxed ${inputBase}`}
                                placeholder="Tell me about your project or idea..."
                            />
                        </div>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting || submitted}
                            className={`w-full h-12 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 disabled:cursor-not-allowed transition-all duration-300 tracking-wide ${
                                submitted
                                    ? 'bg-emerald-500/15 border border-emerald-500/25 text-emerald-400'
                                    : isDark
                                        ? 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] disabled:opacity-60'
                                        : 'bg-black text-white hover:bg-black/90 hover:shadow-[0_0_30px_rgba(0,0,0,0.12)] disabled:opacity-60'
                            }`}
                            whileHover={!isSubmitting && !submitted ? { scale: 1.01 } : {}}
                            whileTap={!isSubmitting && !submitted ? { scale: 0.98 } : {}}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Sending…
                                </>
                            ) : submitted ? (
                                <>
                                    <HiCheckCircle size={18} />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    <HiPaperAirplane className="rotate-90" size={16} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
