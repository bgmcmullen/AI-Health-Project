class EnterManuallyBtn extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section id="manually" class="my-4">
        <btn-border>
          +enter manually
        <btn-border>
      </section>
    `;
  }
}

customElements.define('enter-manually-btn', EnterManuallyBtn);
