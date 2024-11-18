export async function fetchData(page = 1, ) {
    const result = await fetch(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=24&location=NL%2C%20Amsterdam%2C%20Netherlands&distance=50&stolenness=proximity`);
    
    if (!result.ok) {
        throw new Error("Oops", console.error);
    }

    const data = result.json();
    
    return {data, page};
}


export async function searchBySerialNum(serial) {
    const result = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&serial=${serial}&location=IP&distance=10&stolenness=proximity`);
    
    if (!result.ok) {
        throw new Error("Doesn't work", console.error);
    }

    const data = result.json();
    
    return data;
}
