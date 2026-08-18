import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Projects } from "../constants";
import DemoVideoModal from "../Components/DemoVideoModal";
import GlitchText from "../Components/GlitchText";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = Projects.find((p) => p.slug === slug);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const closeVideo = useCallback(() => setIsVideoOpen(false), []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold font-aeonik mb-6 tracking-tight">
            404
          </h1>
          <p className="text-zinc-500 mb-8">
            Project not found in our records.
          </p>
          <Link
            to="/#projects"
            state={{ instant: true }}
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
          <GlitchText
            key={`title-${project.slug}`}
            as="h1"
            text={project.name}
            className="text-5xl md:text-7xl font-bold font-aeonik mb-6 tracking-tighter text-white bg-clip-text text-transparent block"
          />
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-sora font-light leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Featured Image with subtle shadow */}
        <div className="mb-20 group">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/5">
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            <section>
              <GlitchText
                as="h2"
                text="The Challenge"
                className="text-sm uppercase tracking-[0.2em] text-blue-400 font-bold font-aeonik mb-6 block"
              />
              <p className="text-zinc-300 text-lg leading-relaxed">
                {project.problemStatement}
              </p>
            </section>

            <section>
              <GlitchText
                as="h2"
                text="Key Features"
                className="text-sm uppercase tracking-[0.2em] text-blue-400 font-bold font-aeonik mb-6 block"
              />
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
              <GlitchText
                as="h2"
                text="Outcome & Learnings"
                className="text-sm uppercase tracking-[0.2em] text-blue-400 font-bold font-aeonik mb-6 block"
              />
              <p className="text-zinc-300 text-lg leading-relaxed">
                {project.challengesLearnings}
              </p>
            </section>
          </div>

          {/* Sidebar / Meta Info */}
          <aside className="space-y-10">
            <div>
              <GlitchText
                as="h3"
                text="Technologies"
                className="text-xs uppercase tracking-widest text-zinc-500 font-aeonik mb-6 block"
              />
              <div className="flex flex-wrap gap-3">
                {project.tags.map((icon, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-2xl bg-zinc-600/50 border border-white/10 hover:border-blue-500/50 transition-colors group"
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
              {project.demoVideo ? (
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full py-4 text-center rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
                >
                  ▶ Watch Demo
                </button>
              ) : (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-center rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all"
                >
                  View Live Project
                </a>
              )}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-center rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-all"
              >
                Source Code
              </a>
              {project.demoVideo && (
                <DemoVideoModal
                  isOpen={isVideoOpen}
                  onClose={closeVideo}
                  videoSrc={project.demoVideo}
                  posterSrc={project.demoPoster}
                  projectName={project.name}
                />
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
