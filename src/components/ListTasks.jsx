import Button from "../common/Button";

const ListTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "This is a task description",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is a task description",
      status: "In Progress",
    },
  ];

  return (
    <div className="">
      <h2 className="text-lg text-center py-2 bg-sky-200 text-sky-900 ">
        List of Tasks
      </h2>
      <ul>
        {tasks.map((task, index) => (
          
          <li key={index} className="px-5 py-2 border-t-2 border-gray-200"><input type="checkbox" className="mr-2" />{task.title}</li>
        ))}
      </ul>

      {/* <div> <Button /></div> */}
    </div>
  );
};

export default ListTasks;
