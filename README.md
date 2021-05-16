# basic-auth

### Author: Nihad Zeidan


### tests report:

[Heroku]()


[GitHub PR]()


[GitHub Actions]()

### .env requirements

PORT - Port Number

DataBase_URI=mongodb://localhost:27017/auth



### Running the app
`npm start`


### Endpoints: 

`/signin`

`/signup`


Returns Object

{
  user {
    "username": "String",
    "password": "String",
  }
}


### Tests
Unit Tests: npm test



### UML

![](./assets/basic-auth.png)