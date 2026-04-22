import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";
import { company, founder, values } from "../data/siteData";

function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <RevealSection>
        <p className="corp-title text-sm font-semibold uppercase tracking-widest">About Us</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1F2937]">Engineering Excellence With Industrial Depth</h1>
        <p className="mt-6 max-w-3xl text-[#6B7280]">
          {company.name}, founded in {company.founded} and based in {company.location}, is an industrial engineering company focused on fabrication quality, reliable delivery, and long-term client value.
        </p>
      </RevealSection>

      <RevealSection className="mt-14 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-[#0F3D2E]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#0F3D2E]">Mission</h2>
          <p className="mt-4 text-[#6B7280]">
            Deliver high-quality engineering solutions that strengthen industrial operations with precision, safety, and measurable performance.
          </p>
        </article>
        <article className="rounded-xl border border-[#0F3D2E]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#0F3D2E]">Vision</h2>
          <p className="mt-4 text-[#6B7280]">
            Be a leading force in industrial innovation by building systems and infrastructure that power future-ready industries.
          </p>
        </article>
      </RevealSection>

      <RevealSection className="mt-14 rounded-xl bg-[#F5F5F5] p-8">
        <h2 className="text-2xl font-semibold text-[#0F3D2E]">Core Values</h2>
        <div className="mt-3 h-1 w-20 rounded bg-[#0F3D2E]" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="rounded-lg border border-[#0F3D2E]/15 bg-white p-5 text-center font-semibold text-[#1F2937]">
              {value}
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mt-14">
        <h2 className="text-2xl font-semibold text-[#0F3D2E]">Leadership</h2>
        <div className="mt-6 max-w-md">
          <article className="rounded-xl border border-[#0F3D2E]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0F3D2E]">
            <img
              src={founder.image}
              alt={founder.name}
              className="h-56 w-full rounded-lg object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">{founder.name}</h3>
            <p className="text-sm font-medium text-[#0F3D2E]">{founder.title}</p>
            <p className="mt-2 text-sm text-[#6B7280]">{founder.shortIntro}</p>
            <Link to="/founder" className="btn-secondary mt-5 inline-flex px-4 py-2 text-sm">
              View Profile
            </Link>
          </article>
        </div>
      </RevealSection>
    </main>
  );
}

export default AboutPage;
