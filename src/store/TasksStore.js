import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const status = ["In Progress", "Completed", "Cancelled"];

const initialTask = {
  id: uuidv4(),
  title: "",
  description: "",
  status: status[0],
};

const tasks = [
  {
    ...initialTask,
    id: uuidv4(),
    title: "Create list component",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci corporis debitis distinctio dolor dolorum harum magnam molestiae nam nihil numquam perferendis quaerat reiciendis repudiandae sint tenetur, unde,veniam?",
  },
  {
    ...initialTask,
    id: uuidv4(),
    title: "create task component",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci corporis debitis distinctio dolor dolorum harum magnam molestiae nam nihil numquam perferendis quaerat reiciendis repudiandae sint tenetur, unde,veniam?",
  },
];

{
  /* Global state of tasks */
}
const useTasksStore = create((set) => ({
  tasks: tasks,

  // task selected
  task: tasks[0],
  // add one task to array
  addTask: (task) => {
    const newTask = {
      ...initialTask,
      title: task.title,
      description: task.description,
    };
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
      set(() => ({ task: newTask }));
  },
  setSelectedTask: (task) => {
    set(() => ({ task: task }));
  },
  showCreateTask: false,
  setShowCreateTask: (value) => {
    set(() => ({ showCreateTask: value }));
  },
}));

export default useTasksStore;
