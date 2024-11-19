import { createErrorView } from "../views/error-view.js";

export function renderError(message) {
  createErrorView(message);

  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.addEventListener("click", () => (modal.style.display = "none"));

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
