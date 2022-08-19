
function createAccount()
{
    localStorage.removeItem("Username");
    localStorage.removeItem("Password");
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    localStorage.setItem("Username" , username);
    localStorage.setItem("Password" , password);

   

    window.location="page.html";
    alert("Account Created!")


  
}

