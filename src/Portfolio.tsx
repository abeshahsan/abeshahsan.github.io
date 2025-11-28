import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useActiveSectionTitle } from "./hooks/useActiveSectionTitle";
import { useDocumentHead } from "./hooks/useDocumentHead";

const SECTION_CONFIG = [
	{ id: "hero", title: "Home" },
	{ id: "about", title: "About" },
	{ id: "skills", title: "Skills" },
	{ id: "projects", title: "Projects" },
	{ id: "contact", title: "Contact" },
];

const BASE_DESCRIPTION =
	"Abesh Ahsan is a software engineer building calm, scalable web and ML products across developer tooling and platforms.";
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
			<main className='mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:px-8'>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

