function ServiceCard({ service }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#0F3D2E]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0F3D2E] hover:shadow-lg">
      <img
        src={service.image}
        alt={service.title}
        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="p-6">
        <span className="inline-flex rounded-full bg-[#0F3D2E] px-3 py-1 text-xs font-semibold text-white">
          {service.icon}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#6B7280]">{service.description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
