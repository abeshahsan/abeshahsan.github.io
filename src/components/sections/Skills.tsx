import { useMemo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import SkillTag from "../common/SkillTag";
import skillsData from "../../data/skills.json";
import type { Skill } from "../../types/data";
import { sectionVariants, containerVariants, VIEWPORT } from "../../utils/animations";

const CATEGORIES = [
	{ id: "languages", label: "Languages" },
	{ id: "frameworks", label: "Frameworks" },
	{ id: "tools", label: "Tools" },
];

export default function Skills() {
	const skillsByCategory = useMemo(() => {
		const grouped: Record<string, Skill[]> = {};
		(skillsData as Skill[]).forEach((skill) => {
			const cat = skill.category || "other";
			if (!grouped[cat]) grouped[cat] = [];
			grouped[cat].push(skill);
		});
		return grouped;
	}, []);

	return (
		<motion.section
			id='skills'
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-emerald-50/40 to-white p-10 shadow-[0_40px_120px_-80px] shadow-emerald-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			variants={sectionVariants}
			initial='hidden'
			whileInView='visible'
			viewport={VIEWPORT.default}
		>
			<motion.div
				className='space-y-8'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={VIEWPORT.default}
			>
				<SectionHeader
					label='Skills'
					title='Technical Stack'
					copy='Languages, frameworks, and tools I use to build modern applications.'
				/>
				
				<div
					className='grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3'
					role='list'
					aria-label='Technical skills by category'
				>
					{CATEGORIES.map((category) => (
						<div
							key={category.id}
							className='relative space-y-3 sm:space-y-4 rounded-2xl border border-slate-100/80 bg-linear-to-br from-white/90 via-emerald-50/30 to-white/90 p-4 sm:p-6 shadow-[0_30px_80px_-60px] shadow-emerald-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'
						>
							<h3 className='text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-300'>
								{category.label}
							</h3>
							<ul className='flex flex-wrap gap-2 sm:gap-3'>
								{skillsByCategory[category.id]?.map((skill) => (
									<SkillTag
										key={skill.name}
										skill={skill}
									/>
								))}
							</ul>
						</div>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
}

