import { personalData } from '@/utils/data/personal-data';
import { projectsData } from '@/utils/data/projects-data';
import { BsArrowUpRight, BsBriefcase, BsCodeSlash } from 'react-icons/bs';

function RecruiterFocus() {
  const caseStudies = projectsData
    .filter((project) => project.recruiterCaseStudy)
    .sort((left, right) => left.recruiterCaseStudy.order - right.recruiterCaseStudy.order);

  return (
    <section className="relative my-16 lg:my-24" aria-labelledby="recruiter-focus-title">
      <div className="absolute left-1/2 top-24 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16f2b3]">Recruiter snapshot</p>
        <h2 id="recruiter-focus-title" className="mt-3 text-3xl font-bold text-white md:text-4xl">Backend depth with delivery ownership</h2>
        <p className="mt-4 text-sm leading-6 text-[#b7b3ca] md:text-base">Evidence of the systems, modernization work, and technical scope behind the profile.</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {personalData.recruiterProfile.strengths.map((strength) => (
          <article key={strength.title} className="rounded-xl border border-[#2a2450] bg-[#11152c]/80 p-6">
            <BsCodeSlash className="text-[#16f2b3]" size={26} />
            <h3 className="mt-4 text-lg font-semibold text-white">{strength.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#b7b3ca]">{strength.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-4">
        <span className="h-px flex-1 bg-[#2a2450]" />
        <h2 className="text-xl font-semibold text-white">Selected impact</h2>
        <span className="h-px flex-1 bg-[#2a2450]" />
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((project) => (
          <article key={project.id} className="flex h-full flex-col rounded-xl border border-[#2a2450] bg-gradient-to-br from-[#151a35] to-[#0d1224] p-6">
            <BsBriefcase className="text-pink-500" size={24} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#16f2b3]">{project.role.join(' · ')}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-[#b7b3ca]">{project.recruiterCaseStudy.context}</p>
            <p className="mt-4 text-sm leading-6 text-[#d3d8e8]">{project.recruiterCaseStudy.contribution}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => <span key={tool} className="rounded-full border border-[#3a315f] px-2 py-1 text-xs text-[#16f2b3]">{tool}</span>)}
            </div>
            <div className="mt-6 border-t border-[#2a2450] pt-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-white"><BsArrowUpRight className="text-pink-500" /> What this proves</p>
              <p className="mt-2 text-sm leading-6 text-[#b7b3ca]">{project.recruiterCaseStudy.proof}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecruiterFocus;
