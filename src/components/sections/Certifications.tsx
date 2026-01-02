import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { FiExternalLink } from "react-icons/fi";
import { sectionVariants, containerVariants, itemVariants, VIEWPORT } from "../../utils/animations";

const CERTIFICATIONS = [
	{
		name: "Supervised Machine Learning: Regression and Classification",
		platform: "Coursera (DeepLearning.AI)",
		year: "2024",
		url: "https://www.coursera.org/account/accomplishments/verify/PFY3TDYCL9CN",
	},
	{
		name: "Advanced Learning Algorithms",
		platform: "Coursera (DeepLearning.AI)",
		year: "2024",
		url: "https://www.coursera.org/account/accomplishments/verify/R42CLLDB7CNS",
	},
	{
		name: "Neural Networks and Deep Learning",
		platform: "Coursera (DeepLearning.AI)",
		year: "2024",
		url: "https://www.coursera.org/account/accomplishments/verify/2KSS2K25BB2F",
	},
	{
		name: "Convolutional Neural Networks",
		platform: "Coursera (DeepLearning.AI)",
		year: "2024",
		url: "https://www.coursera.org/account/accomplishments/verify/KHZHKS4GUFR7",
	},
];

export default function Certifications() {
	return (
		<motion.section
			id='certifications'
			className='rounded-3xl sm:rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-purple-50/40 to-white p-6 sm:p-8 md:p-10 shadow-[0_40px_120px_-80px] shadow-purple-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
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
					label='Certifications'
					title='Continuous learning journey'
					copy='Online courses and certifications to strengthen core skills.'
				/>
				<motion.ul
					className='space-y-3'
					variants={containerVariants}
				>
					{CERTIFICATIONS.map((cert) => (
						<motion.li
							key={cert.url}
							className='group flex items-center justify-between gap-4 rounded-xl border border-slate-100/80 bg-white/80 p-3 sm:p-4 transition-all duration-200 hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-purple-500/30 dark:hover:bg-slate-800/50'
							variants={itemVariants}
						>
							<div className='flex-1 min-w-0'>
								<a
									href={cert.url}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2 text-sm sm:text-base font-medium text-slate-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400'
								>
									<span className='truncate'>{cert.name}</span>
									<FiExternalLink className='h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100' />
								</a>
								<p className='mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400'>
									{cert.platform}
								</p>
							</div>
							<span className='shrink-0 rounded-full bg-purple-100 px-2.5 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-500/20 dark:text-purple-300'>
								{cert.year}
							</span>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>
		</motion.section>
	);
}
