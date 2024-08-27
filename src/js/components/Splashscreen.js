'use strict';

const Splashscreen = async (param) => {

  const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay));
  document.addEventListener('DOMContentLoaded', () =>
    // wait for delay, then fade out splash screen
    wait(param).then(() => {
      $('#splashscreen').fadeOut(500, () => {
        $('#wrapper').fadeIn(500);
      });
    }
  ));
};

export default Splashscreen;
