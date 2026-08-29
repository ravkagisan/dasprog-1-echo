import React from 'react';

interface HomeProps {
    user?: string;
    message?: string;
}

// WAJIB menggunakan 'export default'
export default function Home({ user, message }: HomeProps) {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Halo, {user ?? 'User'}!</h1>
            <p className="mt-2 text-gray-600">{message}</p>
        </div>
    );
}