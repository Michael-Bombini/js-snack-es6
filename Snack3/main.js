/*

Snack 3
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.

*/



const myArray = ["Michele" , "Fabio" , "Roberto" , "Giovanni" , "Simone" , "Chiara"];
const newArray = [];
const min = 2;
const max = 4;



//con forEach
myArray.forEach((elemento , i ) => {

    

    if(i >= min && i <= max){
        newArray.push(elemento);
    }

    
});


console.table(newArray);




//con Filter
const filterArray = myArray.filter((elemento , i) => {

    if(i >= min && i <= max){
        return true;
    }
    else{
        return false;
    }


});

console.table(filterArray);