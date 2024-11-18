export function createSearchForm() {
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search');

    searchContainer.innerHTML = String.raw`
        <form id="search-form" class="search__form">
            <input type="text" id="serial-input" name="serial" placeholder="Search by Serial Number">
            <input type="text" id="location-input" name="location" placeholder="Search by Location">
            <input type="text" id="manufacturer-input" name="manufacturer" placeholder="Search by Manufacturer">
            <button type="submit" class="search__btn button">Search</button>
        </form>
        <div id="search-results" class="search__results"></div>
    `;

    const header = document.querySelector('header');
    header.appendChild(searchContainer);
}
