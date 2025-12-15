import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiUser, HiLightningBolt, HiBriefcase, HiAcademicCap, HiChat } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import About from "../sections/About";
import Thesis from "../sections/Thesis";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const TABS = [
	{ id: "about", label: "About", icon: HiUser },
	{ id: "skills", label: "Skills", icon: HiLightningBolt },
	{ id: "projects", label: "Projects", icon: HiBriefcase },
	{ id: "experience", label: "Experience", icon: HiBriefcase },
	{ id: "research", label: "Research", icon: HiAcademicCap },
	{ id: "contact", label: "Contact", icon: HiChat },
];

const SOCIAL_LINKS = [
	{ href: "mailto:abeshahsan2002@gmail.com", icon: HiMail, label: "Email" },
	{ href: "https://github.com/abeshahsan", icon: FiGithub, label: "GitHub" },
	{ href: "https://linkedin.com/in/abeshahsan", icon: FiLinkedin, label: "LinkedIn" },
	{ href: "https://leetcode.com/abeshahsan", icon: SiLeetcode, label: "LeetCode" },
];

// Enhanced animation variants
const headerContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const childVariants = {
	hidden: { y: 30, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const socialContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const socialItemVariants = {
	hidden: { scale: 0, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
		},
	},
};

const tabContentVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0,
		scale: 0.95,
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			x: { type: "spring", stiffness: 300, damping: 30 },
			opacity: { duration: 0.3 },
			scale: { duration: 0.3 },
		},
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 1000 : -1000,
		opacity: 0,
		scale: 0.95,
		transition: { duration: 0.3, ease: "easeInOut" },
	}),
};

