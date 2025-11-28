import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import SkillTag from "../common/SkillTag";
import LoadingState from "../common/LoadingState";
import type { Skill } from "../../types/data";

const SOURCES = [
	{ id: "languages", label: "Languages", path: "/skills/languages.json" },
	{ id: "frameworks", label: "Frameworks", path: "/skills/frameworks.json" },
	{ id: "tools", label: "Tools", path: "/skills/tools.json" },
];

export default function Skills() {
	const [data, setData] = useState<Record<string, Skill[]>>({});
	const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
	const [error, setError] = useState<string>("");

	useEffect(() => {
		let canceled = false;
		async function loadSkills() {
			try {
				setStatus("loading");
				const responses = await Promise.all(
					SOURCES.map(async (source) => {
						const res = await fetch(source.path);
						if (!res.ok) throw new Error(`Unable to load ${source.label}`);
						const payload: Skill[] = await res.json();
						return [source.id, payload] as const;
					})
				);
				if (canceled) return;
				setData(Object.fromEntries(responses));
				setStatus("ready");
			} catch (err) {
				if (canceled) return;
				setStatus("error");
				setError(err instanceof Error ? err.message : "Unknown error");
			}
		}

		loadSkills();
		return () => {
			canceled = true;
		};
	}, []);

	return (
		<motion.section
			id='skills'
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-emerald-50/40 to-white p-10 shadow-[0_40px_120px_-80px] shadow-emerald-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className='space-y-8'>
				<SectionHeader
					label='Skills'
					title='Tools I rely on'
					copy='Continuously evolving stack spanning product, platform, and ML systems.'
				/>
				{status === "loading" ? <LoadingState label='Loading skills' /> : null}
				{status === "error" ? (
					<p className='rounded-2xl border border-red-200 bg-red-50/60 px-4 py-3 text-sm text-red-600 dark:border-red-500/40 dark:bg-red-500/5 dark:text-red-200'>
						{error}
					</p>
				) : null}
				<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{SOURCES.map((source) => (
						<div
							key={source.id}
							className='relative space-y-4 rounded-2xl border border-slate-100/80 bg-linear-to-br from-white/90 via-emerald-50/30 to-white/90 p-6 shadow-[0_30px_80px_-60px] shadow-emerald-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'
						>
							<h3 className='text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-300'>
								{source.label}
							</h3>
							<ul className='flex flex-wrap gap-3'>
								{data[source.id]?.map((skill) => (
									<SkillTag
										key={skill.name}
										skill={skill}
									/>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
}

