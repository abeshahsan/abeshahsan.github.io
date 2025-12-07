import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
	{ href: "#hero", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleNavClick = () => {
		setMobileMenuOpen(false);
	};

	return (
		<header className='sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/70'>
			<div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8'>
				<a
					href='#hero'
					className='flex items-center gap-3'
					onClick={handleNavClick}
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
						<span className='text-lg font-semibold text-slate-900 dark:text-slate-100'>Abesh Ahsan</span>
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
				<div className='flex items-center gap-3'>
					<ThemeToggle />
					<button
						type='button'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className='md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
						aria-label='Toggle mobile menu'
					>
						{mobileMenuOpen ? <HiX className='h-6 w-6' /> : <HiMenu className='h-6 w-6' />}
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<nav
					className='md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/95'
					aria-label='Mobile navigation'
				>
					<div className='mx-auto max-w-6xl px-4 py-3 sm:px-6'>
						<div className='flex flex-col gap-1'>
							{NAV_LINKS.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={handleNavClick}
									className='rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400'
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				</nav>
			)}
		</header>
	);
}

