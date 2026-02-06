import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Projects } from "../constants";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = Projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">404</h1>
          <p className="text-zinc-500 mb-8">
            Project not found in our records.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="max-w-5xl mx-auto px-7 py-4 flex justify-between items-center">
          <Link
            to="/#projects"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            ← All Projects
          </Link>
         
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-7 pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white bg-clip-text text-transparent">
            {project.name}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Featured Image with subtle shadow */}
        <div className="mb-20 group">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/5">
            <img
              src={project.image}
              alt={project.name}
              className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">
                The Challenge
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {project.problemStatement}
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {project.useCases.map((useCase, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-blue-400 mt-1">▹</span>
                    <span className="text-zinc-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">
                Outcome & Learnings
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {project.challengesLearnings}
              </p>
            </section>
          </div>

          {/* Sidebar / Meta Info */}
          <aside className="space-y-10">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((icon, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-blue-500/50 transition-colors group"
                    title="Tech Stack Item"
                  >
                    <img
                      src={icon}
                      alt="tech"
                      className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 flex flex-col gap-4">
              <a
                href={project.live}
                target="_blank"
                className="w-full py-4 text-center rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all"
              >
                View Live Project
              </a>
              <a
                href={project.href}
                target="_blank"
                className="w-full py-4 text-center rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-all"
              >
                Source Code
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
