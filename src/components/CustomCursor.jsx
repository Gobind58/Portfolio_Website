import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Don't show custom cursor on touch/mobile devices
        const touch = window.matchMedia('(pointer: coarse)').matches;
        if (touch) { setIsTouchDevice(true); return; }

        const onMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const onOver = (e) => {
            const el = e.target;
            setIsHovering(!!el.closest('a, button, input, textarea, select, [role="button"], [data-cursor-hover]'));
        };

        const onLeave = () => setIsVisible(false);
        const onEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mouseover', onOver, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        document.addEventListener('mouseenter', onEnter);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mouseenter', onEnter);
        };
    }, [isVisible]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Main dot cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: pos.x - 6,
                    y: pos.y - 6,
                    scale: isHovering ? 0 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 700, damping: 30, mass: 0.3 }}
            >
                <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>

            {/* Trailing ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: pos.x - 20,
                    y: pos.y - 20,
                    scale: isHovering ? 1.8 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.5 }}
            >
                <div className={`w-10 h-10 rounded-full border transition-colors duration-200 ${
                    isHovering
                        ? 'border-white bg-white/5 backdrop-blur-sm'
                        : 'border-white/30'
                }`} />
            </motion.div>
        </>
    );
}
