import memoji from "../assets/memji-smile.png";
export default function Avatar() {
  return (
    <div>
      <div className="group block mb-5 shrink-0">
        <div className="flex items-center">
          <div>
            <img
              alt=""
              src={memoji}
              className="inline-block size-12 aspect-square lg:size-20 rounded-full bg-white/5 outline -outline-offset-2 outline-white/10"
            />
          </div>
          <div className="ml-4">
            <p className="text-lg/4 font-semibold text-white">
              Hi, I'm Ayush Antiwal
            </p>
            <p className="text-sm font-medium mt-1 text-gray-400">
              Full-Stack Web Developer
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 body2">
        <p>
          Becoming a Full-Stack developer has always been my goal, and for the
          past 3+ years, I’ve been building production-grade applications with a
          strong sense of ownership and responsibility. I approach development
          not just as writing code, but as building products that scale and
          deliver real value.
        </p>
        <p className="mt-1.5">
          I enjoy designing complex UI systems, improving performance and
          reliability, and turning legacy codebases into clean, scalable
          foundations that teams can confidently build on.
        </p>
        <p className="mt-1.5">
          I’ve contributed to ERP systems, healthcare platforms, dashboards, and
          product-driven applications, often working closely with designers and
          backend teams to ship features faster without compromising quality.
        </p>
        <p className="mt-1.5">
          My inspiration comes from creating products that solve real problems,
          thinking long-term about architecture, user experience, and
          growth—while continuously learning and pushing systems and myself to
          the next level.
        </p>
        {/* <p className="mt-1.5">
          A frontend developer with a focus on clean UI and scalable systems. I
          build responsive, accessible, and lightweight interfaces — combining
          technical precision with design sensitivity. Less noise. More clarity.
        </p> */}
      </div>
    </div>
  );
}
