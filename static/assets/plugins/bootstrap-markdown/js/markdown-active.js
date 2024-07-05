// Events Example
$("#target-editor").markdown({
	savable: true,
	onPreview: function (e) {
		var previewContent

		if (e.isDirty()) {
			var originalContent = e.getContent()

			previewContent = "Prepended text here..." +
				"\n" +
				originalContent +
				"\n" +
				"Apended text here..."
		} else {
			previewContent = "Default content"
		}

		return previewContent
	},
	onSave: function (e) {
		alert("Saving '" + e.getContent() + "'...")
	},
	onChange: function (e) {
		console.log("Changed!")
	},
	onBlur: function (e) {
		alert("Blur triggered!")
	}
})

// Editor Panel
$("#target-editor-with-custom-buttons").markdown({
	additionalButtons: [
		[{
			name: "groupCustom",
			data: [{
				name: "cmdBeer",
				toggle: true, // this param only take effect if you load bootstrap.js
				title: "Beer",
				icon: "fa fa-quora",
				callback: function (e) {
					// Replace selection with some drinks
					var chunk, cursor,
						selected = e.getSelection(),
						content = e.getContent(),
						drinks = ["Heinekken", "Budweiser",
							"Iron City", "Amstel Light",
							"Red Stripe", "Smithwicks",
							"Westvleteren", "Sierra Nevada",
							"Guinness", "Corona", "Calsberg"
						],
						index = Math.floor((Math.random() * 10) + 1)


					// Give random drink
					chunk = drinks[index]

					// transform selection and set the cursor into chunked text
					e.replaceSelection(chunk)
					cursor = selected.start

					// Set the cursor
					e.setSelection(cursor, cursor + chunk.length)
				}
			}]
		}]
	]
})

// Localization Example
(function ($) {
	$.fn.markdown.messages['fr'] = {
		'Bold': "Gras",
		'Italic': "Italique",
		'Heading': "Titre",
		'URL/Link': "Insérer un lien HTTP",
		'Image': "Insérer une image",
		'List': "Liste à puces",
		'Preview': "Prévisualiser",
		'strong text': "texte important",
		'emphasized text': "texte souligné",
		'heading text': "texte d'entête",
		'enter link description here': "entrez la description du lien ici",
		'Insert Hyperlink': "Insérez le lien hypertexte",
		'enter image description here': "entrez la description de l'image ici",
		'Insert Image Hyperlink': "Insérez le lien hypertexte de l'image",
		'enter image title here': "entrez le titre de l'image ici",
		'list text here': "texte à puce ici"
	};
}(jQuery))

$("#target-editor-with-custom-language").markdown({
	language: 'fr'
})