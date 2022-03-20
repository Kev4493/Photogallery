let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', ];
let currentImg = 0;
let opened = false;

// IMG-Preview-Boxen Laden:

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        content.innerHTML += /*html*/`
        <div onclick="OpenfullsizeImg(${i})" class="img-preview-box">
            <img class="img-preview" src="${image}">
        </div>`;
    }
    document.getElementById('header').classList.remove('d-none')
}

// Bild im Fullscreen öffnen:

function OpenfullsizeImg(i) {
    opened = true;
    currentImg = i;
    let content = document.getElementById('content');

    content.innerHTML = /*html*/`
    <div class="fullsize-box">
        <div onclick="ClosefullsizeImg()" class="close-icon-container"><img class="close-icon" src="./icons/close.svg"></div>
        <div onclick="previousImg()" id="previous-icon" class="previous-icon-container"><img class="previous-icon" src="./icons/previous.svg"></div>
        <img class="fullsize-img" src="${images[i]}">
        <div onclick="nextImg()" class="next-icon-container"><img class="next-icon" src="./icons/next.svg"></div>
    </div>
    `;

    document.getElementById('header').classList.add('d-none')
}

// Nächstes Bild öffnen:

function nextImg() {
    currentImg++;
    if (currentImg < images.length) {
        OpenfullsizeImg(currentImg);
    } else {
        OpenfullsizeImg(0);
    }
}

// Vorheriges Bild öffnen:

function previousImg() {
    currentImg--;
    if (currentImg >= 0) {
        OpenfullsizeImg(currentImg);
    } else {
        OpenfullsizeImg(images.length-1);
    }
}

// Fullscreen schließen:

function ClosefullsizeImg() {
    opened = false;
    render()
}

// Navigation mit Pfeiltasten:

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            if(opened){
                previousImg();
            }
            
            break;
        case 39:
            if(opened){
                nextImg();
            }
            break;
    }
});