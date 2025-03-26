import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const status = ["Complet", "Completed", "Cancelled"];
const tasks = [
  {
    id: uuidv4(),
    title: "Create list component",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci corporis debitis distinctio dolor dolorum harum magnam molestiae nam nihil numquam perferendis quaerat reiciendis repudiandae sint tenetur, unde,veniam?",
    status: status[0],
  },
  {
    id: uuidv4(),
    title: "create task component",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci corporis debitis distinctio dolor dolorum harum magnam molestiae nam nihil numquam perferendis quaerat reiciendis repudiandae sint tenetur, unde,veniam?",
    status: status[0],
  },
];

{
  /* Global state of tasks */
}
const useTasksStore = create((set, get) => ({
  tasks: tasks,

  // task selected
  task: tasks[0],
  // add one task to array
  addTask: (task) => {
    const newTask = {
      id: uuidv4(),
      title: task.title,
      description: task.description,
      status: status[0],
    };
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
      set(() => ({ task: newTask }));
  },
  setSelectedTask: (task) => {
    if (task.id !== get().task.id) {
      set(() => ({ task: task }));
    } else {
      set(() => ({ task: {} }));
    }
  },
  //Show form for edit or create task
  showCreateTask: false,
  setShowCreateTask: (value) => {
    set(() => ({ showCreateTask: value }));
  },
  //change status of task
  changeStatus: (task) => {

    const newStatus = task.status === "Completed" ? "Complet" : "Completed";
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === task.id ? { ...t, status: newStatus } : t
      ),
      task:
        state.task.id === task.id ? { ...task, status: newStatus } : state.task,
    }));
  },
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter( (task) => task.id !== id)
    }));
  },
  editTask: (task) => {
    set((state) => ({
      tasks: state.tasks.map( (t) => t.id === task.id ? task : t) 
    }))
  }
  
}));

export default useTasksStore;
