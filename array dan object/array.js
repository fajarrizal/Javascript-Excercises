// Array Dasar
    const nama = ["Fajar", "Imade", "Pandu"];
    console.log(nama)


// memanggil data dari nomor posisi indexnya pada array
    console.log(nama[2])


// Mencaritahu berapa jumlah data Array
    console.log(nama.length)

// mencaritahu nomor index element pada array
    console.log(nama.indexOf("Pandu"))

// Perulangan didalam array
    nama.forEach(function (item, index, array){
        console.log(item, index);
    })

// Menambah data array (pakai Push)
    nama.push("Junaidi")

// menghapus data array berdasarkan posisi indexnya (pakai splice)
    // cara 1
    // * nama.splice(nama.indexOf("Imade"), 1)
    // * console.log(nama)

    // cara 2
    // * const namaImade = nama.indexOf("Imade");
    // * nama.splice(namaImade, 1)
    // * console.log(namaImade)

// menghapus data array dari belakang (pakai POP)

    // * nama.pop()

// menghapus data array dari awal (pakai Shift)

    // * nama.shift()
    // * console.log(nama)


// Menduplikasi sebuah Array (Pakai Slice)

    const NamaBaru = nama.slice() 

    nama.pop() //mengapus nama

    console.log("nama Baru : ", NamaBaru)
    console.log("nama Lama : ", nama)