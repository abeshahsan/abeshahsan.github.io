import { useMemo } from "react";

const CTA_LINKS = [
	{ label: "Projects", href: "#projects", primary: true },
	{ label: "Contact", href: "#contact", primary: false },
];

export default function Hero() {
	const currentRolodex = useMemo(
		() => ["Engineer", "Product Architect", "ML tinkerer"],
		[]
	);

	return (
		<section id="hero" className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-emerald-50 p-10 shadow-[0_40px_120px_-60px] shadow-emerald-500/50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
			<div className="absolute inset-0">
				<div className="hero-grid" aria-hidden="true" />
				<div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-emerald-200 blur-[120px] opacity-50 dark:bg-emerald-500/30" />
			</div>
			<div className="relative z-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
				<div className="space-y-6">
					<p className="text-sm uppercase tracking-[0.6em] text-slate-500">Hello, I am</p>
					<h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
						Abesh Ahsan
						<span className="ml-3 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-base font-medium text-slate-600 shadow-sm dark:bg-slate-800/70 dark:text-slate-200">
							Building calm, scalable products
						</span>
					</h1>
					<p className="text-lg text-slate-600 dark:text-slate-300">
						Full-stack engineer crafting resilient platforms across web, mobile, and machine learning. I obsess over
							typography, performance budgets, and human-centered developer experience.
					</p>
					<div className="flex flex-wrap gap-4">
						{CTA_LINKS.map((cta) => (
							<a
								key={cta.href}
								href={cta.href}
								className={cta.primary
									? "inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-0.5 hover:bg-emerald-400"
									: "inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-200"}
							>
								{cta.label}
							</a>
						))}
					</div>
					<ul className="flex flex-wrap gap-4 text-sm text-slate-500">
						{currentRolodex.map((item) => (
							<li key={item} className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="relative">
					<div className="absolute -inset-2 rounded-4xl bg-linear-to-br from-emerald-200 via-sky-200 to-transparent blur-2xl opacity-70 dark:from-emerald-500/40 dark:via-sky-500/20" aria-hidden />
					<div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
						<img src="/photo-bugs.jpg" alt="Abesh portrait" className="h-full w-full object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
}
