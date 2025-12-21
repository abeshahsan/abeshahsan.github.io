import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../common/ProjectCard";
import projectsData from "../../data/projects.json";
import type { Project } from "../../types/data";
import { sectionVariants, containerVariants, VIEWPORT } from "../../utils/animations";
import { FiGithub } from "react-icons/fi";

const CATEGORIES = ["All", "ML", "Web", "Mobile", "Desktop"];

export default function Projects() {
	const [filter, setFilter] = useState<string>("All");
	const [activeProject, setActiveProject] = useState<Project | null>(null);

	const filteredProjects = useMemo(() => {
		if (filter === "All") return projectsData as Project[];
		return (projectsData as Project[]).filter((project) => project.category === filter);
	}, [filter]);

	return (
		<motion.section
			id='projects'
			className='rounded-3xl sm:rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-slate-50 to-emerald-50/30 p-6 sm:p-8 md:p-10 shadow-[0_40px_160px_-80px] shadow-emerald-500/25 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			variants={sectionVariants}
			initial='hidden'
			whileInView='visible'
			viewport={VIEWPORT.default}
		>
			<motion.div
				className='space-y-6 sm:space-y-8'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={VIEWPORT.default}
			>
				<SectionHeader
					label='Projects'
					title='Selected work'
					copy='From ML pipelines to design systems, here are a few favorite builds.'
				/>
				<div
					className='flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-semibold'
					aria-label='Project filters'
				>
					{CATEGORIES.map((category) => (
						<button
							key={category}
							type='button'
							onClick={() => setFilter(category)}
							className={`rounded-full px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-all duration-200 ${
								filter === category
									? "bg-emerald-500 text-white"
									: "border border-slate-200 bg-white/80 text-slate-600 hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'
					layout
				>
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							onSelect={setActiveProject}
						/>
					))}
				</motion.div>
			</motion.div>

			<AnimatePresence>
				{activeProject && (
					<ProjectDialog
						project={activeProject}
						onClose={() => setActiveProject(null)}
					/>
				)}
			</AnimatePresence>
		</motion.section>
	);
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 sm:p-6 backdrop-blur-sm'
			role='dialog'
			aria-modal='true'
			onClick={onClose}
		>
			<motion.div
				initial={{ scale: 0.9, opacity: 0, y: 20 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				exit={{ scale: 0.9, opacity: 0, y: 20 }}
				className='max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl dark:border-slate-700/80 dark:bg-slate-900 dark:text-white'
				onClick={(event) => event.stopPropagation()}
			>
				<div className='flex items-start justify-between gap-4'>
					<div>
						<p className='text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-500 dark:text-emerald-400 font-bold'>
							{project.category}
						</p>
						<h3 className='text-xl sm:text-3xl font-bold mt-1'>{project.title}</h3>
					</div>
					<button
						type='button'
						onClick={onClose}
						aria-label='Close project details'
						className='text-3xl leading-none hover:text-emerald-500 transition-colors'
					>
						&times;
					</button>
				</div>

				<div className='mt-6 prose prose-slate dark:prose-invert max-w-none prose-sm sm:prose-base'>
					<ReactMarkdown remarkPlugins={[remarkGfm]}>{project.description}</ReactMarkdown>
				</div>

				<div className='mt-8'>
					<h4 className='text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3'>
						Technologies Used
					</h4>
					<ul className='flex flex-wrap gap-2'>
						{project.stack.map((item) => (
							<li
								key={item}
								className='rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-500/20'
							>
								{item}
							</li>
						))}
					</ul>
				</div>

				{(project.github || project.demo) && (
					<div className='mt-8 flex flex-wrap gap-3'>
						{project.github && (
							<a
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors'
							>
								<FiGithub className='cta-icon h-3 w-3 sm:h-4 sm:w-4' />
								GitHub
							</a>
						)}
						{project.demo && (
							<a
								href={project.demo}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors'
							>
								Live Demo
							</a>
						)}
					</div>
				)}
			</motion.div>
		</motion.div>
	);
}

