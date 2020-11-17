// keseluruhan Doc HTML
console.log(document);

// akses element dari ID 
console.log(document.getElementById("haloworld"));

// mengubah text dengan memanggil ID DOM
document.getElementById("haloworld").
innerText = "jancok"

// akses DOM dengan tag name
// menjadikan array
const div = document.
getElementsByTagName("div");

console.log(div);

// akses DOM dengan menggunakan LOOPING
for (let index = 0 ; index < div.length ; index++){
    const element = div[index];

    console.log(element);
}

// akses DOM dengan mengambil Class namenya
const hey = document.
getElementsByClassName("halo");

console.log(hey);



