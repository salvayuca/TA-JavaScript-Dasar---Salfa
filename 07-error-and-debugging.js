/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

- Type Error muncul jika kita menggunakan nilai yang berada di luar kisaran tipe yang diharapkan.
    (telah terjadi kesalahan tipe)
- Reference Error muncul jika kita menggunakan (referensi) variabel yang belum dideklarasikan.
    (terdapat referensi yang tidak ada atau ilegal)
- Range Error muncul jika kita menggunakan angka yang berada di luar rentang nilai legal.
    (telah terjadi angka di luar jangkauan)
- Syntax Error muncul jika Anda mencoba mengevaluasi kode dengan kesalahan sintaks.
    (terjadi kesalahan sintaks)


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

- akan terjadi error
- termasuk kedalam ReferenceError
- terjadi ReferenceError karena variabel tidak dideklarasikan sebelum perintah console.log. Pada baris kode dibawah variabel dideklarasikan setelah perintah console.log,
sedangkan yang terbaca yaitu perintah console.log terlebih dahulu, sehingga saat perintah console.log jalan belum terdapat variabel atau tidak ada variabel yang terbaca.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
