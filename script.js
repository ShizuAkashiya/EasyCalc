// v1
var operator = prompt("Masukkan operator (+, -, *, /, %, **, ++, --):");
var angka1 = parseFloat(prompt("Masukkan angka pertama:"));
var angka2 = parseFloat(prompt("Masukkan angka kedua:"));

// v2
var hasil;

// operator
if (operator === "+") {
    hasil = angka1 + angka2;
} else if (operator === "-") {
    hasil = angka1 - angka2;
} else if (operator === "*") {
    hasil = angka1 * angka2;
} else if (operator === "/") {
    if (angka2 !== 0) {
        hasil = angka1 / angka2;
    } else {
        hasil = "Pembagian dengan nol/null tidak valid";
    }
} else if (operator === "%") {
    if (angka2 !== 0) { 
        hasil = angka1 % angka2;
    } else {
        hasil = "Modulus dengan nol/null tidak valid";
    }
} else if (operator === "**") {
    hasil = Math.pow(angka1, angka2);
} else if (operator === "++") {
    // Operasi increment
    hasil = angka1 + 1;
} else if (operator === "--") {
    // decrement
    hasil = angka1 - 1;
} else {
    hasil = "Operator Tidak Valid";
}

// hasil
alert("Hasil: " + hasil);