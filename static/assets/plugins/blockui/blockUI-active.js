$(function () {

// Page Blocking
$('#block-ui-block-page').click(function () {
	$.blockUI({
		message: '<div class="sk-folding-cube sk-primary"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div><h5 style="color: #444">LOADING...</h5>',
		css: {
			backgroundColor: 'transparent',
			border: '0',
			zIndex: 9999999
		},
		overlayCSS: {
			backgroundColor: '#fff',
			opacity: 0.8,
			zIndex: 9999990
		}
	});

	setTimeout(function () {
		$.unblockUI();
	}, 5000);
});


// Element Blocking
$('#block-ui-block-element').click(function () {
	$('#block-ui-element-example').block({
		message: '<div class="sk-wave sk-primary"><div class="sk-rect sk-rect1"></div> <div class="sk-rect sk-rect2"></div> <div class="sk-rect sk-rect3"></div> <div class="sk-rect sk-rect4"></div> <div class="sk-rect sk-rect5"></div></div>',
		css: {
			backgroundColor: 'transparent',
			border: '0'
		},
		overlayCSS: {
			backgroundColor: '#fff',
			opacity: 0.8
		}
	});
});

$('#block-ui-unblock-element').click(function () {
	$('#block-ui-element-example').unblock();
});


//Modal Blocking	
$('#modal-ui-block').click(function () {
	$.blockUI({
		message: $('#question'),
		css: {
			width: '300px'
		}
	});

});

$('#yes').click(function () {
	// update the block message 
	$.blockUI({
		message: "<h3 class='tx-20 tx-dark pd-15 mb-0'>Remote call in progress...</h3>"
	});

	setTimeout(function () {
		$.unblockUI();
	}, 5000);
});

$('#no').click(function () {
	$.unblockUI();
	return false;
});


// Non-Contented Blocking
$('#non-centered-ui-block').click(function () {
	$.blockUI({
		centerY: 0,
		css: {
			top: '10px',
			left: '',
			right: '10px'
		}
	});

	setTimeout($.unblockUI, 2000);
});


})