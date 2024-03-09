export interface IUser {
  id: string;
  username?: string;
  email: string;
  exp: number;
  iat: number;
}

export interface ISubTask {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  subTasks: ISubTask[];
}

export interface IColumn {
  id: number;
  title: string;
  tasks: ITask[];
}

export interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
}
