class EnterManuallyBtn extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="manually my-4">
        <button class="btn btn-lg p-0 roboto-medium">
          <span class="d-block mx-4 my-2">
            Enter Manually
          </span>
        </button>
      </section>
    `;
  }
}

customElements.define('enter-manually-btn', EnterManuallyBtn);
