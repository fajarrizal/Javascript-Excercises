const NamaOrang = {
    firstname: "Rizal",
    lastname: "Mastura",
    fullName: function(){
        return `${this.firstname} ${this.lastname}`;
    },
    berat:65,
    tinggi:172,
    idealweight: function(){
        const hitungidealminus100 = this.tinggi - 100 
        // return hitungidealminus100 - (hitungidealminus100 * 10/100)
        return hitungidealminus100 - (hitungidealminus100 * 10) / 100 <
        this.berat; 
        // penjelasan diatas ini jika berat kondisinya kurang dari berat 65
        // dan dari hasil hitungan idealweight ini adalah 64.8
        // maka hasilnya TRUE
    }
};
console.log(NamaOrang.fullName());
console.log(NamaOrang.idealweight());

// object part 2
const negara = {
    ID : {
        provinsi : ['Aceh', 'Jawa Barat', 'Sumatera Selatan'],
        city : ['Banda Aceh', 'Bandung', 'Padang', 'Semarang'],
    },
    USA : {
        provinsi : ['Texas', 'Virginia', 'Utah'],
        city : ['New York', 'Los Angeles', 'Washington', 'Chicago']
    },
};
console.log(negara.ID);

// akses object tapi hanya salah satu isi array tersebut.
console.log(negara.USA.provinsi);

// Object menggunakan *Optional Chaning dan *Nullish Coalescing Operator
// mengakses suatu object tetapi variabel array tidak ada di deklarasikan
// pada masalah ini variabel object negara RUS dan arraynya tidak di deklarasikan
console.log(negara?.RUS?.provinsi);
//  Ekspetasi console akan menjadi *Undefined

// sekarang menggunakan keduanya Optional chaning dan Nullish Coalescing
// hasil akan berbeda
console.log(negara?.RUS?.provinsi ?? "Tidak Ditemukan");
// penjelasannya : apapun value kiri undefined, null / false (tidak ketemu) maka 
// value kanan "tidak ditemukan" akan jalan 
// dan itu sebaliknya (misal kiri ditemukan valuenya) maka yang value kanan tidak diperlukan