var car={
    color:'white',
    model:2020,
    brand:'audi',
    series:'q7'
};
var store = JSON.stringify(car);
console.log(store);
// localStorage.setItem('car',store);
// var res =localStorage.getItem('car');
// JSON.parse(res);
// var res = JSON.parse(localStorage.getItem('car'))
// console.log(res)
sessionStorage.setItem('car',JSON.stringify(car));
console.log(JSON.parse(sessionStorage.getItem('car')));