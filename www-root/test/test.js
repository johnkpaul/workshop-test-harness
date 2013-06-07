/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
/*global sinon:false, Backbone:false*/
(function(global, jQuery) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('Calculator Tests', {
    setup: function() {
      this.Calculator = window.Calculator;
    },
    teardown: function() {
    }
  });

  test('Calculator adds two numbers', 1, function() {
    var sum = this.Calculator.add(1,2);
    equal(sum, 3, 'Calculator can add two numbers');
  });

  /*
  module('ItemSelectionView Tests', {
    setup: function() {
      this.view = new global.ItemSelectionView({el: jQuery('#qunit-fixture ul')});
    },
    teardown: function() {
    }
  });

  test('when second li is clicked, markItemSelected is called', 1, function() {
    this.view.$('li').eq(1).trigger('click');
  });
  */



}(window, window.jQuery));
