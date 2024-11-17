import { createHeader, createFooter, createBikeList, renderError} from '../views/main-view.js';
import { fetchData } from '../util/fetch-data.js';

export async function renderMainPage() {
    createHeader();
    createFooter();
   
    try {
        const data = await fetchData();        
        console.log(data);

        await createBikeList(data);
    } catch (error) {
        renderError(error)
    }
}



// export function goToNextPage() {
//     currentPage++;
//     renderMainPage(); 
// }

// export function goToPrevPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         renderMainPage(); 
//     }
// }