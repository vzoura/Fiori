/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"flightinfo_0314/flightinfo_0314/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
