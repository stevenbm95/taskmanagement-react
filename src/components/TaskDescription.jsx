import useTasksStore from "../store/TasksStore";

const TaskDescription = () => {

  const { task } = useTasksStore();

  const {title,description} = task;
  return (
    <div className="">
    <h2 className=" p-2 bg-cyan-700 text-white">
      {title}
    </h2>
    <p className="text-sm text-white py-4 px-2 bg-cyan-600">{description}</p>
  </div>
  )
}

export default TaskDescription