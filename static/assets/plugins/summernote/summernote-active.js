// Air-mode Example 
$('#airmode').summernote({
	height: 300,
	airMode: true
});


// Multiple Editor
$('.multiple').summernote();


// Click to Edit
var edit = function () {
	$('#click2edit').summernote({
		focus: true
	});
};

var save = function () {
	var markup = $('#click2edit').summernote('code');
	$('#click2edit').summernote('destroy');
};


// Codemirror as Codeview
$('#codemirror').summernote({
	height: 150,
	codemirror: { // codemirror options
		mode: 'text/html',
		htmlMode: true,
		lineNumbers: true,
		theme: 'monokai'
	}
});