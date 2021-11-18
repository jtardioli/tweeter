$(() => {

  // Close form error when clicked
  $('.err-btn').click(function() {
    $('.error').slideUp();
  });

  // Write tweet button
  $('.fa-angle-double-down').click(function() {
    //rotate the button depending on if the write tweet button area is visible or not
    if ($('.fa-angle-double-down').hasClass('rotate')) {
      $('.fa-angle-double-down').removeClass('rotate');
      $('.new-tweet').slideUp();
    } else {
      $('.fa-angle-double-down').addClass('rotate');
      $('.new-tweet').slideDown('slow');
    }
  });

  // move to top of page when button is clicked
  $('.fixed-button').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  
  // Show/Hide the button until users scrolls down a bit
  window.onscroll = function() {
    let pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
      scrollBtn = document.querySelector('.fixed-button');
    if (scrollBtn) scrollBtn.style.visibility = pageOffset > 370 ? 'visible' : 'hidden';
  };

});
