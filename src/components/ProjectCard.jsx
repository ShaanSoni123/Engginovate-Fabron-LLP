function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#0F3D2E]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0F3D2E]/0 transition duration-300 group-hover:bg-[#0F3D2E]/70" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#1F2937]">
          {project.category}
        </span>
        <div className="absolute inset-x-6 bottom-6 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mb-3 h-1 w-12 rounded bg-[#F97316]" />
          <p className="text-sm font-semibold text-white">{project.title}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#1F2937]">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#6B7280]">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
