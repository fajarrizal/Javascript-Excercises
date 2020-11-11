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