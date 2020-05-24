// JavaScript Document


// product slider

$('.main_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
      animateOut: '',
    animateIn: '',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.building_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
      animateOut: '',
    animateIn: '',
    navText: ["<img src='img/left_arrow.jpg'>","<img src='img/right_arrow.jpg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.slider_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
      animateOut: '',
    animateIn: '',
    navText: ["<img src='img/left_arrow.jpg'>","<img src='img/right_arrow.jpg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.client_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
      animateOut: '',
    animateIn: '',
    navText: ["<img src='img/left_arrow.jpg'>","<img src='img/right_arrow.jpg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

