let nilai = 50
let perilaku = "baik"

if(nilai < 60){
    if(perilaku === "baik"){
        console.log("biasa aja")
    } else{
        console.log("kurang prestasi")
    }
}
// nested ini penjelasan singkatnya if didalam if, maka hasil dari programm diatas adalah 
// dia "biasa saja", tetapi memakai nested if seperti ini tidak di anjurkan
// karena membuat nested if banyak akan berdampak kebingungan yang melihat program coding tersebut