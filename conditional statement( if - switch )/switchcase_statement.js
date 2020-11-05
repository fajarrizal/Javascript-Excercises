let perilaku = "baik"
switch(perilaku){
    case "kurang baik":
        console.log("kurang prestasi")
        break
    case "baik":
        console.log("prestasi")
        break

    default:
        console.log("biasa aja")
}

// penjelasan switch case 
// pada sistem tersebut jika nilai variabel beda maka hasil akan mengarah ke dafault yang disetarakan denga (else)
// pada hasil programm diatas nilai variabel perilaku adalah "baik"
// kondisinya jika dia "baik" maka dia "prestasi"