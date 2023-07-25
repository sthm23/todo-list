import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  checker=false

  @Input() todoCard!: Todo;
  @Output() changeTodoCard: EventEmitter<Todo> = new EventEmitter()

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checker = this.todoCard.completed
  }

  goToMoreTodo() {
    this.router.navigate(['home', this.todoCard.id])
  }
}
