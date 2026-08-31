import { useEffect, useState } from 'react';

interface HomeProps {
    message?: string;
}

export default function Home({ message }: HomeProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);
    const rawHtml = message || '';
    const lines = rawHtml
        .split(/<br\s*\/?>/i)
        .map(line => line.replace(/<[^>]*>?/gm, '').trim())
        .filter(line => line.length > 0);

    return (
        
        <div className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center pt-20 pb-10 font-sans">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 30%, #aaee44 0%, #d4f56a 20%, #e8f9b0 45%, #ffffff 75%)',
                }}
            />
            <div
                className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.7s ease, transform 0.7s ease',
                }}
            >
                <div className="text-center select-none z-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                        Hi I&apos;m {lines[0] ? (lines[0].split(' ')[1] || lines[0].split(' ')[0]) : ''}
                    </h1>
                    <p className="text-3xl md:text-5xl font-['Dancing_Script',cursive] text-gray-800 leading-tight mt-3">
                        {lines[2]}
                    </p>
                </div>
                <div className="relative w-full mt-8 flex justify-center">
                    <div className="relative z-10 pointer-events-none">
                        <div
                            className="relative"
                            style={{
                                filter: 'grayscale(100%)',
                                width: '340px',
                                height: '460px',
                            }}
                        >
                            <img
                                src="/Img/Ravi.png"
                                alt={lines[0]}
                                className="w-full h-full object-cover object-top"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                }}
                            />
                        </div>
                    </div>
                    <div className="hidden md:block absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute top-[35%] left-4 lg:left-12 pointer-events-auto">
                            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/50 text-gray-800 text-sm px-5 py-2.5 rounded-full shadow-sm font-medium">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse inline-block" />
                                {lines[4]}
                            </div>
                        </div>
                        <div className="absolute top-[35%] right-4 lg:right-8 w-[280px] pointer-events-auto flex justify-end text-right">
                            <div className="bg-white/50 backdrop-blur-lg border border-white/60 text-gray-800 px-6 py-5 rounded-2xl shadow-sm font-medium text-[1.05rem] leading-relaxed relative overflow-hidden group transition-all hover:bg-white/60">
                                <span className="absolute -top-4 -right-1 text-7xl text-gray-900/5 font-serif font-black leading-none group-hover:text-gray-900/10 transition-colors">
                                    &rdquo;
                                </span>
                                <div className="absolute top-0 bottom-0 right-0 w-1 bg-green-400/50" />
                                <span className="relative z-10 block pr-2">
                                    {lines[3]}
                                </span>
                            </div>
                        </div>
                        <div className="absolute bottom-[10%] left-4 lg:left-12 pointer-events-auto">
                            <div className="flex items-center gap-3">
                                <p className="text-gray-700 text-sm leading-snug">
                                    <span className="font-bold text-gray-900 block">{lines[0]}</span>
                                    {lines[1]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden flex flex-col gap-6 items-center text-center mt-[-40px] z-20 relative px-4">
                    <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/50 text-gray-800 text-sm px-5 py-2.5 rounded-full shadow-sm font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse inline-block" />
                        {lines[4]}
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-lg border border-white/60 text-gray-800 px-6 py-4 rounded-2xl shadow-sm font-medium text-base leading-relaxed relative overflow-hidden">
                        <span className="absolute -top-4 -right-1 text-7xl text-gray-900/5 font-serif font-black leading-none">
                            &rdquo;
                        </span>
                        <div className="absolute top-0 bottom-0 right-0 w-1 bg-green-400/50" />
                        <span className="relative z-10 pr-2">
                            {lines[3]}
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-4">
                        <p className="text-gray-700 text-sm leading-snug text-center">
                            <span className="font-bold text-gray-900 block">{lines[0]}</span>
                            {lines[1]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}