// INIZIALIZZAZIONE
const arrayNomeImmagini = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"];

const contenitoreImmagineGrande = document.querySelector(".contenitore-immagine-grande");
const contenitoreImmagine = document.querySelector(".contenitore-immagine");

// LOGICA
// Ciclo for che crea le varie immagini grandi
for(let i=0;i<arrayNomeImmagini.length;i++){
    const Immagine = ` <img class="elemento-immagine" src="${arrayNomeImmagini[i]}" alt="img1"> `;
    contenitoreImmagineGrande.innerHTML += Immagine;
}
// Ciclo for che crea le varie immagini piccole
for(let i=0;i<arrayNomeImmagini.length;i++){
    const Immagine = ` <img class="elemento-immagine-a-lato" src="${arrayNomeImmagini[i]}" alt="img1"> `;
    contenitoreImmagine.innerHTML += Immagine;
}
// Inizializzo array di tutti i tag image
const arrayImmaginiGrandi = document.getElementsByClassName("elemento-immagine");
const arrayImmagini = document.getElementsByClassName("elemento-immagine-a-lato");
// Inizializzo la prima immagine
let indiceAttuale=0;
arrayImmaginiGrandi[indiceAttuale].classList.add("active");
arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");

// Gestione bottoni
const bottonePrecedente=document.querySelector(".precedente");
const bottoneSuccessivo=document.querySelector(".successiva");


// TIMEOUT CHE SCORRE L'IMMAGINI IN AUTOMATICO
let intervalloImmagini = setInterval(immagineSuccessiva, 3000);

// Hover sull'immagine grande che blocca l'autoplay
contenitoreImmagineGrande.addEventListener("mouseover",function(){
    clearInterval(intervalloImmagini);
});
contenitoreImmagineGrande.addEventListener("mouseout",function(){
    intervalloImmagini = setInterval(immagineSuccessiva, 3000);
});

// Bottone Successivo premuto
bottoneSuccessivo.addEventListener("click", function(){
    immagineSuccessiva();
    // RESETTO L'INTERVALLO
    clearInterval(intervalloImmagini);
    intervalloImmagini = setInterval(immagineSuccessiva, 3000);
});

 //Bottone Precedente premuto
 bottonePrecedente.addEventListener("click", function(){
    immaginePrecedente();
 });


 /*******************************************************/
//  FUNZIONI
/********************************************************/
// Va all'immagine successiva
function immagineSuccessiva(){
    arrayImmaginiGrandi[indiceAttuale].classList.remove("active");
    arrayImmagini[indiceAttuale].classList.remove("elemento-immagine-lato-attivo");
    // Controllo bottoni
    if(indiceAttuale === (arrayImmaginiGrandi.length-1)){
        indiceAttuale=0;
    }else{
        indiceAttuale++;
    }
    arrayImmaginiGrandi[indiceAttuale].classList.add("active");
    arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");
}

// Va all'immagine precedente
function immaginePrecedente(){
    arrayImmaginiGrandi[indiceAttuale].classList.remove("active");
    arrayImmagini[indiceAttuale].classList.remove("elemento-immagine-lato-attivo");
    // Controllo bottoni
    if(indiceAttuale === 0){
        indiceAttuale=arrayImmaginiGrandi.length-1;
    }else{
        indiceAttuale--;
    }
    arrayImmaginiGrandi[indiceAttuale].classList.add("active");
    arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");
}