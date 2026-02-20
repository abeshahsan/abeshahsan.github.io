import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiUser, HiLightningBolt, HiBriefcase, HiAcademicCap, HiChat, HiChevronDown } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import About from "../sections/About";
import Thesis from "../sections/Thesis";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Certifications from "../sections/Certifications";

// Tab structure with dropdowns
type TabItem = {
	id: string;
	label: string;
	icon: React.ComponentType<{ className?: string }>;
	children?: { id: string; label: string }[];
};

const TABS: TabItem[] = [
	{ id: "about", label: "About", icon: HiUser },
	{
		id: "work",
		label: "Work",
		icon: HiBriefcase,
		children: [
			{ id: "projects", label: "Projects" },
			{ id: "research", label: "Research" },
		],
	},
	{
		id: "education",
		label: "Education",
		icon: HiAcademicCap,
		children: [
			{ id: "education-details", label: "Education" },
			{ id: "certifications", label: "Courses & Certifications" },
		],
	},
	{ id: "experience", label: "Experience", icon: HiBriefcase },
	{ id: "skills", label: "Skills", icon: HiLightningBolt },
	{ id: "contact", label: "Contact", icon: HiChat },
];

const SOCIAL_LINKS = [
	{ href: "mailto:abeshahsan2002@gmail.com", icon: HiMail, label: "Email" },
	{ href: "https://github.com/abeshahsan", icon: FiGithub, label: "GitHub" },
	{ href: "https://www.linkedin.com/in/abesh-ahsan-413282280", icon: FiLinkedin, label: "LinkedIn" },
	{ href: "https://leetcode.com/abeshahsan", icon: SiLeetcode, label: "LeetCode" },
];

