import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
	const [state, handleSubmit] = useForm("mblnajno");
	const [showSuccess, setShowSuccess] = useState(false);
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });

	useEffect(() => {
		if (state.succeeded) {
			setTimeout(() => {
				setShowSuccess(true);
				setFormData({ name: "", email: "", message: "" });
				setTimeout(() => setShowSuccess(false), 3000);
			}, 500);
		}
	}, [state.succeeded]);

	const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='relative'>
			{showSuccess && (
				<div className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 left-4 sm:left-auto z-50 animate-slide-up rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 sm:px-6 sm:py-4 shadow-lg dark:border-emerald-500/30 dark:bg-emerald-500/10'>
					<p className='flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300'>
						<span className='text-lg'>✓</span> Message sent successfully!
					</p>
				</div>
			)}
			<form
				onSubmit={handleSubmit}
				className='rounded-2xl sm:rounded-3xl border border-slate-100/70 bg-linear-to-br from-white via-emerald-50/40 to-white p-5 sm:p-6 md:p-8 shadow-[0_30px_100px_-70px] shadow-emerald-500/20 dark:border-slate-800/70 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80 dark:shadow-black/40'
				>
				<div className='space-y-4 sm:space-y-6'>
					<label
						htmlFor='name'
						className='block'
					>
						<span className='text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300'>Name</span>
						<input
							id='name'
							type='text'
							name='name'
							required
							value={formData.name}
							onChange={handleInputChange}
							className='mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-100/80 bg-white/80 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
							placeholder='Ada Lovelace'
							/>
						<ValidationError
							prefix='Name'
							field='name'
							errors={state.errors}
						/>
					</label>
					<label
						htmlFor='email'
						className='block'
					>
						<span className='text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300'>Email</span>
						<input
							id='email'
							type='email'
							name='email'
							required
							value={formData.email}
							onChange={handleInputChange}
							className='mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-100/80 bg-white/80 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
							placeholder='you@email.com'
							/>
						<ValidationError
							prefix='Email'
							field='email'
							errors={state.errors}
						/>
					</label>
					<label
						htmlFor='message'
						className='block'
					>
						<span className='text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300'>Message</span>
						<textarea
							id='message'
							name='message'
							required
							rows={4}
							value={formData.message}
							onChange={handleInputChange}
							className='mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-100/80 bg-white/80 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
							placeholder='Tell me about your project'
							/>
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
						/>
					</label>
				</div>
				<button
					type='submit'
					disabled={state.submitting || !isFormValid}
					className='mt-4 sm:mt-6 w-full rounded-full bg-linear-to-r from-emerald-500 via-emerald-400 to-sky-400 px-5 py-2.5 sm:px-6 sm:py-3 text-center text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:shadow-xl hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 dark:from-emerald-400 dark:via-sky-500 dark:to-emerald-500 dark:shadow-emerald-500/20'
					>
					{state.submitting ? "Sending..." : "Send message"}
				</button>
			</form>
		</div>
	);
}

