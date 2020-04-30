import { getRandomInt } from "../helpers/randomizer";
const imagesApiUrl = "https://picsum.photos/v2";

export const cardService = {
    getRandomImage
}

function getRandomImage(){
    const requestOptions: RequestInit ={
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }

    return fetch (`${imagesApiUrl}/${getRandomInt(0,999)}/info`, requestOptions)
        .then(handleResponse);
}

function handleResponse(response: Response) {
    return response.text().then(text => {
        const params = response.url.split('/');
        console.log(params);
        console.log(response);

        if(params[params.length - 1] === 'register' && !response.ok){
            alert('Podczas rejestracji wystąpił błąd');
            window.location.reload(true);
        }

        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            alert(error);
            return Promise.reject(error);
        }
        
        return data;
    });
}