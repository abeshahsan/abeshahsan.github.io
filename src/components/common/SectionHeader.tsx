interface SectionHeaderProps {
	label: string;
	title: string;
	copy?: string;
}

export default function SectionHeader({ label, title, copy }: SectionHeaderProps) {
	return (
		<div className="flex flex-col gap-2 text-left">
			<span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{label}</span>
			<h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">{title}</h2>
			{copy ? <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">{copy}</p> : null}
		</div>
	);
}
