import Homepage from './views/Homepage';
import Header from './views/Header';
import Footer from './views/Footer';

const App = async () => {
  const template = document.createElement('template');
  template.innerHTML = `
    ${Header()}
    <main class="container-fluid flex-fill">
      ${Homepage()}
    </main>
    ${Footer()}
  `;
  // Return a new node from template
  return template.content.cloneNode(true);
};

export default App;