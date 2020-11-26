var nomvalid = document.getElementById("nom");
    

    function message()
    {
        alert("Le champ est invalide");
        return;
    }
    
    if (nomvalid<2)
    {
        nomvalid.onblur = message;
    }

    
