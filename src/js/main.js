'use strict';

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import "./import-jquery";
import Splashscreen from './components/Splashscreen'

const app = async () => {
  await Splashscreen(2000);
};

app();
