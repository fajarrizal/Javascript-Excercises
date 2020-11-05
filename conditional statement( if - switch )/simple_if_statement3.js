let nilai = 100
let perilaku = "kurang baik"

if(nilai > 60 || perilaku !== "baik"){
    console.log("kurang prestasi")
} else{
    console.log("prestasi")
}

// hasil program diatas akan memunculkan hasil "kurang prestasi" penjelasannya : 
// karena pada kodisi diatas ada dua kondisi yang kondisi 
// *satu jika nilai lebih besar dari 60 
//  *dua jika perilakunya tidak sama dengan perilaku baik 
// maka hasil akan "kurang prestasi"
//  pada kondisi tersebut terdapat " || " yang dimana kondisi statementnya bisa memilih salah satu 
//  berbeda dengan " && " jika memakai ini maka kondisi satementnya harus memakai keduanya 