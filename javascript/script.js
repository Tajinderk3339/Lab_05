
var output=document.getElementById('output');

function square(m){
    return m*m;
}

function clickBtn(){
    var text=document.getElementById('name').value;
    output.textContent=`Your output is ${square(text)}`;
    
}
