import React from 'react';

interface HomeProps {
    message?: string;
}

export default function Home({ message }: HomeProps) {
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;500;600&display=swap');
                `}
            </style>
            <div className="min-h-screen bg-[#f8f9fe] flex items-center justify-center relative overflow-hidden font-['Poppins',sans-serif]">
                
                <div className="absolute -left-64 -bottom-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#d399fe] to-[#f4b6fb] rounded-full mix-blend-multiply opacity-70"></div>
                <div className="absolute left-24 top-1/4 w-20 h-20 bg-gradient-to-tr from-[#d399fe] to-[#f4b6fb] rounded-full mix-blend-multiply opacity-80"></div>
                <div className="absolute -right-20 bottom-10 w-72 h-72 bg-gradient-to-bl from-[#f4b6fb] to-[#d399fe] rounded-full mix-blend-multiply opacity-70"></div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
                    
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                        <div className="relative inline-block overflow-hidden pb-4">
                            <img 
                                src="/images/formal_mila.png" 
                                alt="Profile" 
                                className="max-w-xs md:max-w-md lg:max-w-lg w-full object-contain relative z-10"
                            />
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-[#f8f9fe] rounded-[100%] blur-lg z-20 pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
                        <div className="relative mb-8">
                            <div className="absolute bottom-4 left-[-5%] w-[110%] h-6 bg-[#d9a3f8] opacity-40 rounded-full -rotate-2"></div>
                            <h1 className="font-['Dancing_Script',cursive] text-7xl lg:text-9xl text-gray-900 relative z-10 tracking-wide pr-6">
                                Hello!
                            </h1>
                        </div>
                        
                        <div className="w-full">
                            {(() => {
                                const rawText = message || '';
                                const lines = rawText.split('<br>').map(line => line.trim()).filter(line => line !== '');
                                
                                if (lines.length >= 5) {
                                    const [name, nim, major, reason1, reason2] = lines;
                                    return (
                                        <div className='space-y-4 text-left flex flex-col items-center md:items-start'>
                                            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 tracking-tight text-center md:text-left'>{name}</h2>
                                            <div className='flex items-center justify-center md:justify-start gap-3 text-base md:text-lg font-semibold text-[#c879f9] uppercase tracking-wider'>
                                                <span>{nim}</span>
                                                <span className='w-1.5 h-1.5 rounded-full bg-pink-400'></span>
                                                <span>{major}</span>
                                            </div>
                                            <div className='pl-5 border-l-4 border-[#d9a3f8] space-y-3 mt-6 text-gray-600 text-base md:text-lg leading-relaxed text-left max-w-lg'>
                                                <p>"{reason1}"</p>
                                                <p className='font-medium italic'>"{reason2}"</p>
                                            </div>
                                        </div>
                                    );
                                }

                                return <div dangerouslySetInnerHTML={{ __html: rawText }} />;
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}