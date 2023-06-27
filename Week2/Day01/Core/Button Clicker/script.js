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
    alert.style.position = "absolute"
    alert.style.top = "0px";
    alert.style.right= "40%";
    alert.style.backgroundColor="white"
    alert.style.width ="20%";
    alert.style.border = "1px solid black";
    alert.style.height = "120px";
    alert.innerHTML = "<div id='alert'><h2>Ninja was liked!</h2><button id='btnAlert'>OK</button>";
    var posMainAlert = document.getElementById('alert');
    posMainAlert.style.display="block";
    posMainAlert.style.padding=" 10px 10px";
    var btnAlert = document.getElementById('btnAlert');
    btnAlert.style.display="block";
    btnAlert.style.margin= "50px auto";
    btnAlert.style.border="none";
    btnAlert.style.backgroundColor="white";



}