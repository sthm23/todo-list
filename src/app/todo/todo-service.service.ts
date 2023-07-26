import { Injectable } from '@angular/core';
import { CreateTodo, Todo, TodoResponse, url } from '../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
  ) { }

  getOneCard(id: string) {
    return this.http.get<Todo>(url+'/todo/'+id)
  }

  addOneCard(card:CreateTodo) {
    return this.http.post<Todo>(url+'/todo/', card)
  }

  deleteOneCard(id:string) {
    return this.http.delete<Todo>(`${url+'/todo/'+id}/`)
  }

  getAllCards() {
    return this.http.get<TodoResponse>(url+'/todo/')
      .pipe(
          map(el=>el.results
            .sort((a, b)=>+a.completed - +b.completed)
          )
        )
  }

  updateOneCard(id:string, card:CreateTodo) {
    return this.http.put<Todo>(`${url+'/todo/'+id}/`, card)
  }
}
