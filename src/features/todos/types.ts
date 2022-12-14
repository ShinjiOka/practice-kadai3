export type TodoId = string;
export type DateTime = string;
const TODO_STATUSES = [
  'waiting',
  'working',
  'pending',
  'discontinued',
  'completed',
];

export type TodoStatus = typeof TODO_STATUSES[number];

export type TodoInput = {
  id?: TodoId;
  title: string;
  body: string;
  status?: TodoStatus;
  createdAt?: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
};

export type Todo = {
  id: TodoId;
  title: string;
  body: string;
  status: TodoStatus;
  createdAt: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
};

export type TodoUpdatePayload = {
  id: TodoId;
  input: Partial<TodoInput>;
};

