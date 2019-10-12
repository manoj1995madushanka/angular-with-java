export class Todo {
  id: number;
  description: string;
  done: boolean;
  targetDate: Date;

  constructor(id, description, done, date) {
    this.id = id;
    this.description = description;
    this.done = done;
    this.targetDate = date;
  }
}
