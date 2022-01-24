var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});