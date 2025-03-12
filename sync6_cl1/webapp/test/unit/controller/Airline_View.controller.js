/*global QUnit*/

sap.ui.define([
	"sync6cl1/sync6_cl1/controller/Airline_View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Airline_View Controller");

	QUnit.test("I should test the Airline_View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
