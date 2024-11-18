import { createSearchForm, displaySearchResults } from '../views/search-view.js';
import { fetchData, searchBySerialNum} from '../util/fetch-data.js'; 
import { createBikeList } from '../views/main-view.js';

export async function setupSearchPage() {
    createSearchForm();
  
    const form = document.getElementById('search-form');
    const input = document.getElementById('serial-input');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const serialNumber = input.value.trim();

        if (!serialNumber) {
            alert('Please enter a serial number.');
            return;
        }

        try {
            const data = await searchBySerialNum(serialNumber); 
            if (data.bikes && data.bikes.length > 0) {
                const { createBikeList } = await import('../views/main-view.js');
                createBikeList({ data });
            } else {
                alert('No bikes found with this serial number.');
                // then show bike-list page       
            }
        } catch (error) {
            console.error('Error searching for bikes:', error);
            alert('Something went wrong while searching. Please try again later.');
        }

    })
    

}
