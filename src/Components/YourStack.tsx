import type { IDataType } from "./Type/ITechnology";

interface YourStackProps {
  stack: IDataType[];
  onRemove: (id: string) => void;
}

const YourStack = ({ stack, onRemove }: YourStackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 h-fit">
      <h2 className="text-xl font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 border border-dashed border-gray-300 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
            >
              <img
                src={technology.icon}
                alt={technology.alt}
                className="w-10 h-10 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-gray-400 hover:text-red-500 text-lg"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;