export default function TabLayout() {
	const [activeTab, setActiveTab] = useState("about");
	const [direction, setDirection] = useState(0);

	const tabOrder = TABS.map((t) => t.id);

	const handleTabChange = (newTab: string) => {
		const currentIndex = tabOrder.indexOf(activeTab);
		const newIndex = tabOrder.indexOf(newTab);
		setDirection(newIndex > currentIndex ? 1 : -1);
		setActiveTab(newTab);
	};

	const renderContent = () => {
		switch (activeTab) {
			case "about":
				return <About />;
			case "skills":
				return <Skills />;
			case "projects":
				return <Projects />;
			case "experience":
				return <Experience />;
			case "research":
				return <Thesis />;
			case "contact":
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (
		<div className='min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50'>
			{/* Hero Header Section */}
			<header className='relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/10'>
				{/* Ambient glow effects */}
				<div className='absolute left-1/4 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/5'></div>
				<div className='absolute right-1/4 top-0 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px] dark:bg-sky-500/5'></div>

				{/* Content wrapper */}
				<div className='relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
					{/* Top row: Theme toggle and CV button */}
					<motion.div
						className='mb-8 flex justify-end gap-2'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						<motion.a
							href={`${window.location.origin}${import.meta.env.BASE_URL}Abesh_Ahsan__CV.pdf`}
							download={false}
							target='_blank'
							rel='noopener noreferrer'
							className='group flex items-center gap-2 rounded-xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-sky-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/20 dark:border-emerald-500/30 dark:from-emerald-950/40 dark:to-sky-950/40 dark:text-emerald-300 dark:hover:border-emerald-400/50 dark:hover:shadow-emerald-500/10'
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)",
							}}
							whileTap={{ scale: 0.95 }}
						>
							<motion.div
								animate={{ y: [0, -2, 0] }}
								transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
							>
								<FiExternalLink className='h-4 w-4' />
							</motion.div>
							<span>View CV</span>
						</motion.a>
						<ThemeToggle />
					</motion.div>

					{/* Main hero content */}
					<motion.div
						className='flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:gap-12 lg:text-left'
						variants={headerContainerVariants}
						initial='hidden'
						animate='visible'
					>
						{/* Profile photo with glow */}
						<motion.div
							className='relative shrink-0'
							variants={childVariants}
							whileHover={{ scale: 1.05, rotate: 2 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<motion.div
								className='absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-500 to-sky-500 opacity-20 blur-xl'
								animate={{
									opacity: [0.2, 0.3, 0.2],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							></motion.div>
							<div className='relative w-40 overflow-hidden rounded-2xl border-4 border-emerald-500/30 bg-linear-to-br from-white to-slate-50 p-2 shadow-2xl dark:border-emerald-500/20 dark:from-slate-900 dark:to-slate-800 sm:w-48'>
								<img
									src={`${import.meta.env.BASE_URL}photo-bugs.webp`}
									alt='Abesh Ahsan'
									className='h-auto w-full rounded-xl object-contain'
									loading='lazy'
									decoding='async'
								/>
							</div>
						</motion.div>

						{/* Identity block */}
						<div className='flex flex-1 flex-col gap-6'>
							{/* Name and tagline */}
							<motion.div className='space-y-2' variants={childVariants}>
								<h1 className='bg-linear-to-br from-emerald-600 via-emerald-500 to-sky-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-emerald-400 dark:via-emerald-300 dark:to-sky-400 sm:text-5xl lg:text-6xl'>
									K. M. ABESH AHSAN
								</h1>
								<p className='text-lg font-medium text-slate-600 dark:text-slate-400 sm:text-xl'>
									CSE Graduate | Full-Stack Developer | ML Enthusiast
								</p>
							</motion.div>

							{/* Social links */}
							<motion.div
								className='flex flex-wrap items-center justify-center gap-3 lg:justify-start'
								variants={socialContainerVariants}
							>
								{SOCIAL_LINKS.map((link) => {
									const Icon = link.icon;
									return (
										<motion.a
											key={link.href}
											href={link.href}
											target={link.href.startsWith("mailto:") ? undefined : "_blank"}
											rel='noopener noreferrer'
											className='group flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-emerald-500/30 dark:hover:bg-slate-800 dark:hover:text-emerald-400'
											aria-label={link.label}
											variants={socialItemVariants}
											whileHover={{
												scale: 1.1,
												boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
											}}
											whileTap={{ scale: 0.95 }}
										>
											<Icon className='h-4 w-4 transition-transform group-hover:scale-110 group-hover:rotate-12' />
											<span className='hidden sm:inline'>{link.label}</span>
										</motion.a>
									);
								})}
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Navigation tabs - positioned at bottom edge of header */}
				<motion.nav
					className='relative border-t border-slate-200/60 bg-white/50 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-950/50'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<div className='mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-2 px-4 py-3 sm:px-6 lg:px-8'>
						{TABS.map((tab, index) => {
							const Icon = tab.icon;
							const isActive = activeTab === tab.id;
							return (
								<motion.button
									key={tab.id}
									onClick={() => handleTabChange(tab.id)}
									className={`group relative flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
										isActive
											? "bg-linear-to-br from-emerald-50 to-sky-50 text-emerald-600 border-2 border-emerald-300 shadow-md shadow-emerald-500/20 dark:from-emerald-950/50 dark:to-sky-950/50 dark:text-emerald-400 dark:border-emerald-500/40 dark:shadow-emerald-500/10"
											: "border border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-white hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500/20 dark:hover:bg-slate-900 dark:hover:text-slate-100"
									}`}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
									whileHover={{
										scale: 1.05,
										boxShadow: isActive
											? "0 0 25px rgba(16, 185, 129, 0.4)"
											: "0 4px 12px rgba(0, 0, 0, 0.1)",
									}}
									whileTap={{ scale: 0.95 }}
								>
									<motion.div
										animate={{
											rotate: isActive ? [0, 5, -5, 0] : 0,
											scale: isActive ? 1.15 : 1,
										}}
										transition={{
											duration: 0.3,
											ease: "easeOut",
										}}
									>
										<Icon className='h-4 w-4' />
									</motion.div>
									<span>{tab.label}</span>
									{isActive && (
										<motion.div
											className='absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-500 to-sky-500'
											layoutId='activeTab'
											transition={{ type: "spring", stiffness: 300, damping: 30 }}
										/>
									)}
								</motion.button>
							);
						})}
					</div>
				</motion.nav>
			</header>

			{/* Content */}
			<main className='mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
				<AnimatePresence mode='wait' custom={direction}>
					<motion.div
						key={activeTab}
						custom={direction}
						variants={tabContentVariants}
						initial='enter'
						animate='center'
						exit='exit'
					>
						{renderContent()}
					</motion.div>
				</AnimatePresence>
			</main>
		</div>
	);
}
