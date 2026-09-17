import HeroLogo from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Ideal <br />
            <span className="brand-text-gradient">
              Development Stack
            </span>
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-7">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden md:block" />
            compare them side by side, and put together the stack that fits
            <br className="hidden md:block" />
            your next project.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#technologies"
              className="brand-gradient px-5 py-2.5 rounded-lg text-white font-medium text-center"
            >
              Explore Technologies
            </a>

            <a
              href="#technologies"
              className="border border-gray-300 px-7 py-2.5 rounded-lg text-gray-700 font-medium text-center hover:border-pink-500 hover:text-pink-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={HeroLogo}
            alt="Dev Stack illustration"
            className="w-[350px] md:w-[450px] max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;