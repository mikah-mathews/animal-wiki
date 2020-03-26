$(document).reday(function() {
  $(function() {
    $('#colorselector').change(function(){
      $('.colors').hide();
      $('#' + $(this).val()).show();
    });
  });
