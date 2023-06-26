function deleteElement(id)
{
    // document.getElementById(id).remove()
    document.querySelector(`#${id}`).remove();
}

function like(id)
{
    var like = parseInt(document.getElementById(id).innerText);
    like++;
    document.getElementById(id).innerText = like;
}
function likeTwo(e)
{
    e.innerText++;
}

function onImage(e)
{
    console.log(e.src);
    if(e.src=='file:///F:/Codingdojo/Web-Fun-June-2023/Week2/Day01/Practice/02-dom_manipulation/images/1.jpg')
    {
        e.src = 'file:///F:/Codingdojo/Web-Fun-June-2023/Week2/Day01/Practice/02-dom_manipulation/images/4.jpg';
    }
    else
    {
        e.src ='file:///F:/Codingdojo/Web-Fun-June-2023/Week2/Day01/Practice/02-dom_manipulation/images/1.jpg';
    }
}