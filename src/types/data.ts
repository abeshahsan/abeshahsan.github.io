export type ThemeMode = "light" | "dark";

export interface Skill {
	name: string;
	level: string;
	years?: number;
	favorite?: boolean;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	stack: string[];
	github?: string;
	demo?: string | null;
	image?: string | null;
	category?: string;
	categoryId?: string;
}

export interface ContactFormValues {
	name: string;
	email: string;
	message: string;
}
