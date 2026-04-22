import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company, navLinks } from "../data/siteData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0F3D2E]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-[#0F3D2E]">
          {company.name}
        </Link>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded border border-[#0F3D2E]/30 px-3 py-1 text-sm text-[#1F2937] md:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>
        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-3 border-b border-[#0F3D2E]/10 bg-white px-6 py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-[#0F3D2E]" : "text-[#1F2937] hover:text-[#0F3D2E]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary px-4 py-2 text-sm"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
