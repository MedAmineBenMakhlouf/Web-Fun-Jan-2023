// Strings
var firstName= "Mohamed Amine"
var lastName= "BM"

//numbers

var age=41
var result =2.5

//bolean
var hasCovid=false
var isFunny=true

// Null vs Undefined vs not defined

var favFood;
var favArtist = null
console.log(favArtist)
console.log(favFood)
console.log(favColor)
favFood="Pizza";

console.log(`User name is ${firstName}, last name is ${lastName}`)

//more strings
console.log(firstName.length)
console.log(lastName.toUpperCase())
console.log(lastName[2])
firstName=firstName.trim()
console.log(firstName)

//if

if(hasCovid)
{
    console.log("Go Home")
}
else
{
    console.log("Go Home")
}

var i=1
if(i==1)
{
    console.log("Yes")
}
else
{
    console.log("No")
}

// i=1
// i==1 checking the CSSMathValue
// i === 1 checking the type and the value

if(firstName =="JOHN")
{
    if(favFood=="Pizza")
    {
        console.log("Hi")
    }
    else
    {
        console.log("go home")
    }
}

user =
{
    'firstName':firstName,
    'lastName':lastName,
    'age':age
}
console.log(user)