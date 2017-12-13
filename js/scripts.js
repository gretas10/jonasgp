//scrolling found on CodePen

$(function () {
     $('.arrow').click(function () {
         $('html, body').animate({
             scrollTop: $('section#bio').offset().top
         }, 1000);
         return false;
     });

     $('.arrow').click(function () {
         $('.arrow').hide(900).delay(2000).show(900);

 });


 });




$(function () {
     $('.sticky').click(function () {
         $('html, body').animate({
             scrollTop: $('.welcome').offset().top
         }, 1000);
         return false;
     });

 });




//highlight+scrolling found on CodePen

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#mySidenav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mySidenav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


//animation found on

jQuery(document).ready(function() {
    jQuery('a i').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 100
       });
});



//navigation from w3schools

 function openNav() {
     document.getElementById("mySidenav").style.width = "250px";
     document.getElementById("main").style.marginLeft = "250px";
 }

 function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
 }





