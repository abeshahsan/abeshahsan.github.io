import { createContext } from "react";
import type { ThemeMode } from "../types/data";

export interface ThemeContextValue {
	theme: ThemeMode;
	toggleTheme: () => void;
	setTheme: (next: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
