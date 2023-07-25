import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/interfaces';
import { TodoServiceService } from '../../todo-service.service';
import { filter, map } from 'rxjs';

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
    this.todoServ.getAllCards().pipe(
      map(el=>el.results),
    ).subscribe(el=>{
    this.completed = el.filter(el=>!el.completed)
    this.filtered = el.filter(el=>el.completed)
    })

  }
}
