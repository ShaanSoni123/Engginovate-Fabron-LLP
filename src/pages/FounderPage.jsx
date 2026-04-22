import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";
import { founder } from "../data/siteData";

const timeline = [
  {
    year: "2013",
    title: "Career Foundation",
    description:
      "Began professional work in industrial engineering operations, focusing on execution workflows and manufacturing quality.",
  },
  {
    year: "2014-2016",
    title: "Industry Exposure",
    description:
      "Built hands-on experience across heavy fabrication environments, supplier coordination, and project delivery controls.",
  },
  {
    year: "2017",
    title: "Founded Engginovate Fabaron LLP",
    description:
      "Established the company in Surat with a clear commitment to precision fabrication and reliable engineering outcomes.",
  },
  {
    year: "2018-Present",
    title: "Growth & Scale",
    description:
      "Expanded delivery capabilities across transformer manufacturing, EPC support, and industrial engineering partnerships.",
  },
];

function FounderPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0F3D2E] text-white">
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=80"
          alt="Industrial background"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-[#0F3D2E]/85" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[320px_1fr] md:items-center">
          <img
            src={founder.image}
            alt={founder.name}
            className="h-96 w-full rounded-xl border border-white/20 object-cover shadow-lg md:h-[26rem]"
          />
          <div>
            <p className="text-sm uppercase tracking-widest text-[#F5F5F5]">Founder Profile</p>
            <h1 className="mt-3 text-4xl font-bold">{founder.name}</h1>
            <p className="mt-2 text-lg text-[#F5F5F5]/90">{founder.title}</p>
            <p className="mt-4 text-xl font-semibold text-[#F97316]">{founder.tagline}</p>
            <p className="mt-5 max-w-3xl text-[#F5F5F5]/90">
              Foram Soni leads Engginovate Fabaron LLP with a practical, quality-first mindset shaped by years of industrial execution. Her leadership combines technical depth with disciplined planning, ensuring projects move from concept to delivery with reliability and trust.
            </p>
          </div>
        </div>
      </section>

      <RevealSection className="corp-section mx-auto max-w-7xl px-6">
        <h2 className="corp-title text-3xl font-bold">The Journey</h2>
        <div className="mt-4 h-1 w-20 rounded bg-[#0F3D2E]" />
        <div className="mt-8 space-y-5 text-[#6B7280]">
          <p>
            Foram Soni started her career by working directly with industrial teams where timelines, safety, and technical clarity mattered every day. Those early years built a strong understanding of how engineering decisions translate into on-ground outcomes.
          </p>
          <p>
            As her exposure widened across fabrication-heavy environments, she learned to navigate supplier coordination, production pressure, and quality control with a structured approach. This phase shaped her belief that reliability is built through systems, not shortcuts.
          </p>
          <p>
            In 2017, she founded Engginovate Fabaron LLP in Surat to create a company centered on disciplined execution and long-term client trust. Over the past decade, the organization has grown steadily by delivering consistent engineering performance across challenging industrial requirements.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="corp-section bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="corp-title text-3xl font-bold">Experience Timeline</h2>
          <div className="mt-10 space-y-8 border-l-2 border-[#0F3D2E]/30 pl-8">
            {timeline.map((item) => (
              <article key={item.year} className="relative">
                <span className="absolute -left-[2.25rem] top-1 h-4 w-4 rounded-full bg-[#F97316]" />
                <p className="text-sm font-semibold text-[#0F3D2E]">{item.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-[#1F2937]">{item.title}</h3>
                <p className="mt-2 text-[#6B7280]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="corp-section mx-auto max-w-7xl px-6">
        <h2 className="corp-title text-3xl font-bold">Expertise & Background</h2>
        <div className="mt-4 h-1 w-20 rounded bg-[#0F3D2E]" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Education: Mechanical Engineering (Placeholder)",
            "Heavy Fabrication",
            "Transformer Manufacturing",
            "EPC Projects",
            "Industrial Engineering",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-[#0F3D2E]/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#0F3D2E]">■</p>
              <p className="mt-2 font-medium text-[#1F2937]">{item}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="corp-section bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="corp-title text-3xl font-bold">Leadership Approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Precision in Execution",
              "Quality First",
              "Long-Term Relationships",
              "Continuous Innovation",
            ].map((item) => (
              <article
                key={item}
                className="rounded-xl border border-[#0F3D2E]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0F3D2E]"
              >
                <h3 className="text-lg font-semibold text-[#1F2937]">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="corp-section mx-auto max-w-4xl px-6 text-center">
        <blockquote className="text-3xl font-semibold leading-tight text-[#0F3D2E] md:text-4xl">
          "Engineering is not just about building structures — it&apos;s about building trust that lasts."
        </blockquote>
        <div className="mx-auto mt-6 h-1 w-24 rounded bg-[#F97316]" />
      </RevealSection>

      <RevealSection className="corp-section bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0F3D2E]">Work with a team led by experience</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-primary px-6 py-3 text-sm">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary px-6 py-3 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}

export default FounderPage;
