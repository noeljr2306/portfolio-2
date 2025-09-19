import { technologies } from "../constants";

const TechStack = () => {
  return (
    <section className="sm:px-6 px-5">
      <h2 className="heading">My Tech Arsenal</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 p-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="bg-[#23232b] rounded-[16px] flex items-center justify-center h-[100px] w-[100px] border border-zinc-700 transition-all duration-500 ease-in-out hover:scale-110"
            style={{
              boxShadow: "0 4px 24px #000a",
              transition: "box-shadow 0.5s ease-in-out, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px ${tech.color}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 24px #000a";
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              style={{ width: "48px", height: "48px" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
