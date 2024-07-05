// Basic Crop Image
window.addEventListener('DOMContentLoaded', function () {
	var image = document.querySelector('#basicCrop');
	var minAspectRatio = 0.5;
	var maxAspectRatio = 1.5;
	var cropper = new Cropper(image, {
		ready: function () {
			var cropper = this.cropper;
			var containerData = cropper.getContainerData();
			var cropBoxData = cropper.getCropBoxData();
			var aspectRatio = cropBoxData.width / cropBoxData.height;
			var newCropBoxWidth;

			if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
				newCropBoxWidth = cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);

				cropper.setCropBoxData({
					left: (containerData.width - newCropBoxWidth) / 2,
					width: newCropBoxWidth
				});
			}
		},

		cropmove: function () {
			var cropper = this.cropper;
			var cropBoxData = cropper.getCropBoxData();
			var aspectRatio = cropBoxData.width / cropBoxData.height;

			if (aspectRatio < minAspectRatio) {
				cropper.setCropBoxData({
					width: cropBoxData.height * minAspectRatio
				});
			} else if (aspectRatio > maxAspectRatio) {
				cropper.setCropBoxData({
					width: cropBoxData.height * maxAspectRatio
				});
			}
		},
	});
});


// Crop Round Image
function getRoundedCanvas(sourceCanvas) {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var width = sourceCanvas.width;
	var height = sourceCanvas.height;

	canvas.width = width;
	canvas.height = height;
	context.imageSmoothingEnabled = true;
	context.drawImage(sourceCanvas, 0, 0, width, height);
	context.globalCompositeOperation = 'destination-in';
	context.beginPath();
	context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
	context.fill();
	return canvas;
}

window.addEventListener('DOMContentLoaded', function () {
	var image = document.getElementById('roundCrop');
	var button = document.getElementById('roundButton');
	var result = document.getElementById('roundResult');
	var croppable = false;
	var cropper = new Cropper(image, {
		aspectRatio: 1,
		viewMode: 1,
		ready: function () {
			croppable = true;
		},
	});

	button.onclick = function () {
		var croppedCanvas;
		var roundedCanvas;
		var roundedImage;

		if (!croppable) {
			return;
		}

		croppedCanvas = cropper.getCroppedCanvas();
		roundedCanvas = getRoundedCanvas(croppedCanvas);
		roundedImage = document.createElement('img');
		roundedImage.src = roundedCanvas.toDataURL()
		result.innerHTML = '';
		result.appendChild(roundedImage);
	};
});


// Cropper Modal
window.addEventListener('DOMContentLoaded', function () {
	var image = document.getElementById('modalCrop');
	var cropBoxData;
	var canvasData;
	var cropper;

	$('#cropperModal').on('shown.bs.modal', function () {
		cropper = new Cropper(image, {
			autoCropArea: 0.5,
			ready: function () {
				//Should set crop box data first here
				cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
			}
		});
	}).on('hidden.bs.modal', function () {
		cropBoxData = cropper.getCropBoxData();
		canvasData = cropper.getCanvasData();
		cropper.destroy();
	});
});


// Customize Cropper
function each(arr, callback) {
	var length = arr.length;
	var i;

	for (i = 0; i < length; i++) {
		callback.call(arr, arr[i], i, arr);
	}

	return arr;
}

window.addEventListener('DOMContentLoaded', function () {
	var image = document.querySelector('#customizeCrop');
	var previews = document.querySelectorAll('.preview');
	var cropper = new Cropper(image, {
		ready: function () {
			var clone = this.cloneNode();

			clone.className = '';
			clone.style.cssText = (
				'display: block;' +
				'width: 100%;' +
				'min-width: 0;' +
				'min-height: 0;' +
				'max-width: none;' +
				'max-height: none;'
			);

			each(previews, function (elem) {
				elem.appendChild(clone.cloneNode());
			});
		},

		crop: function (event) {
			var data = event.detail;
			var cropper = this.cropper;
			var imageData = cropper.getImageData();
			var previewAspectRatio = data.width / data.height;

			each(previews, function (elem) {
				var previewImage = elem.getElementsByTagName('img').item(0);
				var previewWidth = elem.offsetWidth;
				var previewHeight = previewWidth / previewAspectRatio;
				var imageScaledRatio = data.width / previewWidth;

				elem.style.height = previewHeight + 'px';
				previewImage.style.width = imageData.naturalWidth / imageScaledRatio + 'px';
				previewImage.style.height = imageData.naturalHeight / imageScaledRatio + 'px';
				previewImage.style.marginLeft = -data.x / imageScaledRatio + 'px';
				previewImage.style.marginTop = -data.y / imageScaledRatio + 'px';
			});
		},
	});
});


