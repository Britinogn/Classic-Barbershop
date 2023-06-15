var navBar = document.getElementById("navBar");
    function togglebtn(){
        navBar.classList.toggle("hidemenu");
    };


    document.addEventListener('scroll', ()=> {
        var scroll_position = window.scrollY; 
        if(scroll_position > 250) {
            header.style.backgroundColor = '#777'; 
        }
        else{ 
            header.style.backgroundColor = 'transparent'; 
        }
    });


    // hamburger.addEventListener('click', () => {
    //     hamburger.classList.toggle('active'); 
    //     mobile_menu.classList.toggle('active'); 
    // });