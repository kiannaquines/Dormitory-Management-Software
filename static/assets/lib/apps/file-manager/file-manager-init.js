/**********************************************************************
***********************************************************************
### file-manager-sidebar Scrollbar
*********************************************************************
*********************************************************************/


// file-manager-sidebar scroll
new PerfectScrollbar('.file-manager-sidebar', {
	suppressScrollX: true
});


// file-manager-content scroll
new PerfectScrollbar('.file-manager-content-scroll', {
	suppressScrollX: true
});
// file-manager-content scroll
new PerfectScrollbar('#fileManagerDetailsSidebar', {
	suppressScrollX: true
});

/**********************************************************************
***********************************************************************
### Simple Sidebar Toggle
*********************************************************************
*********************************************************************/
var $mainSidebar = $("#fileManagerDetailsSidebar");

$mainSidebar.simplerSidebar({
	attr: "sidebar-main",
	init: "closed",
	selectors: {
		trigger: "#fileManagerDetailsSidebarTrigger-1, #fileManagerDetailsSidebarTrigger-2, #fileManagerDetailsSidebarTrigger-3, #fileManagerDetailsSidebarTrigger-4, #fileManagerDetailsSidebarTrigger-5, #fileManagerDetailsSidebarTrigger-6, #fileManagerDetailsSidebarTrigger-7, #fileManagerDetailsSidebarTrigger-8, #fileManagerDetailsSidebarTrigger-9, #fileManagerDetailsSidebarTrigger-10, #fileManagerDetailsSidebarTrigger-11, #fileManagerDetailsSidebarTrigger-12, #fileManagerDetailsSidebarTrigger-12, #fileManagerDetailsSidebarTrigger-14, #fileManagerDetailsSidebarTrigger-15, #fileManagerDetailsSidebarTrigger-16",
		quitter: ".quitter"
	},
	animation: {
		easing: "easeOutQuint"
	},
	sidebar: {
		width: 320
	},
	mask: {
		display: true
	}

});

/**********************************************************************
***********************************************************************
### Flow.js Active Js
*********************************************************************
*********************************************************************/

