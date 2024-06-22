const App = async () => {
  const template = document.createElement('template');
  template.innerHTML = `
    <header>
      HEADER
    </header>
    <main class="container-fluid flex-fill">
      CONTENT
    </main>
    <footer>
      FOOTER
    </footer>
  `;
  // Return a new node from template
  return template.content.cloneNode(true);
};

export default App;