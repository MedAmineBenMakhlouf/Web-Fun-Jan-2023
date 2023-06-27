function over(element)
{
    document.getElementById('vid').play();
    
    element.muted =true;
}
function out(element)
{
    element.currentTime=0;
}