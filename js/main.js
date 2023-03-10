// creo array di oggetti con bici da corsa indicandone nome e peso 
let bici=[
 {
   nome:'fulmine',
   peso:10
 },

 {
    nome:'pippo',
    peso:15
  },

  {
    nome:'pluto',
    peso:8
  },

  {
    nome:'paperino',
    peso:5
  },

  {
    nome:'qui',
    peso:10
  },

  {
    nome:'quo',
    peso:7
  }
];
// trovo la bici con il peso minore fra le 6 elencate 
let biciLeggera = bici[0];

for (let i= 1; i<bici.length; i++){

    let  { peso } = bici[i];

    if(peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

console.log(`La bici più leggera è ${biciLeggera.nome}, che pesa ${biciLeggera.peso} kg`)
