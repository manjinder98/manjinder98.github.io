// Swiper Implementation
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
    enabled: true,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

// Get Year Function
(function () {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
})();

// Function for closing the navigation list when the link is clicked
document.addEventListener("DOMContentLoaded",() => {
    const navigationItems = document.querySelectorAll(".navigation__item");
    const navigation = document.querySelector(".navigation__nav");
    const navigationButton = document.querySelector(".navigation__button");

    const selectNavItem = () => {
        if ((navigation.style.opacity = "1")) {
            navigationButton.click();
        }
    };

    navigationItems.forEach(navItem => {
        navItem.addEventListener("click", selectNavItem);
    });
})

// Form Validation
function Validation() {        
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
        alert("Please fill in all the fields");
        return false;
    } else if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) )                 
    { 
        alert("Please enter a valid e-mail address"); 
        return false; 
    }  
    else {
        return true;
    }
}