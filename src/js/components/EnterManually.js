import "./buttons/BtnBorder.js";

class EnterManuallyBtn extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="manually my-4">
        <btn-border>
          +enter manually
        <btn-border>
      </section>
    `;
  }
}

customElements.define('enter-manually-btn', EnterManuallyBtn);
