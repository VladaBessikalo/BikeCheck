import { bikeCheckLogo, instagramIcon, facebookIcon, twitterIcon, bikeIconPath } from "../../constants.js";
import { bikesPerPage, fetchData, getBikesCount, goToNextPage, goToPrevPage, currentPage } from "../util/fetch-data.js";

const container = document.createElement('main');

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
            <div class="header__logo">
                <a href='#'>${bikeCheckLogo}</a>
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

    container.classList.add('container');
    container.innerHTML = '';

    const bikesList = document.createElement('ul');
    bikesList.classList.add('bikes');
    bikesList.innerHTML = '';

    function convertTimestamp(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toUTCString()
    }

    const retrievedData = await fetchedData.data;

    retrievedData.bikes.forEach((bike) => {
        const bikeItem = document.createElement('li');
        bikeItem.className = 'bike';
        const bikeImage = bike.large_img ? bike.large_img : bikeIconPath;

        bikeItem.innerHTML = String.raw`
            <div class="bike__img">
                <img class="bike__img-item" src="${bikeImage}" alt="bike-image">
            </div>
            <div class="bike__info">
                <div class="bike__title">${bike.title}</div>
                <div class="bike__serial">Serial Number: ${bike.serial} </div>
                <div class="bike__status"> ${bike.status}: ${convertTimestamp(bike.date_stolen)} </div>
                <div class="bike__location">Location: ${bike.stolen_location}</div>
            </div>
        `;
        bikesList.appendChild(bikeItem);
    });

    container.appendChild(bikesList);

    if (!document.querySelector('.button-container')) {
        createPagination(container);
    }

    header.insertAdjacentElement('afterend', container);
}

export function renderError(errorMessage) {
    const container = document.createElement('div');
    container.innerHTML = `<p class="error">${errorMessage}</p>`;
    const body = document.querySelector('body');
    body.appendChild(container);
}

async function createPagination(container) {
    if (!container) {
        return
    }

    const buttonContainer = document.createElement('div');
    const allBikesCount = await getBikesCount();

    const pagesAmount = Math.ceil(allBikesCount / bikesPerPage);

    buttonContainer.innerHTML = `
        <div class="button-container">
            <button id="prev-btn" class="button" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
            <span>${currentPage} / ${pagesAmount}</span>
            <button id="next-btn" class="button" ${currentPage === pagesAmount ? 'disabled' : ''}>Next</button>
        </div>
        `;
    container.appendChild(buttonContainer);
    listenToPageChanges();
}

export function listenToPageChanges() {
    const prevBtn = container.querySelector('#prev-btn');
    const nextBtn = container.querySelector('#next-btn'); 

    prevBtn.addEventListener('click', async () => {
        if (currentPage > 1) {
            goToPrevPage();
            await refreshBikeList();
        }
    });

    nextBtn.addEventListener('click', async () => {
        goToNextPage();
        await refreshBikeList();
    });
}

async function refreshBikeList() {
    const data = await fetchData(currentPage);

    await createBikeList(data);
}

