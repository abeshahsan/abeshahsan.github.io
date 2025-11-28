import SectionHeader from "../common/SectionHeader";
import { motion } from "framer-motion";

const EDUCATION = [
	{ school: "University of Waterloo", detail: "BASc, Software Engineering" },
	{ school: "Recurse Center", detail: "Batch 2024, ML + Systems" },
];

const INTERESTS = ["Creative tooling", "AI safety", "Calm UI", "Type systems", "Aviation"];
const INTEREST_CHIP_TONES = [
	"bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200",
	"bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200",
	"bg-amber-50 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200",
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
					title='Crafting thoughtful systems'
					copy='Ten years of building resilient platforms across healthcare, mobility, and creator ecosystems.'
				/>
				<p className='text-lg leading-relaxed text-slate-600/95 dark:text-slate-300/90'>
					I help companies deliver end-to-end experiences—from prototyping Figma concepts to running staged
					rollouts for millions of users. I care about narrative-driven roadmaps, balanced execution, and
					mentoring engineers to ship with confidence.
				</p>
				<div className='grid gap-6 md:grid-cols-2'>
					<div className='space-y-3 rounded-2xl border border-slate-100/70 bg-linear-to-br from-white/95 via-slate-50/50 to-white/90 p-6 shadow-[0_25px_80px_-70px] shadow-slate-900/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<h3 className='text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-300'>
							Education
						</h3>
						<ul className='space-y-3 text-slate-700 dark:text-slate-200'>
							{EDUCATION.map((item) => (
								<li key={item.school}>
									<p className='font-medium'>{item.school}</p>
									<p className='text-sm text-slate-500 dark:text-slate-400'>{item.detail}</p>
								</li>
							))}
						</ul>
					</div>
					<div className='space-y-3 rounded-2xl border border-slate-100/70 bg-linear-to-br from-white/95 via-emerald-50/40 to-white/90 p-6 shadow-[0_25px_80px_-70px] shadow-emerald-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<h3 className='text-sm font-semibold uppercase tracking-[0.4em] text-sky-500 dark:text-sky-300'>
							Interests
						</h3>
						<ul className='flex flex-wrap gap-2 text-sm'>
							{INTERESTS.map((interest, index) => (
								<li
									key={interest}
									className={`rounded-full px-4 py-2 font-semibold ${
										INTEREST_CHIP_TONES[index % INTEREST_CHIP_TONES.length]
									}`}
								>
									{interest}
								</li>
							))}
						</ul>
						<a
							href='/abesh-ahsan-cv.pdf'
							className='inline-flex items-center gap-2 rounded-full border border-emerald-100/60 bg-white/70 px-5 py-2 text-sm font-semibold text-emerald-600 transition hover:border-emerald-300 hover:text-emerald-500 dark:border-emerald-500/30 dark:bg-slate-900/50 dark:text-emerald-200'
							download
						>
							Download CV
						</a>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

