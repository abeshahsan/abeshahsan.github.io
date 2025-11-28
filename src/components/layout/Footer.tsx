const socials = [
	{ label: "GitHub", href: "https://github.com/abeshahsan" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/abeshahsan" },
	{ label: "Email", href: "mailto:hello@abesh.dev" },
];

export default function Footer() {
	return (
		<footer className="border-t border-slate-200/70 bg-white/70 py-8 text-sm text-slate-500 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
				<p>&copy; {new Date().getFullYear()} Abesh. Crafted with React + Vite.</p>
				<div className="flex justify-center gap-4 md:justify-end">
					{socials.map((social) => (
						<a key={social.href} href={social.href} className="font-medium text-slate-600 transition hover:text-emerald-500 dark:text-slate-300">
							{social.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
