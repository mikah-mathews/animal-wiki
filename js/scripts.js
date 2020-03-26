$(document).ready(function() {
     $('.animals').hide(); 
     $('#animalselector').change(function(){
//hide all animals
    $('.animals').hide(); 
//show selected animal only
    $('#' + $(this).val()).show();
  });
});

// $(document).ready(function() {
//   $('#animalselector').change(function(){
//     $('.animals').hide();
//     $('#' + $(this).val()).show();
//   });
// });
