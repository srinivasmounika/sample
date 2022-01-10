fetch('https://api.github.com/users').then((res) => {
   res.json().then((data)=>{
    console.log(data);
    console.log(data[1].site-admin)
})
})

var dhan = {
    fname:'dhana',
    name : 'meda',
    age : 24
};

var details= JSON.stringify(dhan);
console.log(details);
localStorage.setItem('dhan', details);

var res = JSON.parse(localStorage.getItem('dhan'))
console.log(res);