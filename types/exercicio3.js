var idade = 72;
if (idade < 16) {
    console.log("NÃO PODE VOTAR");
}
else if (idade >= 16 && idade < 18 || idade > 70) {
    console.log("VOTO OPCIONAL");
}
else if (idade >= 18 && idade <= 70) {
    console.log("VOTO OBRIGATORIO");
}
