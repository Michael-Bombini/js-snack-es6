/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//recupero il container dal dom
const container = document.getElementById("container");


//array di objects che rappresenterà ogni bicicletta
const bici = [

    {
        nome : "City Bike",
        peso : 12,
    },
    {
        nome : "Mountain Bike",
        peso : 14,
    },
    {
        nome : "Electric Bike",
        peso : 11,
    },
    {
        nome : "Downhill Bike",
        peso : 13,
    },
    

]

//funzione che ci ritornerà il nome e il peso della bici con peso minore
function getPesoMinore(){
    let {nome , peso} = bici[0];

    let biciPesoMinore = {
        nome,
        peso,
    }
    
    for(let i = 1 ; i < bici.length ; i++){
        let {nome , peso} = bici[i];

        if(peso < biciPesoMinore.peso)
            biciPesoMinore = {
                nome , 
                peso,
            }

    }

    console.table(biciPesoMinore);
    //se non sarà trovata nessuna di minore a quella di indice 0 ritornerò la prima
    return biciPesoMinore;
   
}

//funzione che stamperà il risultato nell'html
function stampaBici(){

   const {nome , peso} = getPesoMinore();

    container.innerHTML = `<h1>La bici di peso minore è ${nome}</h1> <h2>con un peso di ${peso}</h2> `;
}




//richiamo delle funzioni
getPesoMinore();
stampaBici();
