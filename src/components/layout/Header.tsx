import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
	{ href: "#hero", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/70">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
				<a href="#hero" className="flex items-center gap-3">
					<img src="/abesh-logo.svg" alt="Abesh signature logo" className="h-10 w-10" />
					<div className="flex flex-col leading-none">
						<span className="text-xs uppercase tracking-[0.4em] text-slate-400">Portfolio</span>
						<span className="text-lg font-semibold text-slate-900 dark:text-slate-100">Abesh</span>
					</div>
				</a>
				<nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
					{NAV_LINKS.map((link) => (
						<a key={link.href} href={link.href} className="transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
							{link.label}
						</a>
					))}
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}
