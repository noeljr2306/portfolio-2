import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github } from "../assets";
import { Projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  return (
    <section className="sm:px-14 px-7 sm:py-20 py-10" id="projects">
      <h1 className="heading">My Selected Projects</h1>
      <p className="mt-3 text-zinc-400 text-[17px] max-w-3xl leading-[30px]">
        I have applied my knowledge and creativity to deliver innovative
        solutions that drive results. These are my recent projects showcasing my
        skills and expertise. Each project is briefly described with links to
        code repositories and live demos.
      </p>

      <div className="mt-20 grid gap-7 sm:grid-cols-2 grid-cols-1">
        {Projects.map((item, index) => (
          <div
            key={item.id}
            className="bg-zinc-800 shadow-inner shadow-zinc-400/40 p-5 rounded-2xl w-full cursor-pointer transition-shadow hover:shadow-zinc-400/60"
          >
            <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt="project"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  className="github-icon w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black hover:bg-zinc-900 transition-colors"
                  onClick={() => window.open(item.href, "_blank")}
                >
                  <img
                    src={Github}
                    alt=""
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-between flex-col">
              <h3 className="font-bold xl:text-2xl md:text-xl text-base">
                {item.name}
              </h3>
              <p className="grid-subtext">{item.description}</p>
            </div>

            <div className="flex items-center justify-between gap-10 mt-7 mb-3">
              <div className="flex items-center">
                {item.tags.map((icon, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="border border-zinc-700 rounded-full bg-black xl:w-9 xl:h-9 w-8 h-8 flex justify-center items-center"
                  >
                    <img src={icon} alt="" className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex">
                <a
                  href={item.live}
                  className="xl:text-[15px] md:text-s text-sm text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
