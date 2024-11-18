let searchParams = 'location=NL%2C%20Amsterdam%2C%20Netherlands&distance=50';
export const bikesPerPage = 24;
export let currentPage = 1;

export function goToNextPage() {
    currentPage++;
}

export function goToPrevPage() {
    currentPage--;
}

export async function fetchData(page = 1, ) {
    const result = await fetch(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=${bikesPerPage}&${searchParams}&stolenness=proximity`);
    
    if (!result.ok) {
        throw new Error("Oops", console.error);
    }

    const data = result.json();
    return {data, page};
}

export async function getBikesCount() {
    const result = await fetch(`https://bikeindex.org:443/api/v3/search/count?${searchParams}&stolenness=proximity`);
    
    if (!result.ok) {
        throw new Error("Oops", console.error);
    }

    const data = await result.json();
    return data.proximity;
}

export async function searchBikes({ serial, location, model }) {
    currentPage = 1;

    const queryParams = new URLSearchParams();

    if (!location) queryParams.append('location', 'NL Netherlands');
    if (!location) queryParams.append('distance', 50);


    if (serial) queryParams.append('serial', serial);
    if (location) queryParams.append('location', location);
    if (location) queryParams.append('distance', 10);
    if (model) queryParams.append('manufacturer', model);
    
    searchParams = queryParams.toString();

    const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=${bikesPerPage}&${searchParams}&stolenness=proximity`;
    
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error("Error fetching search results");
    }

    const data = await result.json();
    return data;
}
