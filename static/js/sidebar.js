const toggle = document.getElementById('header-toggle'),
nav = document.getElementById('nav-bar'),
bodypd = document.getElementById('body-pd'),
headerpd = document.getElementById('header')


document.addEventListener("DOMContentLoaded", function(event) {



    
    const showNavbar = () =>{

    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    nav.classList.toggle('show_sidebar')
    // change icon
    // toggle.classList.toggle('bx-x')
    toggle.classList.toggle('fa-times')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar()
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
    });

    function showSidebar(){
        nav.classList.toggle('show')
        nav.classList.toggle('show_sidebar')
        // change icon
        // toggle.classList.toggle('bx-x')
        toggle.classList.toggle('fa-times')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
    }