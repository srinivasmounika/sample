var arr = ['one', 'two' , 'three', 'four', 'five' , 'six', 'seven'];
 arr.forEach((value, index, array) => {
     console.log(value);
     console.log(index);
     console.log(array);
    
});



//map

var arr1 = ['one', 'two' , 'three', 'four', 'five' , 'six', 'seven'];
 var arr2=arr1.map ((value, index) => {
    return 'number ' + value;
    
});

console.log(arr2);


//filter


var arr = ['one', 'two' , 'three', 'four', 'five' , 'six', 'seven'];
 var res=arr.filter((value, index) => {
     
    return value== 'one';
});
console.log(res);