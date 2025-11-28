import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
			aria-label="Toggle color theme"
		>
			{theme === "light" ? <SunIcon /> : <MoonIcon />}
			<span className="hidden md:inline">{theme === "light" ? "Light" : "Dark"}</span>
		</button>
	);
}

function SunIcon() {
	return (
		<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="text-amber-400">
			<circle cx="12" cy="12" r="4" fill="currentColor" />
			{Array.from({ length: 8 }).map((_, index) => {
				const angle = (index * Math.PI) / 4;
				const x1 = 12 + Math.cos(angle) * 6;
				const y1 = 12 + Math.sin(angle) * 6;
				const x2 = 12 + Math.cos(angle) * 9;
				const y2 = 12 + Math.sin(angle) * 9;
				return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />;
			})}
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="text-slate-200">
			<path
				fill="currentColor"
				d="M20 15.5A8.5 8.5 0 0110.5 6 6.5 6.5 0 1018 17.5 8.6 8.6 0 0120 15.5z"
			/>
		</svg>
	);
}
