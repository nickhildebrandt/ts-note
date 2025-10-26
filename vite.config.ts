import tailwindcss from '@tailwindcss/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'favicon.ico',
				'robots.txt',
				'apple-touch-icon.png',
				'pwa-192x192.png',
				'pwa-512x512.png',
				'pwa-512x512-maskable.png'
			],
			manifest: {
				name: 'Ts-Note',
				short_name: 'TSN',
				description: 'A simple, lightweight note-taking web app written entirely in SvelteKit, featuring advanced tools like note timers.',
				theme_color: '#06B6D4',
				background_color: '#10B981',
				display: 'standalone',
				start_url: '/',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: '/pwa-512x512-maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				]
			},
			workbox: {
				globDirectory: '.svelte-kit/output',
				globPatterns: ['client/**/*.{js,css,html,ico,png,svg,webp,webmanifest,json}'],
				globIgnores: ['server/**'],
				modifyURLPrefix: {}
			}
    	})
	]
});
