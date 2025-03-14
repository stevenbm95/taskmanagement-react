import DetailsTasks from "./TaskDescription";
import ListTasks from "./ListTasks";
import Button from "../common/Button";
import TaskForm from "./TaskForm";
import { useEffect } from "react";
import useTasksStore from "../store/TasksStore";

// { Task Main Component }
const TasksContainer = () => {

  const { setSelectedTask, showCreateTask, setShowCreateTask } = useTasksStore();

  const handleShowCreateTask = (task) => {
    setSelectedTask(task)
    setShowCreateTask(!showCreateTask);
  };
  useEffect(() => {
    
    console.log("showCreateTask", showCreateTask);
  


  }, [showCreateTask])
  

  

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
        ) : (
          <>
            <div className="border-1 border-gray-300 rounded-lg overflow-y-auto">
              <DetailsTasks />
            </div>
            <div className="mt-3 flex justify-center gap-5 border-1 border-gray-300 rounded-lg p-3 bg-slate-100">
              <Button text={"Complete"} />
              <Button text={"Edit"} />
              <Button text={"Delete"} />
            </div>
            </>
        )}
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
