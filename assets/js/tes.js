$(".custom-file-input").on("change", function (event) {
	var file = event.target.files[0];

	var AllowedfileExtension = ["jpeg", "jpg", "png", "gif"];
	var UploadfilExtension = $(this).val().split(".").pop().toLowerCase();
	var MaxUploadSize = 2 * 1024 * 1024;
	var newLine = "\r\n";

	if ($(this).val()) {
		if (
			(file.size >= MaxUploadSize) |
			($.inArray(UploadfilExtension, AllowedfileExtension) == -1)
		) {
			$(".savechangesbtn").attr("disabled", "disabled");

			var msg = "Error uploading file";
			msg += newLine;
			msg +=
				"Only these formats are allowed : " + AllowedfileExtension.join(", ");
			msg += newLine;
			msg += "Image file maximum 2MB of size";
			alert(msg);

			$(".custom-file-label").html("Choose file");
			return;
		} else {
			$(".savechangesbtn").removeAttr("disabled");
			let fileName = $(this).val().split("\\").pop();
			$(this).next(".custom-file-label").addClass("selected").html(fileName);

			return changeImgThumbnail(event);
		}
	} else {
		console.log($(this).next(".custom-file-label"));
		console.log("si user pencet cancel");
	}
});

function changeImgThumbnail(event) {
	var files = event.target.files;
	var f = files[0];
	var reader = new FileReader();
	reader.onload = (function (theFile) {
		return function (e) {
			document.getElementById("list").innerHTML = [
				'<img src="',
				e.target.result,
				'" title="',
				theFile.name,
				'" class="img-thumbnail"/>',
			].join("");
		};
	})(f);
	reader.readAsDataURL(f);
}

function showFileSize() {
	var input, file;

	if (!window.FileReader) {
		alert("The file API isn't supported on this browser yet.");
		return;
	}
	input = document.querySelector(".custom-file-input");
	if (input) {
		file = input.files[0];
		console.log(file);
		alert("File " + file.name + " is " + file.size + " bytes in size");
	}
}

function showFileSize() {
	var input, file;

	if (!window.FileReader) {
		alert("The file API isn't supported on this browser yet.");
		return;
	}
	input = document.querySelector(".custom-file-input");
	if (input) {
		file = input.files[0];
		console.log(file);
		alert("File " + file.name + " is " + file.size + " bytes in size");
	}
}
