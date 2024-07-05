function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function randomName() {
	var firstName = ['Jack', 'Peter', 'Frank', 'Steven'];
	var surname = ['White', 'Jackson', 'Sinatra', 'Spielberg'];
	return firstName[Math.floor(Math.random() * 4)] + " " + surname[Math.floor(Math.random() * 4)];
}

function newTableRow() {
	var newDate = moment(randomDate(new Date(2000, 0, 1), new Date())).format('D.M.YYYY');
	var value1 = Math.round(Math.random() * Math.random() * 100 * 100) / 100;
	var value2 = Math.round(Math.random() * Math.random() * 100 * 100) / 100;
	var value3 = Math.round(Math.random() * Math.random() * 100 * 100) / 100;
	return "<tr><td>" + randomName() + "</td><td>" + value1 + "</td><td>" + value2 + "</td><td>" + value3 + "</td><td>" + Math.round((value1 + value2 + value3) * 100) / 100 + "</td><td data-dateformat='D-M-YYYY'>" + newDate + "</td></tr>";
}

function customSort() {
	alert("Custom sort.");
}

(function () {
	var $table = $('table');
	$table.append(newTableRow());
	$table.append(newTableRow());

	$('button.add-row').on('click', function () {
		var $this = $(this);
		$table.append(newTableRow());
		if ($this.data('sort')) { $.bootstrapSortable(true); } else { $.bootstrapSortable(false); }
	});

	$('button.change-sort').on('click', function () {
		var $this = $(this);
		if ($this.data('custom')) { $.bootstrapSortable(true, undefined, customSort); } else { $.bootstrapSortable(true, undefined, 'default'); }
	});

	$("input[name=sign]:radio").change(function () {
		$.bootstrapSortable(false, $(this).val());
	});

}());