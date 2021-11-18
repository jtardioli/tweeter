$(() => {
  // Close form error when clicked
  $('.err-btn').click(function() {
    $('.error').slideUp();
  });

  // Write tweet button
  $('.fa-angle-double-down').click(function() {
    console.log('hi');
    if ($('.fa-angle-double-down').hasClass('rotate')) {
      $('.fa-angle-double-down').removeClass('rotate');
      $('.new-tweet').slideUp();
    } else {
      $('.fa-angle-double-down').addClass('rotate');
      $('.new-tweet').slideDown('slow');
    }
    
    
    
  });


});
