/*global QUnit*/

sap.ui.define([
	"sync6cl1spfli/sync6_cl1_spfli/controller/Spfliview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Spfliview Controller");

	QUnit.test("I should test the Spfliview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
