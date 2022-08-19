function loginAccount()
{
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username==localStorage.getItem("Username") && password==localStorage.getItem("Password"))
    {
        alert("Correct");
        window.location="page.html";
    }
    else{
        alert("Couldn't Find Account!");
    }
}