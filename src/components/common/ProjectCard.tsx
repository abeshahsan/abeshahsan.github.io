import type { Project } from "../../types/data";

interface ProjectCardProps {
	project: Project;
	onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
	return (
		<article className="group flex flex-col rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:border-emerald-300/90 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-black/30">
			<div className="flex items-center justify-between gap-4">
				<h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
				<span className="text-xs uppercase tracking-[0.3em] text-emerald-500">{project.category ?? ""}</span>
			</div>
			<p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
			<ul className="mt-4 flex flex-wrap gap-2">
				{project.stack.map((item) => (
					<li
						key={item}
						className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
					>
						{item}
					</li>
				))}
			</ul>
			<div className="mt-6 flex flex-wrap gap-3">
				{project.demo ? (
					<a
						href={project.demo}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-transparent bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
					>
						View Demo
					</a>
				) : null}
				{project.github ? (
					<a
						href={project.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-100"
					>
						GitHub
					</a>
				) : null}
				<button
					type="button"
					className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-emerald-500 transition hover:text-emerald-400"
					onClick={() => onSelect?.(project)}
				>
					Details
				</button>
			</div>
		</article>
	);
}
