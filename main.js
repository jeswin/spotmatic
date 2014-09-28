document.addEventListener('DOMContentLoaded', function(){
  $('li').html(function(i, t) {
    var result =  t;
    result = result.replace("{major}", '<i class="fa fa-ban"></i>');
    result = result.replace("{warn}", '<i class="fa fa-warning"></i>');
    result = result.replace("{tip}", '<i class="fa fa-lightbulb-o"></i>');
    return result;
  });
  hljs.initHighlighting();
});
