export function createSearchForm() {
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search');

    searchContainer.innerHTML = `
        <form id="search-form" class="search__form">
            <input type="text" id="serial-input" name="serial" placeholder="Search by Serial Number">
            <input type="text" id="location-input" name="location" placeholder="Search by Location">
            <input type="text" id="model-input" name="model" placeholder="Search by Model">
            <button type="submit" class="search-btn button">Search</button>
        </form>
        <div id="search-results" class="search__results"></div>
    `;

    const header = document.querySelector('header');
    header.appendChild(searchContainer);
}

export function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }
    results.forEach((bike) => {
        const bikeItem = document.createElement('div');
        bikeItem.className = 'search-result-item';

        bikeItem.innerHTML = `
            <div class="bike__info">
                <p><strong>Serial:</strong> ${bike.serial}</p>
                <p><strong>Location:</strong> ${bike.stolen_location}</p>
                <p><strong>Model:</strong> ${bike.title}</p>
            </div>
        `;

        resultsContainer.appendChild(bikeItem);
    });
}