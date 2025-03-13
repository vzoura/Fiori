/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sync6cl1/router_test/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});