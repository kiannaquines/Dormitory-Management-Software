$(document).ready(function () {
    
	// Default Example                         
	$('input#defaultconfig').maxlength();
	
	// Threshold Value
	$('input#thresholdconfig').maxlength({
		alwaysShow: false,
		threshold: 15
	});
	
	//Few Options 
	$('input#moreoptions').maxlength({
		alwaysShow: true,
		warningClass: "badge badge-success",
		limitReachedClass: "badge badge-danger"
	});
	
	// All Options
	$('input#alloptions').maxlength({
		alwaysShow: true,
		warningClass: "badge badge-success",
		limitReachedClass: "badge badge-danger",
		separator: ' out of ',
		preText: 'You typed ',
		postText: ' chars available.',
		validate: true,
	});
	
	// Textarea Example
	$('textarea#textarea').maxlength({
		alwaysShow: true,
		warningClass: "badge badge-success",
		limitReachedClass: "badge badge-danger"
	});
	
	// Position Example
	$('input#placement') .maxlength({
		alwaysShow: true,
		placement: 'top-left',
		warningClass: "badge badge-success",
		limitReachedClass: "badge badge-danger"
	});

});