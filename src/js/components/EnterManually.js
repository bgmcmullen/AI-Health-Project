class EnterManuallyBtn extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section id="manually">
        <btn-border>
          +enter manually
        <btn-border>
      </section>
    `;
  }

  connectedCallback() {
    $("#manually").unwrap();
  }
}

customElements.define('enter-manually-btn', EnterManuallyBtn);
