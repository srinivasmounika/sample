 document.write('hii');
 var text= document.createElement('h1');
 document.body.append(text);

// text.innerText ='hello p tag';



// var text1= document.createElement('h1');
// document.body.append(text1);
// text1.textContent ='hello h1 tag';



// var text3= document.createElement('h1');
// document.body.append(text3);
// text3.innerHTML ='hello h3 tag';


// document.write('hello js');

// setInterval(() => {
//     var time = new Date();
    
//     text.innerText= time;
// }, );

var b= Array.from(document.getElementsByClassName('select'));

    b.forEach(changecolor);

    function changecolor(ele){
        setInterval(()=> {
        var x= Math.random();
        if (x>0 && x < 0.25){
            ele.style.color="orange";
        }
        else if (x>25 && x < 0.5){
            ele.style.color="red";
        }
        else if (x>0.5 && x < 0.75) {
            ele.style.color="green";
        }
        else {
            ele.style.color="violet";
        }

}, 50);

    
    
    }

