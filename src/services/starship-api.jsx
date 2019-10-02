export function getShipList() {
    const apiUrl = 'https://swapi.co/api/starships/';
    const response = fetch(apiUrl, {mode: 'cors'})
        .then(res => res.json())
    return response;
    
}