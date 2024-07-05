$(function () {
	$.growl({
	  title: "Growl Example",
	  message: "Growl is a jQuery plugin designed to provide informative messages in the browser.",
	  delayOnHover: false
	});
	$('.error').click(function (event) {
	  event.preventDefault();
	  event.stopPropagation();
	  return $.growl.error({
		message: "Growl is a jQuery plugin designed to provide informative messages in the browser."
	  });
	});
	$('.notice').click(function (event) {
	  event.preventDefault();
	  event.stopPropagation();
	  return $.growl.notice({
		message: "Growl is a jQuery plugin designed to provide informative messages in the browser."
	  });
	});
	return $('.warning').click(function (event) {
	  event.preventDefault();
	  event.stopPropagation();
	  return $.growl.warning({
		message: "Growl is a jQuery plugin designed to provide informative messages in the browser."
	  });
	});
});
