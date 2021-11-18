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

  // move to top when button is clicked
  $('.fixed-button').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  
  // Show/Hide the button on scroll
  window.onscroll = function() {
    let pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
      scrollBtn = document.querySelector('.fixed-button');
    if (scrollBtn) scrollBtn.style.visibility = pageOffset > 370 ? 'visible' : 'hidden';
  };

});
