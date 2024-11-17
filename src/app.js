import { renderMainPage } from "../src/pages/main-page.js"

const loadApp = () => {
    renderMainPage();
  };
  
window.addEventListener('load', loadApp)