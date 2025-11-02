### Login
#### URL POST - https://joldibaev.uz/api/auth/token/login/

##### Body
```
{
  "email": "nurlan@payme.uz",
  "password": "12345678"
}
```
##### Response
```
{
    "token": "7f01f83121a1340519aeda7810118fbfa86faf7c",
    "username": "nurlan@payme.uz",
    "user_id": 1
}
```

---------
### Get TODO LIST
#### URL GET - https://joldibaev.uz/api/todo/

##### token
```
{
  "Authorization": "Token {token}"
}
```
##### Response array of todo
```
[
    {
        "id": "bed6c27a-efcf-4655-bec4-146f418ea90f",
        "title": "WOWOW",
        "completed": false,
        "created_at": "2023-07-24T16:43:35.594817+05:00",
        "updated_at": "2023-07-24T16:43:35.594880+05:00",
        "user": 1
    }
]
```
---------

### Create TODO
#### URL POST - https://joldibaev.uz/api/todo/

###### Header
```
{
  "Authorization": "Token {token}"
}
```
###### Body
```
{
    "title": "title test",
    "completed": false,
    "user": 1
}
```
##### Response
```
{
    "id": "bed6c27a-efcf-4655-bec4-146f418ea90f",
    "title": "WOWOW",
    "completed": false,
    "created_at": "2023-07-24T16:43:35.594817+05:00",
    "updated_at": "2023-07-24T16:43:35.594880+05:00",
    "user": 1
}
```
---------


### DELETE TODO by ID
#### URL DELETE - https://joldibaev.uz/api/todo/{id}/
###### Header
```
{
  "Authorization": "Token {token}"
}
```
##### Response
```
{
    "id": "8ab8ab0f-7c26-4d5e-86c7-6232acb4101e",
    "title": "test_title",
    "completed": false,
    "created_at": "2023-07-24T17:19:02.042061+05:00",
    "updated_at": "2023-07-24T17:19:02.042121+05:00",
    "user": 1
}
```
----

### Get one TODO by ID
#### URL GET - https://joldibaev.uz/api/todo/{id}/
###### Header
```
{
  "Authorization": "Token {token}"
}
```
##### Response
```
{
    "id": "8ab8ab0f-7c26-4d5e-86c7-6232acb4101e",
    "title": "test_title",
    "completed": false,
    "created_at": "2023-07-24T17:19:02.042061+05:00",
    "updated_at": "2023-07-24T17:19:02.042121+05:00",
    "user": 1
}
```
----
### Update one TODO by ID
#### URL PUT - https://joldibaev.uz/api/todo/{id}/
###### Header
```
{
  "Authorization": "Token {token}"
}
```
###### Body
```
{
    title: string,
    completed: boolean,
    user: number
}
```
##### Response
```
{
    "id": "8ab8ab0f-7c26-4d5e-86c7-6232acb4101e",
    "title": "test_title",
    "completed": false,
    "created_at": "2023-07-24T17:19:02.042061+05:00",
    "updated_at": "2023-07-24T17:19:02.042121+05:00",
    "user": 1
}
```
