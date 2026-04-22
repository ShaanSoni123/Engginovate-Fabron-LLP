import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import RevealSection from "../components/RevealSection";
import ServiceCard from "../components/ServiceCard";
import { company, founder, projects, services, stats } from "../data/siteData";

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0F3D2E] text-white">
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=80"
          alt="Industrial engineering plant"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0F3D2E]/95 via-[#0F3D2E]/85 to-[#0F3D2E]/95" />
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="text-sm uppercase tracking-[0.2em] text-[#F5F5F5]">{company.motto}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{company.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#F5F5F5]/90">{company.heroSubtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary px-6 py-3 text-sm">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary bg-white px-6 py-3 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <RevealSection className="corp-section mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="corp-title text-sm font-semibold uppercase tracking-widest">About Engginovate Fabaron LLP</p>
            <h2 className="mt-4 text-3xl font-bold text-[#1F2937]">Built in Surat. Trusted Across Industrial India.</h2>
            <p className="mt-4 text-[#6B7280]">
              Since {company.founded}, we have delivered precision engineering and heavy fabrication solutions for high-demand industrial and energy applications. Our team combines technical rigor, disciplined execution, and quality-first delivery.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
            alt="Industrial fabrication workshop"
            className="h-80 w-full rounded-xl object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </RevealSection>

      <RevealSection className="corp-section bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="corp-title text-3xl font-bold">Services Overview</h2>
          <div className="mt-4 h-1 w-20 rounded bg-[#0F3D2E]" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="corp-section mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-2xl border border-[#0F3D2E]/10 bg-white p-8 shadow-sm md:grid-cols-[340px_1fr] md:items-center">
          <img
            src={founder.image}
            alt={founder.name}
            className="h-96 w-full rounded-xl object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6B7280]">Leadership</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F3D2E]">Led by Experience</h2>
            <p className="mt-4 max-w-3xl text-[#6B7280]">{founder.previewIntro}</p>
            <Link to="/founder" className="btn-primary mt-7 inline-flex px-6 py-3 text-sm">
              Meet the Founder
            </Link>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="corp-section mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="corp-title text-3xl font-bold">Featured Projects</h2>
            <div className="mt-3 h-1 w-20 rounded bg-[#0F3D2E]" />
          </div>
          <Link to="/projects" className="text-sm font-semibold text-[#0F3D2E] hover:text-[#F97316]">
            View all projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="corp-section bg-[#F5F5F5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-[#0F3D2E]/15 bg-white p-6">
              <p className="text-3xl font-bold text-[#0F3D2E]">{stat.value}</p>
              <p className="mt-2 text-sm text-[#6B7280]">{stat.label}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </>
  );
}

export default HomePage;
