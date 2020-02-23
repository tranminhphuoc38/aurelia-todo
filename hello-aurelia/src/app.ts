import { TodoList } from "todo-list";

export class App {
  heading = 'Todo';
  description: HTMLInputElement;
  list: TodoList;

  addTodo() {
    this.list.add(this.description.value);
    this.description.value = '';
  }

}
