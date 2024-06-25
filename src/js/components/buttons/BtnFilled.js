class BtnFilled extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <button class="btn btn-filled btn-shadow lato-bold">
        ${this.innerText}
      </button>
    `;
  }
}

customElements.define('btn-filled', BtnFilled);