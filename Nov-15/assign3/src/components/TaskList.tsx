import React from "react";

interface Taskprop {
    tasks: string[],
    deleteTask: (index: number) => void
}

const TaskList:React.FC<Taskprop> = ({
    tasks,
    deleteTask,
  }) => {
    return (
      <div>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`task-item task-item-${index} bg-gray-100 p-2 rounded-md shadow-md flex justify-between items-center`}
              >
                <span className="text-gray-700">{task}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const TaskListMemo = React.memo(TaskList);

  export { TaskListMemo };