// CSS files
import "./styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

// JS files
import "jquery";
import 'bootstrap';
import AOS from 'aos';
import main from "./script/view/main.js";

//Modules
import 'regenerator-runtime';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

AOS.init();
library.add(fas);
dom.watch();
document.addEventListener("DOMContentLoaded", main);