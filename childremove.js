// function remove(){
//     var unlist= document.getElementById("list");
//     var children= unlist.childNodes;
//     console.log(children);
//     unlist.removeChild(unlist.firstChild)
// };

function remove(){
    var unlist= document.getElementById("list");
    var children= unlist.childNodes;
    console.log(children);
    unlist.removeChild(unlist.firstElementChild)
};
remove();