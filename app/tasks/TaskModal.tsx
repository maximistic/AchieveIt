import React, { useState } from "react";

interface TaskModalProps {
  onClose: () => void;
  onSave: (task: { title: string; date: string; priority: string; status: string }) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Assigned");

  const handleSubmit = () => {
    if (!title || !date) return;
    onSave({ title, date, priority, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-3">Add New Task</h2>
        <input type="text" placeholder="Task Title" className="w-full p-2 border mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="date" className="w-full p-2 border mb-2" value={date} onChange={(e) => setDate(e.target.value)} />
        <select className="w-full p-2 border mb-2" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select className="w-full p-2 border mb-4" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Assigned</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <div className="flex justify-between">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;