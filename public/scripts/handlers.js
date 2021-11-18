$(() => {
  // Close form error when clicked
  $('.err-btn').click(function() {
    $('.error').slideUp();
  });

  // Write tweet button
  $('.fa-angle-double-down').click(function() {
    if ($('.fa-angle-double-down').hasClass('rotate')) {
      $('.fa-angle-double-down').removeClass('rotate');
      $('.new-tweet').slideUp();
    } else {
      $('.fa-angle-double-down').addClass('rotate');
      $('.new-tweet').slideDown('slow');
    }
  });

  $('.fixed-button').click(function() {
    document
      .querySelector(".new-tweet")
      .scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  });
  


});
