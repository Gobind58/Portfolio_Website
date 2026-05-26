import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticleBackground({ isDark }) {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    // Reduce particle count on smaller screens for performance
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 50;

    const options = useMemo(() => ({
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: 'grab' },
            },
            modes: {
                grab: { distance: 120, links: { opacity: 0.15 } },
            },
        },
        particles: {
            color: { value: isDark ? '#ffffff' : '#000000' },
            links: {
                color: isDark ? '#ffffff' : '#000000',
                distance: 160,
                enable: true,
                opacity: isDark ? 0.04 : 0.06,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.4,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' },
            },
            number: {
                density: { enable: true, area: 900 },
                value: particleCount,
            },
            opacity: {
                value: isDark ? 0.12 : 0.08,
                animation: {
                    enable: true,
                    speed: 0.8,
                    minimumValue: 0.04,
                    sync: false,
                },
            },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
    }), [isDark, particleCount]);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="fixed inset-0 -z-10"
            options={options}
        />
    );
}
