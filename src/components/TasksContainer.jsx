import DetailsTasks from "./DetailsTasks";
import ListTasks from "./ListTasks";
import Button from "../common/Button";

// { Task Main Component }
const TasksContainer = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl text-center p-5"> Tasks </h1>
      <div className="flex gap-10 justify-center">
        <div className="flex-1">
          <div className="border-1 border-gray-300 rounded-lg border-black  overflow-y-auto">
            <ListTasks />
          </div>
          <div>
            <Button text={"Add Task"} custom={"bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 "}  />
          </div>
        </div>

        <div className="border-1 border-gray-300 rounded-lg border-black p-5 flex-1">
          <DetailsTasks />
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
