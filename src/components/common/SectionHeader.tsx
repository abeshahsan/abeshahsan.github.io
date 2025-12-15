import { motion } from "framer-motion";
import { headerTextVariants, fadeInVariants, VIEWPORT } from "../../utils/animations";

interface SectionHeaderProps {
	label: string;
	title: string;
	copy?: string;
}

export default function SectionHeader({ label, title, copy }: SectionHeaderProps) {
	return (
		<div className='flex flex-col gap-1.5 sm:gap-2 text-left'>
			<motion.span
				className='inline-flex w-fit items-center rounded-full border border-emerald-100/70 bg-emerald-50/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.55rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200'
				variants={fadeInVariants}
				initial='hidden'
				whileInView='visible'
				viewport={VIEWPORT.default}
			>
				{label}
			</motion.span>
			<motion.h2
				className='bg-linear-to-r from-slate-900 via-emerald-700 to-slate-900 bg-clip-text text-lg sm:text-xl md:text-2xl font-semibold italic text-transparent dark:from-white dark:via-emerald-300 dark:to-white'
				variants={headerTextVariants}
				initial='hidden'
				whileInView='visible'
				viewport={VIEWPORT.default}
			>
				{title}
			</motion.h2>
			{copy ? (
				<motion.p
					className='max-w-2xl text-sm sm:text-base text-slate-600/90 dark:text-slate-300/90'
					variants={fadeInVariants}
					initial='hidden'
					whileInView='visible'
					viewport={VIEWPORT.default}
				>
					{copy}
				</motion.p>
			) : null}
		</div>
	);
}
