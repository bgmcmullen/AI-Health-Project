import "../components/Upload.js";
import "../components/EnterManually.js";

const Homepage = () => {
	const template = `
    <div id="homepage" class="text-center">
      <h1>Nutrition Facts</h1>
      <upload-btn></upload-btn>
      <enter-manually-btn></enter-manually-btn>
    </div>
  `;
	return template;
};

export default Homepage;
