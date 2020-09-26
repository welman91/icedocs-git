// Load page using jquery
$(document).ready(function () {
	/// Wait till page is loaded
	$("#1_1").click(function () {
		$("#main").load(
			"assets/pages/setup/global-setup.php #main",
			function () {}
		);
	});

	$("#1_2").click(function () {
		$("#main").load(
			"assets/pages/setup/catalog-reference.php #main",
			function () {}
		);
	});
});
