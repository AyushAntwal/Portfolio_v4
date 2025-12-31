export default function Experiences() {
  const projects = [
    {
      title: "Interface Kit",
      description:
        "A composable, themeable UI system built with React and TypeScript. Reusable, accessible components styled with Tailwind. Built for design consistency at scale.",
      links: [
        { label: "Live Preview", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
    {
      title: "Portfolio v2",
      description:
        "A developer portfolio built with motion, minimalism, and modularity in mind. Dark mode, custom animations, and component-based structure.",
      links: [
        { label: "Live Site", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
    {
      title: "Headless Commerce Frontend",
      description:
        "A storefront UI connected to Sanity CMS and Stripe Checkout. Fast-loading product views, responsive filtering, and lightweight cart management.",
      links: [
        { label: "Live Demo", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
  ];

  return (
    <>
      <>
        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.title} className=" py-6 rounded-xl text-white ">
              <h3 className="text-xl font-semibold mb-1 flex items-center gap-3">
                <span className="text-green-500">✦</span> {project.title}
              </h3>
              <p className="text-zinc-400 text-md/20 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex gap-6">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </>
    </>
  );
}
