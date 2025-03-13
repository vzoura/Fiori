/*global QUnit*/

sap.ui.define([
	"sync6cl1/cart_excercise0313/controller/Cart_excerciseView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Cart_excerciseView Controller");

	QUnit.test("I should test the Cart_excerciseView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
