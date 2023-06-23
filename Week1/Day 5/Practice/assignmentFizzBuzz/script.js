function FizzBuzz()
{
    var arr3=[];
    var arr5=[];
    var arrall=[];
    for(var i=0; i<=100;i++)
    {
        if(i%3==0)
        {
            arr3.push(i);
        }
        if(i%5==0)
        {
            arr5.push(i);
        }
        if(i%3==0 && i%5==0)
        {
            arrall.push(i);
        }
    }
    for(var i=0;i<=arr3.length-1;i++)
    {
        console.log(arr3[i])
    }
    console.log("Bizz")
    
    for(var i=0;i<=arr5.length-1;i++)
    {
        console.log(arr5[i])
    }
    console.log("Buzz")
    for(var i=0;i<=arrall.length-1;i++)
    {
        console.log(arrall[i])
    }
    console.log("BizzBuzz")
}
FizzBuzz();