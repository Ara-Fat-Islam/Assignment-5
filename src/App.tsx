import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import TechnologyCard from "./Components/TechnologyCard";
import YourStack from "./Components/YourStack";
import type { IDataType } from "./Components/Type/ITechnology";

function App() {
  const [technologies, setTechnologies] = useState<IDataType[]>([]);
  const [stack, setStack] = useState<IDataType[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  const handleAddToStack = (technology: IDataType) => {
    const exists = stack.some((item) => item.id === technology.id);

    if (exists) {
      alert(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((prev) => [...prev, technology]);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((prev) =>
      prev.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div>
      <Nav />
      <HeroSection />

      <section id="technologies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore the Technologies
            </h2>

            <p className="mt-3 text-gray-600">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAddToStack}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))}
            </div>

            <YourStack
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;