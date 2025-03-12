/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync6cl1/docu_edit_0312/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
