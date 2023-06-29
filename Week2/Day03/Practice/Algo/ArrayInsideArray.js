var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function isPresent2d(arr2d, value) 
{
    for (var row of arr2d) 
    {
        if (row.includes(value)) 
        {
            return true;
        }
    }
    return false;
}

var j =  isPresent2d(arr2d,10);
if(j)
{
    console.log("true");
}
else
{
    console.log("false");
}

function flatten2dArray(arr2d) 
{
    let flattenedArray = [];

    for (let i = 0; i < arr2d.length; i++) 
    {
      for (let j = 0; j < arr2d[i].length; j++)
      {
        flattenedArray.push(arr2d[i][j]);
      }
    }
  
    return flattenedArray;
  }
  
  console.log(flatten2dArray(arr2d));