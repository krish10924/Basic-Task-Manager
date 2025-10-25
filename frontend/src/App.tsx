import React from "react";
import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Task } from "./types";

const API_URL = "https://basic-task-manager-sdbr.onrender.com/api/tasks";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      axios.get(API_URL).then((res) => setTasks(res.data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = async () => {
    if (!desc) return;
    const res = await axios.post(API_URL, { description: desc });
    setTasks([...tasks, res.data]);
    setDesc("");
  };

  const toggleTask = async (id: number) => {
    const res = await axios.put(`${API_URL}/${id}/toggle`);
    setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Task Manager
        </h1>

        {/* Input & Add Button */}
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ol className="divide-y divide-gray-200">
          {tasks.map((t, index) => (
            <li key={t.id} className="flex items-center py-2">
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={t.isCompleted}
                onChange={() => toggleTask(t.id)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-3"
              />

              {/* Task description */}
              <span
                className={`flex-1 ${
                  t.isCompleted ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {t.description}
              </span>

              {/* Delete button */}
              <button
                onClick={() => deleteTask(t.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors ml-2"
              >
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
