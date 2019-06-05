class ComponentA extends HTMLElement {
  constructor() {
    super();
    this.state = {};


    // Define Component Template
    const componentATemplate = document.createElement('template');
    componentATemplate.innerHTML = `
      <h2>This is Component A!</h2>
      <p>The current state of the component is ${this.state.value || 'placeholder'}</p>
    `;

    // Create Shadow DOM node
    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(componentATemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.state = {
      ...this.state,
      value: 'connectedCallBack',
    }
  }

  render() {
  }
}

window.customElements.define('component-a', ComponentA);
