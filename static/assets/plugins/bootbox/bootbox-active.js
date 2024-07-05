$(function () {
	'use strict';

	// Alert Bootbox
	$('#bootbox-alert').on('click', function () {
		bootbox.alert({
			message: "This is an alert with a callback!",
			callback: function () {
				console.log('This was logged in the callback!');
			}
		})
	});
	
	// Confirm Bootbox
	$('#bootbox-confirm').on('click', function () {
		bootbox.confirm({
			title: "Destroy planet?",
			message: "Do you want to activate the Death-star now? This cannot be undone.",
			buttons: {
				cancel: {
					label: '<i class="fa fa-times"></i> Cancel'
				},
				confirm: {
					label: '<i class="fa fa-check"></i> Confirm'
				}
			},
			callback: function (result) {
				console.log('This was logged in the callback: ' + result);
			}
		});
	});
	
	// Prompt Bootbox
	$('#bootbox-prompt').on('click', function () {
		bootbox.prompt({
			title: "This is a prompt with a multi-select!",
			inputType: 'select',
			multiple: true,
			value: ['1', '3'],
			inputOptions: [{
					text: 'Choose one...',
					value: '',
				},
				{
					text: 'Choice One',
					value: '1',
				},
				{
					text: 'Choice Two',
					value: '2',
				},
				{
					text: 'Choice Three',
					value: '3',
				}
			],
			callback: function (result) {
				console.log(result);
			}
		});
	});
	
	// Custom Bootbox
	$('#bootbox-custom').on('click', function () {
		bootbox.dialog({
			title: 'Custom title',
			message: 'I am a custom dialog',
			className: 'bootbox-lg',

			buttons: {
				success: {
					label: 'Success!',
					className: 'btn-success',

					callback: function () {
						alert('great success');
					},
				},
				danger: {
					label: 'Danger!',
					className: 'btn-danger',

					callback: function () {
						alert('uh oh, look out!');
					},
				},
				main: {
					label: 'Click ME!',
					className: 'btn-primary',

					callback: function () {
						alert('Primary button');
					},
				}
			},
		});
	});

});