import { Link } from "react-router-dom";
import { company, navLinks } from "../data/siteData";

function Footer() {
  return (
    <footer className="mt-16 bg-[#0F3D2E] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <p className="mt-3 text-sm text-[#F5F5F5]/85">
            Engineering excellence across fabrication, EPC solutions, and industrial manufacturing.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#F5F5F5]">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-[#F5F5F5]/80 transition hover:text-[#F97316]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#F5F5F5]">Contact</h4>
          <p className="mt-4 text-sm text-[#F5F5F5]/85">Surat, Gujarat, India</p>
          <p className="mt-1 text-sm text-[#F5F5F5]/85">foram@engginovate.com</p>
          <p className="mt-1 text-sm text-[#F5F5F5]/85">+91 9879617226</p>
          <div className="mt-4 flex gap-3 text-xs">
            <a
              href="https://www.linkedin.com/company/engginovate-fabaron-llp/"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-white/30 px-3 py-1 text-[#F5F5F5]/90 transition hover:border-[#F97316] hover:text-[#F97316]"
            >
              LinkedIn
            </a>
            <span className="rounded border border-white/30 px-3 py-1 text-[#F5F5F5]/90 transition hover:border-[#F97316] hover:text-[#F97316]">
              YouTube
            </span>
            <span className="rounded border border-white/30 px-3 py-1 text-[#F5F5F5]/90 transition hover:border-[#F97316] hover:text-[#F97316]">
              X
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
