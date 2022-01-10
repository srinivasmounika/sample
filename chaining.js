function one(){
    console.log('i am one');
};
function two(){
    console.log('i am two');
    return one;
};
function three(){
    console.log('i am three');
    return two;
};

//three()()();
var returnedvalue = three();
returnedvalue();
var anotherretunedvalue = two();
anotherretunedvalue();