import SectionHeader from "../common/SectionHeader";
import ContactForm from "../common/ContactForm";
import { motion } from "framer-motion";

const CONTACT_INFO = [
	{ label: "Email", value: "hello@abesh.dev", href: "mailto:hello@abesh.dev" },
	{ label: "Location", value: "Toronto, Canada" },
	{ label: "Availability", value: "Open to senior/principal roles" },
];

export default function Contact() {
	return (
		<motion.section
			id='contact'
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-slate-50 to-emerald-50/35 p-10 shadow-[0_50px_140px_-90px] shadow-emerald-500/25 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
				<div className='space-y-6'>
					<SectionHeader
						label='Contact'
						title="Let's collaborate"
						copy='Fueled by teams shipping user-focused ML, design systems, and platform tooling.'
					/>
					<ul className='grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2'>
						{CONTACT_INFO.map((item) => (
							<li
								key={item.label}
								className='flex flex-col gap-1 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/50 sm:gap-2'
							>
								<span className='text-xs uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-300'>
									{item.label}
								</span>
								{item.href ? (
									<a
										href={item.href}
										className='font-semibold text-slate-900 transition hover:text-emerald-500 dark:text-white'
									>
										{item.value}
									</a>
								) : (
									<span className='font-semibold text-slate-900 dark:text-white'>{item.value}</span>
								)}
							</li>
						))}
					</ul>
				</div>
				<ContactForm />
			</div>
		</motion.section>
	);
}

