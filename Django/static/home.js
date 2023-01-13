async function sendText() {
     // ON RÉCUPÈRE LES VARIABLES À ENVOYER AU SERVEUR
    var inText = document.getElementById('listvoca').value;

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

    document.getElementById('resp').innerHTML = data.reponse;
    document.getElementById('engrep').innerHTML = data.reponse1;
    element = document.getElementById('engrep');
    element.style.visibility = 'hidden';
    
}

function showElement() {
    element = document.getElementById('engrep');
    element.style.visibility = 'visible';
}


function playAudio() {
    audio = new Audio('welcome2.mp3');
    audio.Play();
  }



function getTextareaValue() {
    var value =  document.getElementById('vocabulaire').value;
    var value1 = document.getElementById('listvoca').value;
    document.getElementById('listvoca').innerHTML = `${value1 + value}\n`;
}


    
function play()
{
         var source = document.getElementById('myaudio');
         source.src = 'myApp/' + welcome2.mp3;        
}
