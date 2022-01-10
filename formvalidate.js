function form(){

    var username = document.getElementById("name");
    var password = document.getElementById("password");
    if(username.value=="  "){
  var name1 =  document.getElementById("name").style.border='2px red solid';
  document.getElementById("note").style.visibility='visible';
  
  return false;

}
else if( username.value=""){
    document.getElementById("note1").style.visibility='visible';
}
}