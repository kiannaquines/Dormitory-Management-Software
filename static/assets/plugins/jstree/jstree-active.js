$(function () {
	'use strict';


	 // Default Tree				
	 $('#jstree-default').jstree({
		'core' : {
			'check_callback' : true
		}
	 });
	 
	 // Checkbox Tree				
	 $('#jstree-checkbox').jstree({
		'core' : {
			'check_callback' : true
		},
		'plugins' : [ 'checkbox']
	 });
	 
	 // Font Awesome Tree				
	 $('#jstree-font-awesome').jstree({
		'core' : {
			'check_callback' : true
		},
		'plugins' : [ 'types' ],
		'types' : {
			'default' : {
				'icon' : 'fa fa-folder-o'
			},
			'html' : {
				'icon' : 'fa fa-file-text-o'
			},
			'file' : {
				'icon' : 'fa fa-file-text-o'
			},
			'jpg' : {
				'icon' : 'fa fa-file-image-o'
			},
			'zip' : {
				'icon' : 'fa fa-file-zip-o'
			}
		}
	 });
		
	 // MDI Icon Tree		
	 $('#jstree-mdi-icon').jstree({
		'core' : {
			'check_callback' : true
		},
		'plugins' : [ 'types' ],
		'types' : {
			'default' : {
				'icon' : 'mdi mdi-folder'
			},
			'html' : {
				'icon' : 'mdi mdi-file-document'
			},
			'file' : {
				'icon' : 'mdi mdi-file-document'
			},
			'jpg' : {
				'icon' : 'mdi mdi-file-document'
			},
			'zip' : {
				'icon' : 'mdi mdi-zip-box'
			}
		}
	 });			
	 
	 // Drag & Drop Tree		
	 $('#jstree-drag-drop').jstree({
		'core' : {
			'check_callback' : true
		},
		'plugins' : ['types', 'dnd' ],				
	 'types' : {
			'default' : {
				'icon' : 'mdi mdi-folder'
			},
			'html' : {
				'icon' : 'mdi mdi-file-document'
			},
			'file' : {
				'icon' : 'mdi mdi-file-document'
			},
			'jpg' : {
				'icon' : 'mdi mdi-file-document'
			},
			'zip' : {
				'icon' : 'mdi mdi-zip-box'
			}
		}
	 });			
		
	 // Sorting Tree				
	 $('#jstree-sort').jstree({
		'core' : {
			'check_callback' : true
		},
		'plugins' : [ 'types', 'sort' ],
		'types' : {
			'default' : {
				'icon' : 'fa fa-folder'
			},
			'html' : {
				'icon' : 'fa fa-file-text'
			},
			'file' : {
				'icon' : 'fa fa-file-text'
			},
			'jpg' : {
				'icon' : 'fa fa-file-image'
			},
			'zip' : {
				'icon' : 'fa fa-file-zip'
			}
		}
	 });
 
 
});