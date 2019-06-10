// Define Component Template
const componentATemplate = document.createElement('template');
componentATemplate.innerHTML = `
  <div class="componentA-root">
    <h2>This is Component A!</h2>
    <p>The current state of the component is default</p>
  </div>
`;

class ComponentA extends HTMLElement {
  constructor() {
    super();
    this.state = {};

    // Create Shadow DOM node
    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(componentATemplate.content.cloneNode(true));
    this.$componentA = this.shadowRoot.querySelector('.componentA-root');

    // Bind Methods
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  connectedCallback() {
    this.state = {
      ...this.state,
      value: 'Component Mounted',
    }

    this.$componentA.innerHTML = `
      <h2>This is Component A!</h2>
      <p>The current state of the component is ${this.state.value}</p>
      <button type="button">Fetch Sayt Data</button>
    `

    this.$componentA.querySelector('button').addEventListener('click', this.handleButtonPress);
    document.addEventListener('fetchSaytProducts_UPDATED', this.handleEvent);
  }

  handleButtonPress() {
    window.dispatchEvent(new Event('fetchSaytProducts'));
  }

  handleEvent(event) {
    const eventDetails = event.detail;
    const productTemplates = []
    
    if (eventDetails) {
      eventDetails.data.forEach((item) => {
        const productTemplate = document.createElement('template');
        productTemplate.innerHTML = `
          <div>
            <h3>${item.productName}</h3>
            <p>${item.price}</p>
            <p>${item.availability}</p>
            <p>${item.rating}</p>
          </div>
        `;

        productTemplates.push(productTemplate);
      });
    }

    productTemplates.forEach((item) => {
      this.$componentA.appendChild(item.content.cloneNode(true)); 
    })
  }
}

window.customElements.define('component-a', ComponentA);
