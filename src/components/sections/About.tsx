import SectionHeader from "../common/SectionHeader";
import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi";
import { SiReact, SiFlutter, SiPython, SiUnity, SiE } from "react-icons/si";
import { sectionVariants, containerVariants, itemVariants, VIEWPORT } from "../../utils/animations";

const EDUCATION = [
	{
		school: "Islamic University of Technology (IUT)",
		detail: "BSc, Computer Science & Engineering (CGPA: 3.72)",
		icon: HiAcademicCap,
	},
	{ school: "Battery Low Interactive", detail: "Game Development Trainee (Oct 2024)", icon: HiBriefcase },
];

const INTERESTS_DATA = [
	{ name: "Full-stack Development", icon: SiReact },
	{ name: "Mobile Apps", icon: SiFlutter },
	{ name: "Machine Learning", icon: SiPython },
	{ name: "Computer Vision", icon: SiE },
	{ name: "Game Development", icon: SiUnity },
];

const INTEREST_CHIP_TONES = [
	"bg-emerald-50 border-emerald-200/50 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-200",
	"bg-sky-50 border-sky-200/50 text-sky-700 dark:bg-sky-500/10 dark:border-sky-500/20 dark:text-sky-200",
	"bg-purple-50 border-purple-200/50 text-purple-700 dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-purple-200",
	"bg-amber-50 border-amber-200/50 text-amber-700 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-200",
	"bg-rose-50 border-rose-200/50 text-rose-700 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-200",
];

export default function About() {
	return (
		<motion.section
			id='about'
			className='rounded-3xl sm:rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-slate-50 to-emerald-50/25 p-6 sm:p-8 md:p-10 shadow-[0_40px_120px_-80px] shadow-emerald-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
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
					label='About'
					title='Continuous learner, passionate builder.'
					copy='Recent graduate combining practical software engineering with machine learning research experience.'
				/>
				<motion.div
					className='space-y-4 sm:space-y-5 text-sm sm:text-base leading-loose text-slate-600/95 dark:text-slate-300/90 text-left hyphens-auto'
					variants={containerVariants}
				>
					<motion.p variants={itemVariants}>
						My name is <strong className='text-slate-900 dark:text-white'>K. M. Abesh Ahsan</strong>, and I am a
						graduate in <strong>Computer Science and Engineering</strong> from{" "}
						<strong className='text-emerald-700 dark:text-emerald-300'>IUT</strong>. I have{" "}
						<strong className='font-semibold text-slate-900 dark:text-white'>hands-on experience</strong> with various real-world projects in <strong>desktop</strong>,{" "}
						<strong>mobile</strong>, <strong>web development</strong>, and <strong>machine learning</strong>
						. My passion lies in software development, as I believe that{" "}
						<em className='font-semibold text-emerald-700 dark:text-emerald-300'>
							practical creation is the most effective way to learn
						</em>
						. I enthusiastically embrace new technologies as I encounter them.
					</motion.p>
					<motion.p variants={itemVariants}>
						I enjoy managing projects from <em>conception to completion</em>, engaging in all aspects,
						including <strong>design</strong>, <strong>coding</strong>, <strong>debugging</strong>, and{" "}
						<strong>refining the product</strong> until it meets my standards. Recently, I have been
						exploring technologies, such as{" "}
						<strong className='text-sky-600 dark:text-sky-400'>React</strong>,{" "}
						<strong className='text-slate-900 dark:text-white'>Next.js</strong>,{" "}
						<strong className='text-sky-600 dark:text-sky-400'>Flutter</strong>, <strong>PyQt</strong>,{" "}
						<strong className='text-slate-900 dark:text-white'>Unity</strong>, and{" "}
						<strong className='text-emerald-600 dark:text-emerald-400'>Node.js</strong>, each offering a
						unique opportunity to create something impactful.
					</motion.p>
					<motion.p variants={itemVariants}>
						For my undergraduate thesis, I focused on{" "}
						<em className='text-purple-700 dark:text-purple-300'>
							transformer-based weakly supervised semantic segmentation
						</em>
						, which significantly improved the capture of <strong>fine-grained details</strong> in images.
						This project enhanced my understanding of <strong>transformers</strong>,{" "}
						<strong>computer vision</strong>, and <strong>research methodologies</strong>.
					</motion.p>
					<motion.p variants={itemVariants}>
						I actively seek opportunities to <strong>learn quickly</strong> and{" "}
						<strong>apply my knowledge effectively</strong> in real-world scenarios. I am committed to{" "}
						<em>continuously expanding my skill set</em> and staying informed about{" "}
						<strong className='text-emerald-700 dark:text-emerald-300'>emerging technologies</strong>, which
						enables me to tackle <strong>complex challenges</strong> and deliver{" "}
						<strong className='text-emerald-600 dark:text-emerald-400'>innovative solutions</strong>.
					</motion.p>
				</motion.div>
				<div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
					<motion.div
						className='space-y-3 sm:space-y-4 rounded-2xl border border-slate-100/70 bg-linear-to-br from-white/95 via-slate-50/50 to-white/90 p-4 sm:p-6 shadow-[0_25px_80px_-70px] shadow-slate-900/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'
						variants={itemVariants}
					>
						<h3 className='flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-600 dark:text-emerald-400'>
							<HiAcademicCap className='h-5 w-5' />
							Education
						</h3>
						<ul className='space-y-2 sm:space-y-3'>
							{EDUCATION.map((item) => {
								const Icon = item.icon;
								return (
									<li
										key={item.school}
										className='flex gap-2 sm:gap-3 rounded-lg border border-slate-100/50 bg-white/50 p-2.5 sm:p-3 dark:border-slate-800/50 dark:bg-slate-950/30'
									>
										<Icon className='mt-1 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-600 dark:text-emerald-400' />
										<div>
											<p className='text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100'>
												{item.school}
											</p>
											<p className='text-xs sm:text-sm text-slate-600 dark:text-slate-400'>
												{item.detail}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</motion.div>
					<motion.div
						className='space-y-3 sm:space-y-4 rounded-2xl border border-slate-100/70 bg-linear-to-br from-white/95 via-emerald-50/40 to-white/90 p-4 sm:p-6 shadow-[0_25px_80px_-70px] shadow-emerald-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'
						variants={itemVariants}
					>
						<h3 className='flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sky-600 dark:text-sky-400'>
							<SiReact className='h-5 w-5' />
							Interests
						</h3>
						<ul className='flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm'>
							{INTERESTS_DATA.map((interest, index) => {
								const Icon = interest.icon;
								return (
									<li
										key={interest.name}
										className={`flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 font-semibold transition hover:scale-105 ${
											INTEREST_CHIP_TONES[index % INTEREST_CHIP_TONES.length]
										}`}
									>
										<Icon className='h-3 w-3 sm:h-4 sm:w-4' />
										{interest.name}
									</li>
								);
							})}
						</ul>
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	);
}

