$(document).ready(function() {
	$('.faq__tabs-triggers-item').click(function(e){
		e.preventDefault();
		$('.faq__tabs-triggers-item').removeClass('active');
		$('.faq__item').removeClass('active');
		$(this).addClass('active');
		$($(this).attr('href')).addClass('active')
	});
});