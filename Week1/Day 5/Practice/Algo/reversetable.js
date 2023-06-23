var arr=["a","b","c","d","e"];

console.log(arr);
console.log("------------------------------")
function reverse(array)
{
    var new_array=[];
    for(var i =array.length-1;i>=0;i--)
    {
        new_array.push(array[i]);
            
    }
    return new_array;

}
console.log(reverse(arr));


// second method


function reverse2(array)
{
    
    for(var i =0;i<=(array.length/2)-1;i++)
    {
        var temp = array[i]
        array[i] =  array[array.length-1-i];
        array[array.length-1-i] = temp      
    }
    return array;

}
console.log(reverse2(arr));