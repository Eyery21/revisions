// for (let pas = 0; pas < 5; pas++) {
//   // Ceci sera exécuté 5 fois
//   // À chaque éxécution, la variable "pas" augmentera de 1
//   // Lorsque'elle sera arrivée à 5, le boucle se terminera.
//   console.log("Faire " + pas + " pas vers l'est");
// }

// let shot = 0;
// console.log("chef j'veux boire !");
// do {
//   shot += 1;
//   console.log("rajoute un " + (shot = "shot !"));
// } while (shot < 10);
// console.log("chui bien là ");

// // let shot = 0;
// let camille = 0;
// console.log("chef j'veux boire !");

// while (camille < 10) {
//     shot++;
//     camille += shot;

// }
// console.log("chui bien là");

// let batman = 20;
// console.log("batman n'as que " + batman +" batarang, ce n'est pas assez. ont va en rajouter");
// do {
//   batman += 1;
// } while (batman < 30);
// console.log("batman a assez de " + batman);

// for (i = 0; i < batman; i++) {
//   if (batman === 20) {
//     break;
//   }
//   console.log(batman);
// }
// console.log(batman);
let batarang = 0;
let mechants = [
  "joker",
  "l'epouvantail",
  "double-face",
  "bane",
  "harley queen",
];

let button = document.getElementById("button");
let batLigt = button;
let batSignal = false;
button.addEventListener("click", function () {
  batSignal = !batSignal;

  if (batSignal === true) {
    console.log("le bat signal est allumé !");
    console.log("batman part à la rescousse");
    if (batarang === 0) {
      console.log("batman n'as pas de bataragang");
      do {
        batarang += 1;
        console.log("batman s'équipe en batarang");
      } while (batarang < 30);
      console.log("batman a assez de " + (batarang = "batarang"));
    }
    console.log(
      "batman se demande qui sera l'énnemi à affronter, il consulte le bat-ordinateur"
    );
    let random = mechants[Math.floor(Math.random() * mechants.length)];

    console.log("le bat ordinateur indique le mechant est " + random);
  } else {
    console.log("le batsignal est étaint");

    console.log("batman reste dans la batcave");
  }
});
console.log("le batsignal est éteint");
