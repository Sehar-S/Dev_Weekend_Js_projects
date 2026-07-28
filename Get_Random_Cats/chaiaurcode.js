const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', getCat);

async function getCat() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    const catDiv = document.createElement('div');
    catDiv.classList.add('cats');
    
    const catImg = document.createElement('img');
    catImg.src = data[0].url;
    catImg.alt = 'Random Cat';
    
    catDiv.appendChild(catImg);
    container.appendChild(catDiv);
    
  } catch (error) {
    console.error('Error fetching cat:', error);
  }
}