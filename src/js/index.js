"use strict";

const $ = require("jquery");

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