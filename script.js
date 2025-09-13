

// variabler til updateLines function (floating cards business section)
const cards = document.querySelectorAll('.floatingCard');
const line1 = document.getElementById(`line1`);
const line2 = document.getElementById(`line2`);
const svgContainer = document.querySelector(`.svg-container`);

function updateLines() {
    const containerRect = svgContainer.getBoundingClientRect();

    // info om dimensioner og position på de 3 kort
    const card1Rect = cards[0].getBoundingClientRect();
    const card2Rect = cards[1].getBoundingClientRect();
    const card3Rect = cards[2].getBoundingClientRect();

    // coords på centrum af de 3 kort
    const card1CenterX = card1Rect.left + card1Rect.width / 2 - containerRect.left;
    const card1CenterY = card1Rect.top + card1Rect.height / 2 - containerRect.top;

    const card2CenterX = card2Rect.left + card2Rect.width / 2 - containerRect.left;
    const card2CenterY = card2Rect.top + card2Rect.height / 2 - containerRect.top;

    const card3CenterX = card3Rect.left + card3Rect.width / 2 - containerRect.left;
    const card3CenterY = card3Rect.top + card3Rect.height / 2 - containerRect.top;

    // tegn linje fra card1 til card2
    line1.setAttribute('x1', card1CenterX);
    line1.setAttribute('y1', card1CenterY);
    line1.setAttribute('x2', card2CenterX);
    line1.setAttribute('y2', card2CenterY);
    // tegn linje fra card2 til card3
    line2.setAttribute('x1', card2CenterX);
    line2.setAttribute('y1', card2CenterY);
    line2.setAttribute('x2', card3CenterX);
    line2.setAttribute('y2', card3CenterY);

    requestAnimationFrame(updateLines);
}





// variabler til updateCarousel function
const imgs = document.querySelectorAll('.imgCarouselItem');
const txts = document.querySelectorAll('.txtCarouselItem');
const btnPrev = document.querySelector('.carouselPrev');
const btnNext = document.querySelector('.carouselNext');

// variablen til at holder styr på hvilken slide der er aktivt
let activeSlideIndex = 0;

// funktion til at vise et bestemt billede OG den matchende tekst
function updateCarousel(index) {
    // opdaterer billedet til at matche activeSlideIndexet
    imgs.forEach(billede => { // gør alle billeder i listen "ikke-active"
        billede.classList.remove('active');
    });
    imgs[index].classList.add('active'); // gør billedet active udfra index

    // Opdaterer tekster til at matche activeSlideIndexet
    txts.forEach(tekst => {
        tekst.classList.remove('active');
    });
    txts[index].classList.add('active');
}

// når next-knappen klikkes på
btnNext.addEventListener('click', () => {  // "() => {}" betyder "når argumentet er sand skal koden i {} kører"
    activeSlideIndex++; // gør index 1 større når knappen er klikket på
    if (activeSlideIndex >= imgs.length) { // reset index til 0 når vi kommet til sidste index
        activeSlideIndex = 0;
    }
    // kør updateCarousel funtion med det activeSlideIndexet vi har opdateret til
    updateCarousel(activeSlideIndex);
});

// når prev-knappen klikkes på
btnPrev.addEventListener('click', () => {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
        activeSlideIndex = imgs.length - 1;
    }
    updateCarousel(activeSlideIndex);
});





// variabler til updateHueRotation function
const backgroundElement = document.querySelector('.backgroundImg');

function updateHueRotation() {
    // variabler til nuværende scroll position
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const totalScrollableDistance = scrollHeight - clientHeight; // sørger for procent er korrekt så "100%" kan opnås uden at scroll forbi sidste indhold
    const currentScrollPosition = window.scrollY;
    const scrollPercentage = currentScrollPosition / totalScrollableDistance; // sidensscrollbare højde og nuværende scroll højde udregnet til %

    // formaterer procenten til en "hue rotations vinkel" (0 til 360)
    const hue = scrollPercentage * 360;

    // opdaterer "hue filter" på baggrunds billedet
    backgroundElement.style.filter = `hue-rotate(${hue}deg)`; // ${hue} formatere til en string variabel
}

// kør updateHueRotation hver gang der scrolles
window.addEventListener('scroll', updateHueRotation);

// Sørger for scripts kører når siden loader
updateLines();
updateCarousel(activeSlideIndex);
updateHueRotation();












