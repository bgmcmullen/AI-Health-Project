import Logo from '../../../public/logo.svg';

const Splashscreen = async (param) => {
  // Show the splashscreen
  // const template = document.createElement('template');
  // template.innerHTML = `
  //   <div id="splashscreen" class="flex-column align-items-center justify-content-center">
  //     <img src=${Logo} class="splash-logo mb-5"/>
  //     <div class="spinner-grow" role="status">
  //       <span class="visually-hidden">Loading...</span>
  //     </div>
  //   </div>
  // `;
  // document.body.appendChild(template.content.cloneNode(true));

  // Show the app when content loaded (with delay)
  const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay));
  document.addEventListener('DOMContentLoaded', () =>
    wait(param).then(() => {
      $('#splashscreen').fadeOut(500, () => {
        $('#wrapper').fadeIn(500);
      });
    }
  ));
};

export default Splashscreen;
