import Button from "../common/Button";
import useTasksStore from "../store/TasksStore";

const ListTasks = () => {
  const { tasks, setSelectedTask, setShowCreateTask } = useTasksStore();

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setShowCreateTask(false);
  };
  
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
            className="px-5 py-2 border-t-2 border-gray-200 hover: cursor-pointer"
          >
            <input type="checkbox" className="mr-2" />
            {task.title}
          </li>
        ))}
      </ul>

      {/* <div> <Button /></div> */}
    </div>
  );
};

export default ListTasks;
