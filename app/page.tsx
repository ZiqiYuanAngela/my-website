import EmailButton from "./email-button";

const projects = [
  {
    name: "API Documentation Agent",
    description: "A full stack application that allows users to upload their API documentation and interact with it using a chat interface. The application utilizes FastAPI, OpenAI, and Next.js to provide a seamless experience for users.",
    github: "https://github.com/ZiqiYuanAngela/api-doc-agent",
  },
  {
    name: "Incident Response Agent",
    description: "Built a stateful AI incident-response workflow using FastAPI, LangGraph, structured LLM outputs, and deterministic operational tools.",
    github: "https://github.com/ZiqiYuanAngela/incident-response-agent"
  },
  {
    name: "AI Job Processing Platform",
    description: "A durable execution platform for long-running AI workflows with checkpointing, retries, cancellation, idempotency, cost tracking, and crash recovery using FastAPI, PostgreSQL, Redis, Celery, React, and OpenAI",
    github: "https://github.com/ZiqiYuanAngela/ai-job-processing-platform"
  }
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
            &gt; Angela@dev:~$ 🧑‍💻 whoami
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            As a software engineer who is always fascinated by how fast AI and technology are evolving, I can't wait to experience their power and momentum by building!!
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/ziqi-yuan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
              aria-label="Visit LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/repos?q=owner%3A%40me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
              aria-label="Visit GitHub profile"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 .5A12 12 0 0 0 0 12.7a12.2 12.2 0 0 0 8.2 11.6c.6.1.8-.3.8-.6v-2.2c-3.3.7-4.1-1.4-4.1-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>
            <EmailButton />
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white">🎨 playground</h2>
          <div className="mt-6 space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 transition hover:border-cyan-400/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-mono text-lg font-medium text-cyan-300 transition hover:text-cyan-200">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white">🤔 always thinking</h2>
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
