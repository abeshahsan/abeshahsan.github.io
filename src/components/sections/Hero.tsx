import { motion } from "framer-motion";
import { FiExternalLink, FiMail } from "react-icons/fi";
import { HiAcademicCap, HiBriefcase, HiLightBulb, HiCode, HiDownload } from "react-icons/hi";

const CTA_LINKS = [
	{ label: "View My Projects", href: "#projects", primary: true, icon: FiExternalLink },
	{ label: "Contact Me", href: "#contact", primary: false, icon: FiMail },
	{ label: "Download CV", href: `${import.meta.env.BASE_URL}Abesh_Ahsan__CV.pdf`, primary: false, icon: HiDownload, download: true },
];

const HIGHLIGHTS = [
	{ icon: HiAcademicCap, text: "Research: Developed transformer-based weakly supervised semantic segmentation model achieving 50% mIoU" },
	{
		icon: HiCode,
		text: "Key Projects: ChessDuel (real-time multiplayer chess), Voice Reminder (NLU-powered task manager), Photo Wizard (NumPy-based image editor)",
	},
	{ icon: HiBriefcase, text: "Experience: Game Development Trainee at Battery Low Interactive specializing in Unity, C#, and interactive gameplay" },
	{ icon: HiLightBulb, text: "Actively seeking software engineering opportunities to contribute to innovative projects and teams" },
];

export default function Hero() {
	return (
		<motion.section
			id='hero'
			className='relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-emerald-50 p-10 shadow-[0_40px_120px_-60px] shadow-emerald-500/50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className='absolute inset-0'>
				<div
					className='hero-grid'
					aria-hidden='true'
				/>
				<div className='absolute -right-10 top-10 h-72 w-72 rounded-full bg-emerald-200 blur-[120px] opacity-50 dark:bg-emerald-500/30' />
			</div>
			<div className='relative z-10 flex flex-col gap-10 text-center md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:text-left'>
				<div className='space-y-6'>
					<p className='text-sm uppercase tracking-[0.6em] text-emerald-600 dark:text-emerald-300'>
						Hi &mdash; I'm Abesh Ahsan
					</p>
				<h1 className='text-2xl font-bold leading-tight text-slate-900 dark:text-white md:text-3xl lg:text-4xl'>
					Software Engineer &amp; ML Enthusiast
					<span className='block text-emerald-600 dark:text-emerald-400'>Transforming Ideas into Scalable Solutions</span>
				</h1>
				<p className='text-lg font-medium text-slate-700 dark:text-slate-200'>
					I create cutting-edge desktop, mobile, and web applications with an emphasis on clean architecture. I am a quick learner, passionate about technology, and committed to solving problems.
				</p>
				<p className='text-base leading-relaxed text-slate-600 dark:text-slate-300'>
					I am a recent graduate with a degree in Computer Science and Engineering from IUT, and I am deeply passionate about developing software that makes a meaningful impact across all layers of technology. My experience encompasses creating desktop tools, mobile applications, full-stack and machine learning. I take great pleasure in learning new technologies and applying them to address practical challenges effectively.
				</p>
					<ul className='space-y-3 text-sm text-slate-600 dark:text-slate-300'>
						{HIGHLIGHTS.map((item, index) => {
							const Icon = item.icon;
							return (
								<li
									key={index}
									className='flex items-start gap-3 rounded-lg border border-slate-100/50 bg-white/40 p-3 backdrop-blur-sm transition hover:border-emerald-200/70 hover:bg-white/60 dark:border-slate-800/50 dark:bg-slate-900/40 dark:hover:border-emerald-500/30 dark:hover:bg-slate-900/60'
								>
									<Icon className='mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400' />
									<span>{item.text}</span>
								</li>
							);
						})}
					</ul>
					<div className='flex flex-wrap justify-center gap-4 md:justify-start'>
					{CTA_LINKS.map((cta) => {
						const Icon = cta.icon;
						return (
							<motion.a
								key={cta.href}
								href={cta.href}
								{...(cta.download && { download: true })}
								className={
									cta.primary
										? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-emerald-500 via-emerald-400 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:brightness-105 dark:shadow-emerald-500/20 sm:w-auto"
										: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-100/70 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-white hover:text-emerald-600 dark:border-emerald-500/30 dark:bg-slate-900/60 dark:text-emerald-200 dark:hover:border-emerald-400/50 dark:hover:bg-slate-900/80 sm:w-auto"
								}
								whileHover={{ y: -2, scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
									{cta.label}
									<Icon className='h-4 w-4' />
								</motion.a>
							);
						})}
					</div>
				</div>
				<motion.div
					className='relative'
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
				>
					<div
						className='absolute -inset-2 rounded-4xl bg-linear-to-br from-emerald-200 via-sky-200 to-transparent blur-2xl opacity-70 dark:from-emerald-500/40 dark:via-sky-500/20'
						aria-hidden='true'
					/>
				<div className='relative overflow-hidden rounded-4xl border border-white/70 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900'>
					<picture>
						<source srcSet={`${import.meta.env.BASE_URL}photo-bugs.webp`} type='image/webp' />
						<img
							src={`${import.meta.env.BASE_URL}photo-bugs.png`}
							alt='Abesh portrait'
							className='h-full w-full object-cover'
							loading='lazy'
							decoding='async'
						/>
					</picture>
				</div>
				</motion.div>
			</div>
		</motion.section>
	);
}

