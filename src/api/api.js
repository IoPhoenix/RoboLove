export const apiCall = (url) => {
    return fetch(url).then(response => response.json());
}