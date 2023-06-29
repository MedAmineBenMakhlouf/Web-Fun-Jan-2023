function alertMessage(id)
{
    var alert = document.getElementById(id);
    alert.style.position = "absolute"
    alert.style.top = "0px";
    alert.style.right= "40%";
    alert.style.backgroundColor="white"
    alert.style.width ="20%";
    alert.style.border = "1px solid black";
    alert.style.height = "120px";
    alert.style.fontFamily="sans-serif"
    alert.innerHTML = "<div id='alert'><h4>Loading weather repport..</h4> <hr> <button id='btnAlert' onclick='fermeture()'>OK</button></div> "
    var posMainAlert = document.getElementById('alert');
    posMainAlert.style.display="block";
    posMainAlert.style.padding=" 10px 10px";
    posMainAlert.style.marginBottom="35px";
    var btnAlert = document.getElementById('btnAlert');
    btnAlert.style.display="block";
    btnAlert.style.margin= "20px auto";
    btnAlert.style.backgroundColor="white";
}

function fermer(id)
{
    var cl = document.querySelector(`#${id}`);
    cl.remove()
}

function fermeture()
{
    var cl = document.querySelector('#land');
    cl.remove()
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function chooseTempr(e)
{
    for(var i=1; i<9; i++) {
    var tempSpan = document.querySelector("#tmpt" + i);
    var tempVal = parseInt(tempSpan.innerText);
    if(e.value == "C") {
        tempSpan.innerText = f2c(tempVal);
    } else {
        tempSpan.innerText = c2f(tempVal);
    }
    }
}