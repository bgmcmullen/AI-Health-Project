class UploadBtn extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="upload my-4">
        <button class="btn btn-lg roboto-medium px-5 py-3">
          Upload
        </button>
        <input id="file-input" type="file" hidden>
      </section>
    `;
  }
};

customElements.define('upload-btn', UploadBtn);
