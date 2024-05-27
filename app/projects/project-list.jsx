import ProjectCard from "../components/homepage/projects/project-card"

const ProjectList = ({projectsData}) => {
    return (
    <div className="flex flex-col gap-3 md:gap-5 lg:gap-8 xl:gap-10">
    {projectsData.map ((project, index) => (
      <div
        id={`sticky-card-${index + 1}`}
        key={index}
        className="sticky-card w-full mx-auto max-w-2xl sticky"
      >
        <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
          <ProjectCard project={project} />
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProjectList;