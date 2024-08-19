const Personid = [
  {
    person: "person1",
    age: 30,
  },
  {
    person: "person2",
    age: 25,
  },
  {
    person: "person3",
    age: 30,
  },
];
//map function
console.log("map function");
let getPersonName = Personid.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return singlePerson.age;
});
console.log(getPersonName);

//find function
console.log("find function");
let findfunction = Personid.find((singlePerson, index) => {
  return singlePerson.age === 30;
});

console.log(findfunction);

//filter function
console.log("fliter function");
let fliterfunction = Personid.filter((singlePerson, index) => {
  return singlePerson.age === 30;
});

console.log(fliterfunction);

//some function
console.log("some function");
let somefunction = Personid.some((singlePerson) => {
  return singlePerson.age > 50;
});
console.log(somefunction);

//every function
console.log("every function");
let everyfunction = Personid.every((singlePerson) => {
  return singlePerson.age < 31;
});

console.log(everyfunction);

//includes function && indexOf function
console.log("includes function");
let includesfunction = ["apple", "banana", "orange"];
console.log(
  includesfunction.includes("apple"),
  includesfunction.indexOf("banana")
);

//findIndex function

console.log("findIndex function");
let findIndexfunction = Personid.findIndex((singlePerson) => {
  return singlePerson.age === 25;
});
console.log(findIndexfunction);


let getListOfProductsElement = document.querySelector('.list-of-products');

function renderProducts(getProducts){
    getListOfProductsElement.innerHTML =getProducts.map(singlePerson =>{
        `<p>${singlePerson.title}</p>`
    }).join(' ');
}

async function fetchListOfProducts(){
    try{
        const apiResponse = await fetch('http://dummyjson.com/products',{
             method: 'GET'
        })
        const result = await apiResponse.json();
        console.log(result);

        if(result?.products?.length >0)renderProducts(result?.products)
    }catch(e){
        console.log(e)
    }
}

fetchListOfProducts();