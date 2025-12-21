import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import SectionHeader from "../common/SectionHeader";
import { sectionVariants, containerVariants, VIEWPORT } from "../../utils/animations";

export default function Thesis() {
	return (
		<motion.section
			id='thesis'
			className='rounded-3xl sm:rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-purple-50/40 to-white p-6 sm:p-8 md:p-10 shadow-[0_40px_120px_-80px] shadow-purple-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			variants={sectionVariants}
			initial='hidden'
			whileInView='visible'
			viewport={VIEWPORT.default}
		>
			<motion.div
				className='space-y-6 sm:space-y-8'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={VIEWPORT.default}
			>
				<SectionHeader
					label='Undergrad Thesis'
					title='Research in computer vision'
					copy='Exploring weakly supervised methods for semantic segmentation.'
				/>
				<div className='space-y-4 sm:space-y-6'>
					<div className='rounded-2xl border border-slate-100/80 bg-linear-to-br from-white/90 via-purple-50/30 to-white/90 p-4 sm:p-6 shadow-[0_30px_80px_-60px] shadow-purple-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<div className='mb-3 sm:mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
							<h3 className='text-base sm:text-xl font-semibold text-slate-900 dark:text-white'>
								Weakly Supervised Semantic Segmentation Using Transformer-Based Feature Extraction
							</h3>
							<span className='text-sm font-medium text-slate-500 dark:text-slate-400 sm:shrink-0'>
								January 2024 – October 2025
							</span>
						</div>
						<div className='space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 text-left'>
							<p>
								Enhancing{" "}
								<em className='text-purple-700 dark:text-purple-300'>
									fine-grained object understanding
								</em>{" "}
								in <strong>weakly supervised semantic segmentation</strong>—where just{" "}
								<em>image-level labels</em> are available rather than expensive{" "}
								<em>pixel-level masks</em>—was the main emphasis of my undergraduate thesis. The primary
								goal was to develop more accurate and detailed{" "}
								<strong className='text-purple-700 dark:text-purple-300'>
									Class Activation Maps (CAMs)
								</strong>
								, which serve as the foundation for segmentation pipelines with minimal supervision. I
								employed <strong className='text-purple-600 dark:text-purple-400'>UniCL</strong>{" "}
								alongside a{" "}
								<strong className='text-purple-600 dark:text-purple-400'>Swin Transformer</strong>,
								opting for this combination over commonly used encoders such as{" "}
								<span className='font-semibold'>CLIP</span> or{" "}
								<span className='font-semibold'>ViT</span>, to enhance the capture of{" "}
								<em>local features</em>. The{" "}
								<em className='text-purple-700 dark:text-purple-300'>
									windowed self-attention mechanism
								</em>{" "}
								of the Swin Transformer enabled better <strong>local feature representation</strong> and
								greater <strong>spatial consistency</strong>.
							</p>
							<p>I experimented with multiple stages of the WSSS pipeline, including:</p>
							<ul className='space-y-2 text-sm'>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
									<span>CAM generation using transformer-based features</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
									<span>Refinement and smoothing through affinity-based consistency</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
									<span>
										Utilizing intermediate encoder features to improve boundary precision and reduce
										noise
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
									<span>
										Iterative mask enhancement to recover fine-grained details in complex regions
									</span>
								</li>
							</ul>
							<p>
								My method generated segmentation masks with{" "}
								<strong className='text-emerald-700 dark:text-emerald-300'>clearer boundaries</strong>,{" "}
								<strong>more uniform region coverage</strong>, and{" "}
								<strong>enhanced preservation of fine details</strong> compared to conventional
								techniques. The final model achieved a{" "}
								<strong className='text-purple-700 dark:text-purple-300'>mean IoU of 50%</strong>,
								which, while below the <em>SOTA benchmark</em>{" "}
								<span className='text-slate-500 dark:text-slate-400'>(mean IoU of 74%)</span>,
								demonstrated{" "}
								<strong className='text-emerald-600 dark:text-emerald-400'>
									significant improvements
								</strong>{" "}
								in <em>local detail sharpness</em>, <em>object boundary accuracy</em>, and{" "}
								<em>spatial coherence</em> across many categories.
							</p>
							<div className='mt-6 rounded-xl border border-purple-100/70 bg-purple-50/50 p-4 dark:border-purple-500/20 dark:bg-purple-500/5'>
								<h4 className='mb-3 text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300'>
									This project strengthened my practical understanding of:
								</h4>
								<ul className='space-y-2 text-sm'>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>Transformer architectures (Swin, ViT-family, UniCL)</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>Weakly supervised segmentation pipelines</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>CAM refinement, affinity propagation, and mask generation</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>Designing and evaluating ML experiments</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>Building reproducible research codebases</span>
									</li>
								</ul>
							</div>
							<div className='mt-6 flex justify-start'>
								<a
									href='https://github.com/abeshahsan/CleanWeclip--maybe'
									target='_blank'
									rel='noopener noreferrer'
									className='cta-secondary inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-5 py-2.5 text-sm font-semibold text-purple-700 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md dark:border-purple-700/70 dark:bg-slate-900/80 dark:text-purple-200 dark:hover:border-purple-600 dark:hover:bg-slate-900'
								>
									<FiGithub className='h-4 w-4' />
									View on GitHub
								</a>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
}
