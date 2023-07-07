function alertMessage(id)
{
    alert("Loading weather repport")
}

function fermer(id)
{
    var cl = document.querySelector(`#${id}`);
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