export async function getData() {
    const result = await fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=NL%2C%20Amsterdam%2C%20Netherlands&distance=10&stolenness=proximity');
    
    if (!result.ok) {
        throw new Error("Oops", console.error);
    }

    const data = result.json();
    console.log(data);
    
    return data;
}

async function main() {
    try {
        const data = await getData();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

