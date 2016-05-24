var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

// Create custom jquery methods for animations and page transitions
$.fn.extend({
    animateCss: function (animationName) {  
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    },
    slideScreenRight: function (newScreen) {
        $(this).addClass('animated slideOutLeft').one(animationEnd, function() {
            $(this).removeClass('animated slideOutLeft').hide();
        });
        $(newScreen).show().animateCss('slideInRight');
    },
    slideScreenLeft: function (newScreen) {
        $(this).addClass('animated slideOutRight').one(animationEnd, function() {
            $(this).removeClass('animated slideOutRight').hide();
        });
        $(newScreen).show().animateCss('slideInLeft');
    },
    slideScreenUp: function (newScreen) {
        $(this).addClass('animated slideOutUp').one(animationEnd, function() {
            $(this).removeClass('animated slideOutUp').hide();
        });
        $(newScreen).show().animateCss('slideInUp');
    },
    slideScreenDown: function (newScreen) {
        $(this).addClass('animated slideOutDown').one(animationEnd, function() {
            $(this).removeClass('animated slideOutDown').hide();
        });
        $(newScreen).show().animateCss('slideInDown');
    }
});


// LANDING PAGE BANNER PIC EVENT HANDLERS
$('#banner-pic').mouseenter(function(){
	$(this).animateCss('shake');
});
$('#banner-pic').click(function(){
	$(this).addClass('animated hinge').one(animationEnd, function() {
        $(this).removeClass('animated hinge');
        $(this).hide();
        $('#landing-page-caption').show().addClass('animated flipInX').one(animationEnd, function() {
            $(this).removeClass('animated flipInX');
            $('.video-link').show().animateCss('animated flipInX');
            $('.to-contact-page').show().animateCss('animated flipInX');
        });
        
    });
});


// PAGE REDIRECTIONS
$('.to-contact-page').click(function() {
    $('#landing-page').slideScreenRight('.contact-page');
});
$('.back-from-contact').click(function(){
    $('.contact-page').slideScreenLeft('#landing-page');
});
$('.video-link').click(function() {
    $('#landing-page').slideScreenUp('.video-container-1');
});
$('.to-landing-page').click(function(){
    $('.video-container-1').slideScreenDown('#landing-page');
});
$('.to-video-2').click(function() {
    $('.video-container-1').slideScreenUp('.video-container-2');
});
$('.to-video-1').click(function(){
    $('.video-container-2').slideScreenDown('.video-container-1');
});
$('.to-contact-page-from-vids').click(function() {
    $('.video-container-2').slideScreenRight('.contact-page');
});