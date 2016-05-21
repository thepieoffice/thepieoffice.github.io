$('#email-text').hide();
$('.video-link').hide();
$('#video').hide();
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('#banner-pic').mouseenter(function(){
	$(this).animateCss('shake');
});

$('#banner-pic').click(function(){
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$(this).addClass('animated hinge').one(animationEnd, function() {
        $(this).removeClass('animated hinge');
        $(this).hide();
        $('#email-text').show();
        $('#email-text').animateCss('flipInX');
        $('.video-link').show();
        $('.video-link').animateCss('flipInX');
    });
});

$('.video-link').click(function() {
	
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('#landing-page').addClass('animated slideOutUp').one(animationEnd, function() {
        $('#landing-page').removeClass('animated slideOutUp');
        $('#landing-page').hide();
        $('#video').show().animateCss('slideInUp');
        // $('#video').show();
    });
});