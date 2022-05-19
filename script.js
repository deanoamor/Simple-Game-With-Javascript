// const fungsiSiswa = {
//     main: function(jam){
//         this.energy = this.energy - jam;
//     },

//     belajar: function(jam){
//         this.energy = this.energy - jam;
//     },

//     tidur: function(jam){
//         this.energy = this.energy + jam * 2;
//     }
// }


// function siswa(nama,kelas,energy){
//     let siswa = Object.create(fungsiSiswa)
//     siswa.nama =  nama;
//     siswa.kelas = kelas;
//     siswa.energy = energy;


//     return siswa;
// }

// let rizki = siswa('Rizki','XI RPL 1',10);

// for(let noAngkot = 1; noAngkot <= 10; noAngkot++){
//     if(noAngkot <= 6){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     }
//     else{
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     }
// }

// let x;

// x = 'mantap';

// function tampilAngka(n){
//     if(n === 0){
//         return;
//     }
   
//     if(n % 2 === 0){
//         console.log(n + ' genap');
//     }
//     else{
//         console.log(n + ' ganjil');
//     }
//     tampilAngka(n-1);

// }

// tampilAngka(10);

// let namaa = function tampilAngka(n){
//     if(n === 0){
//         return;
//     }
   
//     if(n % 2 === 0){
//         console.log(n + ' genap');
//     }
//     else{
//         console.log(n + ' ganjil');
//     }
//     tampilAngka(n-1);

// }

// namaa(10);

// nama = 'deano';

// console.log(nama);

// let hari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu',[1,2,3]];
// let angka = [];
// let hasil = 0;

// for(let i = 0; i < 10; i++){
//     angka[i] = i;
//     console.log(angka[i])
//     hasil += angka[i];
// }

// console.log(angka);
// console.log(hasil);
// console.log(angka.join(' - '))
// angka.pop();
// angka.push(100);
// console.log(angka);
// console.log(angka.join(' - '))
// angka.splice(1,2,200);
// console.log(angka);
// console.log(angka.join(' - '))
// let angka2 = angka.slice(1,5);
// console.log(angka2);
// console.log(angka2.join(' - '))
// console.log(hari[7][2]);

// for(let i = 0; i < hari.length; i++){
//     if(i === 7){
//         for(let j = 0; j < hari[i].length; j++){
//             console.log(hari[i][j]);
//         }
//     }else{
//         console.log(hari[i]);
//     }
    
// }

// let angka = [1,2,3,4,5,6,7,8,9,10];

// angka.forEach(function(e,i){
//     console.log(e + " adalah index ke " + i);
// })

// let angka = [1,8,10,20,2,4,6,7,3,5];
// let angka2 = angka.map(function(e){
//     return e * 2;
// })

// console.log(angka.join(' - '));
// console.log(angka2.join(' - '));

// angka.sort(function(a,b){
//     return a - b;
// });
// console.log(angka.join(' - '));

// let angka2 = angka.find(function(e){
//     return e > 2 ;
// });

// console.log(angka2);

// let angkot = [];
// const kursi = 10;
// let penumpang;
// let posisiKursi;
// let help = 0;
// let cek = 0;
// let ulang = true;

// let masukanPenumpang = function(a){
//     for(let i = 0; i < a; i++){
//         if((help) === kursi){
//             alert("penumpang ke " + (cek + 1) + " tidak bisa dimasukan, karena angkot penuh");
//         }else{
//             angkot[help] = help + 1;
//             help++;
//         }
//         cek++;
//     }
// }

// let keluarkanPenumpang = function(a){
//     let cekindex = angkot.indexOf(a);
//     angkot[cekindex] = undefined;
//     alert("penumpang ke " + a + " berhasil dikeluarkan");
//     alert("isi angkot sekarang adalah " + angkot.join(' - '));
// }

// let masukanPenumpangSpesifik = function(a,b){
//     angkot.splice(b-1,0,a);
//     alert("isi angkot sekarang adalah " + angkot.join(' - '));
// }

// while(ulang){
//     let lagiNambah = true;
//     let lagiHapus = true;
//     let lagiNambahSpesifik = true;

//     alert("kursi angkot tersisa " + (kursi - angkot.length));
//     alert("isi angkot sekarang adalah " + angkot.join(' - '));
//     let pilih = parseInt(prompt("Pilih fitur yang ingin dijalankan \n 1. Nambah penumpang \n 2. Mengeluarkan penumpang \n 3. Memasukan penumpang secara spesifik"));

//     switch(pilih){
//         case 1:
//             while (lagiNambah){
//                 if(angkot.length === kursi){
//                     alert("angkot penuh");
//                     lagiNambah = false;
//                 }else{
//                     alert("kursi angkot tersisa " + (kursi - angkot.length));
//                     penumpang = parseInt(prompt("ingin memasukan berapa penumpang?"));
//                     masukanPenumpang(penumpang);
//                     alert("penumpang yang sudah masuk adalah " + angkot.join(' - '));
//                     alert("kursi angkot tersisa " + (kursi - angkot.length));
//                     if(angkot.length < kursi){
//                         lagiNambah = confirm("ingin memasukan penumpang lagi?");
//                     }
//                 }
//             }
//             break;
//         case 2:
//             while(lagiHapus){
//                 if(angkot.length > 0){
//                     alert("kursi angkot tersisa " + (kursi - angkot.length));
//                     penumpang = parseInt(prompt("ingin mengeluarkan penumpang keberapa?"));
//                     keluarkanPenumpang(penumpang);
//                     if(angkot.length < kursi){
//                         lagiHapus = confirm("ingin mengeluarkan penumpang lagi?");
//                     }else{
//                         lagiHapus = false;
//                     }
//                 }else{
//                     lagiHapus = false;
//                 }
//             }
//             break;
//         case 3:
//             while(lagiNambahSpesifik){
//                 let angkot2 = angkot.forEach(function(){
//                     return angkot.indexOf(undefined) + 1;
//                 })

