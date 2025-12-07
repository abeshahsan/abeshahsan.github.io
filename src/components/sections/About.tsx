import SectionHeader from "../common/SectionHeader";
import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiDownload } from "react-icons/hi";
import { SiReact, SiFlutter, SiPython, SiUnity, SiE } from "react-icons/si";

const EDUCATION = [
	{ school: "Islamic University of Technology (IUT)", detail: "BSc, Computer Science & Engineering (CGPA: 3.72)", icon: HiAcademicCap },
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
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-slate-50 to-emerald-50/25 p-10 shadow-[0_40px_120px_-80px] shadow-emerald-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className='space-y-8'>
				<SectionHeader
					label='About'
					title='Continuous learner, passionate builder'
					copy='Recent graduate combining practical software engineering with machine learning research experience.'
				/>
				<div className='space-y-4 text-base leading-relaxed text-slate-600/95 dark:text-slate-300/90'>
					<p>
						I'm Abesh Ahsan, a CSE graduate from IUT (CGPA 3.72) hands-on projects across web, mobile, desktop, and ML domains. I'm passionate about building software and learn best by creating. When I discover a new technology, I immediately build something with it.
					</p>
					<p>
						I love working end-to-end: designing, coding, debugging, and refining until it feels right. This has led me to explore React, Next.js, Flutter, PyQt, Unity, Node.js, and more. Each framework is an opportunity to build something useful.
					</p>
					<p>
						My undergraduate thesis focused on transformer-based weakly supervised semantic segmentation, improving fine-grained detail capture. This strengthened my understanding of computer vision, transformers, and research workflows.
					</p>
					<p>
						I'm looking for opportunities where I can learn quickly, contribute meaningfully, and build impactful products. I love challenges, adapt fast, and stay curious about new frameworks and concepts.
					</p>
				</div>
				<div className='grid gap-6 md:grid-cols-2'>
					<div className='space-y-4 rounded-2xl border border-slate-100/70 bg-linear-to-br from-white/95 via-slate-50/50 to-white/90 p-6 shadow-[0_25px_80px_-70px] shadow-slate-900/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<h3 className='flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400'>
							<HiAcademicCap className='h-5 w-5' />
							Education
						</h3>
						<ul className='space-y-3'>
							{EDUCATION.map((item) => {
								const Icon = item.icon;
								return (
									<li key={item.school} className='flex gap-3 rounded-lg border border-slate-100/50 bg-white/50 p-3 dark:border-slate-800/50 dark:bg-slate-950/30'>
										<Icon className='mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400' />
										<div>
											<p className='font-medium text-slate-900 dark:text-slate-100'>{item.school}</p>
											<p className='text-sm text-slate-600 dark:text-slate-400'>{item.detail}</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div className='space-y-4 rounded-2xl border border-slate-100/70 bg-linear-to-br from-white/95 via-emerald-50/40 to-white/90 p-6 shadow-[0_25px_80px_-70px] shadow-emerald-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<h3 className='flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-sky-600 dark:text-sky-400'>
							<SiReact className='h-5 w-5' />
							Interests
						</h3>
						<ul className='flex flex-wrap gap-2 text-sm'>
							{INTERESTS_DATA.map((interest, index) => {
								const Icon = interest.icon;
								return (
									<li
										key={interest.name}
										className={`flex items-center gap-2 rounded-full border px-4 py-2 font-semibold transition hover:scale-105 ${
											INTEREST_CHIP_TONES[index % INTEREST_CHIP_TONES.length]
										}`}
									>
										<Icon className='h-4 w-4' />
										{interest.name}
									</li>
								);
							})}
						</ul>
						<a
							href={`${import.meta.env.BASE_URL}Abesh_Ahsan__CV.pdf`}
							className='inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-linear-to-r from-emerald-50 to-sky-50 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:scale-105 hover:border-emerald-300 hover:shadow-md dark:border-emerald-500/30 dark:from-emerald-500/10 dark:to-sky-500/10 dark:text-emerald-300 dark:hover:border-emerald-400/50'
							download
						>
							<HiDownload className='h-4 w-4' />
							Download CV
						</a>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

