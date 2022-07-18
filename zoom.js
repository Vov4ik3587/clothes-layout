$(document).ready(function() {
    
    const defaultSrc = './img/default.jpg';
    const mainPic = $('img.product__big-pic');

    $('.product__mini-pic').mouseenter(function() {
        const currentSrc = $(this).attr('src');
        mainPic.attr('src', currentSrc);
    }).mouseleave(function () {
        mainPic.attr('src', defaultSrc);
    });

    // $('img.product__mini-pic1').mouseenter(function () {
    //     mainPic.attr('src', './img/pic1.jpg')
    // }).mouseleave(function () {
    //     mainPic.attr('src', defaultSrc)
    // })

    // $('img.product__mini-pic2').mouseenter(function () {
    //     mainPic.attr('src', './img/pic2.jpg')
    // }).mouseleave(function () {
    //     mainPic.attr('src', defaultSrc)
    // })

    // $('img.product__mini-pic3').mouseenter(function () {
    //     mainPic.attr('src', './img/pic3.jpg')
    // }).mouseleave(function () {
    //     mainPic.attr('src', defaultSrc)
    // })
});