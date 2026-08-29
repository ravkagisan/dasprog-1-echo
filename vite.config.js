import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <-- Tambahkan import ini

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(), // <-- Tambahkan plugin di sini
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
}); 