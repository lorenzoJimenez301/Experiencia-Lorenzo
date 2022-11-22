
function insertar(){
    var user, password;
    
    user= document.getElementById("user").value;
    password= document.getElementById("password").value;

    if(user=="lorenzo"&& password=="1234"){

        window.location="landingPage.html";

    }else{
        alert("User or Password are unable")
    }
}