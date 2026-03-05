// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mutms' }],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'What is MuTMS?', slug: 'mutms' },
						{ label: 'Installing MuTMS', slug: 'mutms/distribution' },
					],
				},
				{
					label: 'Multi-tenancy',
					items: [
						{label: 'Overview', slug: 'multitenancy' },
						{label: 'Installation', slug: 'multitenancy/installation' },
					],
				},
				{
					label: 'Programs',
					items: [
						{label: 'Overview', slug: 'programs' },
					],
				},
				{
					label: 'Certifications',
					items: [
						{label: 'Overview', slug: 'certifications' },
					],
				},
				{
					label: 'Training credits',
					items: [
						{label: 'Overview', slug: 'credits' },
					],
				},
				{
					label: 'Supervisors & Teams',
					items: [
						{label: 'Overview', slug: 'relations' },
					],
				},
				{
					label: 'Custom home pages',
					items: [
						{label: 'Overview', slug: 'homepages' },
					],
				},
				{
					label: 'Interactive books',
					items: [
						{label: 'Overview', slug: 'books' },
					],
				},
				{
					label: 'Security improvements',
					items: [
						{label: 'Overview', slug: 'security' },
					],
				},
			],
		}),
	],

	site: 'https://docs.mutms.org',
	server: {
		host: '0.0.0.0',
		port: 4321
	},

	vite: {
		server: {
			allowedHosts: ['node.sitedocs.orb.local']
		}
	},
});
