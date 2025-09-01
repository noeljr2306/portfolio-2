import Button from "../Components/Button";

const Header = () => {
  return (
    <section className="w-full min-h-screen mx-auto flex relative" id="home">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-5 sm:px-[100px] px-5 pt-[120px]">
        <div className="w-full max-w-3xl text-center">
          <p className="font-base xl:text-[35px] text-[20px] text-zinc-600 mb-6">
            Hi I`m{" "}
            <span className="text-zinc-300 noel-font inline-block noel-glow">
              Noel
            </span>
            <br />
            Software developer based in Nigeria
          </p>
          <div className="space-y-2">
            <h1 className="head-text block">Building wonderful digital</h1>
            <h1 className="head-text block">experiences through</h1>
            <h1 className="head-text block">technology</h1>
          </div>
          <div className="mt-10 md:mt-30">
            <a href="#projects">
              <Button
                name="See my work"
                isBeam
                containerClass="w-[220px] sm:w-auto min-w-[250px] sm:min-w-[280px] md:min-w-[220px] tracking-wider"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
