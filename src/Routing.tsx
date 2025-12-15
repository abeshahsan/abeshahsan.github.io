import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default function Routing({ children }: { children: React.ReactNode }) {
	return (
		<Routes>
			<Route
				path='/'
				element={children}
			/>
			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	);
}
