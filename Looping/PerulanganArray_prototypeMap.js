
const nama = ["Fajar", "Imade", "Pandu"];

console.log(
    nama.map( function(orang, ke){
        return `${orang} ini orang ke ${ke + 1}`;
    })
)
// penjelasan : didalam function terdapat orang dan ke
// orang : ini adalah pecahan dari element data array diatas "fajar,imade,pandu"
// ke : ini adalah posisi index data array
// jadi pada return 'program menjalankan fungsi dari item pecahan array dan index posisinya'
// index posisi ditambah + agar posisi nya dimulai dari 1 bukan 0 