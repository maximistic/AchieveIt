import React from "react";

const filters = ["Today", "Upcoming", "All Tasks", "Completed", "Priority"];

interface TaskFiltersProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex space-x-4 p-4 border-b border-gray-200 w-max">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedFilter === filter ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilters;