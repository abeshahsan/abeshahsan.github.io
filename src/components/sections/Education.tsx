import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { HiAcademicCap } from "react-icons/hi";
import {
  sectionVariants,
  containerVariants,
  itemVariants,
  VIEWPORT,
} from "../../utils/animations";

const EDUCATION_DATA = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Islamic University of Technology (IUT)",
    location: "Gazipur, Bangladesh",
    duration: "June 2021 – October 2025",
    result: "CGPA: 3.72 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Thakurgaon Govt College",
    location: "Thakurgaon, Bangladesh",
    year: "2020",
    result: "GPA: 5.00 / 5.00 (Science)",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Thakurgaon Govt Boys High School",
    location: "Thakurgaon, Bangladesh",
    year: "2018",
    result: "GPA: 5.00 / 5.00 (Science)",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="rounded-3xl border border-slate-100/70 bg-linear-to-br from-white via-slate-50 to-white p-6 sm:p-8 md:p-10 shadow-[0_40px_120px_-80px] shadow-slate-900/10 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.default}
    >
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.default}
      >
        <SectionHeader
          label="Education"
          title="Academic background"
          copy=""
        />

        <div className="divide-y divide-slate-200/60 dark:divide-slate-800">
          {EDUCATION_DATA.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="flex gap-4 py-4"
            >
              <HiAcademicCap className="mt-1 h-5 w-5 shrink-0 text-primary dark:text-primary/90" />

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>

                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.duration
                      ? edu.duration
                      : `Passing Year: ${edu.year}`}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {edu.institution}, {edu.location}
                </p>

                <p className="mt-1 text-sm font-medium text-primary dark:text-primary/90">
                  {edu.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

