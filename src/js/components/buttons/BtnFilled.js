class BtnFilled extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <button class="btn-filled btn-shadow lato-bold">
        ${this.innerText}
      </button>
    `;
  }

  connectedCallback() {
    $(".btn-filled").unwrap();
  }
}

customElements.define('btn-filled', BtnFilled);