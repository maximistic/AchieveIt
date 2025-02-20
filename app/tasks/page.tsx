"use client";

import React, { useState } from "react";
import TaskFilters from "@/app/tasks/TaskFilters";
import TaskBoard from "@/app/tasks/TaskBoard";
import TaskModal from "@/app/tasks/TaskModal";

const TasksPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  const addTask = (task: { title: string; date: string; priority: string; status: string }) => {
    const newTasks = [...tasks, { ...task, id: Date.now() }];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className="p-4">
      <TaskFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      
      <div className="flex gap-4 my-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>+ Add Task</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={deleteAllTasks}>Delete All</button>
      </div>

      <TaskBoard />

      {showModal && <TaskModal onClose={() => setShowModal(false)} onSave={addTask} />}
    </div>
  );
};

export default TasksPage;
