function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date, ano_atual = d.getFullYear(), mes_atual = d.getMonth() + 1, dia_atual = d.getDate();
    var quantos_anos;
    ano_aniversario = +ano_aniversario;
    mes_aniversario = +mes_aniversario;
    dia_aniversario = +dia_aniversario;
    quantos_anos = ano_atual - ano_aniversario;
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
}
console.log(idade(2000, 4, 26));
