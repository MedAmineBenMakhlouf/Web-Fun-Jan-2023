function changeProfile(idNom,idImage)
{
    var oldName= document.querySelector(`#${idNom}`);
    var pic = document.querySelector(`#${idImage}`)
    if(oldName.innerHTML=="Jane Doe")
    {
        oldName.innerHTML = "Amine Ben Makhlouf";
        pic.src = "file:///F:/Codingdojo/Web-Fun-June-2023/Week2/Day01/Practice/ProfilePage/images/Me.jpeg"

    }
    else
    {
        oldName.innerHTML = "Jane Doe";
        pic.src = "file:///F:/Codingdojo/Web-Fun-June-2023/Week2/Day01/Practice/ProfilePage/images/adrien-s.jpg"
    }
}

function remove(idUserReq,idNbrReq)
{
    document.querySelector(`#${idUserReq}`).remove();
    var nbr = parseInt(document.getElementById(idNbrReq).innerText);
    nbr--;
    document.getElementById(idNbrReq).innerText = nbr;
}

function addConnection(idNbrConnection)
{
    var nbr = parseInt(document.getElementById(idNbrConnection).innerText);
    nbr++;
    document.getElementById(idNbrConnection).innerText = nbr;
}