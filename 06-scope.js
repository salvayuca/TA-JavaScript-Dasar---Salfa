/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

1. Variable pada javascript terbagi menjadi tiga yaitu global scope, local scope, dan blocks scope.
2a. Global scope merupakan variable yang dideklarasikan diluar blocks atau paling luar sehingga dapat diakses dimanapun dalam suatu file.
2b. Local scope merupakan variable yang dideklarasikan didalam blocks dan hanya bisa diakses oleh blocks tersebut.
3. Implementasi :

var mobil = 'hitam'; // ini adalah global scope

function warnaMobil() {
  var mobil = 'silver'; // ini adalah local scope
  console.log(mobil); // 'silver'
  
  if(true) {
    mobil = 'merah'; // ini adalah local scope
    console.log(mobil); // 'merah'
  }
  console.log(mobil); // 'merah'
}
warnaMobil();
console.log(mobil); // 'hitam' -> hasil dari global scope


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

1. yang akan tampil pada console.log yaitu "Mariah"
2. karena pada function terdapat parameter dan pada perintah console.log yang dijalankan terdapat parameter baru, sehingga yang terbaca yaitu parameter baru tersebut.

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
