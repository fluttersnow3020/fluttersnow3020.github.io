var kategorija,kolaci,meni,idstrane,linkstrane;
window.onload = function(){
    meni = [
		{
			"id": 1,
			"title": "Početna",
			"link": "index.html"
		},
		{
			"id": 2,
			"title": "Galerija",
			"link": "galerija.html"
		},
		{
			"id": 3,
			"title": "Autorka",
			"link": "autorka.html"
		}
	];
    kategorija = [
        {
            "id": 1,
            "kat": "Makaronsi"
        },
        {
            "id": 2,
            "kat": "Torta"
        },
        {
            "id": 3,
            "kat": "Sitni kolaci"
        }
    ];
    kolaci = [
        {
            "id": 1,
            "opis": "Makaronsi",
            "cena": "100",
            "kolicina": "3 komada",
            "kategorija": 1,
            "posno": false,
            "slika":{
                "src": "kolacgalerija1.jpg",
                "alt": "Makaronsi"
            }
        },
        {
            "id": 2,
            "opis": "Posne torte",
            "cena": "800",
            "kolicina": "1 kg",
            "posno": true,
            "kategorija": 2,
            "slika":{
                "src": "kolacgalerija2.jpg",
                "alt": "Posne torte"
            }
        },
        {
            "id": 3,
            "opis": "Mrsne torte",
            "cena": "800",
            "kolicina": "1 kg",
            "posno":false,
            "kategorija": 2,
            "slika":{
                "src": "kolacgalerija3.jpg",
                "alt": "Mrsne torte"
            }
        },
        {
            "id": 4,
            "opis": "Tiramisu",
            "cena": "200",
            "kolicina": "parče",
            "posno": false,
            "kategorija": 2,
            "slika":{
                "src": "kolacgalerija4.jpg",
                "alt": "Tiramisu"
            }
        },
        {
            "id": 5,
            "opis": "Praznični sitni kolači - mrsni",
            "cena": "500",
            "kolicina": "1 kg",
            "posno": false,
            "kategorija": 3,
            "slika":{
                "src": "kolacgalerija5.jpg",
                "alt": "Praznični sitni kolači - mrsni"
            }
        },
        {
            "id": 6,
            "opis": "Čokoladni sitni kolači",
            "cena": "600",
            "kolicina": "1 kg",
            "posno": false,
            "kategorija": 3,
            "slika":{
                "src": "kolacgalerija6.jpg",
                "alt": "Čokoladni sitni kolači"
            }
        },
        {
            "id": 7,
            "opis": "Praznični sitni kolači - posni",
            "cena": "500",
            "kolicina": "1 kg",
            "posno": true,
            "kategorija": 3,
            "slika":{
                "src": "kolacgalerija7.jpg",
                "alt": "Praznični sitni kolači - posni"
            }
        },
        {
            "id": 8,
            "opis": "Klasičan mix mrsnih sitnih kolača za sve prilike",
            "cena": "550",
            "kolicina": "1 kg",
            "posno": false,
            "kategorija": 3,
            "slika":{
                "src": "kolacgalerija8.jpg",
                "alt": "Klasičan mix mrsnih sitnih kolača za sve prilike"
            }
        },
        {
            "id": 9,
            "opis": "Klasičan mix posnih sitnih kolača za sve prilike",
            "cena": "550",
            "kolicina": "1kg",
            "kategorija": 3,
            "posno": true,
            "slika":{
                "src": "kolacgalerija9.jpg",
                "alt": "Klasičan mix posnih sitnih kolača za sve prilike"
            }
        },
    ];
    linkstrane = window.location.pathname;
    console.log(linkstrane);
if(linkstrane == '/index.html'){
    IspisMenija(1);
    proveraForme();
}
else if(linkstrane == '/galerija.html'){
    IspisMenija(2);
    IspisProizvoda(kolaci);
    $('#tip').change(filterTip);
    $('#posno').change(filterPosno);
}
else{
    IspisMenija(3);
    proveraForme();
};

};
function IspisProizvoda(kolaci){
    const kolaciDiv = document.querySelector('#kolaci');
	html = '';
	for(const kolac of kolaci){
		html+=`<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          
          <img src="assets/images/${kolac.slika.src}" alt="${kolac.slika.alt}" class="bd-placeholder-img card-img-top galerija" width="100%" />
          <div class="card-body">
            <p class="card-text">${kolac.opis} - ${kolac.cena} din ${kolac.kolicina}</p>
          </div>
        </div>
      </div>`;
	}
	kolaciDiv.innerHTML = html;
};
function filterTip(){
        let tip= $(this).val();
        if(tip == "0") {
            IspisProizvoda(kolaci);;
            return;
        }
        let filtriraniProizvodi = kolaci.filter(function(e){
            if(tip == "1"){
                if(e.kategorija==1) return true;
            }else if(tip == "2"){
                if(e.kategorija==2) return true;}
                else if(e.kategorija==3) return true;
            }
        );
        IspisProizvoda(filtriraniProizvodi);;
    };
