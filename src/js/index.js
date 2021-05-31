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