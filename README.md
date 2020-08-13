# test-task-API
The little test api for create update and delete users

## Setup API
for start API you need make sure you run Mongo on your local machine , go to the api directory and write this command
```
$ npm install
```
```
$ npm run start 
```

## HOW TO USE

#### CREATE USER
```
POST: http://localhost:3000/users
```
InsertDataExample(in body):  
```
{
    "name": "Jhon",
    "surname": "Doe",
    "email": "jhon.doe@gmail.com"
}
```

ReturnExample:

```
{
    "data": {
        "_id": "5f35215effc9d6a215c259cf",
        "name": "Jhon",
        "surname": "Doe",
        "email": "mjhon.doe@gmail.com",
        "uuid": "84f320f1-eb54-4ba1-9418-8349647747fa",
        "createdAt": "2020-08-13T11:17:50.361Z",
        "__v": 0
    }
}
```

#### GET ALL USERS
```
GET: http://localhost:3000/users
```

ReturnExample:
```
{
    "data": [
        {
            "_id": "5f35144cadd9afbe8223ef41",
            "name": "Mykola",
            "surname": "Shydlovskyi",
            "email": "mikola@gmail.com",
            "uuid": "efcb6983-99ec-41dd-a69e-4a3df02a13e6",
            "createdAt": "2020-08-13T10:22:04.417Z",
            "__v": 0
        },
        {
            "_id": "5f351643633c0fe29d1bf59a",
            "name": "Pavlo",
            "surname": "Shydlovskyi",
            "email": "pavlo@gmail.com",
            "uuid": "c419cf36-add5-4d19-b582-640e60dee1ec",
            "createdAt": "2020-08-13T10:30:27.700Z",
            "__v": 0
        },
        {
            "_id": "5f35215effc9d6a215c259cf",
            "name": "Jhon",
            "surname": "Doe",
            "email": "jhon.doe@gmail.com",
            "uuid": "84f320f1-eb54-4ba1-9418-8349647747fa",
            "createdAt": "2020-08-13T11:17:50.361Z",
            "__v": 0
        }
    ]
}
```

#### GET USER BY UUID
```
GET: http://localhost:3000/users/:uuid
```

ReturnExample:
```
{
    "data": {
        "_id": "5f35144cadd9afbe8223ef41",
        "name": "Jhon",
        "surname": "Doe",
        "email": "jhon.doe@gmail.com",
        "uuid": "efcb6983-99ec-41dd-a69e-4a3df02a13e6",
        "createdAt": "2020-08-13T10:22:04.417Z",
        "__v": 0
    }
}
```
#### UPDATE USER BY UUID
```
PATCH: http://localhost:3000/users/:uuid
```

UpdateDataExample:
```
{
    "name": "Leonid",
    "surname": "Naumov",
    "email": "leon@gmail.com"
}
```
You can update one or more parameters

ReturnExample:
```
{
    "data": {
        "_id": "5f35215effc9d6a215c259cf",
        "name": "Leonid",
        "surname": "Naumov",
        "email": "leon@gmail.com",
        "uuid": "84f320f1-eb54-4ba1-9418-8349647747fa",
        "createdAt": "2020-08-13T11:17:50.361Z",
        "__v": 0
    }
}
```

#### DELETE USER BY UUID
```
DELETE: http://localhost:3000/users/:uuid
```
