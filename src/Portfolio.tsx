import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Thesis from "./components/sections/Thesis";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useActiveSectionTitle } from "./hooks/useActiveSectionTitle";
import { useDocumentHead } from "./hooks/useDocumentHead";

const SECTION_CONFIG = [
	{ id: "hero", title: "Home" },
	{ id: "about", title: "About" },
	{ id: "thesis", title: "Thesis" },
	{ id: "experience", title: "Experience" },
	{ id: "skills", title: "Skills" },
	{ id: "projects", title: "Projects" },
	{ id: "contact", title: "Contact" },
];

const BASE_DESCRIPTION =
	"Abesh Ahsan - CSE graduate from IUT building modern web, mobile, desktop applications and ML systems. Passionate about full-stack development and computer vision.";
const SHARE_IMAGE = "https://abesh.dev/social-card.png";
const SHARE_URL = "https://abesh.dev/";

export default function Portfolio() {
	const activeTitle = useActiveSectionTitle(SECTION_CONFIG, "Home");
	const title = `Abesh Ahsan | ${activeTitle}`;
	useDocumentHead({
		title,
		description: BASE_DESCRIPTION,
		image: SHARE_IMAGE,
		url: SHARE_URL,
	});

	return (
		<div className='min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50'>
			<a
				href='#hero'
				className='sr-only focus:not-sr-only'
			>
				Skip to content
			</a>
			<Header />
			<main className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-12 sm:py-12 md:gap-16 md:py-16 sm:px-6 lg:px-8'>
				<Hero />
				<About />
				<Thesis />
				<Experience />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

