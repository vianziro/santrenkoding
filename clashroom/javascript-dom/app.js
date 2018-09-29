        var nomor = 0;


        var judulDom = document.getElementById('judul')
        var subjudulDom = document.getElementById('subjudul')
        // var kisahku = document.getElementById('kisah')


        // variabel untuk membuat counter
        var plusbuttonDOM = document.getElementById('plus-button')
        var minusbuttonDOM = document.getElementById('minus-button')


        plusbuttonDOM.addEventListener('click', function() {
            // alert('tombol plus dklik')
            console.log ("Nilai Number Sekarang : " + nomor)
            console.log ("tombol plus diklik")
            nomor = nomor + 1;
            console.log("Nilai Nomer Sekarang : " + nomor)
            subjudulDom.innerHTML = nomor
        })
        
        minusbuttonDOM.addEventListener('click', function() {
            // alert('tombol minus dklik')

            console.log ("Nilai number sekrang : " + nomor)
            console.log ("Tombol minus diklik")
            nomor = nomor - 1 ;
            console.log ("nilai number sekarang : " + nomor)
            subjudulDom.innerHTML = nomor

        })









        var namaSaya = prompt('siapa nama saya')
        console.log(namaSaya)


        // var alamat = prompt('Masukkan alamat anda')
        // console.log(alamat)

        // var kisahs = prompt("Tuliskan kisah anda terbaru")
        // console.log(kisah)

        //get data inner html dari DOM
        // var data = judulDom.innerHTML
        // console.log(data)
        // var alamatSaya = subjudulDom.innerHTML
        // console.log(alamatSaya)

        //set data inner ada HTML
        judulDom.innerHTML = "selamat datang " + namaSaya
        subjudulDom.innerHTML = "saya tinggal di  " + alamat

        kisahku.innerHTML = "Kisah terbaru = " + kisahs





        // panggil fungsi allert
        // function tampilkanAllert ()  {

        //     alert('Hello')
        // }


