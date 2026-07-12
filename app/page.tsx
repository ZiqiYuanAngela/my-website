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
    title: "How Sports Can Relate to Startups",
    description: "The 2026 World Cup has entered the knockout stage, and the competitions are getting fierce as 3 teams are knocked out each day. As I watched the matches, I strongly felt the world of sports is so similar to the world of startup in multiple ways.",
    link: "https://www.linkedin.com/posts/ziqi-yuan_the-2026-world-cup-has-entered-the-knockout-share-7478523673771995136-koBe/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-z90wBSqn7AjvQyhq4nhOdhkwKFWMYnlI",
  },
  {
    title: "Human-Centered AI",
    description: "I am an active thinker and I love to think. When AI is going ahead and shares all it has in just few seconds, I sometimes felt interrupted and annoyed.",
    link: "https://www.linkedin.com/posts/ziqi-yuan_humancenteredai-aifatigue-criticalthinking-share-7473184908266545152-iYWx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-z90wBSqn7AjvQyhq4nhOdhkwKFWMYnlI",
  },
  {
    title: "Tokenomics and Its potential drawbacks",
    description: "People tend to burn tokens as much as they have nowadays to increase their work efficiency or  because they are encouraged or pressured to hit the KPI.",
    link: "https://www.linkedin.com/posts/ziqi-yuan_%F0%9D%90%93%F0%9D%90%A8%F0%9D%90%A4%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%A8%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%9C%F0%9D%90%AC-or-token-economics-share-7468044524338970624-l3_9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-z90wBSqn7AjvQyhq4nhOdhkwKFWMYnlI",
  },
   {
    title: "Back to SF",
    description: "To my surprise, there was a temporary culture shock to me when I discovered that San Francisco was full of people coming from different parts of the world (Europe - UK/Sweden, Africa - Nigeria/Egypt etc), owning different mindsets and ways to express their identities.",
    link: "https://www.linkedin.com/posts/ziqi-yuan_%F0%9D%90%88%F0%9D%90%AD%F0%9D%90%AC-%F0%9D%90%A7%F0%9D%90%A2%F0%9D%90%9C%F0%9D%90%9E-%F0%9D%90%AD%F0%9D%90%A8-%F0%9D%90%9B%F0%9D%90%9E-%F0%9D%90%9B%F0%9D%90%9A%F0%9D%90%9C%F0%9D%90%A4-%F0%9D%90%A2%F0%9D%90%A7-ugcPost-7454457027247968257-8HwD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-z90wBSqn7AjvQyhq4nhOdhkwKFWMYnlI",
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
