export function createErrorView(message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message");
  messageContainer.innerHTML = String.raw`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p> ${message} </p>
            </div>
        </div>
    `;

  const body = document.querySelector("body");
  body.appendChild(messageContainer);
}
