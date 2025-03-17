/*global QUnit*/

sap.ui.define([
	"seats_data/bookinfo_0317/controller/Seats_Data.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Seats_Data Controller");

	QUnit.test("I should test the Seats_Data controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
