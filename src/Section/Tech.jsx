import { technologies } from "../constants";

const TechStack = () => {
  return (
    <section className="sm:px-6 px-5 py-10">
      <h2 className="heading text-center mb-12">My Tech Arsenal</h2>

      <div className="flex flex-row flex-wrap justify-center gap-10 p-6">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-3">
            {/* Icon Container */}
            <div
              className="relative group bg-[#1d1d20] rounded-2xl flex items-center justify-center h-28 w-28 border border-zinc-800 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2"
              style={{
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 10px 40px -5px ${tech.color}66`; // 66 adds transparency
                e.currentTarget.style.borderColor = tech.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 30px -10px rgba(0,0,0,0.5)";
                e.currentTarget.style.borderColor = "rgb(39 39 42)"; // zinc-800
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Tech Name Label */}
            <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </p>
            {/* Alternative: keep name visible always */}
            <span className="text-zinc-300 text-sm font-semibold mt-1">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
