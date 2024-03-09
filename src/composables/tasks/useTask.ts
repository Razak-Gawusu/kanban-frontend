import { ITask } from "@/interfaces";
import { reactive } from "vue";

export function useTask() {
  const taskFormData = reactive<ITask>({
    id: 1,
    title: "",
    description: "",
    subTasks: [{ id: 1, title: "", isCompleted: false }],
  });
  function addTask(values: Record<string, unknown>) {
    console.log("task added", values);
  }

  return {
    taskFormData,
    addTask,
  };
}
