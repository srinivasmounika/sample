// var a = Array.from(document.getElementsByClassName('hello'));
// console.log(a);
// a.forEach(changecolor);
// function changecolor(ele){
// ele.style.color = 'blue';
// }

// //id

// var b = document.getElementById('demo')
// b.style.color = 'red'

// //tag

// var c =Array.from(document.getElementsByTagName('h2'));
// console.log(c);
// c.forEach(changecolor);

//query selector

var e = document.querySelector('h2');
console.log(e);
e.style.color = 'pink';

//query selector all

var f = Array.from(document.querySelectorAll('.hello'));
console.log(f);
f.forEach(changecolor);
function changecolor(ele){
    ele.style.color = 'blue';
     }

 //properties
 var m =document.getElementsByClassName('ishq') 
 console.log(m.childNodes);
 console.log(m.firstChild);
 console.log(m.firstElementChild);
 console.log(m.className);
 m.classList = 'test'
