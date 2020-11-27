

document.getElementById("formulaire").addEventListener("submit", function(e) 
{
    e.preventDefault();
    alert("envoyé");
    
    
});

    var names = document.getElementByName("nom");
    names.addEventListener("blur", verifnom );
    function verifnom()
    {
        if (names.valueMissing)
        names.onBlur = alert("attention)");
    }
   
    var date = document.getElementById("datenaissance");
    var postcode = document.getElementById("postal");
    var adress = document.getElementById("adresse");
    var city = document.getElementById("ville");
    var email = document.getElementById("mail");
