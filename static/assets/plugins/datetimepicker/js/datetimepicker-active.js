$(function () {
	'use strict';
	
	// Date Picker
	$('#date').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
	
	
	// Time Picker
	$('#time').bootstrapMaterialDatePicker({ date: false });
	
	
	// Date Time Picker
	$('#date-format').bootstrapMaterialDatePicker({ format : 'dddd DD MMMM YYYY - HH:mm' });
	
	
	// French Locales
	$('#date-fr').bootstrapMaterialDatePicker({ format : 'DD/MM/YYYY HH:mm', lang : 'fr', weekStart : 1, cancelText : 'ANNULER' });
	
	
	// Min Date Set
	$('#min-date').bootstrapMaterialDatePicker({ format : 'DD/MM/YYYY HH:mm', minDate : new Date() });
	
	
	// Events Time
	$('#date-end').bootstrapMaterialDatePicker({ weekStart : 0 });
	$('#date-start').bootstrapMaterialDatePicker({ weekStart : 0 }).on('change', function(e, date)
	{
	$('#date-end').bootstrapMaterialDatePicker('setMinDate', date);
	});
	
})