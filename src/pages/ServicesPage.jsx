import RevealSection from "../components/RevealSection";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteData";

function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <RevealSection>
        <p className="corp-title text-sm font-semibold uppercase tracking-widest">Services</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1F2937]">Industrial Services Built For Scale</h1>
        <p className="mt-6 max-w-3xl text-[#6B7280]">
          Our engineering and fabrication teams deliver high-performance capabilities across manufacturing, heavy structures, and EPC execution.
        </p>
        <div className="mt-4 h-1 w-20 rounded bg-[#0F3D2E]" />
      </RevealSection>

      <RevealSection className="mt-12 rounded-xl bg-[#F5F5F5] p-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </RevealSection>
    </main>
  );
}

export default ServicesPage;
