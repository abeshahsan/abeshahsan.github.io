import { useEffect, useState } from "react";
import type { ThemeMode } from "../types/data";

export function usePrefersColorScheme(): ThemeMode {
	const getInitial = () => {
		if (typeof window === "undefined") return "light" as ThemeMode;
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	};

	const [mode, setMode] = useState<ThemeMode>(getInitial);

	useEffect(() => {
		if (typeof window === "undefined") return undefined;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = (event: MediaQueryListEvent) => setMode(event.matches ? "dark" : "light");
		media.addEventListener("change", handler);
		return () => media.removeEventListener("change", handler);
	}, []);

	return mode;
}
