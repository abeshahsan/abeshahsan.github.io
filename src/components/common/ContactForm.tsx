import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormValues } from "../../types/data";

const INITIAL_FORM: ContactFormValues = {
	name: "",
	email: "",
	message: "",
};

export default function ContactForm() {
	const [values, setValues] = useState<ContactFormValues>(INITIAL_FORM);
	const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus("submitting");
		window.setTimeout(() => {
			setStatus("sent");
			setValues(INITIAL_FORM);
		}, 800);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='rounded-3xl border border-slate-100/70 bg-linear-to-br from-white via-emerald-50/40 to-white p-8 shadow-[0_30px_100px_-70px] shadow-emerald-500/20 dark:border-slate-800/70 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80 dark:shadow-black/40'
		>
			<div className='space-y-6'>
				<label className='block'>
					<span className='text-sm font-medium text-slate-600 dark:text-slate-300'>Name</span>
					<input
						type='text'
						name='name'
						required
						value={values.name}
						onChange={handleChange}
						className='mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
						placeholder='Ada Lovelace'
					/>
				</label>
				<label className='block'>
					<span className='text-sm font-medium text-slate-600 dark:text-slate-300'>Email</span>
					<input
						type='email'
						name='email'
						required
						value={values.email}
						onChange={handleChange}
						className='mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
						placeholder='you@email.com'
					/>
				</label>
				<label className='block'>
					<span className='text-sm font-medium text-slate-600 dark:text-slate-300'>Message</span>
					<textarea
						name='message'
						required
						rows={4}
						value={values.message}
						onChange={handleChange}
						className='mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-emerald-500/20 dark:bg-slate-900/40 dark:text-slate-50 dark:focus:ring-emerald-500/30'
						placeholder='Tell me about your project'
					/>
				</label>
			</div>
			<button
				type='submit'
				disabled={status === "submitting"}
				className='mt-6 w-full rounded-full bg-linear-to-r from-emerald-500 via-emerald-400 to-sky-400 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 dark:from-emerald-400 dark:via-sky-500 dark:to-emerald-500'
			>
				{status === "sent" ? "Message sent" : status === "submitting" ? "Sending..." : "Send message"}
			</button>
		</form>
	);
}

