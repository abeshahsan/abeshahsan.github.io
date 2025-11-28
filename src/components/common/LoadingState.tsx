interface LoadingStateProps {
	label?: string;
}

export default function LoadingState({ label = "Loading" }: LoadingStateProps) {
	return (
		<div className="flex items-center gap-3 text-slate-500 dark:text-slate-300" role="status" aria-live="polite">
			<span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
			<span className="text-sm font-medium">{label}...</span>
		</div>
	);
}
