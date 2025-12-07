import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

export default function Thesis() {
	return (
		<motion.section
			id='thesis'
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-purple-50/40 to-white p-10 shadow-[0_40px_120px_-80px] shadow-purple-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className='space-y-8'>
				<SectionHeader
					label='Thesis'
					title='Research in computer vision'
					copy='Exploring weakly supervised methods for semantic segmentation.'
				/>
				<div className='space-y-6'>
					<div className='rounded-2xl border border-slate-100/80 bg-linear-to-br from-white/90 via-purple-50/30 to-white/90 p-6 shadow-[0_30px_80px_-60px] shadow-purple-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
							<h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
								Weakly Supervised Semantic Segmentation Using Transformer-Based Feature Extraction
							</h3>
							<span className='text-sm font-medium text-slate-500 dark:text-slate-400 sm:shrink-0'>
								January 2024 – October 2025
							</span>
						</div>
						<div className='space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300'>
							<p>
								Enhancing fine-grained object understanding in weakly supervised semantic
								segmentation—where just image-level labels are available rather than expensive
								pixel-level masks—was the main emphasis of my undergraduate thesis. The primary goal was
								to develop more accurate and detailed Class Activation Maps (CAMs), which serve as the
								foundation for segmentation pipelines with minimal supervision. I employed UniCL
								alongside a Swin Transformer, opting for this combination over commonly used encoders
								such as CLIP or ViT, to enhance the capture of local features. The windowed
								self-attention mechanism of the Swin Transformer enabled better local feature
								representation and greater spatial consistency.
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
								My method generated segmentation masks with clearer boundaries, more uniform region
								coverage, and enhanced preservation of fine details compared to conventional techniques.
								The final model achieved a mean IoU of 50%, which, while below the SOTA benchmark, (mean
								IoU of 74%), demonstrated significant improvements in local detail sharpness, object
								boundary accuracy, and spatial coherence across many categories.
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
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
