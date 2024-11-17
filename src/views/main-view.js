import { bikeCheckLogo, instagramIcon, facebookIcon, twitterIcon, bikeIconPath } from "../../constants.js";
// import { goToNextPage, goToPrevPage } from "../pages/main-page.js";

let currentPage = 1;

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
            <div class="header__logo">
                ${bikeCheckLogo}
            </div>
            <div class="header__info">
                <div class="header__name">BikeCheck</div>
                <div class="header__motto">Be on the safe side! Check before you buy!</div>
            </div>
        `
    const body = document.querySelector('body');
    body.appendChild(header);
}

export function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `
            <div class="footer__logo">
                <div class="footer__icon">
                    ${bikeCheckLogo}
                </div>
                <div class="footer__name">BikeCheck</div>
            </div>
            <div class="footer__social-icons">
                ${instagramIcon}
                ${facebookIcon}
                ${twitterIcon}
        </div>
    `
    const body = document.querySelector('body');

    body.appendChild(footer);
}

export async function createBikeList(fetchedData) {
    const header = document.querySelector('.header');

    const existingContainer = document.querySelector('main.container');

    if (existingContainer) {
        existingContainer.remove();
    }

    const container = document.createElement('main');
    container.classList.add('container');
    container.innerHTML = '';

    const bikesList = document.createElement('div');
    bikesList.classList.add('bikes');
    bikesList.innerHTML = '';

    function convertTimestamp(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toUTCString()
    }

    const retrievedData = await fetchedData.data;

    retrievedData.bikes.forEach((bike) => {
        const bikeItem = document.createElement('div');
        bikeItem.className = 'bike';
        const bikeImage = bike.large_img ? bike.large_img : bikeIconPath;

        bikeItem.innerHTML = `
            <div class="bike__img">
                <img class="bike__img-item" src="${bikeImage}" alt="bike-image">
            </div>
            <div class="bike__info">
                <div class="bike__title">${bike.title}</div>
                <div class="bike__serial">Serial: ${bike.serial} </div>
                <div class="bike__status"> ${bike.status}: ${convertTimestamp(bike.date_stolen)} </div>
                <div class="bike__location">${bike.stolen_location}</div>
            </div>
        `
        bikesList.appendChild(bikeItem);
    });

    container.appendChild(bikesList);
    createPagination(container);
    header.insertAdjacentElement('afterend', container);
}

export function renderError(errorMessage) {
    const container = document.createElement('div');
    container.innerHTML = `<p class="error">${errorMessage}</p>`;
    const body = document.querySelector('body');
    body.appendChild(container);
}

function createPagination(container) {
    if (!container) {
        return
    }
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = `
        <div class="button-container">
            <button id="prev-btn" class="button" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
            <button id="next-btn" class="button">Next</button>
        </div>
        `
    container.appendChild(buttonContainer);   

    const prevBtn = container.querySelector('#prev-btn');
    const nextBtn = container.querySelector('#next-btn');

    prevBtn.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage--;
            await refreshBikeList();
        }
    });

    nextBtn.addEventListener('click', async () => {
        currentPage++;
        await refreshBikeList();
    });
}

async function refreshBikeList() {
    const { fetchData } = await import('../util/fetch-data.js');
    const data = await fetchData(currentPage);
    await createBikeList(data);
}

