/* eslint-env jquery */

let charCounter = 0;

$(document).ready(function() {
  console.log('Hello from jquery');


  
  $("#tweet-text").on('input', function() {
    const counter = $(this).parent().children('.btn-container').children('.counter');
    console.log(counter);
    
    // catch delete button presses
    if ($(this).val() !== "") {
      charCounter = 140  - $(this).val().length;
      //change color red
      if (charCounter < 0) {
        counter.addClass('turn-red');

        // change color black
      } else {
        counter.removeClass('turn-red');
      }
      //set counter value
      counter.val(charCounter);

      // set to 140 when empty string
    } else {
      counter.val('140');
    }
  });
});

