"use strict";

const $ = require("jquery");

window.addEventListener('scroll', function(){
    const header_element = document.getElementsByClassName('header');
    if( 72 < window.scrollY ){
        header_element[0].classList.add("bg");
    }else{
        header_element[0].classList.remove("bg");
    }
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