import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react(), tailwindcss(), compression({ algorithm: "brotliCompress" }), compression({ algorithm: "gzip" })],
	build: {
		minify: "esbuild",
		outDir: 'dist',
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'motion': ['framer-motion'],
				},
			},
		},
		chunkSizeWarningLimit: 600,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

