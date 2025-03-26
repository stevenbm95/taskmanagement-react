import useTasksStore from "../store/TasksStore";

const ListTasks = () => {
  const { task, tasks, setSelectedTask, setShowCreateTask, changeStatus } =
    useTasksStore();

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setShowCreateTask(false);
  };

  const currentTask = task;

  return (
    <div className="">
      <h2 className="text-lg text-center py-2 bg-sky-200 text-sky-900 ">
        List of Tasks
      </h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            onClick={() => handleSelectTask(task)}
            key={index}
            className={`px-5 py-2 border-t-2 border-gray-200 hover:cursor-pointer ${
              currentTask.id === task.id ? "bg-gray-200" : null
            } ${
              task.status === "Completed" ? "line-through text-gray-500" : ""
            }`}
          >
            <input
              onClick={(e) => e.stopPropagation()}
              type="checkbox"
              readOnly
              checked={task.status === "Completed"}
              className="mr-2"
              onChange={() => changeStatus(task)} 
              />
              
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTasks;
