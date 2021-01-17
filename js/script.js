

// var arr = [];

// function fun(){
//     var us = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     arr.push(us);
//     arr.push(pass);

//     for(var i= 0; i<arr.length; i++)
//     {
//         alert(arr[i]);
//     }  

// }

// function Login(){
//     var luser = document.getElementById("Lusername").value;
//     var lpassword = document.getElementById("Lpassword").value;
//         alert(arr[0]);
    

    
//     // if(luser == "" && lpassword == "")
//     // {
//     //     alert("Please fill the fields first to login");
//     // }
//     // else
//     if(luser === arr[0] && lpassword === arr[1]){
//         alert("you logined in to site");
//     }
//     else
//     {
//         alert("The User Name and Password is Incorrect !!!!  IF you are not Registered Yet Sign Up first" );
        
//     }
// }


// Name and Password from the register-form

var name = [document.getElementById('uName')];
var pw = document.getElementById('uPw');

// storing input from register-form

function store() {
    if(userName=== null && usrPw=== null)
    {
        alert("required fields to registers");
    }
    else{
        localStorage.setItem('name', uName.value);
        localStorage.setItem('pw', uPw.value);
        alert("registered Successfully")
    }
   
}

// check if stored data from register-form is equal to entered data in the login-form

function check() {

    // stored data from the register-form

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form

    var usrName = document.getElementById('userName').value;
    var usrPw = document.getElementById('userPw').value;

    // check if stored data from register-form is equal to data from login form

    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in ' + usrName);
        window.location.href = "afterlogin.html";
        window.location.href = "http://google.com";
        
       

    } else {
        alert("user name or password is incorect !!! sign Up yet to Login");
      
    }
  
}