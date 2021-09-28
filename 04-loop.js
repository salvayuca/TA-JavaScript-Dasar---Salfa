/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i < 100; i++){
    if(isPrime(i)) console.log(i);
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let num = 0;

while (primeCounter < 50) {
    const checkPrime = isPrime(num);
    if (checkPrime==true) {
        primeCounter++
        if (primeCounter==50)  {
          break;
        }
    }
    num++
}
console.log(primeCounter);
console.log(num);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let number = 0;

function isOdd(value){
    if (value%2 == 0)
        return false;
    else
        return true;
}
do {
    const checkOdd = isOdd(number);
    if (checkOdd==true) {
        oddCounter++
        if (oddCounter==50)  {
          break;
        }
    }
    number++
} while (oddCounter < 50);
console.log(oddCounter);
console.log(number);
