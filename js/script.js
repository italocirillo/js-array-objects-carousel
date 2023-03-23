// INIZIALIZZAZIONE ARRAY
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// Inizializzo array di tutti i tag image
const contenitoreImmagineGrande = document.querySelector(".contenitore-immagine-grande");
const contenitoreImmagine = document.querySelector(".contenitore-immagine");
riempiImmaginiGrandi();
riempiImmagini();
const arrayImmaginiGrandi = document.getElementsByClassName("elemento-immagine");
const arrayImmagini = document.getElementsByClassName("elemento-immagine-a-lato");
const arrayTesti = document.getElementsByClassName("testi-foto");


// inizializzoPrimaImmagine
let indiceAttuale=0;
    arrayImmaginiGrandi[indiceAttuale].classList.add("active");
    arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");
    arrayTesti[indiceAttuale].classList.add("active");

// Gestione bottoni
const bottonePrecedente=document.querySelector(".precedente");
const bottoneSuccessivo=document.querySelector(".successiva");

// Intervallo
let intervalloImmagini;

slider();

// Bottone Successivo premuto
bottoneSuccessivo.addEventListener("click", function(){
    console.log("ciao");
    immagineSuccessiva();
    // RESETTO L'INTERVALLO
    clearInterval(intervalloImmagini);
    intervalloImmagini = setInterval(immagineSuccessiva, 3000);
});

 //Bottone Precedente premuto
 bottonePrecedente.addEventListener("click", function(){
    immaginePrecedente();
    // RESETTO L'INTERVALLO
    clearInterval(intervalloImmagini);
    intervalloImmagini = setInterval(immaginePrecedente, 3000);
 });


 /*******************************************************/
//  FUNZIONI
/********************************************************/
// Creo elementi html aggiungendo immagini grandi
function riempiImmaginiGrandi(){
    let stringaImmagini = "";
    // Ciclo che crea l'array immagini per poi riempire il contenitore con le varie immagini
    const arrayImmaginiGrandi = images.map((element) => ` 
    <img class="elemento-immagine" src="${element.image}" alt="img1"> 
    <div class="testi-foto">
        <h2>${element.title}</h2>
        <p>${element.text}</p>
    </div>
    `);
    arrayImmaginiGrandi.forEach(element => stringaImmagini += element);
    contenitoreImmagineGrande.innerHTML += stringaImmagini;
}

// Creo elementi html aggiungendo immagini piccole
function riempiImmagini(){
    let stringaImmagini = "";
    // Ciclo che crea l'array immagini per poi riempire il contenitore con le varie immagini
    const arrayImmagini = images.map((element) => ` <img class="elemento-immagine-a-lato" src="${element.image}" alt="img1"> `);
    arrayImmagini.forEach(element => stringaImmagini += element);
    contenitoreImmagine.innerHTML += stringaImmagini;
}

// SLIDER
function slider(){
    // TIMEOUT CHE SCORRE L'IMMAGINI IN AUTOMATICO
    intervalloImmagini = setInterval(immagineSuccessiva, 3000);

    // Hover sull'immagine grande che blocca l'autoplay
    contenitoreImmagineGrande.addEventListener("mouseover",function(){
        clearInterval(intervalloImmagini);
    });
    contenitoreImmagineGrande.addEventListener("mouseout",function(){
        intervalloImmagini = setInterval(immagineSuccessiva, 3000);
    });
}

// Va all'immagine successiva
function immagineSuccessiva(){
    arrayImmaginiGrandi[indiceAttuale].classList.remove("active");
    arrayImmagini[indiceAttuale].classList.remove("elemento-immagine-lato-attivo");
    arrayTesti[indiceAttuale].classList.remove("active");
    // Controllo bottoni
    if(indiceAttuale === (arrayImmaginiGrandi.length-1)){
        indiceAttuale=0;
    }else{
        indiceAttuale++;
    }
    arrayImmaginiGrandi[indiceAttuale].classList.add("active");
    arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");
    arrayTesti[indiceAttuale].classList.add("active");
}

// Va all'immagine precedente
function immaginePrecedente(){
    arrayImmaginiGrandi[indiceAttuale].classList.remove("active");
    arrayImmagini[indiceAttuale].classList.remove("elemento-immagine-lato-attivo");
    arrayTesti[indiceAttuale].classList.remove("active");
    // Controllo bottoni
    if(indiceAttuale === 0){
        indiceAttuale=arrayImmaginiGrandi.length-1;
    }else{
        indiceAttuale--;
    }
    arrayImmaginiGrandi[indiceAttuale].classList.add("active");
    arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");
    arrayTesti[indiceAttuale].classList.add("active");
}