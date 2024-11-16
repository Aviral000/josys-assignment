import React, { useState } from "react";
import { gsap } from "gsap";
import { TaskListMemo } from "./TaskList";

const ToDoListApp = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");

      const listItems = document.querySelectorAll(".task-item");
      const lastItem = listItems[listItems.length - 1];
      gsap.fromTo(
        lastItem,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const deleteTask = (index: number) => {
    const itemToRemove = document.querySelector(`.task-item-${index}`);
    if (itemToRemove) {
      gsap.to(itemToRemove, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          To-Do List
        </h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            onClick={addTask}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
        <TaskListMemo tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default ToDoListApp;
