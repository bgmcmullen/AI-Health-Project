class BtnBorder extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <button class="btn btn-border lato-bold">
        <span class="d-block">
          ${this.innerText}
        </span>
      </button>
    `;
  }
}

customElements.define('btn-border', BtnBorder);
