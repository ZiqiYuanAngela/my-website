const projects = [
  {
    name: "Project One",
    description: "A small web app I built to practice modern React patterns.",
    github: "https://github.com/yourname/project-one",
  },
  {
    name: "Project Two",
    description: "A dashboard that visualizes data with a clean and simple UI.",
    github: "https://github.com/yourname/project-two",
  },
  {
    name: "Project Three",
    description: "A personal tool focused on productivity and daily planning.",
    github: "https://github.com/yourname/project-three",
  },
];

const thoughts = [
  {
    title: "Why I’m building with AI first",
    description: "A reflection on shipping faster while keeping the experience thoughtful.",
    link: "https://www.linkedin.com/feed/",
  },
  {
    title: "Designing calm digital experiences",
    description: "Notes on simplicity, clarity, and making tools feel approachable.",
    link: "https://www.linkedin.com/feed/",
  },
  {
    title: "What I learned from side projects",
    description: "A short post on how small experiments sharpen product instincts.",
    link: "https://www.linkedin.com/feed/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,_#020617,_#0f172a_55%,_#111827)] px-6 py-16 text-zinc-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <section className="overflow-hidden rounded-3xl border border-cyan-400/30 bg-black/70 p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur">
          <div className="mb-4 flex items-center gap-2 text-sm text-cyan-300">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono">~/portfolio/main</span>
          </div>

          <h1 className="font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
            &gt; Angela@dev:~$ whoami
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            I am always fascinated by how fast the AI and technology are evolving. I can't want to build to experience the power and momentum!!
          </p>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white">Playground</h2>
          <div className="mt-6 space-y-4">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 transition hover:border-cyan-400/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-mono text-lg font-medium text-cyan-300">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-fuchsia-400 transition hover:text-fuchsia-300"
                  >
                    {project.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white">Thoughts</h2>
          <div className="mt-6 space-y-4">
            {thoughts.map((thought) => (
              <article
                key={thought.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 transition hover:border-cyan-400/40"
              >
                <a
                  href={thought.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-mono text-lg font-medium text-cyan-300 transition hover:text-cyan-200">
                    {thought.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {thought.description}
                  </p>
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
