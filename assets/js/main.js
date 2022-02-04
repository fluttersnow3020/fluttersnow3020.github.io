var kategorija,kolaci,meni;
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
    IspisMenija(2);
    IspisProizvoda(kolaci);
    $('#tip').change(filterTip);
    $('#posno').change(filterPosno);
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
}