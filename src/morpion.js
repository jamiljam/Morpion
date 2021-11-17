const Player = $("#scorePlayer")
let Playerwin = 0;
const results = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]

];
random = (min, max) => {
   return Math.round(Math.random() * (max - min) + min);
}
//hasClass('nomdelaclasse')
const clickevent = (e) => { //le e permets d'activer le fait qu'en cas de clik on affiche quelque chose il represente l'evenement 
   $(".case").on("click", affichagecerle);

};

const affichagecroix = () => {
   console.log("j'affiche")
   let crosscase = random(0, 8);
   let classcross = $("#case" + crosscase).hasClass("circle");
   let classcross2 = $("#case" + crosscase).hasClass("cross");

   while (classcross === true || classcross2 === true) {
      crosscase = random(0, 8);
      classcross = $("#case" + crosscase).hasClass("circle");
      classcross2 = $("#case" + crosscase).hasClass("cross");
   }
 
      $("#case" + crosscase).addClass("cross");

}

const affichagecerle = (e) => {
   let crossok = false;
   console.log(e);
   const target = $(e.target); //conversion en jquery pour pouvoir utiliser les fonction
   //addClasse removeClass etc...
   target.addClass('circle');//target la case que je passe en revue

   $(".case").each((index, htmlelement) => {
      let win = 0;
      let tabvar = results[index];

      const target = $(htmlelement);
      for (const key in tabvar) {

         let classcircle = $("#case" + tabvar[key]).hasClass("circle");
         let classcircle2 = $("#case" + tabvar[key]).hasClass("cross");

         if (crossok === false ) {
            affichagecroix();
            crossok = true;
         }

         if (classcircle === true && classcircle2 === false) {
            win++;
         }
         else {
            index = tabvar.length - 1;
         }
         
         if (win === 3) {
            confirm("Vous avez gagné!");
            index = tabvar.length - 1;
            crossok = true;
            
         }
      }
      if (win === 3) {
         Playerwin++;
         Player.text(`${Playerwin}`);
         restart();
         deletecercle();


         return true;
      }
   })
}




const restart = () => {


   pushButton(buttonPause, buttonStart);
   clearInterval(valclear);

}

const deletecercle = () => {
   $(".case").off("click", affichagecerle);
}

buttonStart.on("click", clickevent);
buttonPause.on("click", deletecercle);
buttonResume.on("click", clickevent);







//   $(".case").each((index,htmlelement)=>{

//      const target=$(htmlelement);

//   })






