import { Injectable } from '@angular/core';
import { CreateTodo, Todo, TodoResponse, url } from '../models/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList:Todo[] = [
    {
        "id": "dd5bc362-12ac-47fb-b28b-82dc9eca69b0",
        "title": "task 8 test test",
        "completed": false,
        "created_at": "2023-07-24T13:28:30.133198+05:00",
        "updated_at": "2023-07-24T16:33:23.811665+05:00",
        "user": 1
    },
    {
        "id": "4d11a7ef-a391-4b9c-b679-fcd38248f421",
        "title": "test",
        "completed": true,
        "created_at": "2023-07-24T15:01:00.651028+05:00",
        "updated_at": "2023-07-24T16:32:33.385088+05:00",
        "user": 1
    },
    {
        "id": "5d0cc4b2-5fa4-4e42-9f38-c22f14bed41f",
        "title": "asdasd test",
        "completed": false,
        "created_at": "2023-07-24T15:44:20.485239+05:00",
        "updated_at": "2023-07-24T16:33:00.537782+05:00",
        "user": 1
    },
    {
        "id": "5d4561de-4781-4004-9436-9b1be220dce8",
        "title": "test",
        "completed": true,
        "created_at": "2023-07-24T16:21:38.061109+05:00",
        "updated_at": "2023-07-24T16:21:38.061158+05:00",
        "user": 1
    },
    {
        "id": "509e6c64-1646-42d0-a2e7-5086faf090b7",
        "title": "еуые123123123123",
        "completed": false,
        "created_at": "2023-07-24T16:38:36.537532+05:00",
        "updated_at": "2023-07-24T16:38:36.537582+05:00",
        "user": 1
    },
    {
        "id": "0c545740-13ba-401e-8a72-1360f4ac03f3",
        "title": "еуые фывфыв",
        "completed": false,
        "created_at": "2023-07-24T16:38:52.302665+05:00",
        "updated_at": "2023-07-24T16:38:52.302714+05:00",
        "user": 1
    },
    {
        "id": "d2c350db-6d36-4533-b77d-8befd2368ddf",
        "title": "test",
        "completed": false,
        "created_at": "2023-07-24T16:43:20.600719+05:00",
        "updated_at": "2023-07-24T16:43:20.600769+05:00",
        "user": 1
    },
    {
        "id": "bed6c27a-efcf-4655-bec4-146f418ea90f",
        "title": "WOWOW",
        "completed": false,
        "created_at": "2023-07-24T16:43:35.594817+05:00",
        "updated_at": "2023-07-24T16:43:35.594880+05:00",
        "user": 1
    },
    {
        "id": "8ab8ab0f-7c26-4d5e-86c7-6232acb4101e",
        "title": "test_title",
        "completed": false,
        "created_at": "2023-07-24T17:19:02.042061+05:00",
        "updated_at": "2023-07-24T17:19:02.042121+05:00",
        "user": 1
    },
    {
        "id": "44ba5d40-80b1-4453-9de2-ffa6b9fa79d7",
        "title": "title test",
        "completed": false,
        "created_at": "2023-07-24T18:03:42.616330+05:00",
        "updated_at": "2023-07-24T18:03:42.616375+05:00",
        "user": 1
    }
  ]

  constructor(
    private http: HttpClient
  ) { }

  getOneCard(id: string):Todo | undefined {
    return this.todoList.find(el=>el.id === id)
  }

  addOneCard(card:CreateTodo) {
    const now = Date.now().toString();
    const id = Math.floor(Math.random() * 100).toString();
    const item = {...card, id: id, created_at: now, updated_at:now} as Todo
    this.todoList.push(item)
  }

  deleteOneCard(id:string) {
    const card = this.todoList.findIndex(el=>el.id === id);

    if(card !== -1) {
      this.todoList.splice(card, 1)
    }
  }

  getAllCards() {
    const token = '7f01f83121a1340519aeda7810118fbfa86faf7c'
    const headers = new HttpHeaders().append('Authorization', 'Token ' + token);
    // return this.todoList
    return this.http.get<TodoResponse>(url+'/todo/', {headers})
  }

  updateOneCard(id:string, card:CreateTodo) {
    const item = this.todoList.findIndex(el=>el.id === id);

    if(item !== -1) {
      const oldCard = this.todoList.find(el=>el.id === id)!
      const newCard = {...oldCard, ...card}
      this.todoList.splice(item, 1, newCard)
    }
  }
}
