class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('탄생함');
  }

  disconnectedCallback() {
    console.log('죽음');
  }
}

customElements.define('c-element', MyElement);

const elem = document.createElement('c-element');

const app = document.getElementsById('app');

document.body.appendChild(elem);
