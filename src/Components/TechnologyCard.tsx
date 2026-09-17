import type { IDataType } from "./Type/ITechnology";

interface TechnologyCardProps {
  technology: IDataType;
  onAdd: (technology: IDataType) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300">
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.alt}
            className="w-10 h-10 object-contain"
          />
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-600 leading-6 min-h-[72px]">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
          {technology.category}
        </span>

        <span className="text-sm text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            isAdded
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;