function getinput(num) {
    var result = document.getElementById("result");
    result.value += num;
}
function clr(){
    var result=document.getElementById("result");
    result.value ="";
}
function del(){
    var result=document.getElementById("result");
    result.value = document.value.slice(0, result.value.lenght - 1);
}
function calculator(){
    var result = document.getElementById("result");
    result.value =eval(result.value);
}