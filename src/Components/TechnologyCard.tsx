import type { IDataType } from "./Type/ITechnology";

interface TechnologyCardProps {
  technology: IDataType;
  onAdd: (technology: IDataType) => void;
}

const TechnologyCard = ({
  technology,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.alt}
          className="w-12 h-12 object-contain"
        />

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-600 leading-6">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
          {technology.category}
        </span>

        <span className="text-sm text-gray-600">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

        <button
          onClick={() => onAdd(technology)}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;