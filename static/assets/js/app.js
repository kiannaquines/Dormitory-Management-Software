// Template Core Script
$(document).ready(function () {
	"use strict";

	// Options
	var submenu_animation_speed = 500,
		submenu_opacity_animation = true, // set to "false" to remove opacity animation
		page_boxed = false,
		page_header_fixed = true,
		page_sidebar_fixed = true,
		page_sidebar_collapsed = true;

	// Elements
	var body = $('body'),
		page_header = $('.page-header'),
		page_sidebar = $('.page-sidebar'),
		page_content = $('.page-content');

	// Boxed Page 
	var boxed_page = function () {
		if (page_boxed === true) {
			$('.page-container').addClass('container');
		};
	};


	// Fixed Header
	var fixed_header = function () {
		if (page_header_fixed === true) {
			$('body').addClass('page-header-fixed');
		};
	};


	// Sidebar
	var page_sidebar_init = function () {

		// Slimscroll
		$('.page-sidebar-inner, .calendar-wrapper').slimScroll({
			height: '100%'
		}).mouseover();

		// Fixed Sidebar
		var fixed_sidebar = function () {
			if ((body.hasClass('page-sidebar-fixed')) && (page_sidebar_fixed === false)) {
				page_sidebar_fixed = true;
			};

			if (page_sidebar_fixed === true) {
				body.addClass('page-sidebar-fixed');
				$('#fixed-sidebar-toggle-button').removeClass('icon-radio_button_unchecked');
				$('#fixed-sidebar-toggle-button').addClass('icon-radio_button_checked');
			};

			var fixed_sidebar_toggle = function () {
				body.toggleClass('page-sidebar-fixed');
				if (body.hasClass('page-sidebar-fixed')) {
					page_sidebar_fixed = true;
				} else {
					page_sidebar_fixed = false;
				}
			};

			$('#fixed-sidebar-toggle-button').on('click', function () {
				fixed_sidebar_toggle();
				$(this).toggleClass('icon-radio_button_unchecked');
				$(this).toggleClass('icon-radio_button_checked');
				return false;
			});
		};


		// Collapsed Sidebar
		var collapsed_sidebar = function () {
			if (page_sidebar_collapsed === true) {
				body.addClass('page-sidebar-collapsed');
			};

			var collapsed_sidebar_toggle = function () {
				body.toggleClass('page-sidebar-collapsed');
				if (body.hasClass('page-sidebar-collapsed')) {
					page_sidebar_collapsed = true;
				} else {
					page_sidebar_collapsed = false;
				};
				$('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
					mouseenter: function () {
						$('.page-sidebar').addClass('fixed-sidebar-scroll')
					},
					mouseleave: function () {
						$('.page-sidebar').removeClass('fixed-sidebar-scroll')
					}
				}, 'li');
			};

			$('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
				mouseenter: function () {
					$('.page-sidebar').addClass('fixed-sidebar-scroll')
				},
				mouseleave: function () {
					$('.page-sidebar').removeClass('fixed-sidebar-scroll')
				}
			}, 'li');

			$('#collapsed-sidebar-toggle-button').on('click', function () {
				collapsed_sidebar_toggle();
				return false;
			});

			$('#collapsed_sidebar_setting').on('click', function () {
				collapsed_sidebar_toggle();
				return true;
			});

			$('#box_style_setting').on('click', function () {
				collapsed_sidebar_toggle();
				return true;
			});

		};


		// Small Screen Sidebar
		var small_screen_sidebar = function () {
			if (($(window).width() < 768) && ($('#fixed-sidebar-toggle-button').hasClass('icon-radio_button_unchecked'))) {
				$('#fixed-sidebar-toggle-button').click();
			}
			$(window).on('resize', function () {
				if (($(window).width() < 768) && ($('#fixed-sidebar-toggle-button').hasClass('icon-radio_button_unchecked'))) {
					$('#fixed-sidebar-toggle-button').click();
				}
			});
			$('#sidebar-toggle-button').on('click', function () {
				body.toggleClass('page-sidebar-visible');
				return true;
			});
			$('#sidebar-toggle-button-close').on('click', function () {
				body.toggleClass('page-sidebar-visible');
				return true;
			});
		};

		fixed_sidebar();
		collapsed_sidebar();
		small_screen_sidebar();
	};


	// Accordion menu
	var accordion_menu = function () {

		var select_sub_menus = $('.page-sidebar li:not(.open) .sub-menu'),
			active_page_sub_menu_link = $('.page-sidebar li.active-page > a');

		// Hide all sub-menus
		select_sub_menus.hide();


		if (submenu_opacity_animation === false) {
			$('.sub-menu li').each(function (i) {
				$(this).addClass('animation');
			});
		};

		// Accordion
		$('.accordion-menu').on('click', 'a', function () {
			var sub_menu = $(this).next('.sub-menu'),
				parent_list_el = $(this).parent('li'),
				active_list_element = $('.accordion-menu > li.open'),
				show_sub_menu = function () {
					sub_menu.slideDown(submenu_animation_speed);
					parent_list_el.addClass('open');
					if (submenu_opacity_animation === true) {
						$('.open .sub-menu li').each(function (i) {
							var t = $(this);
							setTimeout(function () {
								t.addClass('animation');
							}, (i + 1) * 15);
						});
					};
				},
				hide_sub_menu = function () {
					if (submenu_opacity_animation === true) {
						$('.open .sub-menu li').each(function (i) {
							var t = $(this);
							setTimeout(function () {
								t.removeClass('animation');
							}, (i + 1) * 5);
						});
					};
					sub_menu.slideUp(submenu_animation_speed);
					parent_list_el.removeClass('open');
				},
				hide_active_menu = function () {
					$('.accordion-menu > li.open > .sub-menu').slideUp(submenu_animation_speed);
					active_list_element.removeClass('open');
				};

			if ((sub_menu.length) && (!body.hasClass('page-sidebar-collapsed'))) {

				if (!parent_list_el.hasClass('open')) {
					if (active_list_element.length) {
						hide_active_menu();
					};
					show_sub_menu();
				} else {
					hide_sub_menu();
				};

				return false;

			};
			if ((sub_menu.length) && (body.hasClass('page-sidebar-collapsed'))) {
				return false;
			};
		});

		if ($('.active-page > .sub-menu').length) {
			active_page_sub_menu_link.click();
		};
	};


	boxed_page();
	fixed_header();
	page_sidebar_init();
	accordion_menu();


	// Setting Sidebar
	$(".settingPanelToggle").on("click", function () {
			$(".settingSidebar").toggleClass("showSettingPanel");
		}),
		$(".page-wrapper").on("click", function () {
			$(".settingSidebar").removeClass("showSettingPanel");
		});

	// close right sidebar when click outside
	var mouse_is_inside = false;
	$(".settingSidebar").hover(
		function () {
			mouse_is_inside = true;
		},
		function () {
			mouse_is_inside = false;
		}
	);

	$("body").mouseup(function () {
		if (!mouse_is_inside) $(".settingSidebar").removeClass("showSettingPanel");
	});

	$(".settingSidebar-body").slimScroll({
		height: '100%',
		color: '#2D353E',
	}).mouseover();


	// Theme Color Change event
	$(".theme-color li").on("click", function () {
		var bodytag = $("body"),
			selectedTheme = $(this),
			prevTheme = $(".theme-color li.active").attr("title");

		$(".theme-color li").removeClass("active"),
			selectedTheme.addClass("active");
		$(".theme-color li.active").data("theme");

		bodytag.removeClass("theme-" + prevTheme);
		bodytag.addClass("theme-" + $(this).attr("title"));
	});

	// Sidebar Color Change event
	$(".sidebar-color li").on("click", function () {
		var bodytag = $("body"),
			selectedTheme = $(this),
			prevTheme = $(".sidebar-color li.active").attr("title");

		$(".sidebar-color li").removeClass("active"),
			selectedTheme.addClass("active");
		$(".sidebar-color li.active").data("sidebar");

		bodytag.removeClass("sidebar-" + prevTheme);
		bodytag.addClass("sidebar-" + $(this).attr("title"));
	});

	// Header Top Color Change event
	$(".header-top-color li").on("click", function () {
		var bodytag = $("body"),
			selectedTheme = $(this),
			prevTheme = $(".header-top-color li.active").attr("title");

		$(".header-top-color li").removeClass("active"),
			selectedTheme.addClass("active");
		$(".header-top-color li.active").data("header-top-color");

		bodytag.removeClass("header-top-color-" + prevTheme);
		bodytag.addClass("header-top-color-" + $(this).attr("title"));
	});

	// Header Bottom Color Change event
	$(".header-bottom-color li").on("click", function () {
		var bodytag = $("body"),
			selectedTheme = $(this),
			prevTheme = $(".header-bottom-color li.active").attr("title");

		$(".header-bottom-color li").removeClass("active"),
			selectedTheme.addClass("active");
		$(".header-bottom-color li.active").data("header-bottom-color");

		bodytag.removeClass("header-bottom-color-" + prevTheme);
		bodytag.addClass("header-bottom-color-" + $(this).attr("title"));
	});

	// Footer Color Change event
	$(".footer-color li").on("click", function () {
		var bodytag = $("body"),
			selectedTheme = $(this),
			prevTheme = $(".footer-color li.active").attr("title");

		$(".footer-color li").removeClass("active"),
			selectedTheme.addClass("active");
		$(".footer-color li.active").data("footer-color");

		bodytag.removeClass("footer-color-" + prevTheme);
		bodytag.addClass("footer-color-" + $(this).attr("title"));
	});


	// Fixed Header Setting  
	var toggle_fixed_header = function (fixed) {
		let body = $("body");
		if (!fixed) {
			body.removeClass("page-header-fixed");
		} else {
			body.addClass("page-header-fixed");
		}
	};
	$("#fixed_header_setting").on("change", function () {
		var _val = $(this).is(":checked") ? "checked" : "unchecked";
		if (_val === "checked") {
			toggle_fixed_header(true);
		} else {
			toggle_fixed_header(false);
		}
	});


	// Fixed Footer Setting  
	var toggle_fixed_footer = function (fixedfooter) {
		let body = $("body");
		if (!fixedfooter) {
			body.removeClass("page-footer-fixed");
		} else {
			body.addClass("page-footer-fixed");
		}
	};
	$("#fixed_footer_setting").on("change", function () {
		var _val = $(this).is(":checked") ? "checked" : "unchecked";
		if (_val === "checked") {
			toggle_fixed_footer(true);
		} else {
			toggle_fixed_footer(false);
		}
	});


	// Collapsed Sidebar Setting   
	var toggle_sidebar_collapsed = function (collapsed) {
		let body = $("body");
		if (!collapsed) {
			body.removeClass("page-sidebar-collapsed");
		} else {
			body.addClass("page-sidebar-collapsed");
		}
	};
	$("#collapsed_sidebar_setting").on("change", function () {
		var _val = $(this).is(":checked") ? "checked" : "unchecked";
		if (_val === "checked") {
			toggle_sidebar_collapsed(true);
		} else {
			toggle_sidebar_collapsed(false);
		}
	});

	// Box Style Setting   
	var toggle_box_style = function (box) {
		let container = $(".page-container");
		let body = $("body");
		if (!box) {
			container.removeClass("container");
			body.removeClass("page-sidebar-collapsed");
		} else {
			container.addClass("container");
			body.addClass("page-sidebar-collapsed");
		}
	};
	$("#box_style_setting").on("change", function () {
		var _val = $(this).is(":checked") ? "checked" : "unchecked";
		if (_val === "checked") {
			toggle_box_style(true);
		} else {
			toggle_box_style(false);
		}
	});

	// Box Shadow Setting 
	var toggle_box_shadow = function (shadow) {
		let body = $("body");
		if (!shadow) {
			body.removeClass("theme-shadow");
		} else {
			body.addClass("theme-shadow");
		}
	};
	$("#box_shadow_setting").on("change", function () {
		var _val = $(this).is(":checked") ? "checked" : "unchecked";
		if (_val === "checked") {
			toggle_box_shadow(true);
		} else {
			toggle_box_shadow(false);
		}
	});


	// Theme Switcher Button Setting
	$(".theme-switch input:radio").change(function () {
		if ($(this).val() == "light") {
			$("body").addClass("light-theme");
			$("body").removeClass("dark-theme");
			$("body").removeClass("semi-dark-theme");
			$("body").removeClass("gradient-theme");
		} else if ($(this).val() == "dark") {
			$("body").addClass("dark-theme");
			$("body").removeClass("light-theme");
			$("body").removeClass("semi-dark-theme");
			$("body").removeClass("gradient-theme");
		} else if ($(this).val() == "semi-dark-theme") {
			$("body").addClass("semi-dark-theme");
			$("body").removeClass("light-theme");
			$("body").removeClass("dark-theme");
			$("body").removeClass("gradient-theme");
		} else if ($(this).val() == "gradient-theme") {
			$("body").addClass("gradient-theme");
			$("body").removeClass("light-theme");
			$("body").removeClass("dark-theme");
			$("body").removeClass("semi-dark-theme");
		}

	});

	// Restore Default Setting
	$(".btn-restore-theme").on("click", function () {
		//remove all class from body
		$("body").removeClass();
		jQuery("body").addClass("page-header-fixed");
		jQuery("body").addClass("page-sidebar-fixed");
		jQuery("body").addClass("theme-shadow");
		$(".page-header, .page-sidebar, .page-container, .modal, .add-sidebar, .daterangepicker, h1, h2, h3, h4, h5, h6, .page-footer").removeAttr("style");

		// theme color default
		$(".theme-color li").removeClass("active");
		$(".theme-color li[title|='default']").addClass("active");

		// sidebar color default
		$(".sidebar-color li").removeClass("active");
		$(".sidebar-color li[title|='default']").addClass("active");

		// header top default
		$(".header-top-color li").removeClass("active");
		$(".header-top-color li[title|='default']").addClass("active");

		// header bottom default
		$(".header-bottom-color li").removeClass("active");
		$(".header-bottom-color li[title|='default']").addClass("active");

		// header bottom default
		$(".footer-color li").removeClass("active");
		$(".footer-color li[title|='default']").addClass("active");

		// fixed header default
		$("#fixed_header_setting").prop("checked", true);
		toggle_fixed_header(true);

		// fixed footer default
		$("#fixed_footer_setting").prop("checked", false);
		toggle_fixed_footer(false);

		// collapsed sideabe default
		$("#collapsed_sidebar_setting").prop("checked", false);
		toggle_sidebar_collapsed(false);

		// box style default
		$("#box_style_setting").prop("checked", false);
		toggle_box_style(false);

		// box shadow default
		$("#box_shadow_setting").prop("checked", true);
		toggle_box_shadow(true);

		// select theme default
		$(".select-theme[value|='light']").prop("checked", true);


	});


	// Add Default Class on Body Tag
	jQuery("body").addClass("page-header-fixed");
	jQuery("body").addClass("page-sidebar-fixed");
	jQuery("body").addClass("theme-shadow");
	jQuery(".theme-color li[title|='default']").addClass("active");
	jQuery(".sidebar-color li[title|='default']").addClass("active");
	jQuery(".header-top-color li[title|='default']").addClass("active");
	jQuery(".header-bottom-color li[title|='default']").addClass("active");
	jQuery(".footer-color li[title|='default']").addClass("active");
	jQuery(".select-theme[value|='light']").prop("checked", true);
	jQuery("#fixed_header_setting").prop("checked", true);
	jQuery("#box_shadow_setting").prop("checked", true);


});

$(document).ready(function () {
	"use strict";

	// Collapsed Sidebar (min-width:992px) and (max-width: 1199px)
	var mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');

	function doMinimize(e) {
		if (e.matches) {
			$('body').addClass('page-sidebar-collapsed');
		} else {
			$('body').removeClass('page-sidebar-collapsed');
		}

	}

	mql.addListener(doMinimize);
	doMinimize(mql);

})