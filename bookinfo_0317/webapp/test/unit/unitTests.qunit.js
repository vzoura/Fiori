/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"seats_data/bookinfo_0317/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
