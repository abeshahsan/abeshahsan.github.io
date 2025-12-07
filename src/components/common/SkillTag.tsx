import type { IconType } from "react-icons";
import {
	SiAmazon,
	SiDocker,
	SiExpress,
	SiFigma,
	SiGithub,
	SiGo,
	SiJavascript,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPostman,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTensorflow,
	SiTypescript,
} from "react-icons/si";
import type { Skill } from "../../types/data";

const skillIcons: Record<string, IconType> = {
	TypeScript: SiTypescript,
	JavaScript: SiJavascript,
	Python: SiPython,
	Go: SiGo,
	SQL: SiMysql,
	React: SiReact,
	"Next.js": SiNextdotjs,
	"Node.js": SiNodedotjs,
	Express: SiExpress,
	"Tailwind CSS": SiTailwindcss,
	TensorFlow: SiTensorflow,
	"Git & GitHub": SiGithub,
	Docker: SiDocker,
	AWS: SiAmazon,
	Postman: SiPostman,
	Figma: SiFigma,
};

const levelAccent: Record<string, string> = {
	Advanced:
		"border-emerald-200/80 bg-emerald-50/80 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-100",
	Intermediate:
		"border-sky-200/80 bg-sky-50/80 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-100",
	Beginner:
		"border-slate-200/80 bg-white/80 text-slate-800 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100",
};

const levelBadgeTone: Record<string, string> = {
	Advanced: "text-emerald-600 dark:text-emerald-200",
	Intermediate: "text-sky-600 dark:text-sky-200",
	Beginner: "text-slate-500 dark:text-slate-300",
};

const iconTone: Record<string, string> = {
	Advanced: "text-emerald-500",
	Intermediate: "text-sky-500",
	Beginner: "text-slate-400",
};

interface SkillTagProps {
	skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
	const Icon = skillIcons[skill.name];
	const levelClass = levelAccent[skill.level] ?? levelAccent.Beginner;
	const badgeTone = levelBadgeTone[skill.level] ?? levelBadgeTone.Beginner;
	const iconClass = iconTone[skill.level] ?? iconTone.Beginner;
	return (
		<li
			className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium shadow-sm shadow-slate-200/60 backdrop-blur transition-colors ${levelClass}`}
			aria-label={`${skill.name} proficiency ${skill.level}`}
		>
			{Icon ? (
				<Icon
					aria-hidden='true'
					className={iconClass}
					size={14}
				/>
			) : null}
			<span>{skill.name}</span>
			<span className={`text-[10px] sm:text-xs ${badgeTone}`}>{skill.level}</span>
		</li>
	);
}