// Min & max Cropper
window.addEventListener('DOMContentLoaded', function () {
	var image = document.querySelector('#minMaxCrop');
	var data = document.querySelector('#data');
	var button = document.getElementById('button');
	var result = document.getElementById('result');
	var minCroppedWidth = 320;
	var minCroppedHeight = 160;
	var maxCroppedWidth = 640;
	var maxCroppedHeight = 320;
	var cropper = new Cropper(image, {
		viewMode: 3,

		data: {
			width: (minCroppedWidth + maxCroppedWidth) / 2,
			height: (minCroppedHeight + maxCroppedHeight) / 2,
		},

		crop: function (event) {
			var width = event.detail.width;
			var height = event.detail.height;

			if (
				width < minCroppedWidth ||
				height < minCroppedHeight ||
				width > maxCroppedWidth ||
				height > maxCroppedHeight
			) {
				cropper.setData({
					width: Math.max(minCroppedWidth, Math.min(maxCroppedWidth, width)),
					height: Math.max(minCroppedHeight, Math.min(maxCroppedHeight, height)),
				});
			}

			data.textContent = JSON.stringify(cropper.getData(true));
		},
	});

	button.onclick = function () {
		result.innerHTML = '';
		result.appendChild(cropper.getCroppedCanvas());
	};
});


// Upload Cropper
window.addEventListener('DOMContentLoaded', function () {
	var avatar = document.getElementById('avatar');
	var image = document.getElementById('uploadCrop');
	var input = document.getElementById('input');
	var $progress = $('.progress');
	var $progressBar = $('.progress-bar');
	var $alert = $('.alert');
	var $modal = $('#modal');
	var cropper;

	$('[data-toggle="tooltip"]').tooltip();

	input.addEventListener('change', function (e) {
		var files = e.target.files;
		var done = function (url) {
			input.value = '';
			image.src = url;
			$alert.hide();
			$modal.modal('show');
		};
		var reader;
		var file;
		var url;

		if (files && files.length > 0) {
			file = files[0];

			if (URL) {
				done(URL.createObjectURL(file));
			} else if (FileReader) {
				reader = new FileReader();
				reader.onload = function (e) {
					done(reader.result);
				};
				reader.readAsDataURL(file);
			}
		}
	});

	$modal.on('shown.bs.modal', function () {
		cropper = new Cropper(image, {
			aspectRatio: 1,
			viewMode: 3,
		});
	}).on('hidden.bs.modal', function () {
		cropper.destroy();
		cropper = null;
	});

	document.getElementById('crop').addEventListener('click', function () {
		var initialAvatarURL;
		var canvas;

		$modal.modal('hide');

		if (cropper) {
			canvas = cropper.getCroppedCanvas({
				width: 160,
				height: 160,
			});
			initialAvatarURL = avatar.src;
			avatar.src = canvas.toDataURL();
			$progress.show();
			$alert.removeClass('alert-success alert-warning');
			canvas.toBlob(function (blob) {
				var formData = new FormData();

				formData.append('avatar', blob, 'avatar.jpg');
				$.ajax('https://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					data: formData,
					processData: false,
					contentType: false,

					xhr: function () {
						var xhr = new XMLHttpRequest();

						xhr.upload.onprogress = function (e) {
							var percent = '0';
							var percentage = '0%';

							if (e.lengthComputable) {
								percent = Math.round((e.loaded / e.total) * 100);
								percentage = percent + '%';
								$progressBar.width(percentage).attr('aria-valuenow', percent).text(percentage);
							}
						};

						return xhr;
					},

					success: function () {
						$alert.show().addClass('alert-success').text('Upload success');
					},

					error: function () {
						avatar.src = initialAvatarURL;
						$alert.show().addClass('alert-warning').text('Upload error');
					},

					complete: function () {
						$progress.hide();
					},
				});
			});
		}
	});
});