"use strict";

const $ = require("jquery");
const slick = require("slick-carousel");

$(function(){
    $('#slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        arrows: false,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 740,
            settings: {
              slidesToShow: 3,
              swipe: true
            }
        }]
    });
    $('#submitBtn').on('click',function(){
        alert('フォームは実装できていません(•௰•; )');
    });
});

window.onload = function() {
    const navBtn = document.getElementById('navTrigger');
    const navigation = document.getElementById('navigation');
    const navItem = document.querySelectorAll('.nav-btn');

    navBtn.addEventListener("click", function() {
        if(navBtn.classList.contains('active')){
            navClose()
        }else{
            navOpen();
        }
    });
    navItem.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            navClose();
        });
    });
    function navOpen() {
        navBtn.classList.add('active');
        navigation.classList.add('active');
    }
    function navClose() {
        navBtn.classList.remove('active');
        navigation.classList.remove('active');
    }
 }