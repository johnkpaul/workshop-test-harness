(function(global, jQuery){
  global.Calculator = global.Calculator || {};

  Calculator.add = function(a, b){
    return a + b;
  }

  /*
  global.ItemSelectionView = Backbone.View.extend({
    events:{
      'click li': 'markItemSelected'
    },
    markItemSelected: function(event){
      jQuery(event.target).addClass('selected');
    }
  });
  */

}(window, window.jQuery))
