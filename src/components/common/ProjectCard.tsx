import { motion } from "framer-motion";
import type { Project } from "../../types/data";


const chipPalette = [
	"bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200",
	"bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200",
	"bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200",
];

const categoryAccent: Record<string, string> = {
	Web: "text-sky-500",
	"Machine Learning": "text-violet-400",
};

interface ProjectCardProps {
	project: Project;
	onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
	const categoryTone = categoryAccent[project.category ?? ""] ?? "text-emerald-500";

	return (
		<motion.article
			className='group flex flex-col rounded-3xl border border-slate-100/70 bg-linear-to-br from-white via-emerald-50/30 to-white p-6 shadow-lg shadow-emerald-500/10 transition hover:-translate-y-1 hover:border-emerald-300/90 hover:shadow-xl dark:border-slate-800/70 dark:from-slate-900/90 dark:via-slate-950/30 dark:to-slate-900/90 dark:shadow-black/30'
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 250, damping: 25 }}
		>
			<div className='flex items-center justify-between gap-4'>
				<h3 className='text-xl font-semibold text-slate-900 dark:text-slate-50'>{project.title}</h3>
				<span className={`text-xs uppercase tracking-[0.3em] ${categoryTone}`}>
					{project.category ?? ""}
				</span>
			</div>
			<p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
				{project.description}
			</p>
			<ul className='mt-4 flex flex-wrap gap-2'>
				{project.stack.map((item, index) => (
					<li
						key={item}
						className={`rounded-full px-3 py-1 text-xs font-medium ${chipPalette[index % chipPalette.length]}`}
					>
						{item}
					</li>
				))}
			</ul>
			<div className='mt-6 flex flex-wrap gap-3'>
				{project.demo ?
					<a
						href={project.demo}
						target='_blank'
						rel='noreferrer'
						className='inline-flex items-center gap-2 rounded-full border border-transparent bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400'
					>
						View Demo
					</a>
				:	null}
				{project.github ?
					<a
						href={project.github}
						target='_blank'
						rel='noreferrer'
						className='inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-100'
					>
						GitHub
					</a>
				:	null}
				<button
					type='button'
					className='inline-flex items-center gap-2 rounded-full border border-emerald-100/60 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:border-emerald-300 hover:text-emerald-500 dark:border-emerald-500/20 dark:text-emerald-300'
					onClick={() => onSelect?.(project)}
				>
					Details
				</button>
			</div>
		</motion.article>
	);
}

