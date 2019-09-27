# test1

This is basic test project created with @vue/cli. It uses router and vuex store management. For testing Jest & Cypress are used.

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

Ensure you pass BASE_URL as environment variable or create .env file with this
value when using the router. Otherwise the scripts won't be injected into index.html template and the file will not be minifyed!

```bash
npm run build
```

### Run your tests

In the folder tests/unit there is one unit test for AppModal component.

```bash
npm run test:unit
```

### Lints and fixes files

```bash
npm run lint
```

### Run your end-to-end tests

```bash
npm run test:e2e
```

### Run your unit tests

```bash
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker NGINX image and Cypress testing

- Dockerfile is used to build webapp and test its working.

```bash
  # create docker image with nginx and app
  docker build . -t vue-cypress-test-app

  # test docker image
  docker run -d -p 8080:80 --name=vue-app vue-cypress-test-app

  # stop docker image
  docker stop vue-app

  # remove docker image
  docker rm vue-app

  # get into container
  docker exec -it vue-app /bin/bash
```

- Docker compose file in /tests/docker/docker-compose.yaml uses Docker file to create webapp container and cypress docker image to run cypress tests. See docker-compose file for exact syntax/definitions for cypress. For more info [see doc](https://mtlynch.io/painless-web-app-testing/)

```bash
  #The --exit-code-from cypress flag tells Docker Compose to use the Cypress container’s exit code as the exit code for the docker-compose command
  docker-compose up --exit-code-from cypress

  docker-compose stop

  docker-compose down
```