//                 if(angkot.length === kursi){
//                     if(!angkot.includes(undefined)){
//                         alert("angkot penuh");
//                         lagiNambahSpesifik = false;
//                         break;
//                     }  
//                 }
//                 if(angkot.length === 0){
//                     alert("angkot kosong , penumpang akan dimasukan dari kursi 1");
//                 }
//                 if(angkot.includes(undefined)){
//                     if(angkot.length === kursi){
//                         alert("kursi yang kosong adalah " + angkot2.join(' - '));
//                     }else if(angkot.length > 0){
//                         alert("kursi yang ditinggalkan adalah kursi " + angkot2.join(' - '));
//                     }
                    
//                 }
//                 alert("kursi angkot tersisa " + (kursi - angkot.length));
//                 penumpang = parseInt(prompt("ingin memasukan penumpang berapa?"));
//                 posisiKursi = parseInt(prompt("ingin memasukan penumpang ke kursi berapa?"));
//                 masukanPenumpangSpesifik(penumpang,posisiKursi);
//                 if(angkot.length < kursi){
//                     lagiNambahSpesifik = confirm("ingin memasukan penumpang lagi?");
//                 }else{
//                     lagiNambahSpesifik = false;
//                 }
//             }
//             break;
//         default:
//             alert("anda memasukan angka yang salah");
//             break;
//     }
    
//     ulang = confirm("Ingin mengulang?");
// }


let ulang = true;
let help = 0;
let characterCreate = [];
let select = 0;

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;

function Character(nama,role,skill){
    this.nama = nama;
    this.role = role;
    this.skill = skill;
    this.energy = 100;
    this.hp = 100;
    this.status = "alive";

    this.walking = function(){
        this.energy = this.energy - 5;
    }

    this.attack = function(attackPower){
        this.energy = this.energy - attackPower;
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
        console.log("[" + dateTime + "] " + (help + 1) + ".Character name " + characterCreate[help].nama + " with role " + characterCreate[help].role + " with skill " + characterCreate[help].skill);
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
console.log("[" + dateTime + "] " + "your character energy is " + characterCreate[select].energy);
alert("your character hp is " + characterCreate[select].hp);
console.log("[" + dateTime + "] " + "your character hp is " + characterCreate[select].hp);
alert("your character status is " + characterCreate[select].status);
console.log("[" + dateTime + "] " + "your character status is " + characterCreate[select].status);


alert("There are 3 branches of the road, where are you going?");
alert("1.Forest");
console.log("[" + dateTime + "] " + "1.Forest");
alert("2.Castle");
console.log("[" + dateTime + "] " + "2.Castle");
alert("3.Market");
console.log("[" + dateTime + "] " + "3.Market")


let choosePlace = parseInt(prompt("Choose place (according to the number)"));
switch(choosePlace){
    case 1:
        alert("you are going to the forest");
        characterCreate[select].walking();
        alert("you are walking and it drains your energy");
        alert("your energy now " + characterCreate[select].energy);
        console.log("[" + dateTime + "] " + "your energy now " + characterCreate[select].energy);
        let chooseEnemyForest = confirm("there is a enemy, want to fight?");
        if(chooseEnemyForest == true){
        
        let enemyForestHp = 50;

        alert("you are fighting with enemy");
        alert("enemy hp " + enemyForestHp);
        console.log("[" + dateTime + "] " + "enemy hp " + enemyForestHp);
            while(enemyForestHp > 1){
                
                let attackEnemyForest = parseInt(prompt("How much power do you want to use?"));
                alert("you attack with " + attackEnemyForest + " power");
                characterCreate[select].attack(attackEnemyForest);
                alert("your energy now " + characterCreate[select].energy);
                console.log("[" + dateTime + "] " + "your energy now " + characterCreate[select].energy);
                enemyForestHp = enemyForestHp - attackEnemyForest;
                alert("enemy hp now " + enemyForestHp);
                console.log("[" + dateTime + "] " + "enemy hp now " + enemyForestHp);

                let enemyPowerForest = enemyPowerRandom();
                let randomNumberForest = randomNumber();
                console.log(randomNumberForest);

                if(randomNumberForest > 5){
                    alert("oh no, the enemy attacks you with " + enemyPowerForest);
                    console.log("[" + dateTime + "] " + "oh no, the enemy attacks you with " + enemyPowerForest);
                    characterCreate[select].hp = characterCreate[select].hp - enemyPowerForest;
                    alert("your hp now " + characterCreate[select].hp);
                    console.log("[" + dateTime + "] " + "your hp now " + characterCreate[select].hp);
                }
            }
        alert("congratulations!! you killed the enemy");
        }
    
        break;
}











