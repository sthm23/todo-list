import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/interfaces';
import { TodoServiceService } from '../../todo-service.service';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {

  constructor(
    private todoServ: TodoServiceService
  ) {}

  completed:Todo[] = []
  filtered:Todo[] = []

  ngOnInit() {
    this.completed = this.todoServ.getAllCards().filter(el=>!el.completed)
    this.filtered = this.todoServ.getAllCards().filter(el=>el.completed)
  }
}