function filterPosno(){
    let tip= $(this).val();
    if(tip == "0") {
        IspisProizvoda(kolaci);;
        return;
    }
    let filtriraniProizvodi = kolaci.filter(function(e){
        if(tip == "1"){
            if(e.posno==true) return true;
        }
            else if(e.posno==false) return true;
        }
    );
IspisProizvoda(filtriraniProizvodi);
};
function IspisMenija(activeid){
const navDiv = document.getElementById("meni");
let html = ' ';
for(let i=0; i < meni.length; i++){
    if(i==(activeid-1)){
    html+=`<li class="nav-item active">
            <a class="nav-link" href="${meni[i]['link']}">${meni[i]['title']}</a>
          </li>`;
    }
    else{
        html+=`<li class="nav-item">
        <a class="nav-link" href="${meni[i]['link']}">${meni[i]['title']}</a>
      </li>`
    }
}
navDiv.innerHTML = html;
};
function proveraForme(){
const forma = document.querySelector('#kontaktforma');
const ime = document.querySelector('#Ime');
const imejl = document.querySelector('#Imejl');
const poruka = document.querySelector('#Poruka');
const slanje = document.querySelector('#slanje');
const prikaz = document.querySelector('#prikaz');
const proveriIme = () => {
    let ime = document.querySelector('#Ime');
    let imeExpression = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/;
    imeFieldValue = ime.value;
    return checkRegEx(imeExpression, imeFieldValue, ime);
    };
const proveriMejl = () => {
        let imejl = document.querySelector('#Imejl');
        let mejlExpression = /^[a-zA-Z0-9]([a-z]|[0-9])+\.?-?_?([a-z]|[0-9])*\.?([a-z]|[0-9])*\@[a-z]{3,}\.([a-z]{2,4}\.)?([a-z]{2,4})$/;
        mejlFieldValue = imejl.value;
        return checkRegEx(mejlExpression, mejlFieldValue, imejl);
        };
const proveriPoruku = () => {
            if(poruka.value == '' || poruka.value == null ||
            poruka.value.length == 0) {
            fieldInvalid(poruka, "Poruka ne može da bude prazna");
            return 0;
            } else {
            fieldValid(poruka);
            return 1;
            }
            };
            const proveriDugme = () => {
                if(proveriIme() && proveriMejl() && proveriPoruku()) {
                if(slanje.classList.contains('btn-danger')) {
                slanje.classList.remove('btn-danger');
                slanje.classList.add('btn-success');
                } else {
                slanje.classList.add('btn-success');
                }
                return 1;
                } else {
                if(slanje.classList.contains('btn-success')) {
                slanje.classList.remove('btn-success');
                slanje.classList.add('btn-danger');
                } else {
                slanje.classList.add('btn-danger');
                }
                return 0;
                }
                };

                poruka.addEventListener('keyup', proveriPoruku);
                imejl.addEventListener('keyup', proveriMejl);
                ime.addEventListener('keyup', proveriIme);
                slanje.addEventListener('click',(event) => {
                    if(proveriDugme()){
                        prikaz.innerHTML = '<p>uspesno slanje poruke</p>';
                    }
                    else{
                        prikaz.innerHTML = '<p>molim vas, proverite formu</p>';
                    }
                });
                function fieldValid(field) {
                    if(field.classList.contains('is-invalid')) {
                    field.classList.remove('is-invalid')
                    field.classList.add('is-valid')
                    } else {
                    field.classList.add('is-valid')
                    }
                    }
                    function fieldInvalid(field, text) {
                    if(field.classList.contains('is-valid')) {
                    field.classList.remove('is-valid')
                    field.classList.add('is-invalid')
                    } else {
                    field.classList.add('is-invalid')
                    }
                    field.innerText = `${text}`
                    }
                    const checkRegEx = (expression, fieldValue, field) => {
                    if(expression.test(String(fieldValue))) {
                    fieldValid(field)
                    return 1 
                    } else {
                    fieldInvalid(field, `Proverite sadrzaj polja`)
                    return 0 
                    }
                    }
}