function addtask(number){

     document.getElementById("inputbox").innerHTML=document.getElementById("inputbox").innerHTML+number;
}

function clearbutton(){
    document.getElementById("inputbox").innerHTML="";
}

function calculate(){
    
    result = eval( document.getElementById("inputbox").innerHTML);
    document.getElementById("inputbox").innerHTML=result;
}