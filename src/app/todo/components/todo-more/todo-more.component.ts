import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../todo-service.service';
import { Todo } from 'src/app/models/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/redux/reducers';
import { updateCard } from 'src/app/redux/actions/todo.actions';

@Component({
  selector: 'app-todo-more',
  templateUrl: './todo-more.component.html',
  styleUrls: ['./todo-more.component.scss']
})
export class TodoMoreComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private todoServ: TodoService,
    private store: Store<{todo:TodoState}>
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
      this.todoServ.getOneCard(url).pipe(
        catchError(err=> {
          this.router.navigate(['home', 'error'])
          return throwError(()=>err)
        })
      ).subscribe(el=>{
        this.card = el
        this.form.get('completed')?.setValue(!el.completed)
        this.form.get('title')?.setValue(el.title)
        this.checker = true
        this.form.valueChanges.subscribe(ch=>{
          this.changeSomething = false
        })
      });
    })
  }

  updateCard() {
    const card = {...this.card, ...this.form.value}
    this.todoServ.updateOneCard(this.card.id, card).pipe(
      catchError(err=> {
        window.alert('some error with updating')
        return throwError(()=>err)
      })
    ).subscribe(el=>{
      this.store.dispatch(updateCard({todo: el}))
      this.card = el;
    })
  }

}
