/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  //new tweet
 
  const $form = $("#handleForm");
  $form.on("submit", postTweet);
 
  loadTweets();
});

//create one textbox for one tweet
const createTweetElement = (tweet) => {
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

//creating many display textboxes for tweets from database
const renderTweets = (tweets) => {
  const $tweetContainer = $("#tweets-container");
  $tweetContainer.empty();

  for (const tweet of tweets) {
    $tweetContainer.prepend(createTweetElement(tweet));
  }
};

//load tweets on the page
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
  if (!formValid($("#tweet-text").val())) {
    return;
  }

  const serializedData = $(this).serialize();

  $.post("/tweets", serializedData, () => {
    loadTweets();
    $(".tweet-text").val("");
  });

};

const formValid = function(input) {
  if (input === '' || input === null) {
    alert('tweet is too short');
    return false;
  }

  if (input.length > 140) {
    alert('tweet is long');
    return false;
  }

  return true;
};
