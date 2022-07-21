# rick-morty-fan-app

Steps to run the rick morty fan app:

Please be sure you are running you have the node version 16.15.1 on your local or using nvm

I have build this mini app taking the advantage of yarn workspaces to handle mono repos

- First clone this repo
- Then ¡ install all dependencies we need running in the root of the project next command:

```shell
  yarn
```
- Mext we need to run the command:

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

This is a simple demo to use the rick morty API over a react client