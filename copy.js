//shallow copy

var car={
    model : 2021,
    name : "nano",
    color : "yellow"
}
console.log(car);
// var car2={
//     model= 2021,
//     name = "activa",
//     color = "black"
//}
var car2 =car;
console.log(car2);
car2.name="chervolent";
car2.name =" gray";
console.log(car2);