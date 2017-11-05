jQuery(document).ready(function($) {
	$('.tab').on('click', function(event) {
		event.preventDefault();
		$(this).siblings().removeClass('tabactive');
		$(this).addClass('tabactive');
		var tab = $(this).attr('tab');
		$("#" + tab).css({
			display: 'block'
		});
		$("#" + tab).siblings().css({
			display: 'none'
		});
	});

	$('.buy-button').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.tab').removeClass('tabactive');
		$('.tab[tab=tab3]').addClass('tabactive');
		$('#tab3').css({
			display: 'block'
		});
		$('#tab3').siblings().css({
			display: 'none'
		});
	});
});