import BallCanvas from "../assets/Canvas/Ball";
import { technologies } from "../constants";


const TechStack = () => {

  return (
    <section className="sm:px-16 px-8" >
      <h2 className="heading">My Tech Arsenal</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 p-6">
        {technologies.map((technology) => (
          <div
            className="w-[100px] h-[100px] tech-item"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-gray-300 text-[12px] text-center font-semibold mt-2">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
