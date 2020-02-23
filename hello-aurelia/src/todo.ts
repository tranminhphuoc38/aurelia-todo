export class Todo {
  description: string;
  done: boolean;
  list: Todo[];

  constructor(list: Todo[], description: string) {
    this.description = description;
    this.list = list;
  }

  remove() {
    let index = this.list.indexOf(this);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }
}