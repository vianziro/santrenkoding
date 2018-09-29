


// var nomor = 0 
let nomor = parseInt(localStorage.getItem('nomor'));
if(isNaN(nomor)) {
    nomor = 0;
}


const namaDom = document.getElementById('atas')
const hitungku = document.getElementById('bawah')


const tambahAngka = document.getElementById('tambah')
const kurangAngka = document.getElementById('kurang')





// var namaAnda = prompt('Masukkan Nama anda : ')
// console.log(namaAnda)


// namaDom.innerHTML = "Hai, Selamat datang " + namaAnda




tambahAngka.addEventListener('click', function () {
    
    nomor = nomor + 1;
    
    
    hitungku.innerHTML = nomor
    localStorage.setItem('nomor', nomor)
})



kurangAngka.addEventListener('click', function() {
    nomor = nomor - 1
   
    hitungku.innerHTML = nomor
    localStorage.setItem('nomor', nomor)
 
})






