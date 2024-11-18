import { createSearchForm } from '../views/search-view.js';
import { searchBikes } from '../util/fetch-data.js'; 
import { createWrongSearchMessage } from '../views/error-view.js';

export async function setupSearchPage() {
    createSearchForm();
  
    const form = document.getElementById('search-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const serial = document.getElementById('serial-input').value.trim();
        const location = document.getElementById('location-input').value.trim();
        const manufacturer = document.getElementById('manufacturer-input').value.trim();
        
        try {
            const data = await searchBikes({ serial, location, manufacturer });

            if (data.bikes && data.bikes.length > 0) {
                const { createBikeList } = await import('../views/main-view.js');
                createBikeList({ data });
            } else {
            //     alert('No bikes found matching your criteria.');
            //    // show pop-up with error
               createWrongSearchMessage()
            }
        } catch (error) {
            console.error('Error searching for bikes:', error);
            alert('Something went wrong while searching. Please try again later.');
        }
    })
}
