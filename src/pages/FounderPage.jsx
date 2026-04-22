import RevealSection from "../components/RevealSection";
import { founder } from "../data/siteData";

const experienceSnapshot = [
  "19+ years in engineering and manufacturing",
  "Heavy fabrication",
  "Power sector",
  "Nuclear and defense-linked projects",
  "Industrial operations and leadership",
];

const coreExpertise = [
  "Strategic Planning",
  "Production Operations",
  "Lean Manufacturing",
  "Project Management",
  "Supply Chain & Vendor Management",
  "Capacity Planning",
];

function FounderPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-[#0F3D2E]/10 bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[320px_1fr] md:items-center">
          <img
            src={founder.image}
            alt={founder.name}
            className="h-96 w-full rounded-xl border border-[#0F3D2E]/10 object-cover shadow-sm md:h-[26rem]"
          />
          <div>
            <p className="text-sm uppercase tracking-widest text-[#0F3D2E]/70">Founder Profile</p>
            <h1 className="mt-3 text-4xl font-bold text-[#0F3D2E]">{founder.name}</h1>
            <p className="mt-2 text-lg text-[#1F2937]">Founder & CEO</p>
            <p className="mt-4 text-xl font-semibold text-[#F97316]">
              Engineering Excellence Built Over Two Decades
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#4B5563]">
              Foram Soni leads Engginovate Fabaron LLP with an execution-first mindset shaped
              through years on the shop floor, in plant leadership, and across demanding industrial
              programs. His approach is practical, steady, and grounded in quality that holds up in
              real operating conditions.
            </p>
          </div>
        </div>
      </section>

      <RevealSection className="corp-section mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-[#0F3D2E]">The Journey</h2>
        <div className="mt-4 h-1 w-20 rounded bg-[#F97316]" />
        <div className="mt-10 space-y-6 text-lg leading-9 text-[#4B5563]">
          <p>
            Foram Soni&apos;s engineering foundation began at Sardar Patel University, where he
            studied Mechatronics Engineering and graduated as a Gold Medalist. That phase built his
            technical discipline and strengthened his belief that engineering value is created when
            precision in design is matched by precision in execution.
          </p>
          <p>
            His professional journey started with Larsen &amp; Toubro, where he was exposed to
            high-precision engineering systems, large-scale manufacturing practices, and critical
            sectors including nuclear, defense, and power. Working in these environments taught him
            how decisions at every stage affect reliability, safety, and long-term performance.
          </p>
          <p>
            As responsibilities expanded, he moved beyond individual execution into team-led
            delivery. He worked with larger cross-functional groups, refined production processes,
            reduced cycle times, and coordinated with international clients where consistency and
            responsiveness were equally important. These years shaped his ability to balance technical
            depth with operational speed.
          </p>
          <p>
            The transition into leadership roles such as Plant Head and Technical Head marked a
            turning point. His focus shifted from solving isolated engineering tasks to building
            systems, setting direction, and creating accountability across operations. It was a move
            from execution to leadership, and from leadership to strategy.
          </p>
          <p>
            In 2017, he founded Engginovate Fabaron LLP with a clear intent: build an organization
            that values quality without compromise, executes with discipline, and stays independent in
            its thinking. The company was built for the long term, with attention to process, people,
            and trust-based client relationships.
          </p>
          <p>
            Today, Foram leads Engginovate Fabaron LLP with a continued focus on precision,
            efficiency, and scalable engineering solutions. His leadership style remains practical and
            grounded: solve real manufacturing problems, deliver consistently, and keep improving the
            system behind every outcome.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="corp-section border-y border-[#0F3D2E]/10 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-[#0F3D2E]">Experience at a Glance</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {experienceSnapshot.map((item) => (
              <article key={item} className="rounded-xl border border-[#0F3D2E]/10 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium leading-6 text-[#1F2937]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="corp-section mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-[#0F3D2E]">Core Expertise</h2>
        <div className="mt-4 h-1 w-20 rounded bg-[#F97316]" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreExpertise.map((item) => (
            <article key={item} className="rounded-xl border border-[#0F3D2E]/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#0F3D2E]">●</p>
              <p className="mt-2 font-medium text-[#1F2937]">{item}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="corp-section mx-auto max-w-4xl px-6 text-center">
        <blockquote className="text-3xl font-semibold leading-tight text-[#0F3D2E] md:text-4xl">
          "Engineering is not just about building structures — it&apos;s about building trust that lasts."
        </blockquote>
        <div className="mx-auto mt-6 h-1 w-24 rounded bg-[#F97316]" />
      </RevealSection>

      <RevealSection className="corp-section border-t border-[#0F3D2E]/10 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg leading-8 text-[#4B5563]">
            Foram Soni&apos;s leadership is rooted in disciplined execution, quality-driven decisions,
            and long-term thinking. His focus remains consistent: build dependable engineering
            systems that scale with demand, strengthen teams over time, and never rely on shortcuts.
          </p>
        </div>
      </RevealSection>
    </main>
  );
}

export default FounderPage;
