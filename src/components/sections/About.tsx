import SectionHeader from "../common/SectionHeader";

const EDUCATION = [
	{ school: "University of Waterloo", detail: "BASc, Software Engineering" },
	{ school: "Recurse Center", detail: "Batch 2024, ML + Systems" },
];

const INTERESTS = ["Creative tooling", "AI safety", "Calm UI", "Type systems", "Aviation"];

export default function About() {
	return (
		<section id="about" className="rounded-[2.25rem] border border-slate-200/80 bg-white/90 p-10 shadow-[0_40px_120px_-80px] shadow-slate-900/20 dark:border-slate-800/80 dark:bg-slate-950/70">
			<div className="space-y-8">
				<SectionHeader label="About" title="Crafting thoughtful systems" copy="Ten years of building resilient platforms across healthcare, mobility, and creator ecosystems." />
				<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
					I help companies deliver end-to-end experiences—from prototyping Figma concepts to running staged rollouts for
					millions of users. I care about narrative-driven roadmaps, balanced execution, and mentoring engineers to ship with
					confidence.
				</p>
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-3 rounded-2xl border border-slate-100 p-6 dark:border-slate-800">
						<h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">Education</h3>
						<ul className="space-y-3 text-slate-700 dark:text-slate-200">
							{EDUCATION.map((item) => (
								<li key={item.school}>
									<p className="font-medium">{item.school}</p>
									<p className="text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-3 rounded-2xl border border-slate-100 p-6 dark:border-slate-800">
						<h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">Interests</h3>
						<ul className="flex flex-wrap gap-2 text-sm">
							{INTERESTS.map((interest) => (
								<li key={interest} className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
									{interest}
								</li>
							))}
						</ul>
						<a
							href="/abesh-ahsan-cv.pdf"
							className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-100"
							download
						>
							Download CV
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
