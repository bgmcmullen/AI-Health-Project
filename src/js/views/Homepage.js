import "../components/Upload.js";
import "../components/EnterManually.js";

const Homepage = () => {
	const template = `
    <div id="homepage" class="flex-fill flex-column align-items-center justify-content-between py-3">
      <h1>Nutrition Facts</h1>
      <upload-btn></upload-btn>
      <enter-manually-btn></enter-manually-btn>
    </div>
  `;
	return template;
};

export default Homepage;
