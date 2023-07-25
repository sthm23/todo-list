import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from '../../todo-service.service';
import { Todo } from 'src/app/models/interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-more',
  templateUrl: './todo-more.component.html',
  styleUrls: ['./todo-more.component.scss']
})
export class TodoMoreComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private todoServ: TodoServiceService
  ) {}

  checker = false
  changeSomething = true
  card!:Todo;

  form:FormGroup = new FormGroup({
    completed: new FormControl(false),
    title: new FormControl('')
  });

  ngOnInit(): void {
    this.activeRoute.url.subscribe(r=>{
      const url = r[0].path;
      const card = this.todoServ.getOneCard(url);

      if(card) {
        this.card = card
        this.form.get('completed')?.setValue(!card.completed)
        this.form.get('title')?.setValue(card.title)
        this.checker = true
        this.form.valueChanges.subscribe(ch=>{
          this.changeSomething = false
        })
      } else {
        this.router.navigate(['home', 'error'])
      }
    })



  }

  updateCard() {
    console.log(this.form.value);

  }

}
