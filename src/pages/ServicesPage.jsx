import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";
import { servicesPage } from "../data/servicesPageData";

const navItems = [
  { id: "services-intro", label: "Introduction" },
  { id: "team", label: "Core team" },
  { id: "capabilities", label: "Capabilities" },
  { id: "processes", label: "Processes" },
  { id: "materials", label: "Materials & codes" },
  { id: "executed", label: "Executed jobs" },
  { id: "trading", label: "Trading" },
];

function SectionHeading({ eyebrow, title, id, dark }) {
  return (
    <div id={id} className="scroll-mt-24">
      {eyebrow ? (
        <p className={`text-sm font-semibold uppercase tracking-widest ${dark ? "text-[#FBBF24]" : "corp-title"}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`mt-2 text-3xl font-bold tracking-tight md:text-4xl ${dark ? "text-white" : "text-[#1F2937]"}`}>{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full ${dark ? "bg-white/90" : "bg-[#F97316]"}`} />
    </div>
  );
}

function ServicesPage() {
  const { hero, introduction, spotlights, coreTeam, capabilities, portableEquipment, processPhases, materials, rawMaterialChecks, designCodes, executedJobs, trading } =
    servicesPage;

  return (
    <main className="bg-white pb-20">
      <section className="border-b border-[#0F3D2E]/10 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <RevealSection>
            <p className="corp-title text-sm font-semibold uppercase tracking-widest">Services</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[#1F2937] md:text-5xl">{hero.title}</h1>
            <p className="mt-6 max-w-3xl text-lg text-[#6B7280]">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary inline-flex px-5 py-2.5 text-sm">
                Discuss a programme
              </Link>
              <Link to="/projects" className="btn-secondary inline-flex px-5 py-2.5 text-sm">
                View project portfolio
              </Link>
            </div>
          </RevealSection>

          <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-2 border-t border-[#0F3D2E]/10 pt-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-[#0F3D2E]/20 bg-white px-4 py-2 text-xs font-semibold text-[#0F3D2E] transition hover:border-[#F97316] hover:text-[#F97316] md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <RevealSection className="corp-section">
          <SectionHeading id="services-intro" eyebrow="01 — Introduction" title="Who we are and what we build" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="space-y-5 text-[#6B7280]">
              <p className="leading-relaxed">{introduction.lead}</p>
              <p className="leading-relaxed">{introduction.founderNote}</p>
              <div className="rounded-2xl border border-[#0F3D2E]/10 bg-[#F5F5F5] p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Core business</p>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#4B5563]">
                  {introduction.coreBusiness.map((line) => (
                    <li key={line.slice(0, 40)}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Four delivery divisions</p>
              <ol className="space-y-4">
                {introduction.divisions.map((div, i) => (
                  <li
                    key={div.title}
                    className="flex gap-4 rounded-xl border border-[#0F3D2E]/10 bg-white p-5 shadow-sm transition hover:border-[#F97316]/35 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#0F3D2E]">{div.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{div.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {spotlights.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-2xl border border-[#0F3D2E]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#F97316]/30 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="border-t border-[#0F3D2E]/8 p-6">
                  <h3 className="text-lg font-semibold text-[#0F3D2E]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="corp-section rounded-3xl bg-[#F5F5F5] px-6 py-14 md:px-10 md:py-16">
          <SectionHeading id="team" eyebrow="02 — Core team" title="People behind the work" />
          <p className="mt-6 max-w-3xl text-[#6B7280]">{coreTeam.intro}</p>
          <p className="mt-4 text-sm font-medium text-[#0F3D2E]">{coreTeam.workforce}</p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {coreTeam.members.map((m) => (
              <li key={m.name} className="rounded-xl border border-[#0F3D2E]/10 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#1F2937]">{m.name}</p>
                <p className="mt-1 text-xs text-[#6B7280]">{m.role}</p>
                <p className="mt-3 text-sm font-semibold text-[#F97316]">{m.experience}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-dashed border-[#0F3D2E]/25 bg-white/80 p-6 md:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">{coreTeam.branch.title}</h3>
            <p className="mt-2 text-sm text-[#6B7280]">Business development — South India</p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-[#4B5563]">
              {coreTeam.branch.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </RevealSection>

        <RevealSection className="corp-section">
          <SectionHeading id="capabilities" eyebrow="03 — Manufacturing capabilities" title="Plant and equipment" />
          <p className="mt-6 max-w-3xl text-[#6B7280]">
            Key assets are maintained for heavy lifting, precision burning, reliable welding, and controlled surface finishing — supported by portable shop tools for auxiliary operations.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.name}
                className="flex flex-col rounded-2xl border border-[#0F3D2E]/10 bg-[#FAFAFA] p-6 transition hover:border-[#0F3D2E]/25 hover:bg-white hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-[#0F3D2E]">{cap.name}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  {cap.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-[#0F3D2E]/8 pb-2 last:border-0">
                      <dt className="text-[#6B7280]">{k}</dt>
                      <dd className="max-w-[55%] text-right font-medium text-[#1F2937]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#0F3D2E]/10 bg-white p-6 md:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Portable & supporting equipment</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {portableEquipment.map((item) => (
                <li key={item} className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-xs font-medium text-[#374151] ring-1 ring-[#0F3D2E]/10">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection className="corp-section rounded-3xl bg-[#0F3D2E] px-6 py-14 text-white md:px-10 md:py-16">
          <SectionHeading id="processes" dark eyebrow="04 — Manufacturing processes" title="From drawing release to dispatch" />
          <p className="mt-6 max-w-3xl text-[#E5E7EB]">
            A stage-gated shop rhythm keeps rework low: every hold point is documented, and paint cycles are only released after dimensional and leak-test acceptance where applicable.
          </p>

          <div className="mt-12 space-y-4">
            {processPhases.map((phase, idx) => (
              <div
                key={phase.title}
                className="rounded-xl border border-white/15 border-l-4 border-l-[#F97316] bg-white/[0.06] p-6 shadow-sm md:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBBF24]">Phase {idx + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{phase.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#D1D5DB]">
                  {phase.items.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="corp-section">
          <SectionHeading id="materials" eyebrow="05 — Materials & quality basis" title="Construction materials and inward discipline" />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#0F3D2E]/10 bg-[#F5F5F5] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Carbon & low-alloy steels</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{materials.carbonAndLowAlloy}</p>
            </div>
            <div className="rounded-2xl border border-[#0F3D2E]/10 bg-[#F5F5F5] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Stainless steels</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{materials.stainless}</p>
            </div>
            <div className="rounded-2xl border border-[#0F3D2E]/10 bg-[#F5F5F5] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Non-ferrous & high-nickel alloys</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{materials.nonFerrous}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#0F3D2E]/10 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Raw material identification</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#6B7280]">
                {rawMaterialChecks.map((c) => (
                  <li key={c.slice(0, 40)}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#0F3D2E]/10 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F3D2E]">Design & construction codes</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#6B7280]">
                {designCodes.map((code) => (
                  <li key={code} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" aria-hidden />
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="corp-section rounded-3xl bg-[#F5F5F5] px-6 py-14 md:px-10 md:py-16">
          <SectionHeading id="executed" eyebrow="06 — Executed jobs" title="Representative utility-class deliveries" />
          <p className="mt-6 max-w-3xl text-[#6B7280]">
            A sample of executed tank and frame programmes for national utilities and transformer OEMs — indicative of shop capacity and documentation maturity.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {executedJobs.map((job) => (
              <li key={job.title} className="rounded-xl border border-[#0F3D2E]/10 bg-white p-6 shadow-sm transition hover:border-[#F97316]/35">
                <h3 className="text-lg font-semibold text-[#0F3D2E]">{job.title}</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  <span className="font-medium text-[#374151]">End client:</span> {job.client}
                </p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  <span className="font-medium text-[#374151]">For:</span> {job.for}
                </p>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection className="corp-section pb-4">
          <SectionHeading id="trading" eyebrow="07 — Trading business" title={trading.title} />
          <div className="mt-8 max-w-4xl rounded-2xl border-l-4 border-[#F97316] bg-[#FFFBF5] p-8 shadow-sm">
            <p className="text-base leading-relaxed text-[#4B5563]">{trading.body}</p>
          </div>
        </RevealSection>
      </div>
    </main>
  );
}

export default ServicesPage;
