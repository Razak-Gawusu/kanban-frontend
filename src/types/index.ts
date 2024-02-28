export type SubTask = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  subTasks: SubTask[];
};

export type Column = {
  id: number;
  title: string;
  tasks: Task[];
};

export type Board = {
  id: number;
  name: string;
  columns: Column[];
};
