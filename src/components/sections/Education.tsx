import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { HiAcademicCap } from "react-icons/hi";
import { sectionVariants, containerVariants, itemVariants, VIEWPORT } from "../../utils/animations";

const EDUCATION_DATA = [
	{
		institution: "Islamic University of Technology (IUT)",
		degree: "BSc in Computer Science & Engineering",
		duration: "2020 – 2024",
		details: "CGPA: 3.72 / 4.00",
		highlights: [
			"Focus on software engineering, algorithms, and machine learning",
			"Undergraduate thesis on transformer-based weakly supervised semantic segmentation",
			"Completed multiple software development projects across web, mobile, and desktop platforms",
		],
	},
	{
		institution: "Notre Dame College, Dhaka",
		degree: "Higher Secondary Certificate (HSC)",
		duration: "2017 – 2019",
		details: "Science Group",
		highlights: [],
	},
];

export default function Education() {
	return (
		<motion.section
			id='education'
			className='rounded-3xl sm:rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-amber-50/40 to-white p-6 sm:p-8 md:p-10 shadow-[0_40px_120px_-80px] shadow-amber-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
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
					label='Education'
					title='Academic background'
					copy='Formal education laying the foundation for technical expertise.'
				/>
				<div className='space-y-4 sm:space-y-6'>
					{EDUCATION_DATA.map((edu) => (
						<motion.div
							key={edu.institution}
							className='rounded-2xl border border-slate-100/80 bg-linear-to-br from-white/90 via-amber-50/30 to-white/90 p-4 sm:p-6 shadow-[0_30px_80px_-60px] shadow-amber-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'
							variants={itemVariants}
						>
							<div className='mb-3 sm:mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
								<div className='flex gap-3'>
									<HiAcademicCap className='mt-1 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400' />
									<div>
										<h3 className='text-base sm:text-xl font-semibold text-slate-900 dark:text-white'>
											{edu.degree}
										</h3>
										<p className='mt-1 text-sm sm:text-base font-medium text-amber-600 dark:text-amber-400'>
											{edu.institution}
										</p>
									</div>
								</div>
								<span className='text-sm font-medium text-slate-500 dark:text-slate-400'>
									{edu.duration}
								</span>
							</div>
							{edu.details && (
								<p className='mb-3 text-sm sm:text-base text-slate-600 dark:text-slate-300'>
									{edu.details}
								</p>
							)}
							{edu.highlights.length > 0 && (
								<ul className='space-y-2 pl-0 sm:pl-8'>
									{edu.highlights.map((highlight, index) => (
										<li key={index} className='flex items-start gap-3'>
											<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 dark:bg-amber-400' />
											<span className='text-sm sm:text-base text-slate-600 dark:text-slate-300'>
												{highlight}
											</span>
										</li>
									))}
								</ul>
							)}
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
}
