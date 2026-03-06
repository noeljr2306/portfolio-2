import { Link } from "react-router-dom";
import { Github } from "../assets";
import { Projects } from "../constants";

const Project = () => {
  return (
    <section className="sm:px-14 px-7 sm:py-20 py-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Selected Projects
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
          A showcase of my recent work, blending technical logic with creative
          design. Each piece represents a unique challenge solved with modern
          web technologies.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 grid-cols-1">
          {Projects.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-900 border border-white/10 rounded-3xl p-4 hover:bg-zinc-900 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative w-full h-60 overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.href, "_blank");
                    }}
                    className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/20 flex justify-center items-center hover:bg-black transition-all group/icon"
                  >
                    <img
                      src={Github}
                      alt="github"
                      className="w-5 h-5 invert group-hover/icon:invert-0"
                    />
                  </button>
                </div>
              </div>

            
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-6">
                  {item.description}
                </p>
              </div>


              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex -space-x-2">
                  {item.tags.map((icon, index) => (
                    <div
                      key={index}
                      className="w-9 h-9 rounded-full bg-zinc-950 border border-white/10 flex justify-center items-center p-2 shadow-xl"
                      title="Tech Stack"
                    >
                      <img
                        src={icon}
                        alt="tech icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  to={`/projects/${item.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-white group/link"
                >
                  View Study
                  <span className="text-xl transform transition-transform group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
