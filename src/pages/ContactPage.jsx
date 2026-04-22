import RevealSection from "../components/RevealSection";

function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <RevealSection>
        <p className="corp-title text-sm font-semibold uppercase tracking-widest">Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1F2937]">Let's Build What Industry Needs Next</h1>
        <div className="mt-4 h-1 w-20 rounded bg-[#0F3D2E]" />
      </RevealSection>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <RevealSection className="rounded-xl border border-[#0F3D2E]/10 bg-[#F5F5F5] p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#0F3D2E]">Get in Touch</h2>
          <p className="mt-4 text-[#6B7280]">Surat, Gujarat, India</p>
          <p className="mt-1 text-[#6B7280]">foram@engginovate.com</p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded border border-[#0F3D2E]/25 bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition focus:border-[#0F3D2E]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border border-[#0F3D2E]/25 bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition focus:border-[#0F3D2E]"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full rounded border border-[#0F3D2E]/25 bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition focus:border-[#0F3D2E]"
            />
            <button
              type="button"
              className="btn-primary px-6 py-3 text-sm"
            >
              Send Message
            </button>
          </form>
        </RevealSection>

        <RevealSection className="overflow-hidden rounded-xl border border-[#0F3D2E]/15 shadow-sm">
          <iframe
            title="Engginovate Fabaron LLP location"
            src="https://maps.google.com/maps?q=Surat%2C%20Gujarat%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[500px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </RevealSection>
      </div>
    </main>
  );
}

export default ContactPage;
