// ///////////////////// Theme Color ////////////////////////////////// //
const themeButton = document.querySelector(".theme_btn");
const darkTheme = "dark-theme";
const iconTheme = 'ri-sun-line';
const themePreferenceKey = "themePreference";

const setThemePreference = (theme) => {
    localStorage.setItem(themePreferenceKey, theme);
};

const getThemePreference = () => {
    return localStorage.getItem(themePreferenceKey);
};

themeButton.addEventListener("click",()=>{
    if(document.body.classList.contains(darkTheme)){
        document.body.classList.remove(darkTheme);
        themeButton.classList.remove(iconTheme)
        setThemePreference("light");
    }else{
        document.body.classList.add(darkTheme);
        themeButton.classList.add(iconTheme);
        setThemePreference("dark");
    }
})

// ///////////////////// Show Search /////////////////////////////////////// //
const searchBtn = document.querySelector(".search_btn");
const searchContainer = document.querySelector(".search");
const closeBtn = document.querySelector(".search_close");

searchBtn.addEventListener("click",()=>{
    searchContainer.classList.add("show_search");
} )

closeBtn.addEventListener("click",()=>{
    searchContainer.classList.remove("show_search")
} )

// ///////////////////// Show Login Form ////////////////////////////////// //
const loginBtn = document.querySelector(".login_btn");
const loginContainer = document.querySelector(".login");
const loginClose = document.querySelector(".login_close");

loginBtn.addEventListener("click",()=>{
    loginContainer.classList.add("show_search");
} )

loginClose.addEventListener("click",()=>{
    loginContainer.classList.remove("show_search")
} )

// ///////////////////// Show Scroll Button ////////////////////////////////// //
const scrollBtn = document.querySelector(".scroll_up");

window.addEventListener("scroll",()=>{
    this.scrollY >= 250 ?
        scrollBtn.classList.add("show_scroll")
    :
        scrollBtn.classList.remove("show_scroll")
} )

// ///////////////////// Nav Shadow ////////////////////////////////// //
const nav = document.querySelector(".header");

window.addEventListener("scroll", () => {
    this.scrollY >= 50 ?
        nav.classList.add("nav_shadow")
    :
        nav.classList.remove("nav_shadow")
})

// ///////////////////// Swipper Form ////////////////////////////////// //
let swiper = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween:-6,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor:true,

    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints:{
        1024:{
            spaceBetween:-20,
        }
    }
});


// ///////////////////// Swipper featured ////////////////////////////////// //
let swiperfeatured = new Swiper('.featured_swiper', {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor:true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints:{
        1150:{
            spaceBetween: 5,
            slidesPerView: 4,
            centeredSlides:false,
        }
    }
});


// ///////////////////// Swipper New Book ////////////////////////////////// //
let swiperNewBook = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween:6,
    slidesPerView: 'auto',
    
    breakpoints:{
        1150:{
            slidesPerView: 3,
        }
    }
});

// ///////////////////// Swipper Testimonail ////////////////////////////////// //
let swiperTestimonail = new Swiper('.testimonial_swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor:true,

    
    breakpoints:{
        1024:{
            slidesPerView: 4,
            centeredSlides:false,
        }
    }
});


// ///////////////////// Scroll reavel Animation ////////////////////////////////// //
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home_content, .festured_container, .new_book_container, .join_data, testimonial_card, .footer `);
sr.reveal(`.home_images`,{delay: 600});
sr.reveal(`.services_card`, {interval: 100});
sr.reveal(`.discount_data`, {origin:"left"});
sr.reveal(`.discount_images`, {origin:"right"});
