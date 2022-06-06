/* 
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/


//array di object contenente al momento solo le squadre di calcio
const squadreCalcio = [
    {
        nome : "Juventus",
    },
    {
        nome : "Milan",
    },
    {
        nome : "Inter",
    },
    {
        nome : "Roma",
    },



]

console.log("Squadre di calcio")
console.table(squadreCalcio);


//funzione che ci genererà i punti e i falli random (0 - 19)
function generaRandom(){
   return Math.floor(Math.random() * 20);
   
}

//funzione che inserirà i dati dei punti e dei falli nell'object
function inserisciDati(){
    for(let i = 0 ; i < squadreCalcio.length ; i++){
        squadreCalcio[i].puntiFatti = generaRandom();
        squadreCalcio[i].falliSubiti = generaRandom();
    }
    console.log("Squadre con relativi punti e falli")
    console.table(squadreCalcio);
}

inserisciDati();

//funzione che creerà il nuovo array contenente soltanto il nome della squadra e i relativi falli
function creaNuovo(){

    const squadreNomiFalli = [];

    for (let i = 0; i < squadreCalcio.length; i++) {
        const {nome , falliSubiti} = squadreCalcio[i];
        squadreNomiFalli.push({
           nome,
           falliSubiti,
        })
      }
      console.log("Squadre con soltanto i relativi falli")
      console.table(squadreNomiFalli);
}

creaNuovo();