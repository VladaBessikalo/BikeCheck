import { createHeader, createFooter, createBikeList } from '../views/main-view.js';
import { fetchData } from '../util/fetch-data.js';
import { setupSearchPage } from '../pages/search-page.js';
import { renderError } from './error-page.js';

export async function renderMainPage() {
    createHeader();
    createFooter();
    setupSearchPage();
   
    try {
        const data = await fetchData();        
        await createBikeList(data);

    } catch (error) {
        renderError(error)
    }
}

