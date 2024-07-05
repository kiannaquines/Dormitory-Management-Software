$(function () {
	'use strict';


	// 	Basic Smart Wizard
	$("#smartwizardBasic").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
		if (stepPosition === 'first') {
			$("#prev-btn waves-effect").addClass('disabled');
		} else if (stepPosition === 'final') {
			$("#next-btn waves-effect").addClass('disabled');
		} else {
			$("#prev-btn waves-effect").removeClass('disabled');
			$("#next-btn waves-effect").removeClass('disabled');
		}
	});

	var btnFinish = $('<button></button>').text('Finish')
		.addClass('btn btn-success waves-effect')
		.on('click', function () {
			alert('Finish Clicked');
		});
	var btnCancel = $('<button></button>').text('Reset Wizard')
		.addClass('btn btn-danger waves-effect')
		.on('click', function () {
			$('#smartwizardBasic').smartWizard("reset");
		});


	$('#smartwizardBasic').smartWizard({
		selected: 0,
		theme: 'default',
		transitionEffect: 'fade',
		showStepURLhash: true,
		toolbarSettings: {
			toolbarPosition: 'both',
			toolbarButtonPosition: 'end',
			toolbarExtraButtons: [btnFinish, btnCancel]
		}
	});


	$("#theme_selector").on("change", function () {
		$('#smartwizardBasic').smartWizard("theme", $(this).val());
		return true;
	});

	$("#theme_selector").change();
	

	// Input Smart Wizard
	var btnFinish = $('<button></button>').text('Finish')
		.addClass('btn btn-success waves-effect')
		.on('click', function () {
			if (!$(this).hasClass('disabled')) {
				var elmForm = $("#myForm");
				if (elmForm) {
					elmForm.validator('validate');
					var elmErr = elmForm.find('.has-error');
					if (elmErr && elmErr.length > 0) {
						alert('Oops we still have error in the form');
						return false;
					} else {
						alert('Great! we are ready to submit form');
						elmForm.submit();
						return false;
					}
				}
			}
		});
	var btnCancel = $('<button></button>').text('Reset Wizard')
		.addClass('btn btn-danger waves-effect')
		.on('click', function () {
			$('#smartwizardInput').smartWizard("reset");
			$('#myForm').find("input, textarea").val("");
		});


	$('#smartwizardInput').smartWizard({
		selected: 0,
		theme: 'dots',
		transitionEffect: 'fade',
		toolbarSettings: {
			toolbarPosition: 'bottom',
			toolbarExtraButtons: [btnFinish, btnCancel]
		},
		anchorSettings: {
			markDoneStep: true, // add done css
			markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
			removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
			enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
		}
	});

	$("#smartwizardInput").on("leaveStep", function (e, anchorObject, stepNumber, stepDirection) {
		var elmForm = $("#form-step-" + stepNumber);
		if (stepDirection === 'forward' && elmForm) {
			elmForm.validator('validate');
			var elmErr = elmForm.children('.has-error');
			if (elmErr && elmErr.length > 0) {
				return false;
			}
		}
		return true;
	});

	$("#smartwizardInput").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
		if (stepNumber == 3) {
			$('.btn-finish waves-effect').removeClass('disabled');
		} else {
			$('.btn-finish waves-effect').addClass('disabled');
		}
	});


	// Modal Smart Wizard
	$("#smartwizardModal").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
		if (stepPosition === 'first') {
			$("#prev-btn waves-effect").addClass('disabled');
		} else if (stepPosition === 'final') {
			$("#next-btn waves-effect").addClass('disabled');
		} else {
			$("#prev-btn waves-effect").removeClass('disabled');
			$("#next-btn waves-effect").removeClass('disabled');
		}
	});

	var btnFinish = $('<button></button>').text('Finish')
		.addClass('btn btn-success waves-effect')
		.on('click', function () {
			alert('Finish Clicked');
		});
	var btnCancel = $('<button></button>').text('Reset Wizard')
		.addClass('btn btn-danger waves-effect')
		.on('click', function () {
			$('#smartwizardModal').smartWizard("reset");
		});

	$('#smartwizardModal').smartWizard({
		selected: 0,
		theme: 'arrows',
		transitionEffect: 'fade',
		showStepURLhash: false,
		toolbarSettings: {
			toolbarPosition: 'both',
			toolbarExtraButtons: [btnFinish, btnCancel]
		}
	});


});