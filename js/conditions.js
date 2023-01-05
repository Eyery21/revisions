let mineur = 16;
let majeurSalcool = 18;
let majeurAalcool = 20;

if (mineur < majeurSalcool) {
  console.log("tu ne peut pas entrer en boite de nuit");
}
if (majeurSalcool > mineur) {
  console.log("tu peut entrer en boite de nuit mais tu n'as pas le droit de boire de l'alcool");
} else majeurAalcool > majeurSalcool;
{
  console.log("tu peut boire de l'alcool");
}

switch (majeurAalcool) {
  case mineur:
    console.log("tu ne peut pas entrer en boite de nuit (switch)");
  case majeurSalcool:
    console.log("tu peut entrer en boite de nuit (switch)");
  case majeurAalcool:
    console.log("tu peut boire de l'alcool (switch)");

  default:
    console.log("dans tous les cas je doit voir ta carte d'identité (switch)");
    break;
}
