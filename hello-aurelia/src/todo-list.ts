import { EventAggregator } from 'aurelia-event-aggregator';
import { Todo } from "todo";

export class TodoList {
  todos: Todo[] = [];
  todosView: Todo[] = [];
  subscription;
  filter: any;

  static inject = [EventAggregator]

  constructor(public ee: EventAggregator) {
    this.subscription = this.ee.subscribe('todo:add', d => this.add(d));
    this.filter = this.filters.all;
    this.invalidateView();
  }

  invalidateView() {
    this.todosView = this.filter(this.todos);
  }

  activate(params, routeConfig, navigationInstruction) {
    this.filter = this.filters[params.filter];
    this.invalidateView();
  }

  add(descriptionText) {
    if (descriptionText) {
      this.todos.push(new Todo(this.todos, descriptionText));
    }
  }

  remove(todo) {
    todo.remove();
  }

  filters = {
    all(todos) {
      return todos;
    },
    active(todos) {
      return todos.filter(x => !x.done);
    },
    completed(todos) {
      return todos.filter(x => x.done);
    }
  }
}
