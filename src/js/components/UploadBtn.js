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
    
    // Pass image file to the Loading page
    const btn = this.querySelector("button");
    const preview = $("#uploading img");
    let url;

    $(btn).on('click', () => {
      $("#file-input").trigger("click");
    });

    $("#file-input").on('change', (e) => {
      const [file] = e.target.files;
      if (file) {
        url = URL.createObjectURL(file)
        preview.attr("src", url);
      }
      preview.on("load", () => {
        URL.revokeObjectURL(url);
        $("#homepage").fadeOut(800, () => {
          $("#uploading").fadeIn(800);
        });
        // parse image
        // analyze data
      });
    });
  }
};

customElements.define('upload-btn', UploadBtn);
