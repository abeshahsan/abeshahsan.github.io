import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function Portfolio() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50">
			<a href="#hero" className="sr-only focus:not-sr-only">
				Skip to content
			</a>
			<Header />
			<main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
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
