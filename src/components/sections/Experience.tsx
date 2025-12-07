import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

export default function Experience() {
	return (
		<motion.section
			id='experience'
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-sky-50/40 to-white p-10 shadow-[0_40px_120px_-80px] shadow-sky-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className='space-y-8'>
				<SectionHeader
					label='Experience'
					title='Building interactive systems'
					copy='Hands-on training in game development and interactive design.'
				/>
				<div className='space-y-6'>
					<div className='rounded-2xl border border-slate-100/80 bg-linear-to-br from-white/90 via-sky-50/30 to-white/90 p-6 shadow-[0_30px_80px_-60px] shadow-sky-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
							<h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
								Game Development Trainee
							</h3>
							<span className='text-sm font-medium text-slate-500 dark:text-slate-400'>
								October 2024
							</span>
						</div>
						<p className='mb-4 text-base font-medium text-emerald-600 dark:text-emerald-400'>
							Battery Low Interactive
						</p>
						<div className='space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 text-justify'>
							<p>
								During my industrial training at Battery Low Interactive, I learned to design and build
								games from the ground up using Unity and C#. I developed several mini-games to understand
								core game mechanics, physics interactions, scoring systems, UI workflows, and scene
								management.
							</p>
							<p>
								My final project was a 2D physics-based game where players control a rotating stone and
								use centrifugal force to hit targets. I implemented:
							</p>
							<ul className='space-y-2 pl-5'>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400' />
									<span>Custom physics-driven movement mechanics</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400' />
									<span>Collision handling and object interactions</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400' />
									<span>Score calculation and progression logic</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400' />
									<span>Interactive UI elements, animations, and assets</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400' />
									<span>Scene composition, lighting, and optimization basics</span>
								</li>
							</ul>
							<p>
								I also explored AR/VR fundamentals, animation controllers, and general best practices for
								interactive system development. The training strengthened my problem-solving skills and
								improved my understanding of game logic, physics simulation, and real-time interaction
								design.
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
