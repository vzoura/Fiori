/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"final_test/final_test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
