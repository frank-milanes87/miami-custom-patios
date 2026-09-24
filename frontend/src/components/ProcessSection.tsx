export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Project",
    },
    {
      number: "02",
      title: "Virtual Estimate or In-Home Consultation",
    },
    {
      number: "03",
      title: "Design & Project Planning",
    },
    {
      number: "04",
      title: "Build Your Custom Space",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#110c0d] py-24 text-white sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951]">
              A considered process
            </p>

            <h2 className="mt-5 max-w-3xl font-sora text-4xl font-medium uppercase leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              From Idea To Outdoor Room
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45">
            Virtual estimates are free. In-home consultations are $75,
            reimbursed when you proceed within 30 days.
          </p>
        </div>

        <div className="mt-14 grid border-t border-white/10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:border-l">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative min-h-[270px] border-b border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.035] sm:p-8 lg:min-h-[310px] lg:border-r"
            >
              <div className="flex items-start justify-between">
                <span className="font-sora text-4xl font-medium tracking-[-0.04em] text-[#c78951]">
                  {step.number}
                </span>

                <span className="h-2 w-2 rounded-full border border-[#c78951]/50 transition-all duration-500 group-hover:bg-[#c78951] group-hover:shadow-[0_0_18px_rgba(199,137,81,0.35)]" />
              </div>

              <div className="absolute bottom-8 left-7 right-7 sm:left-8 sm:right-8">
                <div className="mb-5 h-px w-8 bg-[#c78951] transition-all duration-500 group-hover:w-16" />

                <h3 className="max-w-[260px] font-sora text-lg font-medium leading-6 text-white">
                  {step.title}
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c78951] transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}