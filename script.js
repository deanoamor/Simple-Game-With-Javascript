let ulang = true;
let help = 0;
let characterCreate = [];
let select = 0;

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;


// function Character(nama,role,skill){
//     this.nama = nama;
//     this.role = role;
//     this.skill = skill;
//     this.energy = 100;
//     this.hp = 100;
//     this.inventory = [["Health potion" , 50 , 5] , ["Energy potion", 50, 5]];
//     this.status = "alive";
// }

// Character.prototype.walking = function(){
//     this.energy = this.energy - 5;
// }

// Character.prototype.attack = function(attackPower){
//     this.energy = this.energy - attackPower;
// }

class Character{
    constructor(nama,role,skill){
        this.nama = nama;
        this.role = role;
        this.skill = skill;
        this.energy = 100;
        this.hp = 100;
        this.inventory = [["Health potion" , 50 , 5] , ["Energy potion", 50, 5]];
        this.status = "alive";
    }

    walking(){
        this.energy = this.energy - 5;
    }
    
    attack(attackPower){
        this.energy = this.energy - attackPower;
    }

    healhp(){
        this.hp = this.hp + 50;
        this.inventory[0][2] = this.inventory[0][2] - 1;
    }

    healenergy(){
        this.energy = this.energy + 50;
        this.inventory[1][2] = this.inventory[1][2] - 1;
    }

}


function randomNumber (){
    return Math.floor(Math.random() * 10);
}

function enemyPowerRandom(){
    return Math.floor(Math.random() * 100);
}


let check = confirm("use console.log to make the game easier, want to use console.log?");
if(check == true){
    alert("open your console.log and refresh your browser to start again") ;
    thisFunctionDoesNotExistAndWasCreatedWithTheOnlyPurposeOfStopJavascriptExecutionOfAllTypesIncludingCatchAndAnyArbitraryWeirdScenario();
}

while(ulang){
    let nama = prompt("Input character name");
    let role = prompt("Input character role");
    let skill = prompt("Input character skill");

    for(let i = 0; i < 1; i++){
        characterCreate[help] = new Character(nama,role,skill);
        alert("Character name " + characterCreate[help].nama + " with role " + characterCreate[help].role + " with skill " + characterCreate[help].skill);
        console.log((help + 1) + ".Character name " + characterCreate[help].nama + " with role " + characterCreate[help].role + " with skill " + characterCreate[help].skill);
    }
    help++;

    ulang = confirm("Want to make another character?");
}

alert("Finished creating character, enter the game in");
alert("3");
alert("2");
alert("1");
alert("Welcome to a fantasy world under the guise of javascript practice");

if(characterCreate.length < 2){
    alert("you only have one character");
}else{
    alert("you have " + characterCreate.length + " character");
    alert("choose one (according to the number)");
    for(let i = 0; i < characterCreate.length; i++){
        alert( (i+1) + ".name= " + characterCreate[i].nama + ", with role= " + characterCreate[i].role + ", with skill= " + characterCreate[i].skill);
    }
    let choose = parseInt(prompt("Choose character (according to the number)"));

    select = choose - 1;
}

alert("your character is " + characterCreate[select].nama + " with role " + characterCreate[select].role + " with skill " + characterCreate[select].skill);
alert("your character energy is " + characterCreate[select].energy);
console.log("your character energy is " + characterCreate[select].energy);

alert("your character hp is " + characterCreate[select].hp);
console.log("your character hp is " + characterCreate[select].hp);

alert("your character inventory are " + characterCreate[select].inventory[0][0] + " will increase " + characterCreate[select].inventory[0][1] + " health (" + characterCreate[select].inventory[0][2] + " item and " 
+ characterCreate[select].inventory[1][0] + " will increase " + characterCreate[select].inventory[1][1] + " energy (" + characterCreate[select].inventory[1][2] + " item)");
console.log("your character inventory are " + characterCreate[select].inventory[0][0] + " will increase " + characterCreate[select].inventory[0][1] + " health (" + characterCreate[select].inventory[0][2] + " item and "
+ characterCreate[select].inventory[1][0] + " will increase " + characterCreate[select].inventory[1][1] + " energy (" + characterCreate[select].inventory[1][2] + " item)");

alert("your character status is " + characterCreate[select].status);
console.log("your character status is " + characterCreate[select].status);


alert("There are 2 branches of the road, where are you going?");
alert("(1.Forest) - (2.Castle)");
console.log("(1.Forest) - (2.Castle)");

let choosePlace = parseInt(prompt("Choose place (according to the number)"));
switch(choosePlace){
    case 1:
        alert("you are going to the forest");
        characterCreate[select].walking();
        alert("you are walking and it drains your energy");
        alert("your energy now " + characterCreate[select].energy);
        console.log("your energy now " + characterCreate[select].energy);
        let chooseEnemyForest = confirm("there is a enemy, want to fight?");
        if(chooseEnemyForest == true){
        
        let enemyForestHp = 50;

        alert("you are fighting with enemy");
        alert("enemy hp " + enemyForestHp);
        console.log("enemy hp " + enemyForestHp);
            while(enemyForestHp > 1){
                
                let attackEnemyForest = parseInt(prompt("How much power do you want to use?"));

                alert("you attack with " + attackEnemyForest + " power");
                characterCreate[select].attack(attackEnemyForest);
                alert("your energy now " + characterCreate[select].energy);
                console.log("your energy now " + characterCreate[select].energy);
                enemyForestHp = enemyForestHp - attackEnemyForest;
                alert("enemy hp now " + enemyForestHp);
                console.log("enemy hp now " + enemyForestHp);

                let enemyPowerForest = enemyPowerRandom();
                let randomNumberForest = randomNumber();
                console.log(randomNumberForest);

                if(enemyForestHp > 0){
                    if(randomNumberForest > 5){
                        alert("oh no, the enemy attacks you with " + enemyPowerForest);
                        console.log("oh no, the enemy attacks you with " + enemyPowerForest);
                        characterCreate[select].hp = characterCreate[select].hp - enemyPowerForest;
                        alert("your hp now " + characterCreate[select].hp);
                        console.log("your hp now " + characterCreate[select].hp);
                        if(characterCreate[select].hp <=50){
                            alert("you are too weak");
                            let usePotion = parseInt(prompt("want to use poison? (1.yes, 2.no)"));
                            if(usePotion === 1){  
                                characterCreate[select].healhp();
                                alert("you are healed and your hp is " + characterCreate[select].hp);
                                console.log("you are healed and your hp is " + characterCreate[select].hp);
                                alert("there are " + characterCreate[select].inventory[0][2] + " HP potion left in your inventory");
                                console.log("there are " + characterCreate[select].inventory[0][2] + " HP potion left in your inventory");
                            }else{
                                alert("you continue to fight");
                            }
                        }
                    }
                }
            }
        alert("congratulations!! you killed the enemy");
        }
        alert("you continue walking");
    
        break;
}











