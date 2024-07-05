! function (j) {
	var f = function (e) {
		return function l(p, m) {
			var o, n;
			o = [];
			n = new RegExp(p, "i");
			$.each(e, function (q, r) {
				if (n.test(r)) {
					o.push(r)
				}
			});
			m(o)
		}
	};
	var k = ["I think being in love with life is a key to eternal youth.” —Doug Hutchison", "You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.” —Walter Hagen", "A man who dares to waste one hour of time has not discovered the value of life.” —Charles Darwin", "If life were predictable it would cease to be life, and be without flavor.” —Eleanor Roosevelt", "All life is an experiment. The more experiments you make the better.” —Ralph Waldo Emerson", "All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.” —John Wooden", "Find ecstasy in life; the mere sense of living is joy enough.” —Emily Dickinson", "“My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.” —Maya Angelou", "However difficult life may seem, there is always something you can do and succeed at.” —Stephen Hawking", "Life is like riding a bicycle. To keep your balance, you must keep moving.” —Albert Einstein"];
	$(".typeahead").typeahead({
		hint: true,
		highlight: true,
		minLength: 1
	}, {
		name: "searchText",
		source: f(k)
	});
	Waves.init();
	$(function () {
		feather.replace()
	});
	var h = function () {
		$(".dropdown").on("show.bs.dropdown", function (n) {
			var m = $(this).find(".dropdown-menu");
			var l = parseInt(m.css("margin-top"));
			m.css({
				"margin-top": (l + 25) + "px",
				opacity: 0
			}).animate({
				"margin-top": l + "px",
				opacity: 1
			}, 800, function () {
				$(this).css({
					"margin-top": ""
				})
			})
		});
		$(".dropdown").on("hide.bs.dropdown", function (n) {
			var m = $(this).find(".dropdown-menu");
			var l = parseInt(m.css("margin-top"));
			m.css({
				"margin-top": l + "px",
				opacity: 1,
				display: "block"
			}).animate({
				"margin-top": (l + 25) + "px",
				opacity: 0
			}, 800, function () {
				$(this).css({
					"margin-top": "",
					display: ""
				})
			})
		})
	};
	var i = function () {
		$("#search-button").on("click", function () {
			$("body").addClass("search-open")
		});
		$("#close-search").on("click", function () {
			$("body").removeClass("search-open")
		})
	};
	var a = function () {
		$("[data-toggle='tooltip']").tooltip();
		$('[data-toggle="popover"]').popover({
			container: "body"
		});
		if (jQuery().select2) {
			$(".select2").select2()
		}
	};
	$(".tooltip-primary").tooltip({
		template: '<div class="tooltip tooltip-primary" role="tooltip"><div class="arrow"></div><div class="tooltip-inner tx-montserrat"></div></div>'
	});
	$(".tooltip-mail-details").tooltip({
		template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="mail-details-tooltip tooltip-inner tx-montserrat"></div></div>'
	});
	$(".popover-details").popover({
		template: '<div class="popover popover-details" role="popover"><div class="arrow"></div><div class="popover-details popover-body tx-montserrat"></div></div>'
	});
	if ($.fn.slimscroll) {
		$("#messageBox, #notificationsBox").slimscroll({
			height: "300px",
			size: "3px",
			position: "right",
			color: "#b3bac1",
			alwaysVisible: false,
			distance: "0px",
			railVisible: false,
			wheelStep: 15
		})
	}
	if ($.fn.slimscroll) {
		$(".inner-sidebar").slimscroll({
			height: "100%",
			size: "3px",
			position: "right",
			color: "#b3bac1",
			alwaysVisible: false,
			distance: "0px",
			railVisible: false,
			wheelStep: 15
		})
	}
	var d = function () {
		$("[data-scrollbar=true]").each(function () {
			b($(this))
		})
	};
	var b = function (m) {
		if ($(m).attr("data-init")) {
			return
		}
		var e = $(m).attr("data-height");
		e = (!e) ? $(m).height() : e;
		var l = {
			height: e,
			alwaysVisible: false,
			color: "#2D353E",
		};
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			$(m).css("height", e);
			$(m).css("overflow-x", "scroll")
		} else {
			$(m).slimScroll(l);
			$(m).closest(".slimScrollDiv").find(".slimScrollBar").hide()
		}
		$(m).attr("data-init", true)
	};
	var g = function () {
		$(document).scroll(function () {
			var e = $(document).scrollTop();
			if (e >= 200) {
				$("[data-click=scroll-top]").addClass("show")
			} else {
				$("[data-click=scroll-top]").removeClass("show")
			}
		});
		$(".content").scroll(function () {
			var e = $(".content").scrollTop();
			if (e >= 200) {
				$("[data-click=scroll-top]").addClass("show")
			} else {
				$("[data-click=scroll-top]").removeClass("show")
			}
		});
		$("[data-click=scroll-top]").on("click", function (l) {
			l.preventDefault();
			$("html, body, .content").animate({
				scrollTop: $("body").offset().top
			}, 500)
		})
	};
	var c = function () {
		return {
			init: function () {
				this.initComponent()
			},
			initComponent: function () {
				h();
				i();
				d();
				a();
				g()
			},
			scrollTop: function () {
				$("html, body, .content").animate({
					scrollTop: $("body").offset().top
				}, 0)
			}
		}
	}();
	$(document).ready(function () {
		c.init()
	})
}(jQuery);