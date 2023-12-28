# MVP vanilla JS

Project was inspired by [Learning JavaScript Patterns](https://www.amazon.com/Learning-JavaScript-Design-Patterns-Developers/dp/1098139879). It aims to implement oryginal MVP presented in 1990 using observer pattern.

## Architecture explanation

![image](https://github.com/teoMiesiac/mvp-vanilla-js/assets/21129815/1925066a-1e17-47c6-8333-7f4fae943840)


- Model represents domain specific data. It's ignorant of the UI (Views, Controllers). When Model changes it notifies it's observers.
- View represents current state of a Model and takes care of presentation. It's "dumb" and contain's little to no logic. Invocations from the View are delegated to Presenters.
- Presenter role is to handle user interaction (key press, clicks) and making decisions for the View. It observes Models and updates Views when Model changes. 

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a development build:

```sh
npm run build-dev
```