// Optimized animation variants - simpler, faster
const fadeInVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const tabContentVariants = {
	hidden: { opacity: 0, x: 20 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
	exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function TabLayout() {
	const [activeTab, setActiveTab] = useState("about");
	const [menuOpen, setMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close menu on click outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false);
			}
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setOpenDropdown(null);
			}
		};

		if (menuOpen || openDropdown) {
			document.addEventListener("mousedown", handleClickOutside);
			return () => document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [menuOpen, openDropdown]);

	// Get the display label for the current active tab
	const getActiveTabLabel = () => {
		for (const tab of TABS) {
			if (tab.id === activeTab) return tab.label;
			if (tab.children) {
				const child = tab.children.find(c => c.id === activeTab);
				if (child) return child.label;
			}
		}
		return "About";
	};

	// Check if a parent tab has an active child
	const hasActiveChild = (tab: TabItem) => {
		return tab.children?.some(child => child.id === activeTab);
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
			case "education-details":
				return <Education />;
			case "certifications":
				return <Certifications />;
			case "contact":
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (
		<div className='min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50'>
			{/* Hero Header Section */}
			<header className='relative z-50 overflow-visible bg-linear-to-br from-white via-slate-50 to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/10'>
				{/* Ambient glow effects */}
				<div className='absolute left-1/4 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/5'></div>
				<div className='absolute right-1/4 top-0 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px] dark:bg-sky-500/5'></div>

				{/* Content wrapper */}
				<div className='relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
					{/* Top row: Theme toggle and CV button */}
					<div className='mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:justify-end'>
						<a
							href={`${window.location.origin}${import.meta.env.BASE_URL}Abesh_Ahsan__CV.pdf`}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='View CV'
							className='group flex min-h-11 items-center gap-2 rounded-xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-sky-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-200 hover:scale-105 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/20 dark:border-emerald-500/30 dark:from-emerald-950/40 dark:to-sky-950/40 dark:text-emerald-300 dark:hover:border-emerald-400/50 dark:hover:shadow-emerald-500/10'
						>
							<FiExternalLink className='h-4 w-4 transition-transform group-hover:-translate-y-0.5' />
							<span>View CV</span>
						</a>
						<ThemeToggle />
					</div>

					{/* Main hero content */}
					<motion.div
						className='flex flex-col items-center gap-6 text-center sm:gap-8 lg:flex-row lg:items-start lg:gap-12 lg:text-left'
						initial='hidden'
						animate='visible'
						transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
					>
						{/* Profile photo with glow */}
						<motion.div
							className='relative shrink-0'
							variants={fadeInVariants}
						>
							<div className='absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-500 to-sky-500 opacity-20 blur-xl'></div>
							<div className='relative w-32 overflow-hidden rounded-2xl border-4 border-emerald-500/30 bg-linear-to-br from-white to-slate-50 p-2 shadow-2xl transition-transform duration-300 hover:scale-105 dark:border-emerald-500/20 dark:from-slate-900 dark:to-slate-800 sm:w-40 lg:w-48'>
								<img
									src={`${import.meta.env.BASE_URL}photo.webp`}
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
							<motion.div
								className='space-y-2'
								variants={fadeInVariants}
							>
								<h1 className='bg-linear-to-br from-emerald-600 via-emerald-500 to-sky-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-emerald-400 dark:via-emerald-300 dark:to-sky-400 sm:text-4xl md:text-5xl lg:text-6xl'>
									K. M. ABESH AHSAN
								</h1>
								<p className='text-base font-medium text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl'>
									CSE Graduate | Full-Stack Developer | ML Enthusiast
								</p>
							</motion.div>

							{/* Social links */}
							<motion.div
								className='flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start'
								variants={fadeInVariants}
							>
								{SOCIAL_LINKS.map((link) => {
									const Icon = link.icon;
									return (
										<a
											key={link.href}
											href={link.href}
											target={link.href.startsWith("mailto:") ? undefined : "_blank"}
											rel='noopener noreferrer'
											className='group flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-emerald-500/30 dark:hover:bg-slate-800 dark:hover:text-emerald-400'
											aria-label={link.label}
										>
											<Icon className='h-4 w-4 transition-transform duration-200 group-hover:scale-110' />
											<span className='hidden sm:inline'>{link.label}</span>
										</a>
									);
								})}
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Navigation tabs - positioned at bottom edge of header */}
				<nav className='relative border-t border-slate-200/60 bg-white/50 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-950/50'>
					{/* Desktop: Full horizontal tabs with dropdowns */}
					<div className='hidden sm:flex mx-auto w-full max-w-6xl gap-2 overflow-visible px-4 py-3 sm:flex-wrap sm:justify-center sm:px-6 lg:px-8' ref={dropdownRef}>
						{TABS.map((tab) => {
							const Icon = tab.icon;
							const isActive = tab.children ? hasActiveChild(tab) : activeTab === tab.id;
							const isDropdownOpen = openDropdown === tab.id;
							
							if (tab.children) {
								// Dropdown menu tab
								return (
									<div key={tab.id} className='relative'>
										<button
											onClick={() => setOpenDropdown(isDropdownOpen ? null : tab.id)}
											aria-label={`${tab.label} menu`}
											className={`group relative flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 snap-center ${
												isActive
													? "scale-105 bg-linear-to-br from-emerald-50 to-sky-50 text-emerald-600 border-2 border-emerald-300 shadow-md shadow-emerald-500/20 dark:from-emerald-950/50 dark:to-sky-950/50 dark:text-emerald-400 dark:border-emerald-500/40 dark:shadow-emerald-500/10"
													: "border border-slate-200 text-slate-600 hover:scale-105 hover:border-emerald-200 hover:bg-white hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500/20 dark:hover:bg-slate-900 dark:hover:text-slate-100"
											}`}
										>
											<Icon
												className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
													isActive ? "scale-110" : "group-hover:scale-110"
												}`}
											/>
											<span>{tab.label}</span>
											<HiChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
										</button>
										<AnimatePresence>
											{isDropdownOpen && (
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -10 }}
													transition={{ duration: 0.15 }}
													className='absolute left-0 top-full z-100 mt-1 min-w-[200px] w-max overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900'
												>
													{tab.children.map((child) => (
														<button
															key={child.id}
															onClick={() => {
																setActiveTab(child.id);
																setOpenDropdown(null);
															}}
															className={`flex w-full items-center px-4 py-2.5 text-sm font-medium transition-colors ${
																activeTab === child.id
																	? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
																	: 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
															}`}
														>
															{child.label}
														</button>
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								);
							}
							
							// Regular tab
							return (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									aria-label={`Switch to ${tab.label}`}
									className={`group relative flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 snap-center ${
										isActive
											? "scale-105 bg-linear-to-br from-emerald-50 to-sky-50 text-emerald-600 border-2 border-emerald-300 shadow-md shadow-emerald-500/20 dark:from-emerald-950/50 dark:to-sky-950/50 dark:text-emerald-400 dark:border-emerald-500/40 dark:shadow-emerald-500/10"
											: "border border-slate-200 text-slate-600 hover:scale-105 hover:border-emerald-200 hover:bg-white hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500/20 dark:hover:bg-slate-900 dark:hover:text-slate-100"
									}`}
								>
									<Icon
										className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
											isActive ? "scale-110" : "group-hover:scale-110"
										}`}
									/>
									<span>{tab.label}</span>
								</button>
							);
						})}
					</div>

					{/* Mobile: Hamburger menu */}
					<div className='sm:hidden px-4 py-3' ref={menuRef}>
						<div className='flex items-center justify-between'>
							<button
								onClick={() => setMenuOpen(!menuOpen)}
								className='flex items-center gap-2 p-2 text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors'
								aria-label='Toggle navigation menu'
							>
								<svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
								</svg>
								<span className='text-sm font-medium'>Menu</span>
							</button>
							<span className='text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider'>
								{getActiveTabLabel()}
							</span>
						</div>
						<AnimatePresence>
							{menuOpen && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.2 }}
									className='mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900'
								>
									{TABS.map((tab) => {
										const Icon = tab.icon;
										const isActiveParent = tab.children ? hasActiveChild(tab) : activeTab === tab.id;
										
										if (tab.children) {
											// Dropdown parent in mobile
											return (
												<div key={tab.id} className='border-b border-slate-100 dark:border-slate-800 last:border-b-0'>
													<div
														className={`flex w-full items-center gap-3 px-4 py-3 text-sm font-medium ${
															isActiveParent
																? 'bg-emerald-50/50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400'
																: 'text-slate-500 dark:text-slate-400'
														}`}
													>
														<Icon className='h-5 w-5' />
														{tab.label}
													</div>
													<div className='bg-slate-50 dark:bg-slate-800/50'>
														{tab.children.map((child) => (
															<button
																key={child.id}
																onClick={() => {
																	setActiveTab(child.id);
																	setMenuOpen(false);
																}}
																className={`flex w-full items-center gap-3 px-4 py-2.5 pl-12 text-sm font-medium transition-colors ${
																	activeTab === child.id
																		? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
																		: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
																}`}
															>
																{child.label}
															</button>
														))}
													</div>
												</div>
											);
										}
										
										// Regular tab in mobile
										return (
											<button
												key={tab.id}
												onClick={() => {
													setActiveTab(tab.id);
													setMenuOpen(false);
												}}
												className={`flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-b border-slate-100 dark:border-slate-800 last:border-b-0 ${
													isActiveParent
														? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
														: 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
												}`}
											>
												<Icon className='h-5 w-5' />
												{tab.label}
											</button>
										);
									})}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</nav>
			</header>

			{/* Content */}
			<main className='mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeTab}
						variants={tabContentVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						{renderContent()}
					</motion.div>
				</AnimatePresence>
			</main>
		</div>
	);
}
