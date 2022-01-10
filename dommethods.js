

var queryEle = document.querySelector('div');
console.log(queryEle);
queryEle.innerText ='hello';
//only 1st element is executing

var queryEles = Array.from(document.querySelectorAll('div'))
console.log(queryEles);


queryEles.forEach((ele) => {
ele.style.color='red';
})

