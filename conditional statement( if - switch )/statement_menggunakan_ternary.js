// syntax ternary adalah ( condition ? ekspresi 1 : ekspresi 2 )
// ekspresi akan dijalankan jika kondisi terpenuhi
// Sebuah ekspresi akan menguji apakah menghasilkan *true atau *false.

let nilai = 60
console.log(nilai < 70 ? "kurang prestasi" : "berprestasi")

// hasil program diatas adalah "kurang prestasi " (True)

// contoh lain ternary

var firstCheck = false 
var secondCheck = false
access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted'; 
console.log(access); 

// penjelasannya, kamu membuat variabel first check dan secondchek dengan nilai *False
// didalam conditional(kondisi) access :
// firstCheck adalah True "Access Denied"
// secondCheck Truenya adalah "Acess Denied" dan Falsenya "Access granted"
// maka program outputnya pada logs access "Access granted" dari secondCheck