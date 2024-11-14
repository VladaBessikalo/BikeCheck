import { bikeCheckLogo, instagramIcon, facebookIcon, twitterIcon } from "../../constants.js";

export function createMainPage() {
    createHeader();
    createBikeContainer();
    createFooter();
}

function createHeader() {
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

function createFooter() {
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

function createBikeContainer() {
    const container = document.createElement('main');
    container.classList.add('container');
    container.innerHTML = `
        <div class="bikes">
            <div class="bikes__item">

            </div>
        </div>
    `
    const body = document.querySelector('body');
    body.appendChild(container);
}


createMainPage();