function ajax(src,callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', src);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

function render(data) {
  const productList = document.getElementById('product');
  const section = document.createElement('section');
  productList.appendChild(section);
  for (let i=0; i<data.length; i++) {
    section.innerHTML += `
      <h2>${data[i].name}</h2>
      <p>${data[i].price}</p>
      <p>${data[i].description}</p>
  `};
}

ajax('https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
function (response) {
  render(response)
})

// const astrosUrl = 'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products';
// const peopleList = document.getElementById('people');
// const btn = document.querySelector('button');

// function ajax(url,callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.onload = () => {
//     if(xhr.status === 200) {
//       let data = JSON.parse(xhr.responseText);
//       return callback(data);
//     }
//   };
//   xhr.send();
// }

// function render(data) {
//   const section = document.createElement('section');
//   peopleList.appendChild(section);
//   for (let i=0; i<data.length; i++) {
//     section.innerHTML += `
//       <h2>${data[i].name}</h2>
//       <p>${data[i].price}</p>
//       <p>${data[i].description}</p>
//   `};
// }

// btn.addEventListener('click', () => {
//   ajax(astrosUrl,render)
// })



