let nome = "Jett"
let nivel = ""
let xp = 1000;

console.log ("Desafio - Classificador de Nível de Herói");

if (xp <= 1000) {
    console.log("Experiência: " + xp + " = Ferro")
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    console.log("Experiência: " + xp + " = Bronze")
    nivel = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    console.log("Experiência: " + xp + " = Prata")
    nivel = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    console.log("Experiência: " + xp + " = Ouro")
    nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    console.log("Experiência: " + xp + " = Platina")
    nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    console.log("Experiência: " + xp + " = Ascendente")
    nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    console.log("Experiência: " + xp + " = Imortal")
    nivel = "Imortal"
} else {
    console.log("Experiência: " + xp + " = Radiante")
    nivel = "Radiante"
}

console.log("O Héroi de nome " + nome + " está no nível " + nivel)