import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./theme-context";
import { usePrefersColorScheme } from "../hooks/usePrefersColorScheme";
import type { ThemeMode } from "../types/data";

const STORAGE_KEY = "abesh-portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const preferred = usePrefersColorScheme();
	const [manualTheme, setManualTheme] = useState<ThemeMode | null>(() => {
		if (typeof window === "undefined") return null;
		return (window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ?? null;
	});

	const theme = manualTheme ?? preferred;

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.style.setProperty("color-scheme", theme);
		if (manualTheme) {
			window.localStorage.setItem(STORAGE_KEY, manualTheme);
		} else {
			window.localStorage.removeItem(STORAGE_KEY);
		}
	}, [theme, manualTheme]);

	const value = useMemo(
		() => ({
			theme,
			toggleTheme: () =>
				setManualTheme((current) => {
					const basis = current ?? preferred;
					return basis === "light" ? "dark" : "light";
				}),
			setTheme: (next: ThemeMode) => setManualTheme(next),
		}),
		[theme, preferred]
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
