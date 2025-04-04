import { useForm } from "react-hook-form";
import Button from "../common/Button";
import useTasksStore from "../store/TasksStore";

const TaskForm = () => {
  const {task, addTask, setShowCreateTask, showCreateTask, editTask } = useTasksStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    task.id ? editTask({ ...task, ...data }) : addTask(data);
    setShowCreateTask(!showCreateTask);  
  };

  const showError = (error) => <p className="text-red-500">{error}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-2">
      <input
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-1.5 mb-1"
        placeholder="Title"
        {...register("title", { required: true, minLength: 3 })}
        defaultValue={task.title}
      />
      {errors.title && showError("Title is required and min 3 characters")}
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Description
      </label>
      <textarea
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 min-h-[100px]"
        {...register("description", {
          required: true,
          minLength: 3,
          maxLength: 300,
        })}
        defaultValue={task.description}
      />
      {errors.description &&
        showError("Descriprion is required and min 3 characters")}
      <Button
        type="submit"
        text={task ? "Update Task" : "Create Task"}
        custom={
          "bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 mt-3"
        }
      />
    </form>
  );
};

export default TaskForm;
