export class TodoService {
  static state = [];

  initializeState(state) {
    this.state = state;
  }

  static AddTodoItem(id, value, checked) {
    this.state.push({ id, value, checked });
    console.log(...this.state);
  }

  static DeleteTodoItem(id) {
    this.state = this.state.filter((t) => t.id !== id);
    console.log(...this.state);
  }

  //id와 일치하는 대상을 찾고
  //check의 상태를 내가 위에서 전달받은 check로 대신해준다
  static CheckTodoItem(id, checked) {
    const t = this.state.find((t) => t.id === id);
    t.checked = checked;
    console.log(...this.state);
  }

  //체크의 상태가 바뀌면 그 값을 받고 확인해줌
  static UpdateTodoItem(id, value) {
    const t = this.state.find((t) => t.id === id);
    t.value = value;
    console.log(...this.state);
  }
}
