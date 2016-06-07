$(function(){
  $("form#factorial").submit(function(event){
    event.preventDefault();
// debugger;
    var factorial = parseInt($("input#factorial-input").val());
    var total = 1;
    for(index = factorial; index >= 1; index--){
      total = total * index;
    }
    alert(total);
  });

});
