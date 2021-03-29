async function displayResults() {
    
    const response = await fetch('https://rickandmortyapi.com/api/character/1');
    response => response.json();
    data => console.log(data);
    
    const response2 = await fetch('https://rickandmortyapi.com/api/character/2');
    response2 => response2.json();
    data2 => console.log(data2);
// }
// then {

//     const imgOne = data.image;
//     const imgTwo = data2.image;
// }
// then {
//     document.getElementbyId('imageOne').innerHTML = '<img src =imgOne />';
//     document.getElementbyId('imageTwo').innerHTML = '<img src = imgTwo />';
// }
};

displayResults();
