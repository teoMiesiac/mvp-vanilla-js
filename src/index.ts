import TodoListView from "./views/todoList.view";
import TodoListModel from "./models/todoList.model";
import TodoListPresenter from "./presenters/todoList.presenter";

const todoListModel = new TodoListModel();
const todoListPresenter = new TodoListPresenter(todoListModel);
const todoListView = new TodoListView(todoListPresenter);
todoListPresenter.bindTodoView(todoListView);
