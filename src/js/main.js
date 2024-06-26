// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import "./import-jquery";
import Splashscreen from './components/Splashscreen'
import App from './App';

const app = async () => {
  await Splashscreen(2000);
  document.getElementById('app').appendChild(await App());
};

// Load app
app();
