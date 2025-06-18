//inserisco i riferimenti di cui avrò bisogno
const rowEl = document.querySelector(".row");
const btnEl = document.getElementById("close");
const myImg = document.querySelector("#overlay img")


//inizializzo una stringa in cui salvo il post markup

//ciclo per prendere i singoli elementi all'interno dell'array di oggeti
for (let i=0; i < 6; i++) {
    
    //azzero la stringa
    let markupStr = "";

    //effettuo la chiamata API
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    
    //trasformo la risposta in json
    .then(response => response.json())
    .then(data => {    
    
    //destrutturo
    const {title, date, url} = data[i];
    

    //genero il markup
    markupStr = `<div class="col-4 col-6-md col-12-sm ">
                    <div class="card">
                        <img id="pin" src="./assets/img/pin.svg" alt="pin.svg">
                        <img class="image" src="${url}" alt="img.png">
                        <div class="card-body">
                            <h4 id="img-title">${title}</h4>
                            <p id="img-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, sequi!</p>
                            <date>${date}</date>
                        </div> 
                    </div>
                </div>`

    //aggiorno la DOM
    rowEl.innerHTML += markupStr;
    
    //prendo i riferimenti alle immagini e all'overlay
    const imgElements = document.querySelectorAll(".image");
    const overlayEl = document.getElementById("overlay")

    
    //aggiungo l'evento che mi faccia ricomparire l'overlay al click sull'immagine, iterando nell'array dove mi si sono salvati i vari riferimenti delle immagini
    imgElements.forEach(img => { 
        img.addEventListener("click", () => { 
            overlayEl.classList.remove("d-none");
            myImg.src = url;
        });
    });
    
    //aggiungo l'evento che mi faccia chiudere l'overlay al click sul pulsante
    btnEl.addEventListener("click", () => {
        overlayEl.classList.add("d-none");
    })
        
    })

}






