function playStop()
{
    vid = document.getElementById('vid');
    if(vid.play)
    {
        vid.controls.stop;
    }
    else
    {
        vid.autoplay=true;
        vid.muted=false;
    }
}