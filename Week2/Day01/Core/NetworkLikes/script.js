function like(id)
{
    var like = parseInt(document.getElementById(id).innerText);
    like++;
    document.getElementById(id).innerText = like;
}