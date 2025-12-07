import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const socials = [
	{ label: "GitHub", href: "https://github.com/abeshahsan", icon: FiGithub },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/abesh-ahsan-413282280/", icon: FiLinkedin },
	{ label: "Email", href: "mailto:abeshahsan2002@gmail.com", icon: FiMail },
];

export default function Footer() {
		return (
		<footer className='border-t border-slate-200/70 bg-white/70 py-8 sm:py-10 text-xs sm:text-sm text-slate-500 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60'>
			<div className='mx-auto flex max-w-6xl flex-col items-center gap-4 sm:gap-6 px-4 sm:px-6'>
				<div className='flex justify-center gap-3 sm:gap-4'>
					{socials.map((social) => {
						const Icon = social.icon;
						return (
							<a
								key={social.href}
								href={social.href}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={social.label}
								className='rounded-full border border-slate-200/70 bg-white/70 p-2.5 sm:p-3 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 hover:scale-110 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-emerald-500/30 dark:hover:bg-slate-900 dark:hover:text-emerald-400'
								>
								<Icon className='h-4 w-4 sm:h-5 sm:w-5' />
							</a>
						);
					})}
				</div>
				<p className='flex items-center gap-1.5 sm:gap-2 text-center text-slate-600 dark:text-slate-400'>
					Built with <FiHeart className='h-3 w-3 sm:h-4 sm:w-4 text-rose-500' /> by Abesh Ahsan &copy; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
}

