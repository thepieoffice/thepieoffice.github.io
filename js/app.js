$('#email-text').hide();
$('.video-link').hide();
$('.video-container-1').hide();
$('.video-container-2').hide();
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

$('#banner-pic').click(function(){
	$(this).addClass('animated hinge').one(animationEnd, function() {
        $(this).removeClass('animated hinge');
        $(this).hide();
        $('#email-text').show().animateCss('flipInX');
        $('.video-link').show().animateCss('flipInX');
    });
});

$('.video-link').click(function() {
    $('#landing-page').addClass('animated slideOutUp').one(animationEnd, function() {
        $('#landing-page').removeClass('animated slideOutUp');
        $('#landing-page').hide();
    });
    $('.video-container-1').show().animateCss('slideInUp');
});

$('.to-landing-page').click(function(){
    $('.video-container-1').addClass('animated slideOutDown').one(animationEnd, function() {
        $('.video-container-1').removeClass('animated slideOutDown');
        $('.video-container-1').hide();
    });
    $('#landing-page').show().animateCss('slideInDown');
});

$('.to-video-2').click(function() {
    $('.video-container-1').addClass('animated slideOutUp').one(animationEnd, function() {
        $('.video-container-1').removeClass('animated slideOutUp');
        $('.video-container-1').hide();
    });
    $('.video-container-2').show().animateCss('slideInUp');
});

$('.to-contact-page').click(function(){
    $('.video-container-2').addClass('animated slideOutDown').one(animationEnd, function() {
        $('.video-container-2').removeClass('animated slideOutDown');
        $('.video-container-2').hide();
    });
    $('.video-container-1').show().animateCss('slideInDown');
});