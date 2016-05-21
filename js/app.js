$('#email-text').hide();
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
        });

});

