import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Sejal Ceramics',
	favicon: 'favicon.ico',
	business: 'Sejal Ceramics',
	owner: 'Raj Pipalia',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/tirth-pipalia/sejal-ceramics.github.io',
			icon: Github,
		} as unknown as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: Instagram,
		} as unknown as SocialLink,
	],
};
