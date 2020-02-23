import { TodoList } from 'todo-list';
import { observable } from 'aurelia-framework';

export class Todo {
  description: string;
  list: TodoList;
  @observable done;

  constructor(list: TodoList, description: string) {
    this.description = description;
    this.list = list;
  }

  doneChanged() {
    this.list.invalidateView();
  }

  remove() {
    this.list.remove(this);
  }
}
