import SectionHeader from "../common/SectionHeader";
import ContactForm from "../common/ContactForm";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";

const CONTACT_INFO = [
	{ label: "Email", value: "abeshahsan2002@gmail.com", href: "mailto:abeshahsan2002@gmail.com", icon: HiMail },
	{ label: "Phone", value: "+880 17-960-3333-1", href: "tel:+8801796033331", icon: HiPhone },
	{ label: "Location", value: "Uttara, Dhaka, Bangladesh", icon: HiLocationMarker },
	{ label: "Availability", value: "Open to junior developer or software engineer roles", icon: HiClock },
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
					copy="Excited about software engineering and machine learning opportunities. Let's discuss how I can contribute to your team."
				/>
				<ul className='grid gap-3 text-sm text-slate-600 dark:text-slate-300'>
						{CONTACT_INFO.map((item) => {
							const Icon = item.icon;
							return (
								<li
									key={item.label}
									className='flex gap-3 rounded-2xl border border-slate-200/70 bg-linear-to-br from-white to-slate-50/50 px-4 py-4 backdrop-blur transition hover:border-emerald-200 hover:shadow-md dark:border-slate-800/70 dark:from-slate-900/80 dark:to-slate-900/50 dark:hover:border-emerald-500/30'
								>
									<Icon className='mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400' />
									<div className='flex flex-col gap-1'>
										<span className='text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400'>
											{item.label}
										</span>
										{item.href ? (
											<a
												href={item.href}
												className='break-all font-semibold text-slate-900 transition hover:text-emerald-600 dark:text-slate-100 dark:hover:text-emerald-400'
											>
												{item.value}
											</a>
										) : (
											<span className='font-semibold text-slate-900 dark:text-slate-100'>
												{item.value}
											</span>
										)}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<ContactForm />
			</div>
		</motion.section>
	);
}

