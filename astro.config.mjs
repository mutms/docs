// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'MuTMS Docs',
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
                    { label: 'Installing MuTMS', slug: 'mutms/installation' },
                ],
            },
            {
                label: 'Multi-tenancy',
                items: [
                    {label: 'Overview', slug: 'mutenancy' },
                    {label: 'Installation', slug: 'mutenancy/installation' },
                    {slug: 'mutenancy/management' },
                    {slug: 'mutenancy/architecture' },
                ],
            },
            {
                label: 'Programs',
                items: [
                    {label: 'Overview', slug: 'muprog' },
                    {label: 'Installation', slug: 'muprog/installation' },
                    {slug: 'muprog/use-cases' },
                    {slug: 'muprog/management' },
                    {slug: 'muprog/catalogue' },
                    {slug: 'muprog/my-programs-page' },
                    {slug: 'muprog/my-programs-block' },
                    {slug: 'muprog/my-programs-overview' },
                ],
            },
            {
                label: 'Certifications',
                items: [
                    {label: 'Overview', slug: 'mucertify' },
                    {label: 'Installation', slug: 'mucertify/installation' },
                    {slug: 'mucertify/management' },
                    {slug: 'mucertify/catalogue' },
                    {slug: 'mucertify/my-certifications-page' },
                    {slug: 'mucertify/my-certifications-block' },
                ],
            },
            {
                label: 'Training credits',
                items: [
                    {label: 'Overview', slug: 'mutrain' },
                    {label: 'Installation', slug: 'mutrain/installation' },
                    {slug: 'mutrain/usage' },
                ],
            },
            {
                label: 'Supervisors & teams',
                items: [
                    {label: 'Overview', slug: 'murelation' },
                    {label: 'Installation', slug: 'murelation/installation' },
                    {slug: 'murelation/usage' },
                ],
            },
            {
                label: 'Custom home pages',
                items: [
                    {label: 'Overview', slug: 'muhome' },
                    {label: 'Installation', slug: 'muhome/installation' },
                    {slug: 'muhome/usage' },
                ],
            },
            {
                label: 'Interactive books',
                items: [
                    {label: 'Overview', slug: 'mubook' },
                    {label: 'Installation', slug: 'mubook/installation' },
                    {slug: 'mubook/usage' },
                ],
            },
            {
                label: 'Security improvements',
                items: [
                    {label: 'Overview', slug: 'security' },
                    {slug: 'mupwned'},
                    {slug: 'musudo'},
                    {slug: 'muloginas'},
                ],
            },
        ],
		}), sitemap()],

    site: 'https://docs.mutms.org',
    server: {
        host: '0.0.0.0',
        port: 4321
    },

    vite: {
        server: {
            allowedHosts: ['node.sitedocs.orb.local']
        },
        preview: {
            allowedHosts: ['node.sitedocs.orb.local']
        },
    },
});