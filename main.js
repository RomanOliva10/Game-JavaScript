//Clases
import { player } from "./characters/player.js";
import { enemys } from "./characters/enemies.js";
//Funciones
import { attackEnemyCalculator, attackPlayerCalculator } from "./functions.js";
console.log(player);
console.log(enemys);

let i = 0;
let round = 0;

while (round < 100) {
    if (i > 4) {
        i = 0
    }
    console.log("===========================");
    console.log(`Round ${round} !!!`);
    console.log(`Enemy ${i} attacks!!!`);
    let enemyHealth = attackEnemyCalculator(i, player, enemys )
    enemys[i].health = enemyHealth;
    let playerHealth = attackPlayerCalculator(i, player, enemys )
    player.health = playerHealth;
    console.log(`Player Health: ${playerHealth}`);
    console.log(`Player attacks to  Enemy ${i} !!!`);
    console.log(`Enemy ${i} Health: ${enemys[i].health}`);
    console.log("===========================");
    console.log("");

    round++;
    i++;
    
    let allDead = enemys.every(enemy => enemy.health == 0);
    if(allDead){
        console.log("Game Over. All enemys are dead")
        break;
    }

    if(player.health <= 0){
        console.log("Game Over. Player Died"); 
        break;
    }

    if(round === 100){
        console.log("Game Over. Anyone's won");
        break;
    }
}


/*
    ****Aclaracion****
    Si yo le doy 10 rondas ninguno de los dos bandos gana
    En cambio si de le doy 100 rondas como maximo se pueden dar los 3 resultados:
    Que empaten o que alguno de los bandos gane.
*/