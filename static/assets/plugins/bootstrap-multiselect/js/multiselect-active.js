$(document).ready(function () {

	// Basic Example
	$('#exampleBasicExample').multiselect({
		templates: {
			li: '<li><div class="checkbox"><label></label></div></li>'
		}
	});

	// Multiple Optgroups 
	$('#exampleMultipleOptgroups').multiselect({
		templates: {
			li: '<li><div class="checkbox"><label></label></div></li>'
		}
	});

	// Clickable Optgroups
	$('#exampleClickableOptgroups').multiselect({
		templates: {
			li: '<li><div class="checkbox"><label></label></div></li>'
		},
		enableClickableOptGroups: true,
		onChange: function (option, checked) {
			alert(option.length + ' options ' + (checked ? 'selected' : 'deselected'));
		}
	});

	// Collapsible Optgroups
	$('#exampleCollapsibleOptGroups').multiselect({
		templates: {
			li: '<li><div class="checkbox"><label></label></div></li>',
			liGroup: '<li><a><div class="checkbox"><label></label></div></a></li>'
		},
		enableClickableOptGroups: true,
		enableCollapsibleOptGroups: true,
	});

	// DropUp Example
	$('#exampleDropUp').multiselect({
		templates: {
			li: '<li><div class="checkbox"><label></label></div></li>'
		},
		enableFiltering: true,
		includeSelectAllOption: true,
		maxHeight: 400,
		dropUp: true
	});

	// Disable Example
	$('#example-disable').multiselect({
		templates: {
			li: '<li><div class="checkbox"><label></label></div></li>'
		}
	});

	$('#example-disable-button').on('click', function () {
		$('#example-disable').multiselect('disable');
	});

	// Modal Example
	$('#example-modal').multiselect({
		templates: {
			li: '<li><div class="checkbox"><label></label></div></li>'
		}
	});

	// For Checkbox
	$('.multiselect-container div.checkbox').each(function (index) {
		var id = 'multiselect-' + index,
			$input = $(this).find('input');
		$(this).find('label').attr('for', id);
		$input.attr('id', id);
		$input.detach();
		$input.prependTo($(this));
		$(this).click(function (e) {
			e.stopPropagation();
		});
	});

	// Single Select
	$('#exampleSingleSelect').multiselect({
		templates: {
			li: '<li><div class="radio"><label></label></div></li>'
		}
	});
	
	// For Radio
	$('.multiselect-container div.radio').each(function (index) {
		var id = 'multiselect-' + index,
			$input = $(this).find('input');
		$(this).find('label').attr('for', id);
		$input.attr('id', id);
		$input.detach();
		$input.prependTo($(this));
		$(this).click(function (e) {
			e.stopPropagation();
		});
	});

});