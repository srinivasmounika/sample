
//shallow copy
let bike = {
    brand:'bajaj',
    version:'Ns200',
    color:'blue',

};
console.log(bike);
let bike2=bike;
console.log(bike2);
bike2.version = 'Rs200';
bike2.color = 'black';
console.log(bike2);

//deep copy

let country = {
    name  :'india',
    capital:'new delhi',
    currency:'INR'
};
console.log(country);
let otherCountry = JSON.parse(JSON.stringify(country));
console.log(otherCountry);
otherCountry.name='japan';
otherCountry.capital='tokyo';
console.log(otherCountry)
console.log(country) 