import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import LoadingState from "../common/LoadingState";
import ProjectCard from "../common/ProjectCard";
import type { Project } from "../../types/data";

const PROJECT_SOURCES = [
	{ id: "web", label: "Web", path: "/projects/web.json" },
	{ id: "ml", label: "Machine Learning", path: "/projects/ml.json" },
];

export default function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
	const [error, setError] = useState<string>("");
	const [filter, setFilter] = useState<string>("all");
	const [activeProject, setActiveProject] = useState<Project | null>(null);

	useEffect(() => {
		let canceled = false;
		async function loadProjects() {
			try {
				setStatus("loading");
				const payloads = await Promise.all(
					PROJECT_SOURCES.map(async (source) => {
						const res = await fetch(source.path);
						if (!res.ok) throw new Error(`Unable to load ${source.label} projects`);
						const entries: Project[] = await res.json();
						return entries.map((project) => ({
							...project,
							category: source.label,
							categoryId: source.id,
						}));
					})
				);
				if (canceled) return;
				setProjects(payloads.flat());
				setStatus("ready");
			} catch (err) {
				if (canceled) return;
				setStatus("error");
				setError(err instanceof Error ? err.message : "Unknown error");
			}
		}

		loadProjects();
		return () => {
			canceled = true;
		};
	}, []);

	const filteredProjects = useMemo(() => {
		if (filter === "all") return projects;
		return projects.filter((project: Project & { categoryId?: string }) => project.categoryId === filter);
	}, [projects, filter]);

	return (
		<motion.section
			id='projects'
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-slate-50 to-emerald-50/30 p-10 shadow-[0_40px_160px_-80px] shadow-emerald-500/25 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className='space-y-8'>
				<SectionHeader
					label='Projects'
					title='Selected work'
					copy='From ML pipelines to design systems, here are a few favorite builds.'
				/>
				<div className='flex flex-wrap gap-3'>
					{["all", ...PROJECT_SOURCES.map((s) => s.id)].map((value) => {
						const label =
							value === "all" ? "All" : PROJECT_SOURCES.find((s) => s.id === value)?.label ?? value;
						return (
							<button
								key={value}
								type='button'
								onClick={() => setFilter(value)}
								className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
									filter === value
										? "bg-emerald-500 text-white"
										: "border border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-200"
								}`}
							>
								{label}
							</button>
						);
					})}
				</div>
				{status === "loading" ? <LoadingState label='Loading projects' /> : null}
				{status === "error" ? (
					<p className='rounded-2xl border border-red-200 bg-red-50/60 px-4 py-3 text-sm text-red-600 dark:border-red-500/40 dark:bg-red-500/5 dark:text-red-200'>
						{error}
					</p>
				) : null}
				<div className='grid gap-6 md:grid-cols-2'>
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							onSelect={setActiveProject}
						/>
					))}
				</div>
			</div>
			{activeProject ? (
				<ProjectDialog
					project={activeProject}
					onClose={() => setActiveProject(null)}
				/>
			) : null}
		</motion.section>
	);
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-6'
			role='dialog'
			aria-modal='true'
			onClick={onClose}
		>
			<div
				className='max-w-xl rounded-3xl border border-slate-700/80 bg-slate-900/90 p-8 text-white shadow-2xl'
				onClick={(event) => event.stopPropagation()}
			>
				<div className='flex items-start justify-between gap-4'>
					<div>
						<p className='text-xs uppercase tracking-[0.4em] text-emerald-400'>{project.category}</p>
						<h3 className='text-2xl font-semibold'>{project.title}</h3>
					</div>
					<button
						type='button'
						onClick={onClose}
						aria-label='Close project details'
						className='text-2xl'
					>
						&times;
					</button>
				</div>
				<p className='mt-4 text-sm text-slate-200'>{project.description}</p>
				<ul className='mt-6 flex flex-wrap gap-2'>
					{project.stack.map((item) => (
						<li
							key={item}
							className='rounded-full bg-white/10 px-3 py-1 text-xs'
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

