import ITodo from "./ITodo";

export default interface ITodoItem extends ITodo {
  todos: ITodo[]
}