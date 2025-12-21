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

interface SkillTagProps {
	skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
	const Icon = skillIcons[skill.name];
	return (
		<li
			className='inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-emerald-700 shadow-sm shadow-slate-200/60 backdrop-blur transition-colors dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-100'
			aria-label={skill.name}
		>
			{Icon ? (
				<Icon
					aria-hidden='true'
					className='text-emerald-500'
					size={14}
				/>
			) : null}
			<span>{skill.name}</span>
		</li>
	);
}

