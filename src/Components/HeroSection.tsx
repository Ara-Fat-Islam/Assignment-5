import HeroLogo from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-6 items-center gap-10">

        {/* Hero Content */}
        <div className="text-center md:text-left flex flex-col space-y-5">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Ideal <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-sm md:text-lg text-gray-600">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden md:block" />
            compare them side by side, and put together the stack that fits
            <br className="hidden md:block" />
            your next project.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start items-center gap-5">

            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 rounded-lg text-white font-medium hover:opacity-90 transition">
              Explore Technologies
            </button>

            <a
              href="#technologies"
              className="border border-gray-300 py-2 px-7 rounded-lg text-gray-700 font-medium hover:border-pink-500 hover:text-pink-600 transition"
            >
              Learn More
            </a>

          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <img
            className="w-[450px] max-w-full"
            src={HeroLogo}
            alt="Dev Stack illustration"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;