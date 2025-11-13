// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00

let preco = 60;
let aVista = 10;
let totalAVista = 0;

totalAVista = (preco - (aVista / 100) * preco);

console.log (`Preco: R$${preco},00`);
console.log (`À vista: R$${totalAVista},00`);
console.log (`Ou 3x de: R$${preco/3},00`);