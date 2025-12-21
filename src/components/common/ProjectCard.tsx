import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "../../types/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { cardVariants, VIEWPORT } from "../../utils/animations";

const chipPalette = [
	"bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200",
	"bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200",
	"bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200",
];

const categoryAccent: Record<string, string> = {
	Web: "text-sky-500",
	ML: "text-violet-400",
	Mobile: "text-amber-500",
	Desktop: "text-emerald-500",
};

interface ProjectCardProps {
	project: Project;
	onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
	const categoryTone = categoryAccent[project.category ?? ""] ?? "text-emerald-500";
	const maxLength = 120;
	const isTruncated = project.description.length > maxLength;
	const displayDescription = isTruncated ? project.description.slice(0, maxLength) + "..." : project.description;

	return (
		<motion.article
			className='card-interactive group flex flex-col rounded-2xl sm:rounded-3xl border border-slate-100/70 bg-linear-to-br from-white via-emerald-50/30 to-white p-4 sm:p-6 shadow-lg shadow-emerald-500/10 hover:border-emerald-300/90 hover:shadow-xl dark:border-slate-800/70 dark:from-slate-900/90 dark:via-slate-950/30 dark:to-slate-900/90 dark:shadow-black/30'
			variants={cardVariants}
			initial='hidden'
			whileInView='visible'
			viewport={VIEWPORT.default}
		>
			<div className='flex items-center justify-between gap-2 sm:gap-4'>
				<h3 className='text-base sm:text-xl font-semibold text-slate-900 dark:text-slate-50'>
					{project.title}
				</h3>
				<span
					className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] shrink-0 ${categoryTone}`}
				>
					{project.category ?? ""}
				</span>
			</div>
			<div className='mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-left prose prose-slate dark:prose-invert max-w-none prose-sm'>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{displayDescription}
				</ReactMarkdown>
			</div>
			<ul className='mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2'>
				{project.stack.map((item, index) => (
					<li
						key={item}
						className={`rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium ${
							chipPalette[index % chipPalette.length]
						}`}
					>
						{item}
					</li>
				))}
			</ul>
			<div className='mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3'>
				{project.demo && (
					<a
						href={project.demo}
						target='_blank'
						rel='noopener noreferrer'
						className='cta-primary inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-linear-to-r from-emerald-500 to-sky-500 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20'
					>
						<FiExternalLink className='cta-icon h-3 w-3 sm:h-4 sm:w-4' />
						View Demo
					</a>
				)}
				{project.github && (
					<a
						href={project.github}
						target='_blank'
						rel='noopener noreferrer'
						className='cta-secondary inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900'
					>
						<FiGithub className='cta-icon h-3 w-3 sm:h-4 sm:w-4' />
						GitHub
					</a>
				)}
				{isTruncated && (
					<button
						type='button'
						className='cta-secondary inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-100/60 bg-white/70 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-500 dark:border-emerald-500/20 dark:bg-slate-900/60 dark:text-emerald-300 dark:hover:bg-slate-900/80'
						onClick={() => onSelect?.(project)}
					>
						Details
					</button>
				)}
			</div>
		</motion.article>
	);
}

