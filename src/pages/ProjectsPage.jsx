import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import RevealSection from "../components/RevealSection";
import { projects } from "../data/siteData";

const filters = ["All", "Energy", "Industrial", "EPC"];

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <RevealSection>
        <p className="corp-title text-sm font-semibold uppercase tracking-widest">Projects</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1F2937]">Portfolio Of Industrial Delivery</h1>
        <p className="mt-6 max-w-3xl text-[#6B7280]">
          Explore key assignments across energy infrastructure, industrial fabrication, and turnkey EPC solutions.
        </p>
        <div className="mt-4 h-1 w-20 rounded bg-[#0F3D2E]" />
      </RevealSection>

      <RevealSection className="mt-10">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-[#0F3D2E] bg-[#0F3D2E] text-white"
                  : "border-[#0F3D2E]/20 bg-white text-[#1F2937] hover:border-[#F97316] hover:text-[#F97316]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mt-10 rounded-xl bg-[#F5F5F5] p-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </RevealSection>
    </main>
  );
}

export default ProjectsPage;
