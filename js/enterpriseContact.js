$(document).ready(function() {

	$( "#enterpriseCapture" ).submit(function( e ) {

		//1. show spinner
			$(".loader").toggleClass('invisible');

			$("#enterpriseCapture").prop('disabled', true);

			ga('send', 'event', {
				'eventCategory': 'Enterprise Contact Request',
				'eventAction': 'Sent Request'
			});
		//2. submit to server to create account name
		$.ajax({
			url : '/enterprise/request',
			type: "POST",
			data : {
				_csrf : $("input[name='_csrf']").val(),
				firstName :$("input[name='firstName']").val(),
				lastName :$("input[name='lastName']").val(),
				email :$("input[name='emailfull']").val(),
				title :$("input[name='title']").val(),
				phone :$("input[name='phone']").val(),
				company :$("input[name='company']").val(),
				industry :$("input[name='industry']").val(),
				employees :$("input[name='employees']").val(),
				extra1 :$("textarea[name='extra1']").val(),
				extra2 :$("textarea[name='extra2']").val()
			},
			success:function(){
				console.log('Success!');
				$("#enterpriseCapture").prop('disabled', false);
			}
		}).done(function(d){
				$('#enterpriseFormShown').fadeOut(400);
				$('#enterpriseFormConfirmed').fadeIn(400);
				$('.contactUsText').fadeOut(400);

				console.log( "second success" );
				console.log(d);
				$("#enterpriseCapture").prop('disabled', false);


				if(d.error){
					$('#enterpriseErrorMessage').html(d.error);
					$(".loader").toggleClass('invisible');
				} else {
					//- window.location.href = '/console';
					$('#emailCapture').fadeOut(400, function () {
						$('#waitlistConfirmation').fadeIn();

					});

					ga('send', 'event', {
						'eventCategory': 'Enterprise Contact Request',
						'eventAction': 'Submitted'
					});

				}

		});

		e.preventDefault();
	});
});
