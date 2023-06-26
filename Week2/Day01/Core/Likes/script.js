function Ajouter()
{
    var Textnbr = document.querySelector("#number");
    var currentvalue = Textnbr.innerHTML;
    if(currentvalue=="")
    {
        currentvalue =0;
    }
    var currentValueNumber = parseInt(currentvalue);
    var newValue = currentValueNumber + 1;
    Textnbr.innerHTML = newValue;
    
    
    
}