$(function () {
	var r = new Flow({
		target: '/assets/lib/file-manager/images',
		permanentErrors: [500, 501],
		maxChunkRetries: 1,
		chunkRetryInterval: 5000,
		simultaneousUploads: 1
	});

	// Flow.js isn't supported, fall back on a different method
	if (!r.support) {
		$('.flow-error').show();
		return;
	}

	// Show a place for dropping/selecting files
	$('.flow-drop').show();
	r.assignDrop($('.flow-drop')[0]);
	r.assignBrowse($('.flow-browse')[0]);
	r.assignBrowse($('.flow-browse-folder')[0], true);
	r.assignBrowse($('.flow-browse-image')[0], false, false, {
		accept: 'image/*'
	});

	// Handle file add event
	r.on('fileAdded', function (file) {
		// Show progress bar
		$('.flow-progress, .flow-list').removeClass('d-none');

		// Add the file to the list
		$('.flow-list').append(
			'<li class="flow-file list-group-item flow-file-' + file.uniqueIdentifier + '">' +
			'<div class="flow-progress media">' +
			'<div class="media-body">' +
			'<div><strong class="flow-file-name"></strong> - <em class="flow-file-progress"><span class="text-muted">Waiting...</span></em></div>' +
			'<div><small class="flow-file-size text-muted"></small></div>' +
			'</div>' +
			'<div class="align-self-center ml-3">' +
			'<button type="button" class="flow-file-download btn btn-sm icon-btn btn-outline-primary d-inline-block mr-1 waves-effect"><i class="fa fa-download"></i></button>' +
			'<button type="button" class="flow-file-pause btn btn-sm icon-btn btn-outline-warning d-inline-block waves-effect"><i class="fa fa-pause"></i></button> ' +
			'<button type="button" class="flow-file-resume btn btn-sm icon-btn btn-outline-success d-inline-block waves-effect"><i class="fa fa-play"></i></button> ' +
			'<button type="button" class="flow-file-cancel btn btn-sm icon-btn btn-outline-danger d-inline-block waves-effect"><i class="fa fa-close"></i></button>' +
			'</div>' +
			'</div>' +
			'</li>'
		);
		var $self = $('.flow-file-' + file.uniqueIdentifier);
		$self.find('.flow-file-name').text(file.name);
		$self.find('.flow-file-size').text(readablizeBytes(file.size));
		$self.find('.flow-file-download').attr('href', '/download/' + file.uniqueIdentifier).hide();
		$self.find('.flow-file-pause').on('click', function () {
			file.pause();
			$self.find('.flow-file-pause').hide();
			$self.find('.flow-file-resume').show();
		});
		$self.find('.flow-file-resume').on('click', function () {
			file.resume();
			$self.find('.flow-file-pause').show();
			$self.find('.flow-file-resume').hide();
		}).hide();
		$self.find('.flow-file-cancel').on('click', function () {
			file.cancel();
			$self.remove();
		});
	});
	r.on('filesSubmitted', function (file) {
		r.upload();
	});
	r.on('complete', function () {
		// Hide pause/resume when the upload has completed
		$('.flow-progress .progress-resume-link, .flow-progress .progress-pause-link').hide();
	});
	r.on('fileSuccess', function (file, message) {
		var $self = $('.flow-file-' + file.uniqueIdentifier);
		// Reflect that the file upload has completed
		$self.find('.flow-file-progress').text('(completed)');
		$self.find('.flow-file-pause, .flow-file-resume').remove();
		$self.find('.flow-file-download').attr('href', '/download/' + file.uniqueIdentifier).show();
	});
	r.on('fileError', function (file, message) {
		// Reflect that the file upload has resulted in error
		$('.flow-file-' + file.uniqueIdentifier + ' .flow-file-progress')
			.addClass('text-danger')
			.text('(file could not be uploaded: ' + message + ')');
	});
	r.on('fileProgress', function (file) {
		// if (!file.averageSpeed || file.averageSpeed.indexOf('undefined') !== -1) { return; }
		console.log(file.averageSpeed)

		// Handle progress for both the file and the overall upload
		$('.flow-file-' + file.uniqueIdentifier + ' .flow-file-progress')
			.html(Math.floor(file.progress() * 100) + '% ' +
				readablizeBytes(file.averageSpeed) + '/s ' +
				secondsToStr(file.timeRemaining()) + ' remaining');
		$('.flow-progress .progress-bar').css({
			width: Math.floor(r.progress() * 100) + '%'
		});
	});
	r.on('uploadStart', function () {
		// Show pause, hide resume
		$('.flow-progress .progress-resume-link').hide();
		$('.flow-progress .progress-pause-link').show();
	});
	r.on('catchAll', function () {
		console.log.apply(console, arguments);
	});
	window.r = {
		pause: function () {
			r.pause();
			// Show resume, hide pause
			$('.flow-file-resume').show();
			$('.flow-file-pause').hide();
			$('.flow-progress .progress-resume-link').show();
			$('.flow-progress .progress-pause-link').hide();
		},
		cancel: function () {
			r.cancel();
			$('.flow-progress .progress-resume-link').hide();
			$('.flow-progress .progress-pause-link').hide();
			$('.flow-progress .progress-bar').css({
				width: '0%'
			});
			$('.flow-file').remove();
		},
		upload: function () {
			$('.flow-file-pause').show();
			$('.flow-file-resume').hide();
			r.resume();
		},
		flow: r
	};

	function readablizeBytes(bytes) {
		if (!bytes) {
			return '0 kB';
		}

		var s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
		var e = Math.floor(Math.log(bytes) / Math.log(1024));
		return (bytes / Math.pow(1024, e)).toFixed(2) + " " + s[e];
	}

	function secondsToStr(temp) {
		function numberEnding(number) {
			return (number > 1) ? 's' : '';
		}
		var years = Math.floor(temp / 31536000);
		if (years) {
			return years + ' year' + numberEnding(years);
		}
		var days = Math.floor((temp %= 31536000) / 86400);
		if (days) {
			return days + ' day' + numberEnding(days);
		}
		var hours = Math.floor((temp %= 86400) / 3600);
		if (hours) {
			return hours + ' hour' + numberEnding(hours);
		}
		var minutes = Math.floor((temp %= 3600) / 60);
		if (minutes) {
			return minutes + ' minute' + numberEnding(minutes);
		}
		var seconds = temp % 60;
		return seconds + ' second' + numberEnding(seconds);
	}
});