import { inject } from 'aurelia-dependency-injection';
import { TodoList } from "todo-list";
import {EventAggregator} from "aurelia-event-aggregator";

export class App {
  heading = 'Todo';
  description: HTMLInputElement;
  list: TodoList;

  static inject = [EventAggregator]

  constructor(public ee: EventAggregator) {

  }

  addTodo() {
    this.ee.publish('todo:add', this.description.value);
    this.description.value = '';
  }

  configureRouter(config) {
    config.map([
      { route: '', redirect: 'todos/all'},
      { route: 'todos/:filter', moduleId: 'todo-list'},
    ])
  }

}
