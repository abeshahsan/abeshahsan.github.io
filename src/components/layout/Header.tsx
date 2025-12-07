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
		<header className='sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/70'>
			<div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8'>
				<a
					href='#hero'
					className='flex items-center gap-3'
				>
					<img
						src={`${import.meta.env.BASE_URL}abesh-logo.svg`}
						alt='Abesh signature logo'
						className='h-10 w-10'
						loading='lazy'
						decoding='async'
					/>
					<div className='flex flex-col leading-none'>
						<span className='text-xs uppercase tracking-[0.4em] text-slate-400'>Portfolio</span>
						<span className='text-lg font-semibold text-slate-900 dark:text-slate-100'>Abesh</span>
					</div>
				</a>
				<nav className='hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex'>
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className='transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
						>
							{link.label}
						</a>
					))}
				</nav>
				<ThemeToggle />
			</div>
			<nav
				className='mx-auto mt-1 flex w-full max-w-6xl gap-3 overflow-x-auto px-4 pb-3 text-sm font-semibold text-slate-600 md:hidden sm:px-6 lg:px-8'
				aria-label='Primary'
			>
				{NAV_LINKS.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className='shrink-0 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-500 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200'
					>
						{link.label}
					</a>
				))}
			</nav>
		</header>
	);
}

