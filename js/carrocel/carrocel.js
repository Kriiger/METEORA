export function executaCarrocel(responsivo){
    const carousel = document.querySelector(`.banneresDaPagina-${responsivo}`);
    const slides = carousel.querySelector(".slides");
    const indicatorsContainer = carousel.querySelector(".indicators");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const slideWidth = carousel.clientWidth;
    let currentPosition = 0;

    for (let i = 0; i < slides.children.length; i++) {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        indicatorsContainer.appendChild(indicator);
    }
    
    const indicators = indicatorsContainer.querySelectorAll(".indicator");
    indicators[0].classList.add("active");
    
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.remove("active");
            if (index * -slideWidth === currentPosition) {
                indicator.classList.add("active");
            }
        });
    }
    
    prevBtn.addEventListener("click", function() {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
            currentPosition = -slideWidth * (slides.children.length - 1);
        }
        slides.style.transform = `translateX(${currentPosition}px)`;
        updateIndicators();
    });
    
    nextBtn.addEventListener("click", function() {
        currentPosition -= slideWidth;
        if (currentPosition < -slideWidth * (slides.children.length - 1)) {
            currentPosition = 0;
        }
        slides.style.transform = `translateX(${currentPosition}px)`;
        updateIndicators();
    });
}