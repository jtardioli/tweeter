
$(() => {
  //new tweet
  const $form = $("#handleForm");
  $form.on("submit", postTweet);
  //hide error message on start up
  $('.error').hide();
  loadTweets();
});

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweet) => {
  // escape string to prevent hackerz :'(
  // const safeStr = escape(tweet.content.text).replaceAll;
  const $tweet = `
    <article class="tweet">
    <header>
      <div >
        <img src="${tweet.user.avatars}" alt="">
        <p>${tweet.user.name}</p>
      </div>
      <p>${tweet.user.handle}</p>
      </header>
      <div class="tweet-content">
      
        <p>${escape(tweet.content.text)}</p>
      </div>
     
      <footer>
        
        <p>${timeago.format(tweet.created_at)}</p>
        <div>
          <i class="far fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
        </div>
      </footer>
    </article>
  
    `;
  return $tweet;
};


const renderTweets = (tweets) => {
  const $tweetContainer = $("#tweets-container");
  $tweetContainer.empty();
  

  for (const tweet of tweets) {
    $tweetContainer.prepend(createTweetElement(tweet));
  }
};

// fetch tweets from data base
const loadTweets = () => {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
    success: (tweets) => {
      renderTweets(tweets);
    },
    error: (err) => {
      console.log("error: ", err);
    },
  });
};

//post new tweet & potential errors message
const postTweet = function(event) {
  event.preventDefault();
  // check if the form input is valid before going forward
  if (!formValid($("#tweet-text").val())) {
    return;
  }

  const serializedData = $(this).serialize();

  $.post("/tweets", serializedData, () => {
    loadTweets();
    $("textarea").val('');
    // hide error incase there was one previously
    $('.error').hide();
  });

};


const formValid = function(input) {
  if (!input) {
    $('.error').slideDown('slow');
    $('.error-msg').text('Your message is too short!');
    return false;
  }

  if (input.length > 140) {
    $('.error').slideDown('slow');
    $('.error-msg').text('Your message is too long');
    return false;
  }

  return true;
};
