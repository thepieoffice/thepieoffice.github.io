$('#email-text').hide();
$('.video-link').hide();
$('.video-container-1').hide();
$('.video-container-2').hide();
$('.to-contact-page').hide();
$('.contact-page').hide();
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$.fn.extend({
    animateCss: function (animationName) {  
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('#banner-pic').mouseenter(function(){
	$(this).animateCss('shake');
});

$('#email-text').mouseenter(function(){
    $(this).animateCss('bounce');
});

$('#banner-pic').click(function(){
	$(this).addClass('animated hinge').one(animationEnd, function() {
        $(this).removeClass('animated hinge');
        $(this).hide();
        $('#email-text').show().addClass('animated flipInX').one(animationEnd, function() {
            $(this).removeClass('animated flipInX');
            $('.video-link').show().animateCss('animated flipInX');
            $('.to-contact-page').show().animateCss('animated flipInX');
        });
        
    });
});

$('.to-contact-page').click(function() {
    $('#landing-page').addClass('animated slideOutLeft').one(animationEnd, function() {
        $('#landing-page').removeClass('animated slideOutLeft').hide();
    });
    $('.contact-page').show().animateCss('slideInRight');
});

$('.back-from-contact').click(function(){
    $('.contact-page').addClass('animated slideOutRight').one(animationEnd, function() {
        $('.contact-page').removeClass('animated slideOutRight').hide();       
    });
    $('#landing-page').show().animateCss('slideInLeft');
});

$('.video-link').click(function() {
    $('#landing-page').addClass('animated slideOutUp').one(animationEnd, function() {
        $('#landing-page').removeClass('animated slideOutUp').hide();
    });
    $('.video-container-1').show().animateCss('slideInUp');
});

$('.to-landing-page').click(function(){
    $('.video-container-1').addClass('animated slideOutDown').one(animationEnd, function() {
        $('.video-container-1').removeClass('animated slideOutDown').hide();
    });
    $('#landing-page').show().animateCss('slideInDown');
});

$('.to-video-2').click(function() {
    $('.video-container-1').addClass('animated slideOutUp').one(animationEnd, function() {
        $('.video-container-1').removeClass('animated slideOutUp').hide();
    });
    $('.video-container-2').show().animateCss('slideInUp');
});

$('.to-video-1').click(function(){
    $('.video-container-2').addClass('animated slideOutDown').one(animationEnd, function() {
        $('.video-container-2').removeClass('animated slideOutDown').hide();
    });
    $('.video-container-1').show().animateCss('slideInDown');
});