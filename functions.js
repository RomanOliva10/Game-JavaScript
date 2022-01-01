//Se hace una validacion para que los atributos del Player sean de acuerdo los propuestos en el ejercicio
function valuesValidator(min, max, atribute) {
    while (atribute < min || atribute > max) {
        if (atribute < min || atribute > max) {
            atribute = prompt(`Introduces the atribute correctly`);
        }
    }
}
//Se crean los atributos para los enemigos
function valuesRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function attackPlayerCalculator(i, player, enemy) {
    //Se calcula el ataque total
    let totalAttack = enemy[i].attack - player.defense;
    //Si se da la casualidad que el ataque total da negativo el ataque total pasa a ser 0
    if(totalAttack < 0){
        totalAttack = 0;
        console.log("The enemy's attack is weak against the defense");
    }
    /*
        Si se da la casualidad que el ataque final es mayor a la vida del player
        El ataque total pasa a ser igual a la vida player
        Asi nunca quedara en negativo la vida del player
    */
    if(totalAttack > player.health){
        totalAttack = player.health;
    }
    //Cuando el enemigo se quede sin vida no podra hacerle daño al player
    if(enemy[i].health === 0){
        enemy[i].attack = 0;
        console.log("Enemy are dead")
    }
    return player.health - totalAttack;
}

function attackEnemyCalculator(i, player, enemy) {
    let totalAttack = player.attack - enemy[i].defense;
    if(totalAttack < 0){
        totalAttack = 0;
        console.log("The player's attack is weak against the defense");
    }
    if(totalAttack > enemy[i].health){
        totalAttack = enemy[i].health;
    }
    return enemy[i].health - totalAttack;
}

export {valuesValidator, valuesRandom, attackPlayerCalculator, attackEnemyCalculator};