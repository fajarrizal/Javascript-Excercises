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
        return hitungidealminus100 - (hitungidealminus100 * 10) / 100;
    },
    perludiet: function(){
      const akuperludiet = this.idealweight();
      if(akuperludiet - 5 > this.berat)
        return (
        "perlu tambah asupan makan lagi !" + (akuperludiet - this.berat) + "Kg"
        );
      else if(akuperludiet + 5 < this.berat)
        return (
        "perlu diet lagi !" + (akuperludiet - this.berat) + "Kg"
        );  
        return "sudah ideal kok !";
    },
};
console.log(NamaOrang.fullName());
console.log(NamaOrang.idealweight());
console.log(NamaOrang.perludiet());
