import "./components/buttons/BtnBorder.js";
import "./components/buttons/BtnFilled.js";
import Homepage from './views/Homepage';
import Header from './views/Header';
import Footer from './views/Footer';
import Uploading from './views/Uploading';

const App = async () => {
  const template = document.createElement('template');
  template.innerHTML = `
    ${Header()}
    <main class="container-fluid flex-fill">
      ${Homepage()}
      ${Uploading()}
    </main>
    ${Footer()}
  `;
  // Return a new node from template
  return template.content.cloneNode(true);
};

export default App;