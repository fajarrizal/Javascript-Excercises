

const nama = ["Fajar", "Imade", "Pandu"];

console.log(
    nama.reduce( function(acc, item, ke){
        acc[item]= `Nama ke ${ke+1}`
        
        return acc;
    }, {})
);

// penjelasan singkat **

// item adalah CURRENT VALUE 
//  ke adalah INDEX POSISI
// mengubah array element menjadi object memakai {} di kedua terakhir
// acc adalah ACCUMULATOR