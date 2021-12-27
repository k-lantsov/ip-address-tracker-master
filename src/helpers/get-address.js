export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`
        https://geo.ipify.org/api/v2/country,city?apiKey=at_1wZdWKc20zasWKFvlV7yxXK0VhtL8&ipAddress=${ip}`);

    return await response.json();
} 