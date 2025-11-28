import SectionHeader from "../common/SectionHeader";
import ContactForm from "../common/ContactForm";

const CONTACT_INFO = [
	{ label: "Email", value: "hello@abesh.dev", href: "mailto:hello@abesh.dev" },
	{ label: "Location", value: "Toronto, Canada" },
	{ label: "Availability", value: "Open to senior/principal roles" },
];

export default function Contact() {
	return (
		<section id="contact" className="rounded-[2.25rem] border border-slate-200 bg-white/95 p-10 shadow-[0_50px_140px_-90px] shadow-slate-900/30 dark:border-slate-800 dark:bg-slate-950/85">
			<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<div className="space-y-6">
					<SectionHeader label="Contact" title="Let's collaborate" copy="Fueled by teams shipping user-focused ML, design systems, and platform tooling." />
					<ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
						{CONTACT_INFO.map((item) => (
							<li key={item.label} className="flex items-center gap-2">
								<span className="text-xs uppercase tracking-[0.4em] text-slate-400">{item.label}</span>
								{item.href ? (
									<a href={item.href} className="font-semibold text-slate-900 transition hover:text-emerald-500 dark:text-white">
										{item.value}
									</a>
								) : (
									<span className="font-semibold text-slate-900 dark:text-white">{item.value}</span>
								)}
							</li>
						))}
					</ul>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}
