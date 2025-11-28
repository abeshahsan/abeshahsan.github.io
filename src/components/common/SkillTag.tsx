import type { Skill } from "../../types/data";

interface SkillTagProps {
	skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
	return (
		<li
			className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm shadow-slate-200/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-100"
			aria-label={`${skill.name} proficiency ${skill.level}`}
		>
			<span>{skill.name}</span>
			<span className="text-xs text-slate-500 dark:text-slate-400">{skill.level}</span>
		</li>
	);
}
