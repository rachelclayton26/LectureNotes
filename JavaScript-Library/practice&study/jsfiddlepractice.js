const baseURL = 'https://rickandmortyapi.com/api/character';
let url;

fetch(baseURL)
	.then(response => response.json())
    .then(data => displayImg(data))
    .catch((error) => console.log(error)) ;

function displayImg(images){
    const imageOne = images.results[0].image;
    const imageTwo = images.results[1].image;

document.getElementById('imageOne').src = `${imageOne}`;
document.getElementById('imageTwo').src =`${imageTwo}`;
};


// function getId() {
//     for (let i = 1; i <= 2; i++){
//     console.log(i);}
//     return id;
// };

    