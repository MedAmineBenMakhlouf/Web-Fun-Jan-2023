var favAnimals = ["lion","Cats"];
// var objectUser = {"key":"value"};
var objectUser= {};

objectUser.firstName = "Smith";
objectUser["lastName"]= "Joe";
objectUser.favoriteAnimal = favAnimals;
objectUser.age = 41;
console.log(objectUser);

objectUser.userInfo = function showInfo()
{
    console.log(objectUser);
}
console.log(objectUser.userInfo())