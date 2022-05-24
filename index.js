
//let username = window.prompt("Whats Your Name?")
//console.log("Wlecome back " + username)

/* 

An Algorithm for taking in an ID number:
1.Enter an ID number.
2.Take the 1st 2 number and place in var.
3.Convert the var to a Number(integer).
4.Create a var to store the current year.
5.Create a var to calulate the year:
age = year - Number
6.Check if the age fall within the voting age.
7.Display the result to the user.


*/

document.getElementById("mybutton").onclick = function(){

    let username;

    username = document.getElementById("textbox").value;
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
        alert("Please Enter Your Age");
        return false;
    }
    
    if(actualAge < 18){
        
        document.getElementById('DisplayOnScreen').innerHTML = w + " "+username + " You are " + actualAge+" yeasr old, unfortunately you are too young to vote"; 
    
    }
    
    else{
            
        document.getElementById('DisplayOnScreen').innerHTML = w + " "+username + " You are " + actualAge+" yeasr Old, and you are elegible to vote."; 
    
    }
        
}

