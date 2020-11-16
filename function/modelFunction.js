//  membuat function di dalam function

function addSquares (a,b){
    function square(x){
        return x * x
    }
    return square(a) + square(b)
}

console.log(addSquares(1,2));

// penjelasan
// parameter a punya nilai 1 dan b punya nilai 2
//  lalu function square x hanya pengalihan x dengan x
// return pertama square bervariabel a yang bernilai 1
// maka variable a di kali pada function square 1 * 1 = 1
// dan ditambah square bervariabel b yang bernilai 2 
// maka variabel b di dijalankan juga perkaliannya pada function square
// dimana 2 * 2 = 4 
// maka a + b = 1 + 4 
// hasilnya akan 5 
