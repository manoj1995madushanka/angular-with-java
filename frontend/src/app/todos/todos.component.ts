import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  apples: Todo[] = [
    new Todo(1, 'toto 1', false, new Date()),
    new Todo(2, 'todo 2', false, new Date())
  ];

  /*todos: Todonotes[] = {
    a(1, 'todo 1', false),
  };*/
  /*todo: {
    id: 1,
    description: 'todo 1'
  };*/

  constructor() { }

  ngOnInit() {
  }

}
