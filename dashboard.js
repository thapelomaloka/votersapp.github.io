var loader = document.getElementById("preloader");
window.addEventListener("load",  function(){
    loader.style.display = "none";
})




document.getElementById("signout").onclick = function(){

    window.location.replace("/index.html")

}

document.getElementById("mybutton").onclick = function(){

    let username;

    username = document.getElementById("name").value;
    let age = String(document.getElementById("idnumber").value);
    let idnum = age.toString();
    let bornyear = "";



    bornyear += idnum.slice(0,2)



    let yourage = 2022 - parseInt(bornyear);
    let actualAge = (yourage.toString()).substring(2,4);





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
        alert("Please Enter Your ID No.");
        return false;
    }

    if(actualAge < 18){

        document.getElementById('DisplayOnScreen').innerHTML = w + " "+username + " You are " + actualAge+" yeasr old, unfortunately you are too young to vote"; 

    }

    else{

        document.getElementById('DisplayOnScreen').innerHTML = w + " "+username + " You are " + actualAge+" yeasr Old, and you are elegible to vote."; 

    }

}
