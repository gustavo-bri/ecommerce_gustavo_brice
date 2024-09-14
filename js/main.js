const datos = {
    "cars": [
      {
        "make": "Toyota",
        "model": "Corolla",
        "year": 2015,
        "type": "Sedan",
        "color": "Silver",
        "price": 12000,
        "plateNumber": "ABC1234"
      },
      {
        "make": "Ford",
        "model": "Mustang",
        "year": 2018,
        "type": "Coupe",
        "color": "Red",
        "price": 25000,
        "plateNumber": "DEF5678"
      },
      {
        "make": "Honda",
        "model": "Civic",
        "year": 2012,
        "type": "Sedan",
        "color": "Black",
        "price": 9000,
        "plateNumber": "GHI9012"
      },
      {
        "make": "Nissan",
        "model": "Altima",
        "year": 2016,
        "type": "Sedan",
        "color": "White",
        "price": 15000,
        "plateNumber": "JKL3456"
      },
      {
        "make": "Chevrolet",
        "model": "Camaro",
        "year": 2019,
        "type": "Coupe",
        "color": "Blue",
        "price": 30000,
        "plateNumber": "MNO7890"
      },
      {
        "make": "Kia",
        "model": "Optima",
        "year": 2014,
        "type": "Sedan",
        "color": "Gray",
        "price": 11000,
        "plateNumber": "PQR2345"
      },
      {
        "make": "Hyundai",
        "model": "Elantra",
        "year": 2017,
        "type": "Sedan",
        "color": "Silver",
        "price": 13000,
        "plateNumber": "STU6789"
      },
      {
        "make": "Volkswagen",
        "model": "Golf",
        "year": 2013,
        "type": "Hatchback",
        "color": "Red",
        "price": 10000,
        "plateNumber": "VWX3456"
      },
      {
        "make": "BMW",
        "model": "3 Series",
        "year": 2020,
        "type": "Sedan",
        "color": "Black",
        "price": 35000,
        "plateNumber": "YZA1234"
      }
    ]
  }

const createCards = document.addEventListener("DOMContentLoaded", () => {
    const productsTitle = document.querySelector("h1")
const productsContainer = document.querySelector(".products-container")
productsTitle.textContent = "Autos 2024"

let productsCards = [];
for(let i=0; i < datos.cars.length ; i++){
    let productCard = document.createElement("div");
    productCard.classList.add("product-card", "m-3");
    productCard.insertAdjacentHTML("beforeend", `
    <div class="card p-3" style="width: 18rem;" >
    <h2 class="card-title text-center mb-3">${datos.cars[i].make}</h2>
    <div class="mb-3" style="width: 250px; height: 150px;">
        <img class="card-img-top  img-fluid w-100 h-100 object-fit-cover" src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i+1}.jpg" alt="product">
    </div>
    <h3 class="card-subtitle mb-2 text-body-secondary text-center">${datos.cars[i].model}</h3>
    <p class="card-text"></p>
    <ul class="list-group list-group-flush">
       <li class="list-group-item"><strong>Price: </strong>$ ${datos.cars[i].price}  </li>
       <li class="list-group-item"><strong>Year: </strong>${datos.cars[i].year} </li>
       <li class="list-group-item"><strong>Type: </strong>${datos.cars[i].type} </li>
       <li class="list-group-item"><strong>Color: </strong>${datos.cars[i].color} </li>
     </ul>
     <div class="mt-3 align-items-center d-flex justify-content-center">
        <a href="#" class="btn btn-primary">Read more</a>
     </div>
 </div>  
    
    `)
    productsCards.push(productCard);
    productsContainer.appendChild(productCard);
}

});

createCards();
