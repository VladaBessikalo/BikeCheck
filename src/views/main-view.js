export function createMainPage() {
    createHeader();
    createBikeContainer();
    createFooter();
}

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
            <div class="header__logo logo">
                <svg viewBox="0 0 1024 1024" class="header__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="18.432">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M510.2 505m-475.7 0a475.7 475.7 0 1 0 951.4 0 475.7 475.7 0 1 0-951.4 0Z" fill="#FDB442"></path>
                        <path d="M177.6 755m-157.9 0a157.9 157.9 0 1 0 315.8 0 157.9 157.9 0 1 0-315.8 0Z" fill="#01A9E0"></path>
                        <path d="M177.6 922.9C85 922.9 9.7 847.6 9.7 755S85 587.2 177.6 587.2 345.5 662.5 345.5 755s-75.3 167.9-167.9 167.9z m0-315.7C96 607.2 29.7 673.5 29.7 755S96 902.9 177.6 902.9 325.5 836.6 325.5 755s-66.4-147.8-147.9-147.8z" fill=""></path>
                        <path d="M842.9 755m-157.9 0a157.9 157.9 0 1 0 315.8 0 157.9 157.9 0 1 0-315.8 0Z" fill="#01A9E0"></path>
                        <path d="M842.9 922.9C750.3 922.9 675 847.6 675 755s75.3-167.9 167.9-167.9 167.9 75.3 167.9 167.9-75.3 167.9-167.9 167.9z m0-315.7C761.3 607.2 695 673.5 695 755s66.3 147.9 147.9 147.9S990.8 836.6 990.8 755s-66.4-147.8-147.9-147.8zM177.6 765c-1.2 0-2.4-0.2-3.6-0.7-5.1-2-7.7-7.8-5.7-12.9l190.1-489.7c1.5-3.8 5.2-6.4 9.3-6.4h101c5.5 0 10 4.5 10 10s-4.5 10-10 10h-94.2L186.9 758.7c-1.5 3.9-5.3 6.3-9.3 6.3z" fill=""></path>
                        <path d="M603.4 791.7c-2.3 0-4.5-0.8-6.3-2.3L266.3 517.9c-3.3-2.7-4.5-7.1-3.1-11.1s5.2-6.6 9.4-6.6h386.9c3.2 0 6.1 1.5 8 4L850.9 749c2.1 2.9 2.6 6.7 1.2 10-1.4 3.3-4.5 5.6-8.1 6l-239.5 26.7h-1.1zM300.6 520.2l305.9 251.1L824.4 747 654.5 520.2H300.6zM783 398.9H581c-5.5 0-10-4.5-10-10s4.5-10 10-10h202c5.5 0 10 4.5 10 10s-4.5 10-10 10z" fill=""></path>
                        <path d="M603.4 791.7c-0.7 0-1.4-0.1-2-0.2-5.4-1.1-8.9-6.4-7.8-11.8l81.6-392.9c1.1-5.4 6.4-8.9 11.8-7.8 5.4 1.1 8.9 6.4 7.8 11.8l-81.6 392.9c-1 4.8-5.1 8-9.8 8z" fill=""></path>
                    </g>
                </svg>
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
            <div class="footer__logo logo">
                <svg viewBox="0 0 1024 1024" class="footer__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="18.432">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M510.2 505m-475.7 0a475.7 475.7 0 1 0 951.4 0 475.7 475.7 0 1 0-951.4 0Z" fill="#FDB442"></path>
                        <path d="M177.6 755m-157.9 0a157.9 157.9 0 1 0 315.8 0 157.9 157.9 0 1 0-315.8 0Z" fill="#01A9E0"></path>
                        <path d="M177.6 922.9C85 922.9 9.7 847.6 9.7 755S85 587.2 177.6 587.2 345.5 662.5 345.5 755s-75.3 167.9-167.9 167.9z m0-315.7C96 607.2 29.7 673.5 29.7 755S96 902.9 177.6 902.9 325.5 836.6 325.5 755s-66.4-147.8-147.9-147.8z" fill=""></path>
                        <path d="M842.9 755m-157.9 0a157.9 157.9 0 1 0 315.8 0 157.9 157.9 0 1 0-315.8 0Z" fill="#01A9E0"></path>
                        <path d="M842.9 922.9C750.3 922.9 675 847.6 675 755s75.3-167.9 167.9-167.9 167.9 75.3 167.9 167.9-75.3 167.9-167.9 167.9z m0-315.7C761.3 607.2 695 673.5 695 755s66.3 147.9 147.9 147.9S990.8 836.6 990.8 755s-66.4-147.8-147.9-147.8zM177.6 765c-1.2 0-2.4-0.2-3.6-0.7-5.1-2-7.7-7.8-5.7-12.9l190.1-489.7c1.5-3.8 5.2-6.4 9.3-6.4h101c5.5 0 10 4.5 10 10s-4.5 10-10 10h-94.2L186.9 758.7c-1.5 3.9-5.3 6.3-9.3 6.3z" fill=""></path>
                        <path d="M603.4 791.7c-2.3 0-4.5-0.8-6.3-2.3L266.3 517.9c-3.3-2.7-4.5-7.1-3.1-11.1s5.2-6.6 9.4-6.6h386.9c3.2 0 6.1 1.5 8 4L850.9 749c2.1 2.9 2.6 6.7 1.2 10-1.4 3.3-4.5 5.6-8.1 6l-239.5 26.7h-1.1zM300.6 520.2l305.9 251.1L824.4 747 654.5 520.2H300.6zM783 398.9H581c-5.5 0-10-4.5-10-10s4.5-10 10-10h202c5.5 0 10 4.5 10 10s-4.5 10-10 10z" fill=""></path>
                        <path d="M603.4 791.7c-0.7 0-1.4-0.1-2-0.2-5.4-1.1-8.9-6.4-7.8-11.8l81.6-392.9c1.1-5.4 6.4-8.9 11.8-7.8 5.4 1.1 8.9 6.4 7.8 11.8l-81.6 392.9c-1 4.8-5.1 8-9.8 8z" fill=""></path>
                    </g>
                </svg>
                <div class="footer__name">BikeCheck</div>
            </div>
            <div class="footer__social-icons">
                <a href="https://instagram.com" target="_blank" class="footer__social-icon footer__social-icon--instagram" aria-label="Instagram">
                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FDB442" stroke="#FDB442" height="24px" width="24px">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                        <title>instagram [#FDB442]</title> 
                        <desc>Created with Sketch.</desc> 
                        <defs> </defs> 
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#FDB442"> 
                        <g id="icons" transform="translate(56.000000, 160.000000)"> 
                            <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#FDB442]"> </path> 
                        </g> </g> 
                        </g> </g>
                    </svg>
                </a>
                <a href="https://facebook.com" target="_blank" class="footer__social-icon footer__social-icon--facebook" aria-label="Facebook">
                    <svg fill="#FDB442" height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> 
                    </g>
                    /svg>
                </a>
                <a href="https://twitter.com" target="_blank" class="footer__social-icon footer__social-icon--twitter" aria-label="Twitter">
                    <svg fill="#FDB442" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-271 296.6 256.4 208.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M-14.6,321.2c-9.4,4.2-19.6,7-30.2,8.3c10.9-6.5,19.2-16.8,23.1-29.1c-10.2,6-21.4,10.4-33.4,12.8 c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12c-43.7-2.2-82.5-23.1-108.4-55 c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6c0,25.5,18.1,46.8,42.2,51.6 c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5c-18,14.1-40.7,22.5-65.3,22.5 c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7c0-2.3,0-4.6-0.1-6.8 C-30.5,341-21.6,331.8-14.6,321.2"></path> 
                    </g>
                    </svg>
                </a>
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