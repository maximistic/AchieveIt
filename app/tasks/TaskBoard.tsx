import React, { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  date: string;
  priority: string;
  status: "Completed" | "In Progress" | "Assigned";
}

const TaskBoard: React.FC = () => {
  const statuses = ["Assigned", "In Progress", "Completed"];
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="p-4 grid md:grid-cols-3 gap-4">
      {statuses.map((status) => (
        <div key={status} className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
          <h2 className="font-bold text-lg mb-3">{status}</h2>
          <div className="space-y-2">
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task.id} className="bg-white p-2 rounded-lg shadow">
                  <p className="font-semibold">{task.title}</p>
                  <p className="text-sm text-gray-500">📅 {task.date} - 🔥 {task.priority}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;