
// var output=document.getElementById('output');
var div =document.createElement('div');
div.className='out';
div.id='output';
function square(m){
    return m*m;
}

function clickBtn(){
    var text=document.getElementById('name').value;
    div.textContent=`Your output is ${square(text)}`;
    document.body.append(div);
    // output.textContent=`Your output is ${square(text)}`;
    
}

function clearBtn(){
    document.getElementById('output').remove();
    document.getElementById('name').value='';
}
