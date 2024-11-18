import { createSearchForm } from '../views/search-view.js';
import { searchBikes } from '../util/fetch-data.js'; 

export async function setupSearchPage() {
    createSearchForm();
  
    const form = document.getElementById('search-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const serial = document.getElementById('serial-input').value.trim();
        const location = document.getElementById('location-input').value.trim();
        const model = document.getElementById('model-input').value.trim();
        
        try {
            const data = await searchBikes({ serial, location, model });

            if (data.bikes && data.bikes.length > 0) {
                const { createBikeList } = await import('../views/main-view.js');
                createBikeList({ data });
            } else {
                alert('No bikes found matching your criteria.');
            }
        } catch (error) {
            console.error('Error searching for bikes:', error);
            alert('Something went wrong while searching. Please try again later.');
        }
    })
}
