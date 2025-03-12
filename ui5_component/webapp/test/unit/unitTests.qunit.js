/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sync6_cl1/ui5_component/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});