import { Injectable } from '@angular/core';
import { CreateTodo, Todo, TodoResponse, url } from '../models/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList:Todo[] = []

  constructor(
    private http: HttpClient,
  ) { }

  getOneCard(id: string) {
    const token = '7f01f83121a1340519aeda7810118fbfa86faf7c'
    const headers = new HttpHeaders().append('Authorization', 'Token ' + token);
    return this.http.get<Todo>(url+'/todo/'+id, {headers})
  }

  addOneCard(card:CreateTodo) {
    const token = '7f01f83121a1340519aeda7810118fbfa86faf7c'
    const headers = new HttpHeaders().append('Authorization', 'Token ' + token);
    return this.http.post<Todo>(url+'/todo/', card, {headers})
  }

  deleteOneCard(id:string) {
    const token = '7f01f83121a1340519aeda7810118fbfa86faf7c'
    const headers = new HttpHeaders().append('Authorization', 'Token ' + token);
    return this.http.delete<Todo>(`${url+'/todo/'+id}/`, {headers})
  }

  getAllCards() {
    const token = '7f01f83121a1340519aeda7810118fbfa86faf7c'
    const headers = new HttpHeaders().append('Authorization', 'Token ' + token);
    return this.http.get<TodoResponse>(url+'/todo/', {headers}).pipe(map(el=>el.results))
  }

  updateOneCard(id:string, card:CreateTodo) {
    const token = '7f01f83121a1340519aeda7810118fbfa86faf7c'
    const headers = new HttpHeaders().append('Authorization', 'Token ' + token);
    return this.http.put<Todo>(`${url+'/todo/'+id}/`, card, {headers})
  }
}
