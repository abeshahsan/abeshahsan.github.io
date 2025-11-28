import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type='button'
			onClick={toggleTheme}
			className='inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100'
			aria-label='Toggle color theme'
		>
			{theme === "light" ? (
				<FiSun
					aria-hidden='true'
					className='text-amber-400'
					size={18}
				/>
			) : (
				<FiMoon
					aria-hidden='true'
					className='text-slate-200'
					size={18}
				/>
			)}
			<span className='hidden md:inline'>{theme === "light" ? "Light" : "Dark"}</span>
		</button>
	);
}

