/*function menyapa(){
    let namaWelcome = prompt("Panggilan kamu biasanya apa?", "");
    if (namaWelcome !== ""){
        document.getElementById('welcome').innerText = namaWelcome;
    } else {
        document.getElementById('welcome').innerText = "Stranger";
    }
}

menyapa();

*/


const tombolSatu = document.getElementById('latarbelakang');
const penjelasanLatarBelakang = document.getElementById('penjelasanlatarbelakang');
const tutup = document.getElementById('tutuppenjelasansatu');

tombolSatu.addEventListener('click', function() {
    tombolSatu.setAttribute('hidden', "");
    penjelasanLatarBelakang.removeAttribute('hidden');
    tutup.removeAttribute('hidden');
});

tutup.addEventListener('click', function(){
    tutup.setAttribute('hidden', "");
    penjelasanLatarBelakang.setAttribute('hidden', '');
    tombolSatu.removeAttribute('hidden');
});





