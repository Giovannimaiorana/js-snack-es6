let  squadre = [
    { nome: "Juventus", punti: 0, falli: 0 },
    { nome: "Inter", punti: 0, falli: 0 },
    { nome: "Milan", punti: 0, falli: 0 },
    { nome: "Roma", punti: 0, falli: 0 },
  ];

//genero numeri random per punti e falli con for each

squadre.forEach(function(squadra){
    squadre.punti = Math.floor(Math.random()* 100);
    squadre.falli = Math.floor(Math.random()* 20);
    
});

// creo array con solo nomi e falli 
const fallisquadre = squadre.map(function(squadra){
    const { nome, falli } = squadra;
    return { nome, falli }
});

console.log("Squadre di calcio:", squadre);
console.log("Nomi e falli subiti:", fallisquadre);