class Button extends HTMLButtonElement {
  constructor() {
    super();

    //c-button의 쉐도우 돔을 열어주기
    this.attachShadow({ mode: 'open' }); //this<-생성된 컴포넌트를 가리킴(=c-button) / mode: 'closed' 하면 닫힘

    // 그리고 그 안에 (shadowRoot) 내가 원하는 태그를 넣기
    this.shadowRoot.innerHTML = `
      <button>hello</button>
    `;
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button);

console.log(
  document.querySelector('c-button').shadowRoot.querySelector('button')
);
