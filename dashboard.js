var loader = document.getElementById("preLoad");
window.addEventListener("load",  function(){
    loader.style.display = "none";
})

document.getElementById("mybutton").onclick = function(){

    let username;

    username = document.getElementById("textbox").value
    let age = document.getElementById("Age").value
    age = Number(age)
    let w = "Welcome Back"
    
    if( username == "" && age == ""){

        alert("Please Input A Value");
        return false;
    } 
    else if( username == ""){
        alert("Please Enter Your Name ")
        return false
    }

    if(age == ""  ){
        alert("Please Enter Your Age");
        return false;
    }
    
    if(age < 18){
        
        document.getElementById('DisplayOnScreen').innerHTML = w + " "+username + " You are " + age+" yeasr Old, unfortunately you are young to vote "; 
    
    }
    
    else{
            
        document.getElementById('DisplayOnScreen').innerHTML = w + " "+username + " You are " + age+" yeasr Old"; 
    
    }

        
}
