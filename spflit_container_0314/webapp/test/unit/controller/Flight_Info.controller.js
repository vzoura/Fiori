/*global QUnit*/

sap.ui.define([
	"flightinfo_0314/flightinfo_0314/controller/Flight_Info.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Flight_Info Controller");

	QUnit.test("I should test the Flight_Info controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
