$(document).ready(function() {
    $('img.product__mini-pic1').mouseenter(function () {
        $('img.product__big-pic').attr('src', './img/pic1.jpg')
    }).mouseleave(function () {
        $('img.product__big-pic').attr('src', './img/default.jpg')
    })

    $('img.product__mini-pic2').mouseenter(function () {
        $('img.product__big-pic').attr('src', './img/pic2.jpg')
    }).mouseleave(function () {
        $('img.product__big-pic').attr('src', './img/default.jpg')
    })

    $('img.product__mini-pic3').mouseenter(function () {
        $('img.product__big-pic').attr('src', './img/pic3.jpg')
    }).mouseleave(function () {
        $('img.product__big-pic').attr('src', './img/default.jpg')
    })
});