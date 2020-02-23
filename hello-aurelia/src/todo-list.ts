import { Todo } from "todo";

export class TodoList {
  todos: Todo[] = [];

  add(descriptionText) {
    if (descriptionText) {
      this.todos.push(new Todo(this.todos, descriptionText));
    }
  }

  remove(todo) {
    todo.remove();
  }
}
