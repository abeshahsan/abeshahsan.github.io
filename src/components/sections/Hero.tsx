import { motion } from "framer-motion";
import { FiExternalLink, FiMail } from "react-icons/fi";
import { HiAcademicCap, HiBriefcase, HiLightBulb, HiCode, HiDownload } from "react-icons/hi";

const CTA_LINKS = [
	{ label: "View My Projects", href: "#projects", primary: true, icon: FiExternalLink },
	{ label: "Contact Me", href: "#contact", primary: false, icon: FiMail },
	{ label: "Download CV", href: `${import.meta.env.BASE_URL}Abesh_Ahsan__CV.pdf`, primary: false, icon: HiDownload, download: true },
];

const HIGHLIGHTS = [
	{ icon: HiAcademicCap, text: <><strong className='text-emerald-700 dark:text-emerald-300'>Research:</strong> Developed <em>transformer-based weakly supervised semantic segmentation</em> model achieving <strong className='text-emerald-600 dark:text-emerald-400'>50% mIoU</strong></> },
	{
		icon: HiCode,
		text: <><strong className='text-emerald-700 dark:text-emerald-300'>Key Projects:</strong> <strong>ChessDuel</strong> <span className='text-slate-500 dark:text-slate-400'>(real-time multiplayer chess)</span>, <strong>Voice Reminder</strong> <span className='text-slate-500 dark:text-slate-400'>(NLU-powered task manager)</span>, <strong>Photo Wizard</strong> <span className='text-slate-500 dark:text-slate-400'>(NumPy-based image editor)</span></>,
	},
	{ icon: HiBriefcase, text: <><strong className='text-emerald-700 dark:text-emerald-300'>Experience:</strong> Game Development Trainee at <strong>Battery Low Interactive</strong> specializing in <em>Unity, C#, and interactive gameplay</em></> },
	{ icon: HiLightBulb, text: <>Actively seeking <strong className='text-emerald-600 dark:text-emerald-400'>software engineering opportunities</strong> to contribute to innovative projects and teams</> },
];

export default function Hero() {
	return (
		<motion.section
			id='hero'
			className='relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-emerald-50 p-6 sm:p-8 md:p-10 shadow-[0_40px_120px_-60px] shadow-emerald-500/50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
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
			<div className='relative z-10 flex flex-col gap-6 sm:gap-8 md:gap-10 text-center md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:text-left'>
				<div className='space-y-4 sm:space-y-5 md:space-y-6 md:order-1'>
					<p className='text-sm uppercase tracking-[0.6em] text-emerald-600 dark:text-emerald-300'>
						Hi &mdash; I'm Abesh Ahsan
					</p>
				<h1 className='text-xl font-bold leading-tight text-slate-900 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl'>
					Software Engineer &amp; ML Enthusiast
					<span className='block text-emerald-600 dark:text-emerald-400'>Transforming Ideas into Scalable Solutions</span>
				</h1>
				{/* Image on mobile - shown after heading */}
				<motion.div
					className='relative md:hidden'
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
				<p className='text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 text-justify'>
					I create <strong className='text-slate-900 dark:text-white'>cutting-edge</strong> desktop, mobile, and web applications with an emphasis on <em className='text-emerald-700 dark:text-emerald-300'>clean architecture</em>. I am a <strong>quick learner</strong>, passionate about technology, and committed to <strong>solving problems</strong>.
				</p>
				<p className='text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 text-justify'>
					I am a recent graduate with a degree in <strong>Computer Science and Engineering</strong> from <strong className='text-emerald-700 dark:text-emerald-300'>IUT</strong>, and I am deeply passionate about developing software that makes a <em>meaningful impact</em> across all layers of technology. My experience encompasses creating <strong>desktop tools</strong>, <strong>mobile applications</strong>, <strong>full-stack</strong> and <strong>machine learning</strong>. I take great pleasure in learning new technologies and applying them to address practical challenges effectively.
				</p>
					<ul className='space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300'>
						{HIGHLIGHTS.map((item, index) => {
							const Icon = item.icon;
							return (
								<li
									key={index}
									className='flex items-start gap-2 sm:gap-3 rounded-lg border border-slate-100/50 bg-white/40 p-2 sm:p-3 backdrop-blur-sm transition hover:border-emerald-200/70 hover:bg-white/60 dark:border-slate-800/50 dark:bg-slate-900/40 dark:hover:border-emerald-500/30 dark:hover:bg-slate-900/60'
								>
									<Icon className='mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-600 dark:text-emerald-400' />
									<span className='text-justify'>{item.text}</span>
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
				{/* Image on desktop - shown on right side */}
				<motion.div
					className='relative hidden md:block md:order-2'
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

