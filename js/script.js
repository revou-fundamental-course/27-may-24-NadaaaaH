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


/*kode untuk tombol information-2*/ 
const tombolSatu = document.getElementById('latarbelakang');
const penjelasanLatarBelakang = document.getElementById('penjelasanlatarbelakang');
const elemenParent1 = document.querySelector('.parent-1');

let isTombolSatuClicked = false;

tombolSatu.addEventListener('click', function () {
    if (!isTombolSatuClicked) {
        penjelasanLatarBelakang.style.display = 'block';
        elemenParent1.insertBefore(tombolSatu, penjelasanLatarBelakang.nextSibling);
        tombolSatu.innerText = 'Close?';
        tombolSatu.style.padding = '10px 50px';
        isTombolSatuClicked = true;

        if(isTombolDuaClicked){
            penjelasanFokus.style.display = 'none';
            elemenParent2.insertBefore(tombolDua, document.getElementById('juduldua').nextSibling);
            tombolDua.innerText = 'Know More?';
            tombolDua.style.padding = '20px 100px';
            isTombolDuaClicked = false;
        }
        if (isTombolTigaClicked) {
            penjelasanKomu.style.display = 'none';
            elemenParent3.insertBefore(tombolTiga, document.getElementById('judultiga').nextSibling);
            tombolTiga.innerText = 'Know More?';
            tombolTiga.style.padding = '20px 100px';
            isTombolTigaClicked = false;
        } else {
            
        }
    } else {
        penjelasanLatarBelakang.style.display = 'none';
        elemenParent1.insertBefore(tombolSatu, document.getElementById('judulsatu').nextSibling);
        tombolSatu.innerText = 'Know More?';
        tombolSatu.style.padding = '20px 100px';
        isTombolSatuClicked = false;
    }
});

const tombolDua = document.getElementById('fokusdanfasilitas');
const penjelasanFokus = document.getElementById('penjelasanfokusdanfasilitas');
const elemenParent2 = document.querySelector('.parent-2');

let isTombolDuaClicked = false;

tombolDua.addEventListener('click', function () {
    if (!isTombolDuaClicked) {
        penjelasanFokus.style.display = 'block';
        elemenParent2.insertBefore(tombolDua, penjelasanFokus.nextSibling);
        tombolDua.innerText = 'Close?';
        tombolDua.style.padding = '10px 50px';
        isTombolDuaClicked = true;

        if(isTombolSatuClicked){
            penjelasanLatarBelakang.style.display = 'none';
            elemenParent1.insertBefore(tombolSatu, document.getElementById('judulsatu').nextSibling);
            tombolSatu.innerText = 'Know More?';
            tombolSatu.style.padding = '20px 100px';
            isTombolSatuClicked = false;
        }
        if (isTombolTigaClicked) {
            penjelasanKomu.style.display = 'none';
            elemenParent3.insertBefore(tombolTiga, document.getElementById('judultiga').nextSibling);
            tombolTiga.innerText = 'Know More?';
            tombolTiga.style.padding = '20px 100px';
            isTombolTigaClicked = false;
        } else {
            
        }
    } else {
        penjelasanFokus.style.display = 'none';
        elemenParent2.insertBefore(tombolDua, document.getElementById('juduldua').nextSibling);
        tombolDua.innerText = 'Know More?';
        tombolDua.style.padding = '20px 100px';
        isTombolDuaClicked = false;
    }
});


const tombolTiga = document.getElementById('komunitasdankolaborasi');
const penjelasanKomu = document.getElementById('penjelasankomunitas');
const elemenParent3 = document.querySelector('.parent-3');

let isTombolTigaClicked = false;

tombolTiga.addEventListener('click', function () {
    if (!isTombolTigaClicked) {
        penjelasanKomu.style.display = 'block';
        elemenParent3.insertBefore(tombolTiga, penjelasanKomu.nextSibling);
        tombolTiga.innerText = 'Close?';
        tombolTiga.style.padding = '10px 50px';
        isTombolTigaClicked = true;

        if(isTombolSatuClicked){
            penjelasanLatarBelakang.style.display = 'none';
            elemenParent1.insertBefore(tombolSatu, document.getElementById('judulsatu').nextSibling);
            tombolSatu.innerText = 'Know More?';
            tombolSatu.style.padding = '20px 100px';
            isTombolSatuClicked = false;
        }
        if (isTombolDuaClicked) {
            penjelasanFokus.style.display = 'none';
            elemenParent2.insertBefore(tombolDua, document.getElementById('juduldua').nextSibling);
            tombolDua.innerText = 'Know More?';
            tombolDua.style.padding = '20px 100px';
            isTombolDuaClicked = false;
        } else {
            
        }
    } else {
        penjelasanKomu.style.display = 'none';
        elemenParent3.insertBefore(tombolTiga, document.getElementById('judultiga').nextSibling);
        tombolTiga.innerText = 'Know More?';
        tombolTiga.style.padding = '20px 100px';
        isTombolTigaClicked = false;
    }
});


/*validasi form*/
const submit = document.getElementById('Submit');

submit.addEventListener('click', function(){
    let isValid = true; 

    const inputNama = document.getElementById('nama').value.trim();
    const inputtanggal = document.getElementById('tanggallahir').value.trim();
    const inputGenderL = document.getElementById('gender-l').checked;
    const inputGenderP = document.getElementById('gender-p').checked;
    const inputpesan = document.getElementById('pesan').value.trim();

    
    if (inputNama === "") {
        document.getElementById('nama').style.border ="3px solid red";
        isValid = false;
    } else {
        document.getElementById('nama').style.border = "1px solid black"; 
    }
    
    if (inputtanggal === "") {
        document.getElementById('tanggallahir').style.border = "3px solid red";
        isValid = false;
    } else {
        document.getElementById('tanggallahir').style.border = "1px solid black"; 
    }

    if (!inputGenderL && !inputGenderP) {
        document.querySelectorAll('.from-radio input[type="radio"]').forEach(radio => {
            radio.style.backgroundColor = "red";
        });
        isValid = false;
    } else {
        document.querySelectorAll('.from-radio input[type="radio"]').forEach(radio => {
            radio.style.backgroundColor = "";
        });
    }

    if (inputpesan === "") {
        document.getElementById('pesan').style.border = "3px solid red";
        isValid = false;
    } else {
        document.getElementById('pesan').style.border = "1px solid black";
    }

    
    if (isValid) {
        document.getElementById('hasilnama').textContent = inputNama;
        document.getElementById('hasiltl').textContent = inputtanggal;
        const gender = inputGenderL ? 'laki-laki' : 'perempuan';
        document.getElementById('hasilgender').textContent = gender;
        document.getElementById('pesanhasil').textContent = inputpesan;

       
        document.getElementById('nama').value = "";
        document.getElementById('tanggallahir').value = "";
        document.getElementById('gender-l').checked = false;
        document.getElementById('gender-p').checked = false;
        document.getElementById('pesan').value = "";
    }
});
