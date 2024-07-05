/**********************************************************************
***********************************************************************
### PerfectScrollbar
*********************************************************************
*********************************************************************/
// mail-menu-scroll
new PerfectScrollbar('.mail-menu-scroll', {
	suppressScrollX: true
});
// mailbox-mail-list
new PerfectScrollbar('.mailbox-mail-list', {
	suppressScrollX: true
});

// mailbox-details-body
new PerfectScrollbar('.mailbox-details-body', {
	suppressScrollX: true
});

// Mail Compose Sidebar
new PerfectScrollbar('#mailComposeSidebar', {
	suppressScrollX: true
});

/**********************************************************************
***********************************************************************
### Collapsed Sidebar
*********************************************************************
*********************************************************************/
$(document).ready(function () {
	"use strict";

	// Collapsed Sidebar (min-width:1199px)
	var mqlCollapsed = window.matchMedia('(min-width:1199px)');


	function doMinimize(e) {
		if (e.matches) {
			$('.mailbox').addClass('page-sidebar-collapsed');
		} else {
			$('.mailbox').removeClass('page-sidebar-collapsed');
		}

	}

	mqlCollapsed.addListener(doMinimize);
	doMinimize(mqlCollapsed);


})
/**********************************************************************
***********************************************************************
### Simple Sidebar Toggle
*********************************************************************
*********************************************************************/
var $mainSidebar = $("#mailComposeSidebar");

$mainSidebar.simplerSidebar({
	attr: "sidebar-main",
	init: "closed",
	selectors: {
		trigger: "#mailComposeSidebarTrigger",
		quitter: ".quitter"
	},
	animation: {
		easing: "easeOutQuint"
	},
	sidebar: {
		width: 420
	},
	mask: {
		display: true
	}

});

/**********************************************************************
***********************************************************************
### Selectize Active JS
*********************************************************************
*********************************************************************/
// <select id="select-to"></select>
var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
	'(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

var formatName = function (item) {
	return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
};

$('#selectTo, #selectCC, #selectBCC').selectize({
	persist: false,
	maxItems: null,
	valueField: 'email',
	labelField: 'name',
	searchField: ['first_name', 'last_name', 'email'],
	sortField: [{
			field: 'first_name',
			direction: 'asc'
		},
		{
			field: 'last_name',
			direction: 'asc'
		}
	],
	options: [{
			email: 'nikola@tesla.com',
			first_name: 'Nikola',
			last_name: 'Tesla'
		},
		{
			email: 'brian@thirdroute.com',
			first_name: 'Brian',
			last_name: 'Reavis'
		},
		{
			email: 'someone@gmail.com',
			first_name: 'Ruhul',
			last_name: 'Hasan'
		},
		{
			email: 'hannah_hariston@gmail.com',
			first_name: 'Hannah',
			last_name: 'Hariston'
		},
		{
			email: 'johndeo@gmail.com',
			first_name: 'John',
			last_name: 'Deo'
		},
		{
			email: 'dyanneaceron@tesla.com',
			first_name: 'Dyanne',
			last_name: 'Aceron'
		},
		{
			email: 'aceron@thirdroute.com',
			first_name: 'Anne',
			last_name: 'Aceron'
		},
		{
			email: 'maryadams@gmail.com',
			first_name: 'Mary',
			last_name: 'Adams'
		},
		{
			email: 'richardscaleb@gmail.com',
			first_name: 'Richards',
			last_name: 'Caleb'
		},
		{
			email: 'edwardlane@gmail.com',
			first_name: 'Edward',
			last_name: 'Lane'
		},
	],
	render: {
		item: function (item, escape) {
			var name = formatName(item);
			return '<div>' +
				(name ? '<span class="name">' + escape(name) + '</span>' : '') +
				(item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
				'</div>';
		},
		option: function (item, escape) {
			var name = formatName(item);
			var label = name || item.email;
			var caption = name ? item.email : null;
			return '<div>' +
				'<span class="label">' + escape(label) + '</span>' +
				(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
		}
	},
	createFilter: function (input) {
		var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
		var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
		return regexpA.test(input) || regexpB.test(input);
	},
	create: function (input) {
		if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
			return {
				email: input
			};
		}
		var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
		if (match) {
			var name = $.trim(match[1]);
			var pos_space = name.indexOf(' ');
			var first_name = name.substring(0, pos_space);
			var last_name = name.substring(pos_space + 1);

			return {
				email: match[2],
				first_name: first_name,
				last_name: last_name
			};
		}
		alert('Invalid email address.');
		return false;
	}
});

/**********************************************************************
***********************************************************************
### Popover JS
*********************************************************************
*********************************************************************/
$('body').on('click', function (e) {
	//did not click a popover toggle or popover
	if ($(e.target).data('toggle') !== 'popover' &&
		$(e.target).parents('.popover.in').length === 0) {
		$('[data-toggle="popover"]').popover('hide');
	}
});