class Button extends HTMLElement {
  constructor() {
    super();

    this.button = document.querySelector('button');

    console.log(this.button);
  }

  connectedCallback() {}

  disconnectedCallback() {}

  static get observedAttributes() {
    return ['id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue != newValue) {
      //기존 값이 다르면 다시 렌더링
      this._render();
    }
  }

  _render() {
    //아이디값 호출
    this.button.textContent = this.id; //textcontent를 전달받은 this.id로 해라
  }
}

customElements.define('c-element', Button);

const c = document.querySelector('c-button');
//c 자체에 속성을 id의 count값을 증가하게 만들면
let count = 0;
c.addEventListener('click', () => {
  c.setAttribute('id', ++count);
});
