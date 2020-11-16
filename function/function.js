function foo (x = 0){
    return x + 1
}
console.log(foo(1));
// ekspetasi hasil akan jadi 2 
// function yang awalnya ada parameter dgn x=0 diabaikan karena
// pada concole.log function foo diisi parameter 1 
// maka hasilnya 1 + 1 = 2


// membuat function tanpa nama

(function(x = 0){
    console.log(x + 1)
})(1);

// hasil akan 2

