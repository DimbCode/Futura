// Slider Variables

const sliderItems = document.querySelectorAll(".home__item"),
    sliderArrows = document.querySelectorAll(".home__arrow-btn"),
    sliderProgress = document.querySelector(".progress-bar__line-item"),
    currentIndex = document.querySelector(".progress-bar__number_current");

let sliderSettings = {
    currentIndex: 0,
    slides: sliderItems,
    sliderArrows: sliderArrows,
    RButton: "home__arrow-btn_right",
    LButton: "home__arrow-btn_left",
    hiddenClass: "none",
    disableClass: "disabled",
    sliderProgress: sliderProgress,
    indexElement: currentIndex,
}

// Functions

function setIndex(button, sliderSettings) {

    if ( button.classList.contains(sliderSettings.RButton) ) {

        if (sliderSettings.currentIndex >= sliderSettings.slides.length - 1) {
            sliderSettings.currentIndex = 0;
        } else {
            sliderSettings.sliderArrows.forEach(arrowBtn => arrowBtn.classList.remove(sliderSettings.disableClass));
            sliderSettings.currentIndex++;
        }
        
    } else if ( button.classList.contains(sliderSettings.LButton) ) {

        if (sliderSettings.currentIndex <= 0) {
            sliderSettings.currentIndex = sliderSettings.slides.length - 1;
        } else {
            sliderSettings.sliderArrows.forEach(arrowBtn => arrowBtn.classList.remove(sliderSettings.disableClass));
            sliderSettings.currentIndex--;
        }

    }

}

function drawSlide(sliderSettings) {
    let slides = sliderSettings.slides,
        index = sliderSettings.currentIndex,
        hiddenClass = sliderSettings.hiddenClass;

    slides.forEach(item => {
        item.classList.add(hiddenClass);
    });

    slides[index].classList.remove(hiddenClass);
}

function setProgress(sliderSettings) {
    let cd = 100 / sliderSettings.slides.length,
        index = sliderSettings.currentIndex;

    sliderSettings.sliderProgress.style.width = cd * (index + 1) + "%";
    sliderSettings.indexElement.textContent = (index >= 10) ? index + 1 : `0${index + 1}`;
}

// Events

sliderArrows.forEach(item => {

    item.addEventListener("click", (event) => {

        const button = event.currentTarget;
    
        setIndex(button, sliderSettings);
        drawSlide(sliderSettings);
        setProgress(sliderSettings);
    
    });

});