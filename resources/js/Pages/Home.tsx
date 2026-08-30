import React from 'react';

interface HomeProps {
    message?: string;
}

export default function Home({ message }: HomeProps) {
    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Profil Mahasiswa</h1>
            <div 
                className="p-4 bg-gray-100 rounded border leading-relaxed"
                dangerouslySetInnerHTML={{ __html: message || '' }} 
            />
        </div>
    );
}