function odds()
{
    for(var i=0;i<=20;i++)
    {
        if(i%2!=0)
        {
            console.log(i);
        }
    }
    
}

function Multiple3()
{
    for(var i=100;i>-1;i--)
    {
        if(i%3==0)
        {
            console.log(i);
        }
    }
}

function sequenceNumbers()
{
    var array = [4,2.5,1,-0.5,-2,-3.5];
    // for(var i = 0;i<=array.length-1;i++)
    // {
        
    // }
    console.log(array);
}

function Sigma()
{
    var sum=0;
    for(var i=1;i<=100;i++)
    {
        sum+=i;
    }
    console.log(sum);
}

function factorial()
{
    var sum=1;
    for(var i=2;i<=12;i++)
    {
        sum*=i;
    }
    console.log(sum);
}

odds();
Multiple3();
sequenceNumbers();
Sigma();
factorial();