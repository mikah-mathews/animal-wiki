$(function() {
  $('#animalselector').change(function(){
    $('.animals').hide();
    $('#' + $(this).val()).show();
  });
});