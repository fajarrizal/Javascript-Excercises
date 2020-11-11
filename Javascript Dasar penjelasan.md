# Javascript - Dasar Penjelasan
# Basic Tipe data

  * Number = 10,9.5,-999
  * Boolean = True / False
  * String = "3", "Hello World"
  * Null undefined = null , Undefined

# Penjelasan singkat Operator Komparasi

* (==) : sama dengan
* (!=) : tidak sama dengan
* (===) : strict sama dengan
* (!==) : strict tidak sama dengan
* (>) : lebih besar
* (>=) : lebih besar sama dengan
* (<) : lebih kecil
* (<=) : lebih kecil sama dengan
 ----------------------------------------------
 
 * === < artinya Mengkoreksi nilai dan tipe data
 * == < artinya membandingkan nilai saja
### > contoh : 
 #### 2 == "2" hasil > True (karena membandingkan nilai)
 #### 2 === "2" hasil > false (Karena tipe data tidak sama tapi nilai sama)

# Penjelasan singkat Operator logikal

* && : Logikal AND 
* || : Logikal OR
* ! : Logikal NOT

# Integrasi JS HTML

* > Console.log() artinya untuk memunculkan hasil sesuatu pada console web
* > Alert(" ")  artinya memunculkan notifikasi pada user
* > Prompt ("") artinya meminta inputan user 
 

# Variabel
 ## Struktur variabel : Tipe Variabel dulu baru Nama Variabel
### > Contoh Variabel
 * const, 
 * let, 
 * dan var

 ### penjelasan Const adalah nilai yang diberikan pada variabel const tidak bisa diubah lagi 

### > contoh error pada const :
 ##### const inputan = "hai"
 ##### const inputan = "World" (ini akan terjadi error pada console)

### > contoh benar pada penggunaan variabel const : 
 ##### const PHI : 3.14
 ##### 2 * PHI ( ini akan berhasil pada console )


 ### perbedaan variabel var dan let adalah

##### > var bisa dideklarasikan 2 kali
##### > let tidak bisa dideklarasikan 2 kali 

 ### contoh deklarasi :
  ##### var inputan;
  ##### var inputan; (ini membuat programm berhasil)

 ##### let input;
 ##### let input; (ini akan membuat programm error)  
