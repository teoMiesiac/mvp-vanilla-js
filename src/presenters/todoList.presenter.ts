import Observer from "../utils/Observer";
import type TodoModel from "../models/todoList.model";
import type TodoView from "../views/todoList.view";

class TodoListPresenter extends Observer {
  todoModel: TodoModel;
  todoView?: TodoView;

  constructor(todoListModel: TodoModel) {
    super();
    this.todoModel = todoListModel;

    this.subscribeToModels();
  }

  bindTodoView(todoListView: TodoView) {
    this.todoView = todoListView;
  }

  subscribeToModels() {
    this.todoModel.addObserver({ update: this.update.bind(this) });
  }

  handleSubmitButton(input: HTMLInputElement) {
    const todo = input.value;
    this.todoModel.addTodo(todo);
    this.todoModel.notify();

    input.value = "";
    input.focus();
  }

  update() {
    this.todoView?.renderTodoList(this.todoModel.getAll());
  }
}

export default TodoListPresenter;
