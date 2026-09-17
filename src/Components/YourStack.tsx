import type { IDataType } from "./Type/ITechnology";

interface YourStackProps {
  stack: IDataType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 h-fit">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-600">
          {stack.length}
        </span>
      </div>

      <p className="mt-1 text-sm text-gray-500">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 border border-dashed border-gray-300 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.alt}
                  className="w-10 h-10 object-contain shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-gray-400 hover:text-red-500 text-lg shrink-0"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full py-2 rounded-lg bg-red-50 text-red-500 font-medium hover:bg-red-100 transition"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;