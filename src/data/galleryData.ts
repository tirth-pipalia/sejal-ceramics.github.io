import type { ImageMetadata } from 'astro';
import path from 'path';
import { promises as fs } from 'fs';
import * as yaml from 'js-yaml';

export interface GalleryData {
	collections: Collection[];
	images: GalleryImage[];
}

export interface Collection {
	id: string;
	name: string;
	pdfUrl?: string;
}

export interface GalleryImage {
	path: string;
	meta: Meta;
	exif?: ImageExif;
	pdfUrl?: string;
}

export interface Meta {
	title: string;
	description: string;
	collections: string[];
}

export interface ImageExif {
	focalLength?: number;
	iso?: number;
	fNumber?: number;
	shutterSpeed?: number;
	captureDate?: Date;
	model?: string;
	lensModel?: string;
}

export interface Image {
	src: ImageMetadata;
	title: string;
	description: string;
	collections: string[];
	pdfUrl?: string;
}

export type ImageModule = { default: ImageMetadata };

export const loadGallery = async (galleryPath: string): Promise<GalleryData> => {
	const yamlPath = path.resolve(process.cwd(), galleryPath);
	const content = await fs.readFile(yamlPath, 'utf8');
	return yaml.load(content) as GalleryData;
};

export const NullGalleryData: GalleryData = {
	collections: [],
	images: [],
};