/*global QUnit*/

sap.ui.define([
	"sync6cl1/docu_edit_0312/controller/DOCUView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DOCUView Controller");

	QUnit.test("I should test the DOCUView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
