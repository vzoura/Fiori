/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sync6cl1/ui_table_0305/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});