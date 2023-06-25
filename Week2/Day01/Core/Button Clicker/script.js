function removeButton(element)
{
    element.remove();
}

function changeText(element)
{
    if(element.innerHTML == "Login")
    {
        element.innerHTML = "Logout";
    }
    else
    {
        element.innerHTML = "Login";
    }
}
function AlertMessage()
{
    var alert = document.getElementById('AlertMessage');
    alert.innerHTML = "Ninja was liked!";
    alert.style.position = "fixed"
    alert.style.top = "0px";
    alert.style.width ="30%";
    alert.style.border = "1px solid black";
    alert.style.height = "100px";
    alert.innerHTML = "<button> Ok</button>";

}