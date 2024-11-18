export function createWrongSearchMessage() {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    messageContainer.innerHTML = `
        <div>
            <div class="message__container">
                <h1 class="message__heading">No bikes found matching your criteria.</h1>
                <p class="message__text> Please try a different search or check back later </p>
                <a href="#" class="back-button button">Go Back to Search</a>
            </div>
        </div>`
    const body = document.querySelector('body');
    body.appendChild(messageContainer);
}