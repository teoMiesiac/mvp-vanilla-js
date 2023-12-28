import TodoPresenter from "../presenters/todoList.presenter";

class TodoListView {
  /** DOM elements */
  constainer: HTMLDivElement;
  input: HTMLInputElement;
  submitButton: HTMLButtonElement;
  todoList: HTMLUListElement;
  /** presenters */
  todoPresenter: TodoPresenter;

  constructor(todoListPresenter: TodoPresenter) {
    this.todoPresenter = todoListPresenter;

    this.constainer = document.createElement("div");
    this.input = document.createElement("input");
    this.submitButton = document.createElement("button");
    this.todoList = document.createElement("ul");

    this.renderInitialView();
    this.addEventListeners();
  }

  renderInitialView() {
    this.submitButton.innerText = "Add";

    document.body.appendChild(this.constainer);
    this.constainer.appendChild(this.input);
    this.constainer.appendChild(this.submitButton);
    this.constainer.appendChild(this.todoList);
  }

  addEventListeners() {
    this.submitButton.addEventListener("click", () => {
      this.todoPresenter.handleSubmitButton(this.input);
    });
  }

  renderListItem(todo: string) {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo;
    this.todoList.appendChild(todoItem);
  }

  clearList() {
    this.todoList.innerHTML = "";
  }

  renderTodoList(todos: string[]) {
    this.clearList();
    todos.forEach((todo) => {
      this.renderListItem(todo);
    });
  }
}

export default TodoListView;
