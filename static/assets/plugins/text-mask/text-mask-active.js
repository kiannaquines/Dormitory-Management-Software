$(function() {
	  
	// Phone
	vanillaTextMask.maskInput({
	  inputElement: $('#text-mask-phone')[0],
	  mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
	});

	// Number
	vanillaTextMask.maskInput({
	  inputElement: $('#text-mask-number')[0],
	  mask: textMaskAddons.createNumberMask({
		prefix: '$'
	  })
	});

	// Email
	vanillaTextMask.maskInput({
	  inputElement: $('#text-mask-email')[0],
	  mask: textMaskAddons.emailMask
	});

	// Date
	vanillaTextMask.maskInput({
	  inputElement: $('#text-mask-date')[0],
	  mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
	  pipe: textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy')
	});
	
	
});