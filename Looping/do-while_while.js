// contoh penggunaan looping dengan *Do-while

let nilai = 0

do{
    console.log("hello world!") ; nilai++
}   while(nilai < 10)

// contoh penggunaan looping dengan *While

let i = 0
while(i < 10){
    console.log("hello")
    i++ ;
} 

// perbedaan Do-while dan While 
//  > do-while : programm akan menjalankan perintah didalam *Do 
//              lalu program mengklarifikasikan kondisinya pada *While

// > While : program tidak akan jalan jika kondisi tidak terpenuhi


// contoh lain menggunakan Array dan perulangan *While
const mahasiswa = ['India', 'Jon', 'Dam']
let index = 0
while(index < mahasiswa.length){
    const element = mahasiswa[index];
    console.log(element)
    index++;

}
