
//let username = window.prompt("Whats Your Name?")
//console.log("Wlecome back " + username)

document.getElementById("signin").onclick = function(){

    let username1 = document.getElementById("usernameinp").value;
    let passcode = String(document.getElementById("passcodeinp").value);

    

    let user1 = "ThapeloMaloka"
    let pass1 = "M@loka3648"

    if(username1 == "" && passcode == ""){
        alert("Please Enter your Sign In Credentials")
        return false;
    }
    else if(username1 == ""){
        alert("Please enter your user ");
        return false;
    }
    else if(passcode == ""){
        alert("Please enter your passcode ");
        return false;
    }
    else{
        if(username1 == user1 && passcode == pass1){
            console.log("Signing in....")
            location.replace("/Dashboard.html")
        }else{
            alert("Your Username or Passcode is Incorect")
        }
    }

}







