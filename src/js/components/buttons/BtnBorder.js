class BtnBorder extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <button class="btn-border lato-bold">
        <span class="d-block">
          ${this.innerText}
        </span>
      </button>
    `;
  }

  connectedCallback() {
    $(".btn-border").unwrap();
  }
}

customElements.define('btn-border', BtnBorder);
