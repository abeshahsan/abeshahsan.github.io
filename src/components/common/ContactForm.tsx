import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
	const [state, handleSubmit] = useForm("mblnajno");

	if (state.succeeded) {
		return (
			<div className='rounded-3xl border border-emerald-200/70 bg-linear-to-br from-emerald-50 to-sky-50 p-8 text-center shadow-[0_30px_100px_-70px] shadow-emerald-500/20 dark:border-emerald-500/30 dark:from-emerald-500/10 dark:to-sky-500/10'>
				<p className='text-lg font-semibold text-emerald-700 dark:text-emerald-300'>✓ Message sent successfully!</p>
				<p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>I'll get back to you soon.</p>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='rounded-3xl border border-slate-100/70 bg-linear-to-br from-white via-emerald-50/40 to-white p-8 shadow-[0_30px_100px_-70px] shadow-emerald-500/20 dark:border-slate-800/70 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80 dark:shadow-black/40'
		>
			<div className='space-y-6'>
				<label htmlFor='name' className='block'>
					<span className='text-sm font-medium text-slate-600 dark:text-slate-300'>Name</span>
					<input
						id='name'
						type='text'
						name='name'
						required
						className='mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
						placeholder='Ada Lovelace'
					/>
					<ValidationError prefix='Name' field='name' errors={state.errors} />
				</label>
				<label htmlFor='email' className='block'>
					<span className='text-sm font-medium text-slate-600 dark:text-slate-300'>Email</span>
					<input
						id='email'
						type='email'
						name='email'
						required
						className='mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
						placeholder='you@email.com'
					/>
					<ValidationError prefix='Email' field='email' errors={state.errors} />
				</label>
				<label htmlFor='message' className='block'>
					<span className='text-sm font-medium text-slate-600 dark:text-slate-300'>Message</span>
					<textarea
						id='message'
						name='message'
						required
						rows={4}
						className='mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
						placeholder='Tell me about your project'
					/>
					<ValidationError prefix='Message' field='message' errors={state.errors} />
				</label>
			</div>
			<button
				type='submit'
				disabled={state.submitting}
				className='mt-6 w-full rounded-full bg-linear-to-r from-emerald-500 via-emerald-400 to-sky-400 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:shadow-xl hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 dark:from-emerald-400 dark:via-sky-500 dark:to-emerald-500 dark:shadow-emerald-500/20'
			>
				{state.submitting ? "Sending..." : "Send message"}
			</button>
		</form>
	);
}

