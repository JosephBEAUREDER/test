async function sendText() {
     // ON RÉCUPÈRE LES VARIABLES À ENVOYER AU SERVEU
    var inText = document.getElementById('vocabulaire').value;

    // ON EMBALLE NOTRE VARIABLE DANS UN DICTIONNAIRE
    // ON PEUT ENVOYER AUTANT DE VARIABLES QU'ON VEUT, ICI ON SE CONTENTE D'ENVOYER inText
    var colis = {
        inText: inText
    }
    console.log('Envoi colis:',colis);


// PARAMÈTRES DE LA REQUÊTE
    const requete = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(colis)
    };

// ENVOI ET RÉCUPÉRATION DE LA RÉPONSE

const response = await fetch('/analyze/', requete)
    const data = await response.json();
    console.log(data);

    document.getElementById('resp').innerHTML += data.reponse;
    
}





function getTextareaValue() {
    var value =  document.getElementById('vocabulaire').value;
    var value1 = document.getElementById('listvoca').value;
    document.getElementById('listvoca').innerHTML = value1 + value + "\n";
    alert('lol')
}


    
function play()
{
         var source = document.getElementById('myaudio');
         source.src = '/myApp/' + welcome.mp3;        
}