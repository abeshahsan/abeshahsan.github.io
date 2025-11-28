interface SectionHeaderProps {
	label: string;
	title: string;
	copy?: string;
}

export default function SectionHeader({ label, title, copy }: SectionHeaderProps) {
	return (
		<div className='flex flex-col gap-2 text-left'>
			<span className='inline-flex w-fit items-center rounded-full border border-emerald-100/70 bg-emerald-50/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200'>
				{label}
			</span>
			<h2 className='bg-linear-to-r from-slate-900 via-emerald-700 to-slate-900 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:via-emerald-300 dark:to-white'>
				{title}
			</h2>
			{copy ? <p className='max-w-2xl text-base text-slate-600/90 dark:text-slate-300/90'>{copy}</p> : null}
		</div>
	);
}

