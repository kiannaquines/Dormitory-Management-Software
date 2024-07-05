$(function () {
	'use strict';

	// Basic Message
	$('#basicMessage').click(function () {
		Swal.fire('Any fool can use a computer')
	});

	// Title Text
	$('#titleText').click(function () {
		Swal.fire(
			'The Internet?',
			'That thing is still around?',
			'question'
		)
	});
	
	// Error Type
	$('#errorType').click(function () {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href>Why do I have this issue?</a>'
		})
	});

	// Custom Html
	$('#customHtml').click(function () {
		Swal.fire({
			title: '<strong>HTML <u>example</u></strong>',
			icon: 'info',
			html: 'You can use <b>bold text</b>, ' +
				'<a href="//sweetalert2.github.io">links</a> ' +
				'and other HTML tags',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
			confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
			confirmButtonAriaLabel: 'Thumbs up, great!',
			cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
			cancelButtonAriaLabel: 'Thumbs down'
		})
	});

	// Custom Position
	$('#customPosition').click(function () {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500
		})
	});

	// Custom Animation
	$('#customAnimation').click(function () {
		Swal.fire({
			title: 'Custom animation with Animate.css',
			showClass: {
				popup: 'animated fadeInDown'
			},
			hideClass: {
				popup: 'animated fadeOutUp'
			}
		})
	});

	// Warning Confirm
	$('#warningConfirm').click(function () {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.value) {
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				)
			}
		})
	});

	// Handle Dismiss 
	$('#handleDismiss').click(function () {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success waves-effect',
				cancelButton: 'btn btn-danger waves-effect mr-2'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
		}).then((result) => {
			if (result.value) {
				swalWithBootstrapButtons.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				)
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				swalWithBootstrapButtons.fire(
					'Cancelled',
					'Your imaginary file is safe :)',
					'error'
				)
			}
		})
	});

	// Custom Image
	$('#customImage').click(function () {
		Swal.fire({
			title: 'Sweet!',
			text: 'Modal with a custom image.',
			imageUrl: 'https://unsplash.it/400/200',
			imageWidth: 600,
			imageHeight: 250,
			imageAlt: 'Custom image',
		})
	});

	// Custom Width
	$('#customWidth').click(function () {
		Swal.fire({
			title: 'Custom width, padding, background.',
			width: 600,
			padding: '3em',
			background: '#fff url(../../assets/images/bg/bg-light.png)',
			backdrop: `
    rgba(0,0,123,0.4)
    url("../../assets/images/gif/nyan-cat.gif")
    left top
    no-repeat
  `
		})
	});

	// Timer Example
	$('#timer').click(function () {
		let timerInterval
		Swal.fire({
			title: 'Auto close alert!',
			html: 'I will close in <b></b> milliseconds.',
			timer: 2000,
			timerProgressBar: true,
			onBeforeOpen: () => {
				Swal.showLoading()
				timerInterval = setInterval(() => {
					const content = Swal.getContent()
					if (content) {
						const b = content.querySelector('b')
						if (b) {
							b.textContent = Swal.getTimerLeft()
						}
					}
				}, 100)
			},
			onClose: () => {
				clearInterval(timerInterval)
			}
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer')
			}
		})
	});

	// Ajax Request
	$('#ajaxRequest').click(function () {
		Swal.fire({
			title: 'Submit your Github username',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Look up',
			showLoaderOnConfirm: true,
			preConfirm: (login) => {
				return fetch(`http://api.github.com/users/${login}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText)
						}
						return response.json()
					})
					.catch(error => {
						Swal.showValidationMessage(
							`Request failed: ${error}`
						)
					})
			},
			allowOutsideClick: () => !Swal.isLoading()
		}).then((result) => {
			if (result.value) {
				Swal.fire({
					title: `${result.value.login}'s avatar`,
					imageUrl: result.value.avatar_url
				})
			}
		})
	});

	// Chaining Modals
	$('#chainingModals').click(function () {
		Swal.mixin({
			input: 'text',
			confirmButtonText: 'Next &rarr;',
			showCancelButton: true,
			progressSteps: ['1', '2', '3']
		}).queue([{
				title: 'Question 1',
				text: 'Chaining swal2 modals is easy'
			},
			'Question 2',
			'Question 3'
		]).then((result) => {
			if (result.value) {
				const answers = JSON.stringify(result.value)
				Swal.fire({
					title: 'All done!',
					html: `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
					confirmButtonText: 'Lovely!'
				})
			}
		})
	});

	// Dynamic Queue	
	$('#dynamicQueue').click(function () {
		const ipAPI = 'http://api.ipify.org?format=json'

		Swal.queue([{
			title: 'Your public IP',
			confirmButtonText: 'Show my public IP',
			text: 'Your public IP will be received ' +
				'via AJAX request',
			showLoaderOnConfirm: true,
			preConfirm: () => {
				return fetch(ipAPI)
					.then(response => response.json())
					.then(data => Swal.insertQueueStep(data.ip))
					.catch(() => {
						Swal.insertQueueStep({
							icon: 'error',
							title: 'Unable to get your public IP'
						})
					})
			}
		}])
	});

	// Mixin Example	
	$('#mixin').click(function () {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			onOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		})

		Toast.fire({
			icon: 'success',
			title: 'Signed in successfully'
		})
	});


});