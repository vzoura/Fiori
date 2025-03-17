/*global QUnit*/

sap.ui.define([
	"final_test/final_test/controller/FI_Document_edit.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FI_Document_edit Controller");

	QUnit.test("I should test the FI_Document_edit controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
