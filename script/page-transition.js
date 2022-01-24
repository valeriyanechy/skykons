$('hero__nav-list').click(function () {
    $('.hero__nav').addClass('loading');
});


function transEnd(e) {
    var el = $(e.target);
    if (el.hasClass('hero__nav')) {
        $('.hero__nav').removeClass('loading');
    }
}


$('.hero__nav').on('webkitTransitionEnd transitionend', function (e) {
    setTimeout(function () {
        transEnd(e);
    }, 250);
});