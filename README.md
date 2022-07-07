# rick-morty-fan-app

Steps to run the rick morty fan app:

Please be sure you are running you have the node version 16.15.1 on your local or using nvm

I have build this mini app taking the advantage of yarn workspaces to handle mono repos

- First to install all dependencies we need to run in the root of the project

```shell
  yarn
```
- Second we need to run the next command

```shell
  yarn start
```
running the command above allow us to start client and server

- To run unit tests on client side we have to run

```shell
  yarn workspaces client test
```

- To run e2e test on client side we have to run

```shell
  yarn workspaces client cypress:open
```

# Project description

The most of specifications are covered, some of the features related to the optional part are pending, In general I tried to keep the solution simple but well organized to keep it readable and mantainable as much as possible (of course always there is a space for improve)

## Server:

The stack I have used in the server side is

- Express
- Firebase (as database as a service)
- node-fetch (this package to make request to external api)
- cors (to avoid cross domain issue with request from local)

The approach applied in the server side is based on MVC in this case the model was skiped becasue the database is a service and I think is not need it  to add, for time reasons I decided to not include some extra complexity adding other type of structures like microservices for example.

## Client

The stack I have used in the client side is:

- React
- Redux
- redux-thunk (as middleware to handle the request from redux to the server) I prefer to use redux-observable but for time reason I decided to use thunk
- react-testing-library / jest (for testing porpuse)
- reselect (to create selectors on the container and retrieve the data from the global state efficiently)
- react-router (to handle all related to the routing on the client side)
- cypress (to handle e2e tests)
- css modules (to handle the styles of the components)
- react hooks (to handle component state)
- prettier (to format code)
- eslint (to detect some issue into the code rules)

The client has been created using create-react-app to create the base skeleton of the app, the structure of the app was following the redux flow separating actions, reducers, store, containers and components trying to avoid DRY and trying keep a single responsabilities on each parts.

Notes to keep in mind:

- The flow to handle errors is something to improve becasue it's partially touched
- In the redux flow is pending to add immer to keep the state immutable
- Add test to the server side
- Maybe the UX could be better :)
- Optimization could be part of a second iteration 