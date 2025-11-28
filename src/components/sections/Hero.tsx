import { useMemo } from "react";
import { motion } from "framer-motion";

const CTA_LINKS = [
	{ label: "Projects", href: "#projects", primary: true },
	{ label: "Contact", href: "#contact", primary: false },
];

export default function Hero() {
	const currentRolodex = useMemo(() => ["Engineer", "Product Architect", "ML tinkerer"], []);

	return (
		<motion.section
			id='hero'
			className='relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-emerald-50 p-10 shadow-[0_40px_120px_-60px] shadow-emerald-500/50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className='absolute inset-0'>
				<div
					className='hero-grid'
					aria-hidden='true'
				/>
				<div className='absolute -right-10 top-10 h-72 w-72 rounded-full bg-emerald-200 blur-[120px] opacity-50 dark:bg-emerald-500/30' />
			</div>
			<div className='relative z-10 flex flex-col gap-10 text-center md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:text-left'>
				<div className='space-y-6'>
					<p className='text-sm uppercase tracking-[0.6em] text-emerald-600 dark:text-emerald-300'>
						Hello, I am
					</p>
					<h1 className='text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl'>
						Abesh Ahsan
						<span className='ml-3 inline-flex items-center rounded-full bg-linear-to-r from-white via-emerald-50 to-white px-3 py-1 text-base font-medium text-emerald-700 shadow-sm dark:from-slate-800/80 dark:via-emerald-500/20 dark:to-slate-800/80 dark:text-emerald-200'>
							Building calm, scalable products
						</span>
					</h1>
					<p className='text-lg text-slate-600 dark:text-slate-300'>
						Full-stack engineer crafting resilient platforms across web, mobile, and machine learning. I
						obsess over typography, performance budgets, and human-centered developer experience.
					</p>
					<div className='flex flex-wrap justify-center gap-4 md:justify-start'>
						{CTA_LINKS.map((cta) => (
							<motion.a
								key={cta.href}
								href={cta.href}
								className={
									cta.primary
										? "inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-emerald-500 via-emerald-400 to-sky-400 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-0.5 hover:brightness-105 sm:w-auto"
									: "inline-flex w-full items-center justify-center rounded-full border border-emerald-100/70 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-500 dark:border-emerald-500/30 dark:bg-slate-900/60 dark:text-emerald-200 sm:w-auto"
								}
								whileHover={{ y: 2, scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
							>
								{cta.label}
							</motion.a>
						))}
					</div>
					<ul className='flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400 md:justify-start'>
						{currentRolodex.map((item) => (
							<li
								key={item}
								className='flex items-center gap-2'
							>
								<span className='h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400' />
								{item}
							</li>
						))}
					</ul>
				</div>
				<motion.div
					className='relative'
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
				>
					<div
						className='absolute -inset-2 rounded-4xl bg-linear-to-br from-emerald-200 via-sky-200 to-transparent blur-2xl opacity-70 dark:from-emerald-500/40 dark:via-sky-500/20'
						aria-hidden='true'
					/>
					<div className='relative overflow-hidden rounded-4xl border border-white/70 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900'>
						<img
							src='/photo-bugs.png'
							alt='Abesh portrait'
							className='h-full w-full object-cover'
							loading='lazy'
							decoding='async'
						/>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}

