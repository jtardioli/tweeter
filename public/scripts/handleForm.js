$(document).ready(function() {
  let data = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": `${$('textarea').val()}`
    },
    "created_at": 1461116232227
  };
  data = data.serialize();
  $('form').submit((e) => {
    console.log($('textarea').val());
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: data
    })
      .done(function(msg) {
        console.log('data saved');
      });
  });


});