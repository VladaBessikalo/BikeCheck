let searchParams = 'location=NL%2C%20Amsterdam%2C%20Netherlands&distance=50';
export const bikesPerPage = 24;
export let currentPage = 1;

export function goToNextPage() {
    currentPage++;
}

export function goToPrevPage() {
    currentPage--;
}

export async function fetchData(page = 1) {
    const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=${bikesPerPage}&${searchParams}&stolenness=proximity`);
    
    if (!response.ok) {
        throw new Error("Oops", console.error);
    }

    const data = response.json();
    return {data, page};
}

export async function getBikesCount() {
    const response = await fetch(`https://bikeindex.org:443/api/v3/search/count?${searchParams}&stolenness=proximity`);
    
    if (!response.ok) {
        throw new Error("Oops", console.error);
    }

    const data = await response.json();
    return data.proximity;
}

export async function searchBikes({ serial, location, manufacturer }) {
    currentPage = 1;

    const queryParams = new URLSearchParams();
    if (location) {
        queryParams.append('location', location);
        queryParams.append('distance', 10);
    } else {
        queryParams.append('location', 'NL Netherlands');
        queryParams.append('distance', 50);
    }

    if (serial) queryParams.append('serial', serial);
    if (manufacturer) queryParams.append('manufacturer', manufacturer);
    
    searchParams = queryParams.toString();

    const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=${bikesPerPage}&${searchParams}&stolenness=proximity`;
    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error fetching search responses");
    }

    const data = await response.json();
    return data;
}
