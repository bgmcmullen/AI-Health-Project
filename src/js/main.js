// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import "./import-jquery";
import App from './App';

const app = async () => {
  document.getElementById('app').appendChild(await App());
};

// Load app
app();
