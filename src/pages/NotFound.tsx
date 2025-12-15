export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16 dark:bg-slate-900'>
			<h1 className='mb-4 text-6xl font-bold text-slate-900 dark:text-slate-100'>404</h1>
			<p className='mb-8 text-center text-lg text-slate-700 dark:text-slate-300'>
				Oops! The page you're looking for doesn't exist.
			</p>
			<a
				href={import.meta.env.BASE_URL}
				className='rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 dark:shadow-emerald-500/20'
			>
				Go Back Home
			</a>
		</div>
	);
}
