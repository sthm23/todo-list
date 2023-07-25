
export const url = 'http://localhost:4200/api';
export const url2 = 'https://joldibaev.uz';
export interface Todo {
  id: string,
  title: string,
  completed: boolean,
  created_at: string,
  updated_at: string,
  user: 1
}

export interface TodoResponse {
  count: number
  next: null
  previous: null
  results: Todo[]
}

export interface CreateTodo {
  title: string,
  completed: boolean,
  user: 1
}

export interface Login {
  email: string
  password: string
}

export interface LoginResponse {
  token: string,
  username: string,
  user_id: 1
}

export interface ErrorMessage {
  error: {message: string}
  status: number
}
