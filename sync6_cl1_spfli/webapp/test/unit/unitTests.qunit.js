/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync6cl1spfli/sync6_cl1_spfli/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
