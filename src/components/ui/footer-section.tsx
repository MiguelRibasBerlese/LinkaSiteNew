'use client';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Camera, Music2, Briefcase } from 'lucide-react';
import logo from '../../assets/brand/LINKA_COM_LOGO_SEM_FUNDO.png';

const siteLinks = [
    { title: 'Portfólio', href: '#portfolio' },
    { title: 'Depoimentos', href: '#depoimentos' },
    { title: 'Contato', href: '#contato' },
];

const socialLinks = [
    { title: 'Instagram', href: 'https://instagram.com/linka_comunicacoes', icon: Camera },
    { title: 'TikTok', href: 'https://tiktok.com/@linka_comunicacoes', icon: Music2 },
    { title: 'LinkedIn', href: 'https://linkedin.com', icon: Briefcase },
];

export function Footer() {
    return (
        <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-white/10 bg-brand-black bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)] px-6 py-12 text-white lg:py-16">
            <div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

            <div className="grid w-full gap-10 md:grid-cols-3">
                <AnimatedContainer className="space-y-4">
                    <img src={logo} alt="Linka Comunicações" className="h-7 w-auto" />
                    <p className="text-white/60 text-sm">
                        Estratégia, conteúdo e gestão de redes sociais para marcas.
                    </p>
                    <p className="text-white/55 text-xs">
                        © {new Date().getFullYear()} Linka Comunicações. Todos os direitos reservados.
                    </p>
                </AnimatedContainer>

                <AnimatedContainer delay={0.15}>
                    <h3 className="text-xs text-white/50">Navegação</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/60">
                        {siteLinks.map((link) => (
                            <li key={link.title}>
                                <a href={link.href} className="transition-colors hover:text-white">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </AnimatedContainer>

                <AnimatedContainer delay={0.25}>
                    <h3 className="text-xs text-white/50">Redes sociais</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/60">
                        {socialLinks.map((link) => (
                            <li key={link.title}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                                >
                                    <link.icon className="size-4" />
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </AnimatedContainer>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return children;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
