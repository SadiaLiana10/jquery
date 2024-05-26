$(function(){
    let add = $('.add');
    let remove = $('.remove');
    let toggle = $('.toggle');
    let slide = $('.slide');
    let box = $('.box');
   

    add.on('click', function(){
        // box.show();
         box.fadeIn();
     
    });

    remove.on('click', function(){
        // box.hide();
        box.fadeOut(300);
    });

    toggle.on('click', function(){
        // box.toggle();
        box.fadeToggle();
    });
    slide.on('click', function(){
        // box.slideDown();
        // box.slideUp();
        box.slideToggle();
    })
    // animate.on('click', function(){
    //     // box.slideDown();
    //     // box.slideUp();
    //     box.animate({
    //         "height" : '200px',
    //         "width" : '200px',
    //         "margin-left" : '200px',
    //         "opacity": '0.5',
    //     }, 1000,function(){

    //     });
    // })

})
