// Sidebar collapse test
var collX = document.querySelectorAll(".collapsibleX");
var i;

for (i = 0; i < collX.length; i++) {
	collX[i].addEventListener("click", function () {
		this.classList.toggle("activeX");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

var contentXlia = document.querySelectorAll(".contentX li a");
for (i = 0; i < contentXlia.length; i++) {
	contentXlia[i].addEventListener("click", function () {
		contentXlia.forEach(myFunction);
		function myFunction(item) {
			item.classList.remove("contentXactive");
		}
		this.classList.toggle("contentXactive");
	});
}
