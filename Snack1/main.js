/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/


const container = document.getElementById("container");

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
    return biciPesoMinore;
   
}

function stampaBici(){

   const {nome , peso} = getPesoMinore();

    container.innerHTML = `<h1>La bici di peso minore è ${nome}</h1> <h2>con un peso di ${peso}</h2> `;
}



getPesoMinore();
stampaBici();
