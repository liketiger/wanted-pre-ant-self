import { Dispatch, RefObject, SetStateAction } from "react";

export type TodoItemType = {
  title: string
};

export type SetTodosType = Dispatch<SetStateAction<TodoFetchItemType[]>>;
export type SetStringType = Dispatch<SetStateAction<string>>;

export interface TodoFetchItemType extends TodoItemType {
  createdAt: string,
  updatedAt: string,
  id: string
};

export type TodoItemProps = {
  id: string,
  title: string,
  setTodos: SetTodosType
};

export type InputTodoProps = {
 setTodos: SetTodosType
};

export type TodoListProps = {
  todos: TodoFetchItemType[],
  setTodos: SetTodosType
};

export type InputRef = RefObject<HTMLInputElement>;
export type FormRef = RefObject<HTMLFormElement>;