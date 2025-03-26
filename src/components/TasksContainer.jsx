import DetailsTasks from "./TaskDescription";
import ListTasks from "./ListTasks";
import Button from "../common/Button";
import TaskForm from "./TaskForm";
import useTasksStore from "../store/TasksStore";

const TasksContainer = () => {
  const {
    setSelectedTask,
    showCreateTask,
    setShowCreateTask,
    task,
    changeStatus,
    deleteTask,
  } = useTasksStore();

  const handleShowCreateTask = (task) => {
    setSelectedTask(task);
    setShowCreateTask(true);
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setSelectedTask({});
  };

  return (
    <div className="p-5">
      <h1 className="text-4xl text-center p-5"> Tasks </h1>
      <div className="flex gap-10 justify-center">
        <div className="flex-1">
          <div className="border-1 border-gray-300 rounded-lg border-black  overflow-y-auto">
            <ListTasks />
          </div>
          <div className="mt-5">
            <Button
              onClick={() => handleShowCreateTask({})}
              text={"Add Task"}
              custom={
                "bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 "
              }
            />
          </div>
        </div>

        <div className="flex-1">
          {showCreateTask ? (
            <TaskForm />
          ) : task.id ? (
            <div>
              <div className="border-1 border-gray-300 rounded-lg overflow-y-auto">
                <DetailsTasks />
              </div>
              <div className="mt-3 flex justify-center gap-5 border-1 border-gray-300 rounded-lg p-3 bg-slate-100">
                <Button
                  text={task.status}
                  onClick={() => changeStatus(task)}
                  custom={
                    task.status === "Completed"
                      ? "bg-cyan-600 text-white hover:bg-cyan-700"
                      : ""
                  }
                />
                <Button
                  text={"Edit"}
                  custom={"hover:bg-cyan-600 hover:text-white"}
                  onClick={() => setShowCreateTask(!showCreateTask)}
                />
                <Button
                  text={"Delete"}
                  custom={"hover:bg-cyan-600 hover:text-white"}
                  onClick={() => handleDelete()}
                />
              </div>
            </div>
          ) : (
            <p className="bg-orange-100 p-2.5 rounded-md text-center text-orange-400">
              {" "}
              Por favor selecciona una tarea
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
