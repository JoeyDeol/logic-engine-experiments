const componentATemplate = document.createElement('template');
componentATemplate.innerHTML= `<h2>This is Component A!</h2>`;

class ComponentA extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(componentATemplate.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('COMPONENT-A HAS BEEN MOUNTED!');
  }
}

window.customElements.define('component-a', ComponentA);
