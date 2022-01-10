function callGreeshma(call){
        setTimeout(() => {
    console.log('cal to greeshma');
    call(calldad);
    
}, 10000);
};


function callamma(call1){
    setTimeout(() => {
        console.log('call to amma');
        call1();
        
    }, 5000);
};

function calldad(){
    setTimeout(() => {
        console.log('call to dad');
        
    }, 3000);
};

callGreeshma(callamma);



//another type of callback

function add(a ,b){
    return a+b;
};
function sub(a ,b){
    return a-b;
};
function mul(a ,b){
    return a*b;
};
var result = opt(10, 90 , mul)
console.log(result);






